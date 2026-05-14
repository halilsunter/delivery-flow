import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-premium sm:p-12 lg:p-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-teal-200">Call to Action</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            AI destekli geliştirmeyi enterprise delivery standardına dönüştürün.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            DeliveryFlow AI ile mevcut Git repolarınızda persona bazlı agentic delivery akışları kurun; analizden production’a kadar kalite, güvenlik, sign-off ve evidence süreçlerini aynı model içinde yönetin.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#repo" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink">
              Repo Entegrasyonunu Başlat <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#docs" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Dokümantasyonu İncele
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
