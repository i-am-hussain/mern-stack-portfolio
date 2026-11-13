"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="grid size-8 place-items-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-mint/30 hover:text-mint"
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      {copied ? (
        <Check className="size-3.5 text-mint" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </button>
  );
}
