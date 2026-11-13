"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

/**
 * Screenshot for a project card. Falls back to the given node if the
 * file at `src` is missing, so the card never shows a broken image.
 */
export default function ProjectShot({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      sizes="(min-width: 1024px) 40vw, 92vw"
      className="object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}
