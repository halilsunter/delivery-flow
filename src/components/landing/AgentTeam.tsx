import { agents } from "../../data/agents";
import { Section } from "../layout/Section";
import { AgentCard } from "../ui/AgentCard";

export function AgentTeam() {
  return (
    <Section
      id="agents"
      eyebrow="Persona Bazlı Agent Ekibi"
      title="SDLC rolleri açık sorumluluk sınırlarıyla agent personalarına dönüşür."
      description="Her agent kendi rolünde çalışır; tool erişimi, karar yetkisi ve handoff çıktısı governance modeliyle sınırlandırılır."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {agents.map((agent) => <AgentCard key={agent.name} agent={agent} />)}
      </div>
    </Section>
  );
}
