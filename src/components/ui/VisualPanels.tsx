import { CheckCircle2, GitBranch, LockKeyhole, ShieldCheck, Sparkles, Workflow } from "lucide-react";

export function AgentOrchestrationVisual() {
  const nodes = [
    { label: "PO", top: "8%", left: "44%" },
    { label: "BA", top: "25%", left: "76%" },
    { label: "SA", top: "63%", left: "72%" },
    { label: "QA", top: "78%", left: "42%" },
    { label: "SEC", top: "58%", left: "10%" },
    { label: "REL", top: "22%", left: "12%" },
  ];

  return (
    <div className="visual-panel min-h-[24rem]">
      <div className="absolute inset-8 rounded-full border border-teal-200/70" />
      <div className="absolute inset-16 rounded-full border border-amber-200/70" />
      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-slate-950 text-center text-white shadow-premium">
        <div>
          <Sparkles className="mx-auto mb-2 h-5 w-5 text-teal-200" />
          <p className="text-sm font-semibold">DeliveryFlow</p>
          <p className="text-xs text-slate-400">Core</p>
        </div>
      </div>
      {nodes.map((node, index) => (
        <div
          key={node.label}
          className="absolute z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/70 bg-white/85 text-sm font-bold text-slate-900 shadow-card backdrop-blur"
          style={{ top: node.top, left: node.left, animationDelay: `${index * 0.16}s` }}
        >
          {node.label}
        </div>
      ))}
      <div className="flow-beam left-[18%] top-[18%] rotate-[28deg]" />
      <div className="flow-beam right-[18%] top-[26%] rotate-[142deg]" />
      <div className="flow-beam bottom-[24%] left-[18%] -rotate-[28deg]" />
      <div className="flow-beam bottom-[18%] right-[20%] rotate-[28deg]" />
    </div>
  );
}

export function RepoCoreVisual() {
  return (
    <div className="visual-panel min-h-[24rem] p-6">
      <div className="grid h-full items-center gap-5 md:grid-cols-[1fr_8rem_1fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/85 p-5 shadow-card backdrop-blur">
          <GitBranch className="mb-4 h-7 w-7 text-teal-700" />
          <p className="text-lg font-semibold text-ink">Repo Adapter</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">.deliveryflow profili, workflow, policy binding ve repo-specific commands.</p>
        </div>
        <div className="hidden items-center justify-center md:flex">
          <div className="h-1 w-full rounded-full bg-gradient-to-r from-teal-400 via-slate-700 to-amber-400 shadow-[0_0_30px_rgba(20,184,166,0.55)]" />
        </div>
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-5 text-white shadow-premium">
          <Workflow className="mb-4 h-7 w-7 text-amber-200" />
          <p className="text-lg font-semibold">DeliveryFlow Core</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">Merkezi agent, skill, command, policy, workflow ve validator standartları.</p>
        </div>
      </div>
      <div className="absolute bottom-5 left-6 right-6 rounded-full border border-teal-200 bg-white/70 px-4 py-2 text-center text-xs font-semibold text-teal-900 backdrop-blur">
        Repo-local adapter, centrally governed framework.
      </div>
    </div>
  );
}

export function GovernanceShieldVisual() {
  const rings = ["Quality Gate", "Human Sign-off", "Evidence Ledger"];

  return (
    <div className="visual-panel min-h-[24rem] p-8">
      <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-teal-200 bg-white/70 shadow-premium backdrop-blur">
        <div className="flex h-40 w-40 items-center justify-center rounded-full border border-amber-200 bg-slate-950 text-white">
          <ShieldCheck className="h-14 w-14 text-teal-200" />
        </div>
      </div>
      <div className="mt-7 grid gap-3">
        {rings.map((ring) => (
          <div key={ring} className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 p-3 text-sm font-semibold text-slate-800 shadow-card backdrop-blur">
            <CheckCircle2 className="h-4 w-4 text-teal-700" />
            {ring}
          </div>
        ))}
      </div>
      <LockKeyhole className="absolute right-8 top-8 h-7 w-7 text-amber-600" />
    </div>
  );
}
