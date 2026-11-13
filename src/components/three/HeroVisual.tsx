"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="size-40 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(94,234,212,0.16),transparent_65%)]" />
    </div>
  ),
});

export default function HeroVisual() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <HeroScene />
    </div>
  );
}
