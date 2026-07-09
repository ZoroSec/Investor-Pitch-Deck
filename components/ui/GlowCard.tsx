"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Glass card with a pointer-tracked highlight and hover lift. */
export function GlowCard({
  children,
  className = "",
  lift = true,
}: {
  children: ReactNode;
  className?: string;
  lift?: boolean;
}) {
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative overflow-hidden rounded-2xl glass p-6 ${className}`}
    >
      {/* pointer glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx) var(--my), rgba(91,140,255,0.14), transparent 65%)",
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
