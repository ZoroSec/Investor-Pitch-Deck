import { problems } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function Problem() {
  return (
    <Section id="problem">
      <SectionHead
        title="Fundraising is harder than building your product."
        lede="Most founders lose the room for reasons they never see coming."
      />

      <Reveal stagger className="mt-16">
        {problems.map((p, i) => (
          <RevealItem key={p.title}>
            <div
              className={`group grid gap-3 py-8 transition-colors sm:grid-cols-[1fr_1.2fr] sm:gap-10 ${
                i > 0 ? "border-t border-white/8" : ""
              }`}
            >
              <h3 className="text-xl font-semibold tracking-tight text-fg transition-colors group-hover:text-brand-blue sm:text-2xl">
                {p.title}
              </h3>
              <p className="max-w-prose text-fg-muted sm:pt-1">{p.body}</p>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
