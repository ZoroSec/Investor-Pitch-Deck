import { trustedBy } from "@/lib/content";

export function TrustedBy() {
  const row = [...trustedBy, ...trustedBy];
  return (
    <section className="relative border-y border-white/5 py-10">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-fg-faint">
        Trusted by founders from
      </p>
      <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14 group-hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-lg font-semibold text-white/35 grayscale transition-colors hover:text-white/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
