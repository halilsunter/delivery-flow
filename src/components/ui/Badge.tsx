import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "teal" | "slate" | "amber";
};

const tones = {
  teal: "border-teal-200 bg-teal-50 text-teal-800",
  slate: "border-slate-200 bg-white/80 text-slate-700",
  amber: "border-amber-200 bg-amber-50 text-amber-800",
};

export function Badge({ children, tone = "slate" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
