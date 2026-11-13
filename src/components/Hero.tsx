import { ArrowDown, ArrowUpRight, Database, Mail, MapPin } from "lucide-react";
import { marqueeStack, profile } from "@/data/portfolio";
import HeroVisual from "@/components/three/HeroVisual";
import Reveal from "@/components/Reveal";
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

const orbitChips = [
  { label: "React · Next.js", className: "left-0 top-[16%]", delay: "0s" },
  { label: "Node · Express", className: "right-0 top-[34%]", delay: "1.4s" },
  { label: "MongoDB", className: "bottom-[18%] left-[6%]", delay: "2.6s" },
  { label: "Three.js", className: "bottom-[34%] right-[2%]", delay: "0.8s" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16),transparent_66%)] blur-2xl" />
        <div className="absolute -right-40 top-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.16),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.08),transparent_68%)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#05070c]" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-6 pb-6 pt-24 sm:pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-2 lg:pb-16 lg:pt-32">
          <div className="relative z-10">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-mint/25 bg-mint/[0.07] py-1.5 pl-2 pr-3.5 text-[0.7rem] font-medium tracking-wide text-mint sm:text-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-mint" />
                </span>
                {profile.availability}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 font-display text-[clamp(2.6rem,7vw,4.9rem)] font-medium leading-[0.98] tracking-[-0.045em] text-white">
                Building digital
                <br className="hidden sm:block" /> products that{" "}
                <span className="text-gradient">feel effortless.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-[34rem] text-[0.98rem] leading-relaxed text-slate-400 sm:text-[1.05rem]">
                {profile.subheadline}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-mint px-6 py-3 text-sm font-semibold text-[#04120f] transition-transform hover:-translate-y-0.5"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />
                  View selected work
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Start a project
                  <ArrowUpRight className="size-4 text-mint" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <MapPin className="size-3.5 text-mint/70" />
                  {profile.location}
                  <span className="text-slate-700">/</span>
                  <span className="font-mono text-[0.68rem]">
                    {profile.timezone}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {profile.socials.map((social) => {
                    const Icon = socialIcons[social.icon];
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={
                          social.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noreferrer"
                        aria-label={social.label}
                        className="grid size-8 place-items-center rounded-full border border-white/8 bg-white/[0.02] text-slate-400 transition-colors hover:border-mint/40 hover:text-mint"
                      >
                        <Icon className="size-3.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/[0.07] pt-6">
                {profile.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="font-display text-2xl font-medium tracking-tight text-white sm:text-[1.7rem]">
                      {stat.value}
                    </dd>
                    <p className="mt-1 text-[0.68rem] leading-snug text-slate-500 sm:text-[0.72rem]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative h-[19rem] w-full sm:h-[24rem] lg:h-[37rem]">
              <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16),transparent_62%)] blur-2xl" />
              <HeroVisual />
              {orbitChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`absolute hidden animate-float items-center gap-1.5 rounded-full border border-white/10 bg-[#080d14]/80 px-3 py-1.5 font-mono text-[0.65rem] tracking-wide text-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-md sm:inline-flex ${chip.className}`}
                  style={{ animationDelay: chip.delay }}
                >
                  <span className="size-1.5 rounded-full bg-mint" />
                  {chip.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] py-6">
          <div className="flex items-center gap-3 text-[0.68rem] font-mono uppercase tracking-[0.2em] text-slate-600">
            <span className="relative flex size-4 items-center justify-center">
              <span className="absolute size-4 animate-ping rounded-full border border-mint/30" />
              <span className="size-1 rounded-full bg-mint" />
            </span>
            Scroll to explore
          </div>
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="grid size-9 place-items-center rounded-full border border-white/10 text-slate-500 transition-colors hover:border-mint/40 hover:text-mint"
          >
            <ArrowDown className="size-4" />
          </a>
        </div>
      </div>

      <div className="relative border-y border-white/[0.06] bg-white/[0.012] py-4">
        <div className="marquee-mask flex overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
            {[...marqueeStack, ...marqueeStack].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="flex shrink-0 items-center gap-10 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-slate-500"
              >
                {tech}
                <Database className="size-3 text-mint/30" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
