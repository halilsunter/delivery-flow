const links = [
  ["Genel Bakış", "#overview"],
  ["Yaklaşım", "#approach"],
  ["Repo Entegrasyonu", "#repo"],
  ["CLI Akışı", "#cli-workflow"],
  ["Workflow", "#workflow"],
  ["Governance", "#governance"],
  ["Dokümantasyon", "#docs"],
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink">DeliveryFlow AI</p>
          <p className="mt-2 text-sm text-slate-600">Enterprise SDLC için Agentic Delivery Framework</p>
          <p className="mt-1 text-sm text-slate-500">Tekil AI asistanlarından, kurumsal agentic delivery ekiplerine.</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-slate-500 hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
