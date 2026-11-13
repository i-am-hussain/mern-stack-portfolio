"use client";

import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  LockKeyhole,
  Send,
} from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Tell me a bit more — at least 10 characters.";
  }

  return errors;
}

const fieldClass = "field";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");
  const [sentName, setSentName] = useState("");

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      setFeedback("");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => null)) as
        | { error?: string; fields?: Record<string, string>; ok?: boolean }
        | null;

      if (!response.ok) {
        if (payload?.fields) {
          setErrors(payload.fields as Partial<Record<keyof FormValues, string>>);
        }
        setStatus("error");
        setFeedback(
          payload?.error ??
            "Something went wrong while sending your message. Please try again.",
        );
        return;
      }

      setSentName(values.name.trim().split(" ")[0]);
      setValues(initialValues);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
      setFeedback(
        "Network error — please check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="glass flex h-full min-h-[28rem] flex-col items-center justify-center rounded-3xl p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="relative grid size-16 place-items-center rounded-full border border-mint/30 bg-mint/10">
          <span className="absolute inset-0 animate-ping rounded-full border border-mint/20" />
          <CheckCircle2 className="size-8 text-mint" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-white">
          Message received{sentName ? `, ${sentName}` : ""}.
        </h3>
        <p className="mt-3 max-w-sm text-[0.9rem] leading-relaxed text-slate-400">
          Thanks for reaching out — your message is in my inbox and saved safely.
          I usually reply within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSentName("");
          }}
          className="mt-7 rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-200 transition-colors hover:border-mint/30 hover:text-mint"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
      noValidate
    >
      <div className="pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.12),transparent_65%)] blur-2xl" />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-medium tracking-tight text-white">
            Tell me about your project
          </h3>
          <span className="hidden items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-slate-500 sm:flex">
            <span className="size-1.5 rounded-full bg-mint" />
            Replies in ~24h
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-[0.75rem] font-medium text-slate-300"
            >
              Name <span className="text-mint/70">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Cooper"
              value={values.name}
              onChange={(event) => update("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              maxLength={80}
              className={fieldClass}
              required
            />
            {errors.name ? (
              <p
                id="name-error"
                className="mt-1.5 text-[0.7rem] text-rose-300"
              >
                {errors.name}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-[0.75rem] font-medium text-slate-300"
            >
              Email <span className="text-mint/70">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              maxLength={160}
              className={fieldClass}
              required
            />
            {errors.email ? (
              <p
                id="email-error"
                className="mt-1.5 text-[0.7rem] text-rose-300"
              >
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="subject"
            className="mb-1.5 block text-[0.75rem] font-medium text-slate-300"
          >
            Subject <span className="text-slate-600">(optional)</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="A new dashboard, an API, a full product…"
            value={values.subject}
            onChange={(event) => update("subject", event.target.value)}
            maxLength={120}
            className={fieldClass}
          />
        </div>

        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between">
            <label
              htmlFor="message"
              className="block text-[0.75rem] font-medium text-slate-300"
            >
              Message <span className="text-mint/70">*</span>
            </label>
            <span className="font-mono text-[0.6rem] text-slate-600">
              {values.message.length}/5000
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Share the goal, timeline, and anything that would help me understand the project."
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            maxLength={5000}
            className={`${fieldClass} resize-y`}
            required
          />
          {errors.message ? (
            <p
              id="message-error"
              className="mt-1.5 text-[0.7rem] text-rose-300"
            >
              {errors.message}
            </p>
          ) : null}
        </div>

        {/* Honeypot — hidden from humans, tempting for bots */}
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </div>

        {status === "error" && feedback ? (
          <div
            className="mt-4 flex items-start gap-2.5 rounded-xl border border-rose-400/25 bg-rose-500/[0.07] px-4 py-3 text-[0.78rem] leading-snug text-rose-200"
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            {feedback}
          </div>
        ) : null}

        <div className="mt-5 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-1.5 text-[0.68rem] text-slate-500">
            <LockKeyhole className="size-3" />
            Your details are never shared.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-[#04120f] transition-all hover:-translate-y-0.5 hover:bg-[#7df5e2] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send message
                <Send className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
