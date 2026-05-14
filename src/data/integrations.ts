import {
  Boxes,
  GitBranch,
  KeyRound,
  Mail,
  Network,
  Shield,
  Ticket,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Integration = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export const integrations: Integration[] = [
  { name: "Work Tracker / Jira", description: "İş isteği, durum ve acceptance bağlamı", icon: Ticket },
  { name: "SCM / GitLab / GitHub", description: "Branch, MR, diff ve review kanıtları", icon: GitBranch },
  { name: "CI/CD / Jenkins", description: "Build, test, scan ve deployment sonuçları", icon: Workflow },
  { name: "API Catalog", description: "Contract, guideline ve backward compatibility", icon: Network },
  { name: "Policy Registry", description: "Security, API, architecture ve release policy", icon: Shield },
  { name: "Mailbox", description: "İş birimi clarification ve onay yazışmaları", icon: Mail },
  { name: "Governance Systems", description: "Approval, risk ve audit kayıtları", icon: KeyRound },
  { name: "Environment Registry", description: "INT, UAT, PROD promotion ve deployment kayıtları", icon: Boxes },
];
