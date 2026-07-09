import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Consistent section shell: id anchor, max width, vertical rhythm. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}

/** Heading + optional lede, revealed on scroll. Left-aligned by default; center for closing/echo sections. */
export function SectionHead({
  title,
  lede,
  align = "left",
}: {
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {lede && <p className="mt-4 text-pretty text-lg text-fg-muted">{lede}</p>}
    </Reveal>
  );
}
