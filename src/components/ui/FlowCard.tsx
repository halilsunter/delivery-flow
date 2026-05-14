import type { ReactNode } from "react";

type FlowCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function FlowCard({ title, description, icon }: FlowCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-6 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white/90 hover:shadow-premium">
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-teal-200/30 blur-2xl transition group-hover:bg-amber-200/40" />
      <div className="mb-5 inline-flex rounded-2xl bg-teal-50 p-3 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
