import { ArrowRight } from "lucide-react";
import { finalCta } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="relative overflow-hidden rounded-3xl glass-strong px-8 py-16 text-center sm:px-16">
          {/* glow accents */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-blue/20 blur-3xl animate-float" />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-brand-purple/20 blur-3xl animate-float-slow" />
          </div>

          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-fg-muted">
            {finalCta.subheadline}
          </p>
          <a
            href="#"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-brand-blue to-brand-indigo px-8 py-4 text-base font-medium text-white shadow-[0_16px_50px_-12px_rgba(91,140,255,0.7)] transition-transform hover:scale-[1.03]"
          >
            {finalCta.cta}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
