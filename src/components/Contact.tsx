import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
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

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1),transparent_65%)] blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                index="05"
                eyebrow="Contact"
                title={
                  <>
                    Let&apos;s build something
                    <br />
                    <span className="text-gradient">worth shipping.</span>
                  </>
                }
                description="Have a product in mind, a role to fill, or a technical problem that needs a second pair of eyes? My inbox is open."
              />
            </Reveal>

            <div className="mt-9 space-y-3">
              <Reveal delay={80}>
                <div className="group flex items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-mint/25">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-mint">
                      <Mail className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-slate-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="mt-0.5 block truncate text-[0.85rem] text-slate-200 transition-colors hover:text-mint"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <CopyEmail email={profile.email} />
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-mint/25">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-mint">
                    <Phone className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-slate-500">
                      Phone
                    </p>
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, "")}`}
                      className="mt-0.5 block text-[0.85rem] text-slate-200 transition-colors hover:text-mint"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex items-center gap-3.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-mint">
                    <MapPin className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-slate-500">
                      Location
                    </p>
                    <p className="mt-0.5 text-[0.85rem] text-slate-200">
                      {profile.location} · {profile.timezone}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={260}>
              <div className="mt-6 rounded-2xl border border-mint/15 bg-mint/[0.04] px-4 py-4">
                <div className="flex items-center gap-2 text-[0.72rem] font-medium text-mint">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-mint" />
                  </span>
                  {profile.availability}
                </div>
                <p className="mt-2 text-[0.78rem] leading-relaxed text-slate-400">
                  Currently taking on new projects for the next quarter.
                  Typically replies within one business day.
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-7 flex items-center gap-2">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">
                  Elsewhere
                </span>
                <span className="h-px flex-1 bg-white/[0.07]" />
                {profile.socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid size-9 place-items-center rounded-full border border-white/[0.08] text-slate-400 transition-colors hover:border-mint/35 hover:text-mint"
                    >
                      <Icon className="size-4" />
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={380}>
              <a
                href={`mailto:${profile.email}`}
                className="mt-7 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-slate-300 transition-colors hover:text-mint"
              >
                Prefer email? Write to me directly
                <ArrowUpRight className="size-3.5" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_70%_0%,rgba(94,234,212,0.1),transparent_60%)] blur-2xl" />
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
