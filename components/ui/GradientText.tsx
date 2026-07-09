import type { ReactNode } from "react";

/** Sparingly-used gradient accent for a single word or short phrase. */
export function GradientText({ children }: { children: ReactNode }) {
  return <span className="text-gradient">{children}</span>;
}
