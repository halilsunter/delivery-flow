import { ArrowRightLeft, Bot, FileCheck2 } from "lucide-react";
import { Section } from "../layout/Section";
import { FlowCard } from "../ui/FlowCard";
import { AgentOrchestrationVisual } from "../ui/VisualPanels";

export function AgenticFramework() {
  return (
    <Section
      id="approach"
      eyebrow="Yaklaşım"
      title="Agentic Delivery Framework Nedir?"
      description="Yazılım geliştirme sürecini tek bir AI asistanı ile yapılan bireysel etkileşim olmaktan çıkarır; persona bazlı dijital delivery ekibi modeli kurar."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <FlowCard title="Persona bazlı ekip" description="Product Owner’dan Release Manager’a kadar SDLC rolleri AI Agent personaları olarak modellenir." icon={<Bot className="h-5 w-5" />} />
        <FlowCard title="Kontrollü handoff" description="Her agent çıktısını bir sonraki role devreder; kalite kapıları süreç boyunca işletilir." icon={<ArrowRightLeft className="h-5 w-5" />} />
        <FlowCard title="Evidence-backed delivery" description="Kararlar, test sonuçları, sign-off ve promotion kayıtları Evidence Ledger’a işlenir." icon={<FileCheck2 className="h-5 w-5" />} />
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-3xl border border-line bg-white p-8 shadow-card">
          <h3 className="text-xl font-semibold text-ink">Klasik Coding Assistant’tan Farkı</h3>
          <p className="mt-4 leading-7 text-slate-600">
            DeliveryFlow AI yalnızca kod üretmez. İş isteğini alır, readiness kontrolü yapar, context pack oluşturur, analiz üretir, mimari kararları ADR olarak kaydeder, security evidence hazırlar, unit test yazdırır, Merge Request paketler, CI/CD quality gate sonuçlarını değerlendirir, UAT/PROD promotion ve sign-off akışlarını yönetir.
          </p>
          <div className="mt-6 rounded-3xl border border-teal-200 bg-teal-950 p-8 text-white shadow-card">
          <h3 className="text-xl font-semibold">Odak: Enterprise teslimat standardı</h3>
          <p className="mt-4 leading-7 text-teal-50">
            Hedef “AI ile daha hızlı kod yazmak” değil; AI destekli, kontrollü, izlenebilir ve enterprise seviyede yönetilebilir bir yazılım teslimat modeli oluşturmaktır.
          </p>
          </div>
        </div>
        <AgentOrchestrationVisual />
      </div>
    </Section>
  );
}
