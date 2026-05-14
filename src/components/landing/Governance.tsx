import { Eye, FileCheck2, Fingerprint, KeyRound, ShieldCheck, UserCheck } from "lucide-react";
import { Section } from "../layout/Section";
import { FlowCard } from "../ui/FlowCard";
import { GovernanceShieldVisual } from "../ui/VisualPanels";

const items = [
  { title: "Role-based Tool Permission", description: "Her agent’ın rolü, sorumluluğu ve tool erişimi sınırlandırılabilir.", icon: KeyRound },
  { title: "Human-in-the-loop Sign-off", description: "PROD promotion gibi kritik adımlar explicit sign-off gerektirir.", icon: UserCheck },
  { title: "Evidence-backed Quality Gates", description: "Test geçti veya security review tamamlandı gibi iddialar kanıtsız bırakılmaz.", icon: FileCheck2 },
  { title: "Security Evidence Pack", description: "Authorization, audit, data classification ve threat model etkileri delivery akışında üretilir.", icon: ShieldCheck },
  { title: "Audit-ready Delivery Trail", description: "Kararlar, handoff’lar, onaylar ve promotion kayıtları denetlenebilir hale gelir.", icon: Eye },
  { title: "Policy Binding", description: "Security, API, architecture ve release policy’leri repo profiline bağlanır.", icon: Fingerprint },
];

export function Governance() {
  return (
    <Section
      id="governance"
      eyebrow="Governance, Security ve Audit"
      title="Güvenlik sürecin sonunda değil, delivery akışının içinde."
      description="DeliveryFlow AI enterprise güvenlik ve governance ihtiyaçlarını sonradan eklenen kontrol olarak değil, agentic delivery modelinin doğal parçası olarak ele alır."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <GovernanceShieldVisual />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return <FlowCard key={item.title} title={item.title} description={item.description} icon={<Icon className="h-5 w-5" />} />;
          })}
        </div>
      </div>
      <div className="mt-8 rounded-3xl border border-line bg-slate-950 p-8 text-white shadow-premium">
        <p className="max-w-4xl text-lg leading-8 text-slate-200">
          Secret’lar repo içinde tutulmaz; enterprise secret management veya environment variable üzerinden yönetilir. Agent’lar yalnızca kendi rolü kapsamında hareket eder. Judge Agent bağımsız kalite kapısı olarak çalışır ve Security Evidence Pack üretimi delivery akışının doğal parçasıdır.
        </p>
      </div>
    </Section>
  );
}
