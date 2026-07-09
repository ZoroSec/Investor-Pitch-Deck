import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHead
        eyebrow="Loved by founders"
        title="Founders raise faster when they're prepared"
      />

      <Reveal stagger className="mt-14 grid gap-5 sm:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem key={t.name}>
            <GlowCard className="flex h-full flex-col">
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-blue text-brand-blue" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-fg">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#5b8cff,#a855f7)" }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-fg-muted">{t.role}</div>
                </div>
              </div>
            </GlowCard>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
