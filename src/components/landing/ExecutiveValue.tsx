import { ChartNoAxesCombined, Gauge, LockKeyhole, Network, ShieldCheck, Sparkles } from "lucide-react";
import { Section } from "../layout/Section";
import { FlowCard } from "../ui/FlowCard";

const values = [
  { title: "Hız", description: "Tekrarlı analiz, dokümantasyon, test planı, MR ve release hazırlığı gibi işleri hızlandırır.", icon: Gauge },
  { title: "Kalite", description: "Quality Gate ve Judge Agent ile çıktıları daha tutarlı hale getirir.", icon: Sparkles },
  { title: "Güvenlik", description: "Security evidence, policy binding ve human sign-off mekanizmalarını delivery akışına gömer.", icon: ShieldCheck },
  { title: "İzlenebilirlik", description: "Evidence Ledger ile kararlar, çıktılar, onaylar ve ortam geçişleri denetlenebilir hale gelir.", icon: LockKeyhole },
  { title: "Standardizasyon", description: "Her ekibin farklı prompt ve script kullanması yerine merkezi, versiyonlu ve yönetilen bir framework sunar.", icon: ChartNoAxesCombined },
  { title: "Ölçeklenebilirlik", description: "Repo-local adapter ve merkezi DeliveryFlow Core yaklaşımıyla farklı ekip ve repolara yaygınlaştırılabilir.", icon: Network },
];

export function ExecutiveValue() {
  return (
    <Section
      id="value"
      eyebrow="Kurumsal Değer Önerisi"
      title="Üst yönetim için hız kadar risk, kalite ve auditability de görünür olur."
      description="DeliveryFlow AI delivery performansını tekil geliştirici verimliliğinin ötesinde kurumsal standarda bağlar."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => {
          const Icon = value.icon;
          return <FlowCard key={value.title} title={value.title} description={value.description} icon={<Icon className="h-5 w-5" />} />;
        })}
      </div>
    </Section>
  );
}
