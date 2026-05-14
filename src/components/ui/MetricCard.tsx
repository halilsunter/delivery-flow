import type { ReactNode } from "react";

type MetricCardProps = {
  title: string;
  value: string;
  description: string;
  icon?: ReactNode;
};

export function MetricCard({ title, value, description, icon }: MetricCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-6 shadow-card backdrop-blur">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-200/35 blur-2xl" />
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <div className="rounded-2xl bg-slate-100 p-2 text-teal-700">{icon}</div>
      </div>
      <p className="text-3xl font-semibold tracking-tight text-ink">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
