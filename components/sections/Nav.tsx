"use client";

import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled ? "glass-strong ring-glow" : "border border-transparent"
        }`}
        style={{ marginLeft: "max(0.75rem, calc(50% - 36rem))", marginRight: "max(0.75rem, calc(50% - 36rem))" }}
      >
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="hidden sm:inline">{nav.brand}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-fg-muted transition-colors hover:bg-white/5 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hidden rounded-full bg-gradient-to-b from-brand-blue to-brand-indigo px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(91,140,255,0.7)] transition-transform hover:scale-[1.03] sm:inline-block"
          >
            {nav.cta}
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-3 mt-2 rounded-2xl glass-strong p-2 md:hidden">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm text-fg-muted hover:bg-white/5 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-1 block rounded-xl bg-gradient-to-b from-brand-blue to-brand-indigo px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            {nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
