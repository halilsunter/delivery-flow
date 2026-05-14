import { Bot, Boxes, Cable, Command, GitBranchPlus, Radar, Workflow } from "lucide-react";
import { Section } from "../layout/Section";
import { FlowCard } from "../ui/FlowCard";

const capabilities = [
  {
    title: "Agents",
    description: "SDLC personalarını temsil eder; Product Owner, Architect, Security, Engineer, QA ve Release rolleri açık sorumlulukla çalışır.",
    icon: Bot,
  },
  {
    title: "Subagents",
    description: "Ana agent’ın işi bölerek paralel veya uzman inceleme yapmasını sağlar; örneğin API review, test risk analizi veya security check.",
    icon: GitBranchPlus,
  },
  {
    title: "Skills",
    description: "Tekrar kullanılabilir uzmanlık paketleridir; API tasarımı, ADR yazımı, evidence üretimi veya threat modeling standardize edilir.",
    icon: Boxes,
  },
  {
    title: "Commands",
    description: "Akışın kontrollü giriş noktalarıdır; /start-work, /run-quality-gates veya /promote-work gibi komutlar fazları tetikler.",
    icon: Command,
  },
  {
    title: "Hooks",
    description: "Kritik anlarda otomatik kontrol veya kayıt üretir; test sonrası evidence yazma, MR öncesi policy check veya gate sonucu kaydı.",
    icon: Radar,
  },
  {
    title: "MCP",
    description: "Jira, SCM, CI/CD, API Catalog, Mailbox, Governance ve Environment sistemlerinden güvenli bağlam alır.",
    icon: Cable,
  },
];

const flow = [
  "Command",
  "Agent",
  "Subagent",
  "Skill",
  "Hook",
  "MCP Context",
  "Evidence",
];

export function AgenticCodingFramework() {
  return (
    <Section
      id="agentic-coding-fw"
      eyebrow="Agentic Coding Framework"
      title="Agents, Subagents, Skills, Commands, Hooks ve MCP aynı delivery omurgasında birleşir."
      description="DeliveryFlow AI, agentic coding yaklaşımını tekil prompt çalıştırma seviyesinde bırakmaz. Rolleri, yetkinlikleri, komutları, otomasyon noktalarını ve kurumsal bağlamı aynı kontrollü workflow içinde yönetir."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="visual-panel min-h-[29rem] p-6">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-teal-200 shadow-card">
                <Workflow className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">Controlled agentic execution chain</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Komut akışı agent’ı tetikler; agent gerektiğinde subagent ve skill kullanır; hook’lar kalite ve evidence noktalarını yakalar; MCP kurumsal bağlamı sağlar.
              </p>
            </div>
            <div className="mt-8 grid gap-3">
              {flow.map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-300 to-amber-200 text-xs font-black text-slate-950">
                    {index + 1}
                  </span>
                  <div className="flex-1 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-800 shadow-card backdrop-blur">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return <FlowCard key={capability.title} title={capability.title} description={capability.description} icon={<Icon className="h-5 w-5" />} />;
          })}
        </div>
      </div>
    </Section>
  );
}
