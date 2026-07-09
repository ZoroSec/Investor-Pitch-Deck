import { XCircle } from "lucide-react";
import { problems } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";

export function Problem() {
  return (
    <Section id="problem">
      <SectionHead
        eyebrow="The real challenge"
        title="Fundraising is harder than building your product."
        lede="Most founders lose the room for reasons they never see coming."
      />

      <Reveal stagger className="mt-14 grid gap-5 sm:grid-cols-3">
        {problems.map((p) => (
          <RevealItem key={p.title}>
            <GlowCard className="h-full">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <XCircle className="h-5 w-5 text-red-400" />
              </span>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{p.body}</p>
            </GlowCard>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
