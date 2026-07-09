import { steps } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <Section id="how">
      <SectionHead
        title="From messy idea to funded round"
        lede="Four steps. No consultant, no blank page."
      />

      <Reveal stagger className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <RevealItem key={s.n}>
            <div className="relative h-full rounded-2xl surface p-6">
              <span className="text-sm font-mono text-brand-blue">{s.n}</span>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{s.body}</p>
              {i < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full surface text-fg-muted lg:flex">
                  →
                </span>
              )}
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
