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

/** Eyebrow + heading + optional lede, centered, revealed on scroll. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  accent,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  accent?: ReactNode;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse-glow" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title} {accent}
      </h2>
      {lede && <p className="mt-4 text-pretty text-fg-muted">{lede}</p>}
    </Reveal>
  );
}
