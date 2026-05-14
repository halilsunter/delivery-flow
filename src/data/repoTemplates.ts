export const repoStructure = `my-banking-service/
  AGENTS.md
  opencode.jsonc

  .opencode/
    agents/
    commands/
    skills/

  .deliveryflow/
    repo-profile.yaml
    workflow.yaml
    policy-bindings.yaml
    test-commands.yaml
    environment-map.yaml
    evidence-config.yaml

  src/
  test/
  pom.xml`;

export const coreStructure = `deliveryflow-core/
  agents/
  commands/
  skills/
  plugins/
  mcp-templates/
  policies/
  workflow-templates/
  validators/
  docs/`;

export const repoProfile = `repository:
  name: payment-instruction-service
  domain: payments
  language: java
  framework: spring-boot
  buildTool: maven

delivery:
  defaultBranch: main
  featureBranchPrefix: feature
  intDeployment: automatic_on_merge
  promotionTargets:
    - UAT
    - PROD

quality:
  unitTestCommand: "mvn test"
  coverageThreshold: 80
  apiContractPath: "src/main/resources/openapi/payment-api.yaml"

governance:
  requiredPolicies:
    - banking-security-standard
    - api-design-guideline
    - audit-event-standard
  requiredApprovals:
    UAT:
      - QA Lead
      - API QA
      - Security Team
    PROD:
      - Business Owner
      - Release Manager
      - Security Approver`;
