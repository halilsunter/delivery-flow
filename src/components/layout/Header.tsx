import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "../ui/BrandLogo";

const links = [
  ["Genel Bakış", "#overview"],
  ["Yaklaşım", "#approach"],
  ["Agent Ekibi", "#agents"],
  ["Repo Entegrasyonu", "#repo"],
  ["CLI Akışı", "#cli-workflow"],
  ["Workflow", "#workflow"],
  ["Governance", "#governance"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/70 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <BrandLogo />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <a href="#docs" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-teal-800 sm:inline-flex">
          Dokümantasyonu İncele
        </a>
        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-xl border border-line p-2 lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-white px-5 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-3">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
