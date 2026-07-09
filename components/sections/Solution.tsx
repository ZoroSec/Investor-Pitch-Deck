import { features } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";

export function Solution() {
  return (
    <Section id="solution">
      <SectionHead
        eyebrow="Your AI fundraising coach"
        title="Everything you need to raise with confidence"
        lede="Six tools that make you think like an investor before you ever walk into the room."
      />

      <Reveal stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <RevealItem key={f.title}>
            <GlowCard className="h-full">
              <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 ring-1 ring-white/10">
                <f.icon className="h-5 w-5 text-brand-blue" />
              </span>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{f.body}</p>
            </GlowCard>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
