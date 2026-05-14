import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileClock, GitBranch, LockKeyhole, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Badge } from "../ui/Badge";

function FlowMap() {
  const stages = [
    { label: "Work Intake", meta: "Jira context", tone: "from-cyan-300 to-teal-300" },
    { label: "Agent Analysis", meta: "PO + BA + Architect", tone: "from-teal-300 to-emerald-300" },
    { label: "Build & Test", meta: "Code + unit test", tone: "from-blue-300 to-cyan-300" },
    { label: "Quality Gate", meta: "Security + API + CI/CD", tone: "from-amber-200 to-orange-300" },
    { label: "Sign-off", meta: "UAT / PROD approval", tone: "from-rose-200 to-amber-200" },
  ];

  return (
    <div className="hero-panel overflow-hidden rounded-[2.5rem] border border-white/20 bg-slate-950 p-4 text-white shadow-premium sm:p-6">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 p-5 backdrop-blur-xl sm:p-7">
        <div className="pipeline-orbit" />
        <div className="pipeline-orbit" />
        <div className="pipeline-orbit" />
        <div className="relative z-10 mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-cyan-200">Agentic Delivery Pipeline</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Controlled flow from request to PROD</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">Repo adapter, MCP context, quality gates, evidence ledger ve human sign-off tek akışta birleşir.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 p-3 shadow-card">
            <Workflow className="h-6 w-6 text-amber-200" />
          </div>
        </div>
        <div className="relative z-10 grid gap-3">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur transition hover:bg-white/15"
            >
              <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${stage.tone}`} />
              <div className="flex items-center gap-4">
                <span className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${stage.tone} text-sm font-black text-slate-950 shadow-[0_0_28px_rgba(45,212,191,0.22)]`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold">{stage.label}</p>
                    {index > 2 && <CheckCircle2 className="h-4 w-4 text-amber-200" />}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{stage.meta}</p>
                  <div className="mt-3 h-1.5 rounded-full bg-white/10">
                    <div className={`h-full rounded-full bg-gradient-to-r ${stage.tone}`} style={{ width: `${54 + index * 9}%` }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { label: "AI Agent Team", icon: Sparkles },
            { label: "Evidence Ledger", icon: FileClock },
            { label: "Secure Sign-off", icon: LockKeyhole },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/7 p-3 text-xs font-semibold text-slate-200">
                <Icon className="mb-2 h-4 w-4 text-teal-200" />
                {item.label}
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 lg:px-10 lg:pt-24">
      <div className="absolute left-1/2 top-10 -z-10 h-[32rem] w-[58rem] -translate-x-1/2 rounded-full bg-white/45 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge tone="teal">Tekil AI asistanlarından, kurumsal agentic delivery ekiplerine.</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.055em] text-ink text-balance sm:text-7xl lg:text-8xl">
            DeliveryFlow AI
          </h1>
          <p className="mt-5 text-xl font-semibold text-slate-800 sm:text-2xl">
            Enterprise SDLC için Agentic Delivery Framework
          </p>
          <div className="mt-6 max-w-2xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-premium backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 p-3 text-white shadow-card">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-teal-700">Enterprise Delivery Narrative</p>
                <p className="text-sm font-semibold text-slate-700">Request-to-PROD governance flow</p>
              </div>
            </div>
            <p className="text-lg leading-8 text-slate-700">
              İş isteğinden production’a kadar yazılım teslimatını; persona bazlı AI agent’lar, MCP entegrasyonları, quality gate’ler, human sign-off mekanizmaları ve evidence ledger ile yönetin.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["MCP Context", "Quality Gate", "Evidence-backed"].map((item) => (
                <span key={item} className="rounded-2xl border border-slate-200 bg-slate-50/90 px-3 py-2 text-xs font-bold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#approach" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-teal-800">
              Yaklaşımı İncele <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#repo" className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink shadow-card transition hover:border-teal-300">
              Repo Entegrasyonunu Gör <GitBranch className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Quality Gate", "Evidence Ledger", "UAT/PROD Sign-off"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/65 px-4 py-3 text-sm font-semibold text-slate-700 shadow-card backdrop-blur">
                <Sparkles className="h-4 w-4 text-teal-700" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
        <FlowMap />
      </div>
    </section>
  );
}
