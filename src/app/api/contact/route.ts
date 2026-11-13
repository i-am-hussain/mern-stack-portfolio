import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import ContactMessage from "@/lib/models/ContactMessage";
import { sendContactNotification } from "@/lib/email";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const attempts = new Map<string, number[]>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    attempts.set(ip, recent);
    return true;
  }

  recent.push(now);
  attempts.set(ip, recent);

  if (attempts.size > 500) {
    for (const [key, timestamps] of attempts) {
      if (timestamps.every((timestamp) => now - timestamp > RATE_LIMIT_WINDOW_MS)) {
        attempts.delete(key);
      }
    }
  }

  return false;
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let raw: unknown;

  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!raw || typeof raw !== "object") {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const body = raw as Record<string, unknown>;

  // Honeypot filled in → silently accept so bots move on.
  if (asString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name);
  const email = asString(body.email).toLowerCase();
  const subject = asString(body.subject);
  const message = asString(body.message);

  const fieldErrors: Record<string, string> = {};

  if (name.length < 2) {
    fieldErrors.name = "Please enter your name.";
  } else if (name.length > 80) {
    fieldErrors.name = "Name is too long.";
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 160) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (message.length < 10) {
    fieldErrors.message = "Please write at least 10 characters.";
  } else if (message.length > 5000) {
    fieldErrors.message = "Message is too long (max 5000 characters).";
  }

  if (subject.length > 120) {
    fieldErrors.subject = "Subject is too long (max 120 characters).";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      {
        error: "Please check the highlighted fields and try again.",
        fields: fieldErrors,
      },
      { status: 422 },
    );
  }

  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const userAgent = request.headers.get("user-agent")?.slice(0, 300);

  try {
    await connectToDatabase();

    const saved = await ContactMessage.create({
      name,
      email,
      subject: subject || undefined,
      message,
      ip,
      userAgent,
      emailSent: false,
    });

    const emailResult = await sendContactNotification({
      name,
      email,
      subject,
      message,
    });

    if (!emailResult.sent) {
      console.error("[contact] email delivery failed:", emailResult.reason);
      return NextResponse.json(
        {
          error:
            "Your message was saved, but the email notification could not be delivered. Please try again in a moment, or email me directly.",
        },
        { status: 502 },
      );
    }

    await ContactMessage.updateOne(
      { _id: saved._id },
      { $set: { emailSent: true } },
    );

    return NextResponse.json(
      { ok: true, id: saved._id.toString() },
      { status: 201 },
    );
  } catch (error) {
    console.error("[contact] submission failed:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong on my side. Please try again in a moment, or email me directly.",
      },
      { status: 500 },
    );
  }
}
