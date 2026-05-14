import { useState } from "react";
import { automatedCommands, controlledCommands } from "../../data/commands";
import { Section } from "../layout/Section";
import { CodeBlock } from "../ui/CodeBlock";

const copy = {
  automated: {
    title: "Automated Mode",
    description: "Standart delivery akışını daha az komutla yürütür. Readiness, context pack, analysis, architecture, security evidence, implementation, unit test, Merge Request, quality gate, judge ve release çıktıları tek akış içinde koordine edilir.",
    code: automatedCommands,
  },
  controlled: {
    title: "Controlled Mode",
    description: "Her fazı ayrı kalite kapısı olarak çalıştırır. Mimari, güvenlik, test, release ve governance ekipleriyle yapılan sunumlarda daha uygundur; çünkü her karar, çıktı ve handoff ayrı ayrı incelenebilir.",
    code: controlledCommands,
  },
};

export function UsageModes() {
  const [mode, setMode] = useState<"automated" | "controlled">("automated");
  const active = copy[mode];

  return (
    <Section
      id="usage"
      eyebrow="Controlled ve Automated Kullanım Modları"
      title="Aynı delivery standardı, farklı kontrol seviyeleri."
      description="Hız gerektiğinde Automated Mode; kararların tek tek inceleneceği governance oturumlarında Controlled Mode kullanılır."
    >
      <div className="mb-6 inline-flex rounded-full border border-line bg-white p-1 shadow-card">
        {(["automated", "controlled"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMode(item)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              mode === item ? "bg-ink text-white" : "text-slate-600 hover:text-ink"
            }`}
          >
            {copy[item].title}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-ink">{active.title}</h3>
          <p className="mt-4 leading-8 text-slate-600">{active.description}</p>
        </div>
        <CodeBlock language="text" code={active.code} />
      </div>
    </Section>
  );
}
