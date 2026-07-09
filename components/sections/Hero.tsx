"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { hero } from "@/lib/content";
import { GradientText } from "@/components/ui/GradientText";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  // mouse-follow glow across the hero
  const mx = useMotionValue(50);
  const my = useMotionValue(0);
  const gx = useSpring(mx, { stiffness: 60, damping: 20 });
  const gy = useSpring(my, { stiffness: 60, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(650px circle at ${gx}% ${gy}%, rgba(120,110,255,0.13), transparent 60%)`;

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <section
      onMouseMove={onMove}
      className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* mouse-follow glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: glow }}
      />

      {/* floating blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-24 h-24 w-24 rounded-full bg-brand-blue/20 blur-2xl animate-float" />
        <div className="absolute right-[12%] top-40 h-32 w-32 rounded-full bg-brand-purple/20 blur-2xl animate-float-slow" />
        <div className="absolute bottom-10 left-[30%] h-20 w-20 rounded-full bg-brand-indigo/20 blur-2xl animate-float" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-fg-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse-glow" />
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Turn Your Startup Into an <GradientText>Investor-Ready</GradientText> Pitch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 max-w-xl text-pretty text-lg text-fg-muted"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-brand-blue to-brand-indigo px-6 py-3 text-sm font-medium text-white shadow-[0_12px_40px_-10px_rgba(91,140,255,0.7)] transition-transform hover:scale-[1.03]"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-white/20"
            >
              <Play className="h-4 w-4" />
              {hero.secondaryCta}
            </a>
          </motion.div>

          <p className="mt-5 text-xs text-fg-faint">
            No credit card required · Free forever plan
          </p>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
