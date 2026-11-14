"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin } from "lucide-react";

import { profile } from "@/data/portfolio";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2);

export default function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[21rem]">
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_15%,rgba(94,234,212,0.16),transparent_65%)] blur-2xl" />

      <div className="glass rounded-[2rem] p-1.5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] bg-[#070c13]">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid place-items-center"
          >
            <div className="grid-lines absolute inset-0 opacity-50" />
            <span className="text-gradient relative font-display text-[5.5rem] font-semibold leading-none">
              {initials}
            </span>
            {false ? null : null}
          </div>

          {failed || !profile.photo ? null : (
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              fill
              unoptimized
              sizes="(min-width: 1024px) 21rem, 80vw"
              className="object-cover object-center"
              onError={() => setFailed(true)}
            />
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03060b] via-[#03060b]/15 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-display text-lg font-medium text-white">
              {profile.name}
            </p>
            <p className="mt-0.5 text-xs text-mint">{profile.role}</p>
          </div>

          <span className="pointer-events-none absolute left-4 top-4 size-6 rounded-tl-lg border-l border-t border-mint/40" />
          <span className="pointer-events-none absolute right-4 top-4 size-6 rounded-tr-lg border-r border-t border-mint/40" />
        </div>
      </div>

      <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-[#080d14] px-3.5 py-1.5 text-[0.68rem] text-slate-300 shadow-lg">
        <MapPin className="size-3 text-mint" />
        {profile.location}
      </div>
    </div>
  );
}
