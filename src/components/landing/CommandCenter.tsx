import { motion } from "framer-motion";
import { CheckCircle2, CircleDot, FileClock, GitMerge, ShieldCheck, Workflow } from "lucide-react";

const lanes = [
  "Work Intake",
  "AI Agent Team",
  "Quality Gate",
  "Evidence Ledger",
  "UAT/PROD Sign-off",
];

const signals = [
  { label: "DeliveryFlow Core", icon: Workflow },
  { label: "Repo Adapter", icon: GitMerge },
  { label: "Security Evidence", icon: ShieldCheck },
  { label: "Audit Trail", icon: FileClock },
];

export function CommandCenter() {
  return (
    <section className="px-5 pb-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="command-center overflow-hidden rounded-[2.25rem] border border-white/15 bg-slate-950 p-5 text-white shadow-premium sm:p-7 lg:p-9">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-teal-200">Enterprise Delivery Control Plane</p>
              <div className="mt-8 grid gap-3">
                {signals.map((signal, index) => {
                  const Icon = signal.icon;
                  return (
                    <motion.div
                      key={signal.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/7 p-4 backdrop-blur"
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-xl bg-teal-300/15 p-2 text-teal-200">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold">{signal.label}</span>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-amber-200" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="relative min-h-[24rem] rounded-[2rem] border border-white/10 bg-white/7 p-5 backdrop-blur">
              <div className="absolute inset-0 subtle-grid opacity-20" />
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-300/40" />
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/20" />
              <div className="absolute left-1/2 top-1/2 z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-white text-center text-slate-950 shadow-premium">
                <div>
                  <CircleDot className="mx-auto mb-2 h-6 w-6 text-teal-700" />
                  <p className="text-sm font-bold">DeliveryFlow AI</p>
                  <p className="text-xs text-slate-500">Control Plane</p>
                </div>
              </div>
              {lanes.map((lane, index) => {
                const angle = index * 72 - 90;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                return (
                  <motion.div
                    key={lane}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.08 }}
                    className="absolute left-1/2 top-1/2 z-10 w-36 rounded-2xl border border-white/15 bg-slate-900/90 p-3 text-center text-xs font-semibold text-slate-100 shadow-card backdrop-blur"
                    style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  >
                    {lane}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
