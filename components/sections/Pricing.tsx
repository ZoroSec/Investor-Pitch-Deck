import { Check, Sparkles } from "lucide-react";
import { pricing } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHead
        eyebrow="Pricing"
        title="Start free. Upgrade when you're raising."
        lede="Simple plans that scale with your round."
      />

      <Reveal stagger className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
        {pricing.map((p) => (
          <RevealItem key={p.name}>
            <div
              className={`group relative flex h-full flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5 ${
                p.highlight
                  ? "glass-strong ring-1 ring-brand-blue/40 ring-glow"
                  : "glass"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-3 py-1 text-[11px] font-medium text-white">
                  <Sparkles className="h-3 w-3" /> Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-fg-muted">{p.tagline}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="mb-1 text-sm text-fg-muted">{p.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-fg-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-gradient-to-b from-brand-blue to-brand-indigo text-white shadow-[0_12px_40px_-12px_rgba(91,140,255,0.7)]"
                    : "glass text-fg hover:border-white/20"
                }`}
              >
                {p.cta}
              </a>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
