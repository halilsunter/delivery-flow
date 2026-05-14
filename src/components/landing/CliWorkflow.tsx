import { Code2, GitBranch, KeyRound, Laptop, Layers3, ShieldCheck } from "lucide-react";
import { Section } from "../layout/Section";
import { FlowCard } from "../ui/FlowCard";
import { CodeBlock } from "../ui/CodeBlock";

const reasons = [
  {
    title: "Repo context kaybolmaz",
    description: "Agent’lar kod, test, build, policy binding ve environment bilgisini doğrudan repo kökünden okur.",
    icon: GitBranch,
  },
  {
    title: "Developer workflow bozulmaz",
    description: "Ekipler mevcut IDE, terminal, branch, MR ve test alışkanlıklarını terk etmeden agentic akışı kullanır.",
    icon: Laptop,
  },
  {
    title: "Daha kontrollü tool erişimi",
    description: "CLI akışı hangi komutun, hangi repo context’iyle ve hangi permission sınırında çalıştığını görünür kılar.",
    icon: KeyRound,
  },
  {
    title: "Adapter modeli güçlenir",
    description: "Harici platforma veri kopyalamak yerine repo-local adapter ve merkezi DeliveryFlow Core birlikte çalışır.",
    icon: Layers3,
  },
  {
    title: "Kanıt üretimi doğallaşır",
    description: "Build, test, diff, MR, gate ve sign-off çıktıları aynı execution context içinde evidence ledger’a bağlanır.",
    icon: ShieldCheck,
  },
  {
    title: "Kod yakınında karar",
    description: "Mimari, güvenlik ve test kararları soyut web formlarında değil, gerçek değişiklik ve repo verisi yanında alınır.",
    icon: Code2,
  },
];

const flow = `IDE / Terminal
  ↓
OpenCode Runtime
  ↓
DeliveryFlow Commands
  ↓
Repo Adapter (.deliveryflow)
  ↓
DeliveryFlow Core + MCP Bridge
  ↓
Quality Gate + Evidence Ledger`;

export function CliWorkflow() {
  return (
    <Section
      id="cli-workflow"
      eyebrow="IDE Yakınında CLI Akışı"
      title="Neden harici bir web uygulaması yerine repo ve IDE yakınında çalışır?"
      description="DeliveryFlow AI’ın temel varsayımı şudur: Agentic delivery akışı geliştiricinin gerçek execution context’ine, yani Git repo, IDE, terminal, build/test komutları ve MR sürecine yakın olmalıdır."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr]">
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return <FlowCard key={reason.title} title={reason.title} description={reason.description} icon={<Icon className="h-5 w-5" />} />;
          })}
        </div>
        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-7 shadow-premium backdrop-blur">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">Web dashboard değil, delivery control surface.</h3>
            <p className="mt-4 leading-7 text-slate-600">
              Web arayüzü görünürlük ve raporlama için değerlidir; ancak kod değiştirme, test çalıştırma, branch üretme ve MR hazırlama gibi kritik adımlar repo context’inde daha güvenilir ve denetlenebilir yürür. CLI, agent’ların gerçek çalışma alanına yakın kalmasını sağlar.
            </p>
          </div>
          <CodeBlock language="text" code={flow} />
        </div>
      </div>
    </Section>
  );
}
