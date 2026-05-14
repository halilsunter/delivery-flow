import { ArchitecturePreview } from "../components/landing/ArchitecturePreview";
import { AgentTeam } from "../components/landing/AgentTeam";
import { AgenticFramework } from "../components/landing/AgenticFramework";
import { AgenticCodingFramework } from "../components/landing/AgenticCodingFramework";
import { CallToAction } from "../components/landing/CallToAction";
import { CliWorkflow } from "../components/landing/CliWorkflow";
import { CommandCenter } from "../components/landing/CommandCenter";
import { DeliveryTimeline } from "../components/landing/DeliveryTimeline";
import { ExecutiveValue } from "../components/landing/ExecutiveValue";
import { Governance } from "../components/landing/Governance";
import { Hero } from "../components/landing/Hero";
import { McpIntegrations } from "../components/landing/McpIntegrations";
import { OperatingModel } from "../components/landing/OperatingModel";
import { RepoIntegration } from "../components/landing/RepoIntegration";
import { UsageModes } from "../components/landing/UsageModes";
import { ValueProposition } from "../components/landing/ValueProposition";
import { Documentation } from "../components/docs/Documentation";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { AmbientBackground } from "../components/ui/AmbientBackground";

export default function App() {
  return (
    <div id="top" className="min-h-screen text-ink">
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <CommandCenter />
        <ValueProposition />
        <AgenticFramework />
        <AgenticCodingFramework />
        <OperatingModel />
        <AgentTeam />
        <DeliveryTimeline />
        <McpIntegrations />
        <RepoIntegration />
        <CliWorkflow />
        <UsageModes />
        <Governance />
        <ArchitecturePreview />
        <ExecutiveValue />
        <Documentation />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
