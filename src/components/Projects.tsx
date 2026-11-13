import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { GithubIcon } from "@/components/BrandIcons";
import ProjectShot from "@/components/ProjectShot";

function ProjectMock({ project }: { project: Project }) {
  return (
    <div className="p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-mono text-[0.56rem] uppercase tracking-[0.18em] text-slate-500">
            {project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </p>
          <p className="mt-1 font-display text-xl font-medium tracking-tight text-white sm:text-2xl">
            {project.title}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-mint/25 bg-mint/10 px-2 py-0.5 font-mono text-[0.55rem] text-mint">
          live
        </span>
      </div>

      <div className="mt-4 flex h-14 items-end gap-1.5 sm:h-16">
        {project.mock.bars.map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-[3px] bg-gradient-to-t from-mint/25 to-mint/70 transition-all duration-500 group-hover:from-mint/40 group-hover:to-mint"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className="h-1 flex-1 rounded-full bg-white/[0.06]">
          <span className="block h-full w-2/3 rounded-full bg-gradient-to-r from-mint/60 to-ice/60" />
        </span>
        <span className="truncate font-mono text-[0.55rem] text-slate-600">
          {project.tagline}
        </span>
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br ${project.accent} p-3.5 sm:p-4`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />

      <div className="relative overflow-hidden rounded-xl border border-white/[0.09] bg-[#060a11]/90 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)] backdrop-blur">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2.5">
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="ml-2 truncate font-mono text-[0.58rem] text-slate-500">
            {project.mock.label}
          </span>
        </div>

        {project.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#060a11]">
            <ProjectShot
              src={project.image}
              alt={project.imageAlt ?? `${project.title} screenshot`}
              fallback={<ProjectMock project={project} />}
            />
          </div>
        ) : (
          <ProjectMock project={project} />
        )}
      </div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex items-center gap-2.5">
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="group/link inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[0.74rem] font-medium text-slate-200 transition-colors hover:border-mint/30 hover:text-mint"
      >
        <ExternalLink className="size-3" />
        Live demo
      </a>
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} source code on GitHub`}
          className="grid size-8 place-items-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/25 hover:text-white"
        >
          <GithubIcon className="size-3.5" />
        </a>
      ) : null}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container-x relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="Selected work"
              title={
                <>
                  Products, not just{" "}
                  <span className="text-slate-500">pages.</span>
                </>
              }
              description="A few builds that show how I think about architecture, performance and the experience on the other side of the screen."
            />
          </Reveal>
          <Reveal delay={100}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[0.78rem] text-slate-300 transition-colors hover:border-mint/30 hover:text-mint"
            >
              More on GitHub
              <ArrowUpRight className="size-3.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 space-y-5">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:border-mint/20 hover:bg-white/[0.03]">
                <div className="pointer-events-none absolute -left-24 -top-24 size-64 rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.12),transparent_65%)] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:p-8">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center gap-2.5">
                      {project.featured ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-mint/25 bg-mint/10 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-mint">
                          <Star className="size-2.5" />
                          Featured
                        </span>
                      ) : null}
                      <span className="font-mono text-[0.63rem] text-slate-600">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-mint/80">{project.tagline}</p>
                    <p className="mt-4 max-w-lg text-[0.9rem] leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    {project.highlights.length > 0 ? (
                      <ul className="mt-5 space-y-2">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-[0.82rem] leading-snug text-slate-400"
                          >
                            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-mint" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[0.6rem] text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ProjectLinks project={project} />
                  </div>

                  <div className="order-1 lg:order-2">
                    <ProjectPreview project={project} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
