import { Sparkles, AtSign, MessageCircle, Globe } from "lucide-react";
import { footer, nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple">
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            {nav.brand}
          </a>
          <p className="mt-4 max-w-xs text-sm text-fg-muted">
            The AI fundraising coach that helps founders think like investors.
          </p>
          <div className="mt-5 flex gap-2">
            {[AtSign, MessageCircle, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full glass text-fg-muted transition-colors hover:text-fg"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <div className="text-sm font-medium">{col.title}</div>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-fg-muted transition-colors hover:text-fg">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/5 px-6 pt-6 text-xs text-fg-faint sm:flex-row">
        <span>© {new Date().getFullYear()} {nav.brand}. All rights reserved.</span>
        <span>Built for ambitious founders.</span>
      </div>
    </footer>
  );
}
