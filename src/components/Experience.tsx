import { Briefcase } from "lucide-react";
import { experience } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-white/[0.05] bg-white/[0.012] py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.07),transparent_65%)] blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                index="04"
                eyebrow="Experience"
                title={
                  <>
                    Where I&apos;ve
                    <br />
                    <span className="text-slate-500">done the work.</span>
                  </>
                }
                description="From intern to shipping production systems — a track record of owning features end to end."
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5">
                <Briefcase className="size-4 shrink-0 text-mint" />
                <p className="text-[0.8rem] leading-snug text-slate-400">
                  Open to full-stack roles and long-term freelance engagements.
                </p>
              </div>
            </Reveal>
          </div>

          <ol className="relative space-y-5 before:absolute before:bottom-4 before:left-[7px] before:top-3 before:w-px before:bg-gradient-to-b before:from-mint/40 before:via-white/10 before:to-transparent sm:before:left-[9px]">
            {experience.map((job, index) => (
              <Reveal as="li" key={`${job.company}-${job.period}`} delay={index * 100}>
                <div className="relative pl-8 sm:pl-10">
                  <span className="absolute left-0 top-6 grid size-[15px] place-items-center rounded-full border border-mint/40 bg-[#05070c] sm:size-[19px]">
                    <span className="size-1.5 rounded-full bg-mint shadow-[0_0_12px_rgba(94,234,212,0.9)]" />
                  </span>

                  <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.14] hover:bg-white/[0.03] sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-white">
                          {job.role}
                        </h3>
                        <p className="mt-0.5 text-[0.82rem] text-mint/80">
                          {job.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[0.66rem] tracking-wide text-slate-400">
                          {job.period}
                        </p>
                        <p className="mt-1 inline-flex rounded-full border border-white/[0.08] px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-slate-500">
                          {job.type}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3.5 text-[0.85rem] leading-relaxed text-slate-400">
                      {job.summary}
                    </p>

                    <ul className="mt-3.5 space-y-2">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[0.8rem] leading-snug text-slate-500"
                        >
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-slate-600" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.06] bg-[#080d14]/70 px-1.5 py-0.5 font-mono text-[0.57rem] text-slate-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
