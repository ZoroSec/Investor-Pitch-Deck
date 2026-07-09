"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/** Fade-up on scroll into view. Wrap a group to stagger its <RevealItem> children. */
export function Reveal({
  children,
  className,
  stagger = false,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger ? container : item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={stagger ? undefined : { delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
