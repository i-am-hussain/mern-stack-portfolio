import { Resend } from "resend";

type ContactEmailPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export type SendResult = {
  sent: boolean;
  reason?: string;
};

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character] ?? character,
  );
}

function buildHtml({ name, email, subject, message }: ContactEmailPayload) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject || "New portfolio enquiry");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const receivedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f3f5f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f5f8;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#0a0f16;border-radius:16px;overflow:hidden;border:1px solid #1d2836;">
            <tr>
              <td style="padding:28px 28px 8px 28px;">
                <p style="margin:0 0 6px 0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#5eead4;">Portfolio contact</p>
                <h1 style="margin:0;font-size:22px;line-height:1.3;color:#ffffff;font-weight:600;">New message from ${safeName}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px 0 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0e151f;border:1px solid #1d2836;border-radius:12px;">
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #1d2836;font-size:13px;color:#8b9bb0;width:90px;">From</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #1d2836;font-size:13px;color:#e6edf7;">${safeName} &lt;${safeEmail}&gt;</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;border-bottom:1px solid #1d2836;font-size:13px;color:#8b9bb0;">Subject</td>
                    <td style="padding:14px 16px;border-bottom:1px solid #1d2836;font-size:13px;color:#e6edf7;">${safeSubject}</td>
                  </tr>
                  <tr>
                    <td style="padding:14px 16px;font-size:13px;color:#8b9bb0;vertical-align:top;">Message</td>
                    <td style="padding:14px 16px;font-size:14px;line-height:1.65;color:#d7e1ee;">${safeMessage}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 28px 28px 28px;">
                <a href="mailto:${safeEmail}?subject=${encodeURIComponent(
                  `Re: ${subject || "Your message"}`,
                )}" style="display:inline-block;background:#5eead4;color:#04120f;text-decoration:none;font-size:13px;font-weight:600;padding:11px 18px;border-radius:999px;">Reply to ${safeName}</a>
                <p style="margin:18px 0 0 0;font-size:11px;color:#5f7185;">Received ${escapeHtml(
                  receivedAt,
                )} IST · Saved in MongoDB</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendContactNotification(
  payload: ContactEmailPayload,
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    return {
      sent: false,
      reason:
        "Email is not configured. Set RESEND_API_KEY and CONTACT_EMAIL in .env.local.",
    };
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ||
    "Portfolio Contact <onboarding@resend.dev>";

  const safeSubject = payload.subject
    ?.replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, 120);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: payload.email,
      subject: safeSubject || `New portfolio message from ${payload.name}`,
      html: buildHtml(payload),
      text: `New portfolio message\n\nName: ${payload.name}\nEmail: ${payload.email}\nSubject: ${
        safeSubject || "—"
      }\n\n${payload.message}`,
    });

    if (error) {
      return { sent: false, reason: error.message };
    }

    return { sent: true };
  } catch (error) {
    return {
      sent: false,
      reason: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}
