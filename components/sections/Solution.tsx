import { features } from "@/lib/content";
import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { GlowCard } from "@/components/ui/GlowCard";

/* Bento spans: 6 items → 2+1 / 1+2 / 1+2 on lg. No empty cells. */
const spans = [
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "lg:col-span-2",
];

export function Solution() {
  return (
    <Section id="solution">
      <SectionHead
        title="Your AI fundraising coach"
        lede="Six tools that make you think like an investor before you ever walk into the room."
      />

      <Reveal stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const featured = spans[i].length > 0;
          return (
            <RevealItem key={f.title} className={spans[i]}>
              <GlowCard
                className={`h-full ${
                  featured
                    ? "bg-gradient-to-br from-brand-indigo/12 via-transparent to-transparent"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <f.icon className="h-5 w-5 shrink-0 text-brand-blue" />
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 max-w-prose text-sm text-fg-muted">{f.body}</p>

                {/* mini-visuals give featured cells real variation */}
                {i === 0 && (
                  <div className="mt-5 space-y-1.5" aria-hidden>
                    <div className="max-w-[70%] rounded-lg bg-white/5 px-3 py-1.5 text-[11px] text-fg-muted">
                      What makes your product hard to copy?
                    </div>
                    <div className="ml-auto max-w-[70%] rounded-lg bg-brand-blue/15 px-3 py-1.5 text-[11px] text-fg">
                      Our proprietary dataset grows with every user.
                    </div>
                  </div>
                )}
                {i === 3 && (
                  <div className="mt-5 rounded-lg bg-white/5 px-3 py-2 text-[11px] text-fg-muted" aria-hidden>
                    <span className="text-brand-purple">AI Investor:</span>{" "}
                    &ldquo;Hold on. What&rsquo;s your CAC payback, exactly?&rdquo;
                  </div>
                )}
                {i === 5 && (
                  <div className="mt-5 flex flex-wrap gap-2" aria-hidden>
                    {["Top-down TAM", "No retention data", "Vague moat"].map((flag) => (
                      <span
                        key={flag}
                        className="rounded-full bg-red-500/10 px-2.5 py-1 text-[11px] text-red-300"
                      >
                        {flag}
                      </span>
                    ))}
                  </div>
                )}
              </GlowCard>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
