import { useState } from "react";
import { workflowSteps } from "../../data/workflowSteps";
import { Section } from "../layout/Section";
import { Badge } from "../ui/Badge";

export function DeliveryTimeline() {
  const [active, setActive] = useState(0);
  const current = workflowSteps[active];

  return (
    <Section
      id="workflow"
      eyebrow="Uçtan Uca Delivery Flow"
      title="İş isteğinden production’a kadar kontrollü ve izlenebilir akış."
      description="Timeline adımlarına tıklayarak her fazın rolünü görebilirsiniz."
    >
      <div className="mb-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
        <Badge tone="amber">Önemli kontrol noktası</Badge>
        <p className="mt-3 text-sm leading-6 text-amber-950">
          INT ortamına kurulum merge sonrası otomatik kabul edilir. UAT ve PROD geçişleri explicit promotion ve human sign-off mekanizmasıyla kontrollü ilerler.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {workflowSteps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActive(index)}
              className={`rounded-2xl border p-4 text-left transition ${
                active === index ? "border-teal-500 bg-white shadow-card" : "border-line bg-white/70 hover:border-teal-200"
              }`}
            >
              <span className="text-xs font-semibold text-teal-700">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-sm font-semibold text-ink">{step.title}</p>
            </button>
          ))}
        </div>
        <aside className="sticky top-24 h-fit rounded-3xl border border-line bg-slate-950 p-7 text-white shadow-premium">
          <p className="text-sm font-semibold text-teal-200">Seçili Adım</p>
          <h3 className="mt-3 text-2xl font-semibold">{current.title}</h3>
          <p className="mt-4 leading-7 text-slate-300">{current.description}</p>
        </aside>
      </div>
    </Section>
  );
}
