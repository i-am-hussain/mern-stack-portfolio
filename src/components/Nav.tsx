"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.07] bg-[#05070c]/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5"
          aria-label={`${profile.name} — home`}
        >
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] font-display text-sm font-semibold tracking-tight text-mint transition-colors group-hover:border-mint/40">
            {initials}
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(94,234,212,0.25),transparent_60%)]" />
          </span>
          <span className="font-display text-[0.95rem] font-medium tracking-tight text-white">
            {profile.name.split(" ")[0]}
            <span className="text-mint">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-[0.82rem] font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-px origin-center bg-gradient-to-r from-transparent via-mint to-transparent transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-2 text-[0.82rem] font-medium text-mint transition-all hover:border-mint/60 hover:bg-mint/15 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-200 transition-colors hover:border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/[0.06] bg-[#05070c]/97 backdrop-blur-2xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${index * 30}ms` }}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] transition-colors ${
                active === link.href
                  ? "bg-white/[0.05] text-white"
                  : "text-slate-400 hover:bg-white/[0.03] hover:text-white"
              }`}
            >
              {link.label}
              <span className="font-mono text-[0.65rem] text-slate-600">
                0{index + 1}
              </span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-mint px-4 py-3 text-sm font-semibold text-[#04120f]"
          >
            Start a conversation
            <ArrowUpRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
