import type { Agent } from "../../data/agents";

type AgentCardProps = {
  agent: Agent;
};

export function AgentCard({ agent }: AgentCardProps) {
  const Icon = agent.icon;

  return (
    <article className="group relative min-h-[15rem] overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-6 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:bg-white/90 hover:shadow-premium">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl bg-slate-100 p-3 text-slate-800 group-hover:bg-teal-700 group-hover:text-white">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
          Agent
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{agent.name}</h3>
      <p className="mt-1 text-sm font-semibold text-teal-700">{agent.role}</p>
      <p className="mt-4 text-sm leading-6 text-slate-600">{agent.description}</p>
      <p className="mt-4 max-h-0 overflow-hidden text-sm leading-6 text-slate-500 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
        {agent.responsibility}
      </p>
    </article>
  );
}
