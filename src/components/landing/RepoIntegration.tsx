import { coreStructure, repoProfile, repoStructure } from "../../data/repoTemplates";
import { Section } from "../layout/Section";
import { Badge } from "../ui/Badge";
import { CodeBlock } from "../ui/CodeBlock";
import { RepoCoreVisual } from "../ui/VisualPanels";

export function RepoIntegration() {
  return (
    <Section
      id="repo"
      eyebrow="Git Repo Entegrasyon Modeli"
      title="Mevcut Git reponuza hafif bir adapter katmanı olarak eklenir."
      description="DeliveryFlow AI uygulama repolarına ağır bir platform bağımlılığı olarak değil, repo-local agentic delivery adapter katmanı olarak entegre edilir."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
          <Badge tone="teal">Repo-local adapter, centrally governed framework.</Badge>
          <p className="mt-5 leading-8 text-slate-700">
            Repo içinde yalnızca o uygulamaya özel profil, workflow, policy binding ve OpenCode command/agent tanımları tutulur. Ortak agentic delivery standartları merkezi DeliveryFlow Core üzerinden yönetilir.
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Her uygulama reposu kendi bağlamını ve çalışma komutlarını taşır; fakat agentic delivery standartları merkezi, versiyonlu ve yönetilen bir framework üzerinden gelir.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[".deliveryflow profili", "Repo-specific commands", "Policy binding"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <RepoCoreVisual />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <CodeBlock language="text" code={repoStructure} />
        </div>
        <div className="lg:col-span-1">
        <CodeBlock language="text" code={coreStructure} />
        </div>
        <div className="lg:col-span-1">
        <CodeBlock language="yaml" code={repoProfile} />
        </div>
      </div>
    </Section>
  );
}
