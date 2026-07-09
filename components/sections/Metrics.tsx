import { metrics } from "@/lib/content";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function Metrics() {
  return (
    <Section>
      <Reveal stagger className="grid grid-cols-2 gap-6 rounded-2xl glass p-8 sm:p-10 lg:grid-cols-4">
        {metrics.map((m) => (
          <RevealItem key={m.label} className="text-center">
            <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
              <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <div className="mt-2 text-sm text-fg-muted">{m.label}</div>
          </RevealItem>
        ))}
      </Reveal>
    </Section>
  );
}
