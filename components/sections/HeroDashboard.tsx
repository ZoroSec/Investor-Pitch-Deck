"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, TrendingUp, Check, Mic } from "lucide-react";

const chat = [
  { who: "ai", text: "Who is your ideal first customer?" },
  { who: "me", text: "Seed-stage founders raising their first round." },
  { who: "ai", text: "Got it. How do they solve this today?" },
];

const flags = [
  "Add bottom-up TAM",
  "Clarify the moat",
  "Show retention data",
];

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* glow behind the panel */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-blue/20 via-brand-purple/10 to-transparent blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="glass-strong ring-glow rounded-2xl p-3 sm:p-4"
      >
        {/* top bar */}
        <div className="mb-3 flex items-center gap-1.5 px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 text-xs text-fg-faint">Fundability workspace</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* AI chat interview */}
          <div className="col-span-2 rounded-xl bg-ink-800/70 p-3">
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-fg-muted">
              <Bot className="h-3.5 w-3.5 text-brand-blue" /> AI Founder Interview
            </div>
            <div className="space-y-1.5">
              {chat.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.who === "me" ? 12 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.25 }}
                  className={`max-w-[85%] rounded-lg px-2.5 py-1.5 text-[11px] leading-snug ${
                    m.who === "me"
                      ? "ml-auto bg-brand-blue/20 text-fg"
                      : "bg-white/5 text-fg-muted"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deck preview */}
          <div className="rounded-xl bg-ink-800/70 p-3">
            <div className="mb-2 text-xs font-medium text-fg-muted">Deck preview</div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-1/2 rounded bg-white/25" />
              <div className="h-1 w-full rounded bg-white/10" />
              <div className="h-1 w-4/5 rounded bg-white/10" />
              <div className="mt-2 grid grid-cols-3 gap-1">
                <div className="h-6 rounded bg-brand-blue/25" />
                <div className="h-6 rounded bg-brand-purple/25" />
                <div className="h-6 rounded bg-white/10" />
              </div>
            </div>
          </div>

          {/* Investor score */}
          <div className="rounded-xl bg-ink-800/70 p-3">
            <div className="mb-1 text-xs font-medium text-fg-muted">Investor score</div>
            <div className="flex items-end gap-1.5">
              <span className="text-2xl font-semibold tracking-tight">82</span>
              <span className="mb-1 inline-flex items-center gap-0.5 text-[10px] text-green-400">
                <TrendingUp className="h-3 w-3" /> +14
              </span>
            </div>
            <div className="mt-2 flex h-8 items-end gap-1">
              {[40, 55, 48, 70, 62, 82].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                  className="w-full rounded-sm bg-gradient-to-t from-brand-blue/40 to-brand-blue"
                />
              ))}
            </div>
          </div>

          {/* Readiness meter */}
          <div className="rounded-xl bg-ink-800/70 p-3">
            <div className="mb-2 flex items-center justify-between text-xs font-medium text-fg-muted">
              <span>Funding readiness</span>
              <span className="text-fg">76%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "76%" }}
                transition={{ delay: 1, duration: 1 }}
                className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-purple"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1.5 text-[11px] text-fg-muted">
              <Mic className="h-3 w-3 text-brand-purple" />
              Practice session · 04:12
              <span className="ml-auto h-1.5 w-1.5 animate-pulse-glow rounded-full bg-red-400" />
            </div>
          </div>

          {/* AI suggestions */}
          <div className="rounded-xl bg-ink-800/70 p-3">
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-fg-muted">
              <Sparkles className="h-3.5 w-3.5 text-brand-purple" /> AI suggestions
            </div>
            <ul className="space-y-1.5">
              {flags.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.15 }}
                  className="flex items-center gap-1.5 text-[11px] text-fg-muted"
                >
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-green-400/20">
                    <Check className="h-2.5 w-2.5 text-green-400" />
                  </span>
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
