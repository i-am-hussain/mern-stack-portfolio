import { ArrowUp, Mail } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/BrandIcons";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  mail: Mail,
};

export default async function Footer() {
  "use cache";

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#04060a]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(45,212,191,0.08),transparent_65%)] blur-2xl" />

      <div className="container-x relative py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 font-display text-lg font-medium tracking-tight text-white"
            >
              <span className="grid size-8 place-items-center rounded-lg border border-mint/25 bg-mint/10 font-mono text-[0.7rem] text-mint">
                {profile.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </span>
              {profile.name}
              <span className="text-mint">.</span>
            </a>
            <p className="mt-4 max-w-xs text-[0.82rem] leading-relaxed text-slate-500">
              {profile.role} crafting reliable, thoughtful web products from{" "}
              {profile.location}.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-8 place-items-center rounded-full border border-white/[0.08] text-slate-500 transition-colors hover:border-mint/30 hover:text-mint"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.82rem] text-slate-400 transition-colors hover:text-mint"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
              Get in touch
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 block text-[0.82rem] text-slate-400 transition-colors hover:text-mint"
            >
              {profile.email}
            </a>
            <p className="mt-1.5 text-[0.82rem] text-slate-500">
              {profile.location}
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-mint/25 bg-mint/[0.07] px-3.5 py-2 text-[0.75rem] font-medium text-mint transition-colors hover:bg-mint/15"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.7rem] text-slate-600">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js,
            Three.js &amp; MongoDB.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-slate-500 transition-colors hover:text-mint"
          >
            Back to top
            <span className="grid size-7 place-items-center rounded-full border border-white/10">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
