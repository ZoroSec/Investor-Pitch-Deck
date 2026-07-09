"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

/** Button/link that gently pulls toward the cursor. */
export function MagneticButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors will-change-transform";
  const styles =
    variant === "primary"
      ? "text-white bg-gradient-to-b from-brand-blue to-brand-indigo shadow-[0_10px_40px_-10px_rgba(91,140,255,0.7)] hover:from-[#6d99ff] hover:to-[#6f72f5]"
      : "text-fg glass hover:border-white/20";

  return (
    <motion.a
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
