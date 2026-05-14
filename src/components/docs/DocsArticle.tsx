import type { DocsArticle as DocsArticleType } from "../../data/docs";
import { CodeBlock } from "../ui/CodeBlock";

type DocsArticleProps = {
  article: DocsArticleType;
};

export function DocsArticle({ article }: DocsArticleProps) {
  return (
    <article className="rounded-[2rem] border border-line bg-white p-6 shadow-card sm:p-8 lg:p-10">
      <h3 className="text-3xl font-semibold tracking-tight text-ink">{article.title}</h3>
      <div className="mt-6 grid gap-4">
        {article.body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-slate-600">
            {paragraph}
          </p>
        ))}
      </div>
      {article.code && (
        <div className="mt-8">
          <CodeBlock language={article.code.language} code={article.code.value} />
        </div>
      )}
    </article>
  );
}
