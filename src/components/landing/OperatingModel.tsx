import { Boxes, BrainCircuit, CheckCircle2, Command, FileClock, PlugZap } from "lucide-react";
import { Section } from "../layout/Section";
import { FlowCard } from "../ui/FlowCard";

const items = [
  { title: "Persona Bazlı Agent Ekibi", description: "Product Owner’dan Release Manager’a kadar SDLC rollerini AI agent personaları olarak modeller.", icon: BrainCircuit },
  { title: "Reusable Skills", description: "API tasarımı, güvenlik, test, mimari, release ve evidence üretimi gibi yetkinlikleri tekrar kullanılabilir skill paketleri olarak yönetir.", icon: Boxes },
  { title: "Commands", description: "/start-work, /run-work, /assess-readiness ve /run-quality-gates gibi kontrollü workflow giriş noktaları sağlar.", icon: Command },
  { title: "MCP Entegrasyonları", description: "Jira, SCM, CI/CD, API Catalog, Mailbox, Governance ve Environment sistemleriyle standart entegrasyon modeli sunar.", icon: PlugZap },
  { title: "Quality Gates", description: "Security, API, test, architecture ve release kontrollerini teslimat akışına gömer.", icon: CheckCircle2 },
  { title: "Evidence Ledger", description: "Kararları, handoff’ları, test sonuçlarını, sign-off’ları ve ortam geçişlerini izlenebilir kanıt haline getirir.", icon: FileClock },
];

export function OperatingModel() {
  return (
    <Section
      id="operating-model"
      eyebrow="Operating Model"
      title="Merkezi standartlar, repo-local adaptasyon ve kanıtlı teslimat."
      description="DeliveryFlow Core ortak agent, skill, command, policy ve workflow standartlarını yönetir; her repo kendi bağlamını .deliveryflow profiliyle tanımlar."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return <FlowCard key={item.title} title={item.title} description={item.description} icon={<Icon className="h-5 w-5" />} />;
        })}
      </div>
    </Section>
  );
}
