import { integrations } from "../../data/integrations";
import { Section } from "../layout/Section";
import { IntegrationNode } from "../ui/IntegrationNode";

export function McpIntegrations() {
  return (
    <Section
      id="mcp"
      eyebrow="MCP ile Kurumsal Entegrasyon"
      title="DeliveryFlow AI bağlamı kurumsal kaynak sistemlerden alır."
      description="MCP tabanlı entegrasyon modeli Jira, SCM, CI/CD, API Catalog, Mailbox, Governance ve Environment sistemlerini delivery akışına bağlar."
    >
      <div className="relative rounded-[2rem] border border-line bg-white/80 p-6 shadow-premium">
        <div className="absolute inset-0 subtle-grid rounded-[2rem] opacity-60" />
        <div className="relative grid gap-5 lg:grid-cols-[1fr_18rem_1fr]">
          <div className="grid gap-4">
            {integrations.slice(0, 4).map((integration) => <IntegrationNode key={integration.name} integration={integration} />)}
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-[2rem] border border-teal-200 bg-slate-950 p-8 text-center text-white shadow-premium">
              <p className="text-sm font-semibold text-teal-200">MCP Bridge</p>
              <p className="mt-3 text-2xl font-semibold">DeliveryFlow AI</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">Context, policy, evidence ve workflow koordinasyonu</p>
            </div>
          </div>
          <div className="grid gap-4">
            {integrations.slice(4).map((integration) => <IntegrationNode key={integration.name} integration={integration} />)}
          </div>
        </div>
      </div>
    </Section>
  );
}
