import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 lg:px-10 ${className}`}>
      <div className="pointer-events-none absolute inset-x-4 top-10 -z-10 mx-auto h-72 max-w-6xl rounded-full bg-white/35 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl rounded-[2rem] border border-white/60 bg-white/45 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
            {eyebrow && <p className="text-sm font-semibold tracking-[0.18em] text-teal-700">{eyebrow}</p>}
            {title && <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h2>}
            {description && <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
