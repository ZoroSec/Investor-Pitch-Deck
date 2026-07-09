"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Presentation, Swords, BarChart3 } from "lucide-react";
import { showcaseTabs } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";

const icons = [Bot, Presentation, Swords, BarChart3];

export function Showcase() {
  const [active, setActive] = useState(0);
  const tab = showcaseTabs[active];

  return (
    <Section id="showcase">
      <SectionHead
        align="center"
        title="See it work end to end"
        lede="One workspace to interview, build, rehearse, and measure your pitch."
      />

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {showcaseTabs.map((t, i) => {
          const Icon = icons[i];
          const on = i === active;
          return (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                on ? "bg-white/10 text-fg ring-1 ring-white/15" : "text-fg-muted hover:text-fg"
              }`}
            >
              <Icon className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* laptop mock */}
      <div className="mx-auto mt-10 max-w-4xl">
        <div className="glass-strong ring-glow rounded-t-2xl p-3">
          <div className="mb-3 flex items-center gap-1.5 px-1">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-xl bg-ink-900/80 p-6 sm:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="grid h-full gap-6 sm:grid-cols-[1fr_1.2fr]"
              >
                <div>
                  <h3 className="text-xl font-semibold">{tab.title}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{tab.body}</p>
                  <div className="mt-6 space-y-2">
                    {[0, 1, 2].map((r) => (
                      <div key={r} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-brand-blue/70" />
                        <span className="h-2 rounded bg-white/10" style={{ width: `${70 - r * 12}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <TabVisual index={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* laptop base */}
        <div className="mx-auto h-3 w-[105%] -translate-x-[2.5%] rounded-b-xl bg-gradient-to-b from-white/15 to-white/5" />
        <div className="mx-auto h-1 w-1/4 rounded-b-lg bg-white/10" />
      </div>
    </Section>
  );
}

function TabVisual({ index }: { index: number }) {
  const bars = [40, 62, 55, 78, 66, 90];
  return (
    <div className="grid grid-cols-2 gap-3">
      {index === 0 && (
        <div className="col-span-2 space-y-2">
          {["Who is your customer?", "We serve seed-stage founders.", "How big is the market?"].map((t, i) => (
            <div key={i} className={`max-w-[80%] rounded-lg px-3 py-2 text-xs ${i % 2 ? "ml-auto bg-brand-blue/20" : "bg-white/5 text-fg-muted"}`}>{t}</div>
          ))}
        </div>
      )}
      {index === 1 && (
        <>
          {[0, 1, 2, 3].map((s) => (
            <div key={s} className="rounded-lg bg-white/5 p-3">
              <div className="mb-1.5 h-1.5 w-1/2 rounded bg-white/25" />
              <div className="h-1 w-full rounded bg-white/10" />
              <div className="mt-1 h-1 w-3/4 rounded bg-white/10" />
            </div>
          ))}
        </>
      )}
      {index === 2 && (
        <div className="col-span-2 rounded-lg bg-white/5 p-4">
          <div className="text-xs text-fg-muted">AI Investor</div>
          <p className="mt-1 text-sm">&ldquo;Walk me through your unit economics. What&rsquo;s your payback period?&rdquo;</p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] text-red-300">interrupts</span>
            <span className="rounded-full bg-brand-purple/15 px-2 py-0.5 text-[10px] text-brand-purple">follow-up</span>
          </div>
        </div>
      )}
      {index === 3 && (
        <div className="col-span-2 flex items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-blue/40 to-brand-purple" style={{ height: `${h}%`, minHeight: 20 }} />
          ))}
        </div>
      )}
    </div>
  );
}
