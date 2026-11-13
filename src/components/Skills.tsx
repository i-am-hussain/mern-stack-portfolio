import { Code2, Database, Server, Wrench } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const icons: Record<SkillGroup["icon"], typeof Code2> = {
  code: Code2,
  server: Server,
  database: Database,
  toolbox: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-10 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.08),transparent_65%)] blur-3xl" />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Toolkit"
            title={
              <>
                The stack behind the{" "}
                <span className="text-slate-500">shipping.</span>
              </>
            }
            description="Hands-on delivery across the stack, distilled into the tools I reach for when a product needs to go from idea to production."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <Reveal key={group.title} delay={index * 80}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint/25 hover:bg-white/[0.035] sm:p-7">
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.14),transparent_65%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <span className="grid size-11 place-items-center rounded-xl border border-white/[0.09] bg-white/[0.04] text-mint transition-colors group-hover:border-mint/30">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-medium tracking-tight text-white">
                          {group.title}
                        </h3>
                        <p className="mt-0.5 text-[0.78rem] text-slate-500">
                          {group.blurb}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[0.63rem] text-slate-600">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.07] bg-[#080d14]/80 px-2.5 py-1.5 text-[0.74rem] text-slate-300 transition-colors group-hover:border-white/[0.12]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.07] bg-gradient-to-r from-mint/[0.06] via-transparent to-transparent px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-[0.85rem] leading-relaxed text-slate-400">
              <span className="font-medium text-slate-200">
                Beyond the stack:
              </span>{" "}
              system design, API security, performance profiling and mentoring —
              the parts that keep a codebase healthy after launch.
            </p>
            <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-mint/80">
              Always learning
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
