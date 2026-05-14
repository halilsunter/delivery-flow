import { Boxes, FileClock, GitBranch, Layers3, Plug, ShieldCheck } from "lucide-react";
import { Section } from "../layout/Section";
import { FlowCard } from "../ui/FlowCard";

const components = [
  { title: "DeliveryFlow Core", description: "Merkezi agent, skill, command, plugin ve workflow standartlarını içerir.", icon: Boxes },
  { title: "Repo Adapter", description: "Her uygulama reposuna eklenen hafif agentic delivery adaptasyon katmanıdır.", icon: GitBranch },
  { title: "OpenCode Runtime", description: "Agent, subagent, command ve skill yürütme ortamı olarak çalışır.", icon: Layers3 },
  { title: "MCP Bridge", description: "Jira, SCM, CI/CD, API Catalog, Mailbox, Governance ve Environment sistemlerine standart entegrasyon sağlar.", icon: Plug },
  { title: "Quality Gate Layer", description: "API, security, test, architecture ve release kontrollerini işletir.", icon: ShieldCheck },
  { title: "Evidence Ledger", description: "Karar, çıktı, test, onay ve ortam geçiş kanıtlarını kayıt altına alır.", icon: FileClock },
];

export function ArchitecturePreview() {
  return (
    <Section
      id="architecture"
      eyebrow="Mimari Bileşenler"
      title="Centrally governed framework, repo-level execution."
      description="Mimari model merkezi standartları korurken ekiplerin mevcut Git repo akışında çalışmasına izin verir."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => {
          const Icon = component.icon;
          return <FlowCard key={component.title} title={component.title} description={component.description} icon={<Icon className="h-5 w-5" />} />;
        })}
      </div>
    </Section>
  );
}
