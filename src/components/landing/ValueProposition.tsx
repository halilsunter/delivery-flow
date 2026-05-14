import { Gauge, LockKeyhole, Scale3D, ShieldCheck } from "lucide-react";
import { Section } from "../layout/Section";
import { MetricCard } from "../ui/MetricCard";

export function ValueProposition() {
  return (
    <Section
      id="why"
      eyebrow="Neden DeliveryFlow AI?"
      title="AI ile sadece kod üretmeyin; teslimatı yönetin, kanıtlayın ve ölçekleyin."
      description="Klasik AI coding assistant’lar geliştirici verimliliğini artırır; ancak enterprise dünyada ihtiyaç yalnızca kod üretmek değildir."
    >
      <div className="grid gap-5 lg:grid-cols-4">
        <MetricCard title="Hız" value="SDLC" description="Analiz, dokümantasyon, MR ve release hazırlığı kontrollü şekilde hızlanır." icon={<Gauge className="h-5 w-5" />} />
        <MetricCard title="Kalite" value="Gate" description="Quality Gate ve Judge Agent ile çıktılar daha tutarlı hale gelir." icon={<Scale3D className="h-5 w-5" />} />
        <MetricCard title="Güvenlik" value="Sign-off" description="Security evidence, policy binding ve human sign-off akışa gömülür." icon={<ShieldCheck className="h-5 w-5" />} />
        <MetricCard title="Audit" value="Ledger" description="Kararlar, testler, onaylar ve promotion kayıtları izlenebilir olur." icon={<LockKeyhole className="h-5 w-5" />} />
      </div>
      <div className="mt-8 rounded-3xl border border-line bg-white p-8 shadow-card">
        <p className="text-lg leading-8 text-slate-700">
          DeliveryFlow AI, AI destekli geliştirmeyi tekil prompt denemelerinden çıkarır ve Git repo seviyesinde yönetilebilir bir enterprise delivery standardına dönüştürür. İş isteği alma, analiz, mimari, güvenlik, geliştirme, test, Merge Request, Quality Gate, release, UAT/PROD promotion ve evidence üretimi aynı kontrollü akış içinde ele alınır.
        </p>
      </div>
    </Section>
  );
}
