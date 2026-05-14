import { useState } from "react";
import { docs } from "../../data/docs";
import { Section } from "../layout/Section";
import { DocsArticle } from "./DocsArticle";
import { DocsSidebar } from "./DocsSidebar";

export function Documentation() {
  const [activeId, setActiveId] = useState(docs[0].id);
  const active = docs.find((item) => item.id === activeId) ?? docs[0];

  return (
    <Section
      id="docs"
      eyebrow="Dokümantasyon"
      title="Entegrasyon, workflow ve governance rehberi."
      description="Landing page içinde erişilebilir dokümantasyon alanı; repo onboarding, commands, MCP, quality gate, promotion ve troubleshooting başlıklarını içerir."
      className="bg-white/35"
    >
      <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
        <DocsSidebar articles={docs} activeId={activeId} onSelect={setActiveId} />
        <DocsArticle article={active} />
      </div>
    </Section>
  );
}
