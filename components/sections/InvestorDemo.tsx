"use client";

import { motion } from "framer-motion";
import { Bot, User, Sparkles } from "lucide-react";
import { demo } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";

const meta = {
  investor: { icon: Bot, ring: "ring-brand-blue/30", bg: "bg-brand-blue/10", label: "text-brand-blue", align: "" },
  founder: { icon: User, ring: "ring-white/15", bg: "bg-white/5", label: "text-fg", align: "flex-row-reverse text-right" },
  feedback: { icon: Sparkles, ring: "ring-brand-purple/30", bg: "bg-brand-purple/10", label: "text-brand-purple", align: "" },
} as const;

export function InvestorDemo() {
  return (
    <Section id="demo">
      <SectionHead
        align="center"
        title="Practice the hard questions before they cost you"
        lede="Every answer gets instant, investor-grade feedback."
      />

      <div className="mx-auto mt-12 max-w-2xl space-y-3 rounded-2xl surface p-5 sm:p-7">
        {demo.map((m, i) => {
          const t = meta[m.role as keyof typeof meta];
          const Icon = t.icon;
          const feedback = m.role === "feedback";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`flex items-start gap-3 ${t.align}`}
            >
              <span className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 ${t.ring} ${t.bg}`}>
                <Icon className={`h-4 w-4 ${t.label}`} />
              </span>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${feedback ? "border border-dashed border-brand-purple/30 bg-brand-purple/5" : "bg-white/5"}`}>
                <div className={`mb-1 text-[11px] font-medium ${t.label}`}>{m.name}</div>
                <p className="text-sm text-fg">{m.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
