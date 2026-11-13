import { ArrowUpRight, Clock, MapPin, Sparkles } from "lucide-react";
import { about, profile } from "@/data/portfolio";
import Portrait from "@/components/Portrait";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.07),transparent_65%)] blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                index="01"
                eyebrow="About"
                title={
                  <>
                    Curious by default,
                    <br />
                    <span className="text-slate-500">rigorous by habit.</span>
                  </>
                }
              />
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-7 max-w-xl font-display text-lg leading-relaxed text-slate-200 sm:text-xl">
                {about.intro}
              </p>
            </Reveal>

            <div className="mt-6 max-w-xl space-y-4">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={index} delay={140 + index * 60}>
                  <p className="text-[0.95rem] leading-relaxed text-slate-400">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
                  <MapPin className="size-4 shrink-0 text-mint" />
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-500">
                      Based in
                    </p>
                    <p className="mt-0.5 text-sm text-slate-200">
                      {profile.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
                  <Clock className="size-4 shrink-0 text-mint" />
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-500">
                      Working hours
                    </p>
                    <p className="mt-0.5 text-sm text-slate-200">
                      Flexible across GMT+5:30
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {profile.resumeUrl ? (
              <Reveal delay={340}>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-mint transition-colors hover:text-white"
                >
                  Download résumé
                  <ArrowUpRight className="size-4" />
                </a>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={160} className="lg:pt-16">
            <Portrait />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.14fr_0.86fr] lg:gap-8">
          <Reveal delay={80}>
            <div className="glass rounded-3xl p-1.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
              <div className="rounded-[1.35rem] bg-[#060a10]/90">
                <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]/70" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]/70" />
                  <span className="size-2.5 rounded-full bg-[#28c840]/70" />
                  <span className="ml-2 font-mono text-[0.68rem] text-slate-500">
                    ~/developer.ts
                  </span>
                  <span className="ml-auto rounded-md border border-white/[0.07] px-1.5 py-0.5 font-mono text-[0.58rem] text-slate-600">
                    TS
                  </span>
                </div>

                <pre className="overflow-x-auto px-5 py-5 font-mono text-[0.66rem] leading-[1.85] text-slate-400 sm:text-[0.78rem]">
                  <code>
                    <span className="text-violet-300">const</span>{" "}
                    <span className="text-sky-300">developer</span>{" "}
                    <span className="text-slate-500">=</span> {"{"}
                    {"\n"}
                    {"  "}name:{" "}
                    <span className="text-mint">
                      &quot;{profile.name}&quot;
                    </span>
                    ,{"\n"}
                    {"  "}role:{" "}
                    <span className="text-mint">
                      &quot;{profile.role}&quot;
                    </span>
                    ,{"\n"}
                    {"  "}stack: {"{"}
                    {"\n"}
                    {"    "}frontend:{" "}
                    <span className="text-mint">&quot;React · Next&quot;</span>,
                    {"\n"}
                    {"    "}backend:{" "}
                    <span className="text-mint">&quot;Node · Express&quot;</span>,
                    {"\n"}
                    {"    "}database:{" "}
                    <span className="text-mint">&quot;MongoDB&quot;</span>,{"\n"}
                    {"  "}
                    {"}"},{"\n"}
                    {"  "}principles: [{"\n"}
                    {"    "}
                    <span className="text-mint">&quot;ship small&quot;</span>,
                    {"\n"}
                    {"    "}
                    <span className="text-mint">&quot;measure first&quot;</span>,
                    {"\n"}
                    {"    "}
                    <span className="text-mint">&quot;keep it readable&quot;</span>,
                    {"\n"}
                    {"  "}],{"\n"}
                    {"  "}openToWork: <span className="text-amber-300">true</span>
                    ,{"\n"}
                    {"}"} <span className="text-slate-600">as const;</span>
                    {"\n\n"}
                    <span className="text-slate-600">
                      {"// built for the browser, tuned for production"}
                    </span>
                  </code>
                </pre>

                <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-4 py-3">
                  <div className="flex items-center gap-2 text-[0.68rem] text-slate-500">
                    <Sparkles className="size-3.5 text-mint/70" />
                    {about.availabilityNote}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} className="self-start">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.015] p-5">
              <p className="font-mono text-[0.63rem] uppercase tracking-[0.2em] text-slate-500">
                Currently
              </p>
              <ul className="mt-3 space-y-2.5">
                {about.currently.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.83rem] leading-snug text-slate-400"
                  >
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-mint/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
