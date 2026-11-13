import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-[0.7rem] tracking-widest text-mint/80">
          {index}
        </span>
        <span className="h-px w-8 bg-gradient-to-r from-mint/60 to-transparent" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[0.98rem] leading-relaxed text-slate-400/90 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
