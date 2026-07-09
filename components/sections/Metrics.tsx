import { metrics } from "@/lib/content";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function Metrics() {
  return (
    <section className="border-y border-white/5 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-balance">
            Preparation compounds.
          </h2>
          <p className="mt-2 text-sm text-fg-muted">
            What founders have done with it so far.
          </p>
        </Reveal>

        <Reveal stagger className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3">
          {metrics.map((m) => (
            <RevealItem key={m.label}>
              <div className="font-mono text-2xl font-medium tracking-tight sm:text-3xl">
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-1.5 text-xs leading-relaxed text-fg-muted">{m.label}</div>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
