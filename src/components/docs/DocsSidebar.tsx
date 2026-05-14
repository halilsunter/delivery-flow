import type { DocsArticle } from "../../data/docs";

type DocsSidebarProps = {
  articles: DocsArticle[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function DocsSidebar({ articles, activeId, onSelect }: DocsSidebarProps) {
  return (
    <aside className="rounded-3xl border border-line bg-white p-3 shadow-card lg:sticky lg:top-24 lg:h-fit">
      <p className="px-3 py-2 text-xs font-semibold tracking-[0.16em] text-slate-500">Dokümantasyon</p>
      <nav className="mt-2 grid gap-1">
        {articles.map((article, index) => (
          <button
            key={article.id}
            type="button"
            onClick={() => onSelect(article.id)}
            className={`rounded-2xl px-3 py-3 text-left text-sm font-semibold transition ${
              activeId === article.id ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-50 hover:text-ink"
            }`}
          >
            <span className="mr-2 text-xs opacity-60">{String(index + 1).padStart(2, "0")}</span>
            {article.title}
          </button>
        ))}
      </nav>
    </aside>
  );
}
