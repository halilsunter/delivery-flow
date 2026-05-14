import type { Integration } from "../../data/integrations";

type IntegrationNodeProps = {
  integration: Integration;
};

export function IntegrationNode({ integration }: IntegrationNodeProps) {
  const Icon = integration.icon;

  return (
    <div className="rounded-2xl border border-line bg-white/90 p-4 shadow-card">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-100 p-2 text-teal-700">
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{integration.name}</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">{integration.description}</p>
        </div>
      </div>
    </div>
  );
}
