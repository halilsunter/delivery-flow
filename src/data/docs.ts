import { automatedCommands, controlledCommands } from "./commands";
import { coreStructure, repoProfile, repoStructure } from "./repoTemplates";

export type DocsArticle = {
  id: string;
  title: string;
  body: string[];
  code?: {
    language: string;
    value: string;
  };
};

export const docs: DocsArticle[] = [
  {
    id: "nedir",
    title: "DeliveryFlow AI Nedir?",
    body: [
      "DeliveryFlow AI, Enterprise SDLC için geliştirilmiş Agentic Delivery Framework yaklaşımıdır.",
      "Amaç tekil AI prompt denemelerini repo seviyesinde yönetilebilir, kanıtlanabilir ve standardize edilebilir delivery akışına dönüştürmektir.",
    ],
  },
  {
    id: "framework",
    title: "Agentic Delivery Framework Yaklaşımı",
    body: [
      "SDLC rolleri persona bazlı AI Agent’lar olarak modellenir. Her agent kendi sorumluluk alanında çalışır ve çıktısını kontrollü handoff ile sonraki role devreder.",
      "Quality Gate, Judge Agent ve Evidence Ledger mekanizmaları akışın sonradan eklenen kontrolü değil, doğal parçasıdır.",
    ],
  },
  {
    id: "agentic-coding-fw",
    title: "Agentic Coding Framework Bileşenleri",
    body: [
      "Agentic coding framework yaklaşımı, AI destekli geliştirmeyi tek bir sohbet veya tekil prompt çalıştırması olarak ele almaz. Bunun yerine rol, yetkinlik, komut, otomasyon noktası ve kurumsal bağlam bileşenlerini birlikte yönetir.",
      "Agents SDLC personalarını temsil eder. Her agent’ın rolü, sorumluluğu, çıktı formatı ve tool erişimi sınırlandırılır. Böylece Business Analyst kod yazmaz, Judge Agent kod değiştirmez, Release Manager security sign-off vermez.",
      "Subagents ana agent’ın işi uzman parçalara ayırmasını sağlar. API review, regression risk analizi, security check veya dokümantasyon incelemesi gibi alt görevler paralel veya bağımsız kalite kontrol olarak çalıştırılabilir.",
      "Skills tekrar kullanılabilir uzmanlık paketleridir. API tasarım standardı, ADR üretimi, threat modeling, test stratejisi, release package veya evidence üretimi farklı repolarda aynı kalite standardıyla kullanılabilir.",
      "Commands delivery akışının kontrollü giriş noktalarıdır. /start-work, /run-work, /assess-readiness, /run-quality-gates ve /promote-work gibi komutlar geliştiricinin neyi, hangi fazda ve hangi kalite kapısıyla çalıştırdığını görünür kılar.",
      "Hooks kritik anlarda otomatik kontrol, kayıt veya guardrail çalıştırır. Test sonrası evidence yazma, MR öncesi policy check, quality gate sonucu kaydı veya promotion öncesi sign-off kontrolü hook ile standartlaştırılabilir.",
      "MCP kurumsal sistemlerle güvenli bağlam köprüsüdür. Jira, SCM, CI/CD, API Catalog, Mailbox, Governance ve Environment sistemlerinden bağlam alınır; agent’lar sınırsız erişim yerine yönetilen entegrasyon kanalları üzerinden çalışır.",
      "Bu yapı birlikte çalıştığında agentic coding yalnızca kod üretimi değil; readiness, analiz, tasarım, güvenlik, test, MR, quality gate, promotion, sign-off ve evidence üretimini kapsayan kontrollü bir delivery akışına dönüşür.",
    ],
    code: {
      language: "text",
      value: "Command\n  ↓\nAgent\n  ↓\nSubagent\n  ↓\nSkill\n  ↓\nHook\n  ↓\nMCP Context\n  ↓\nQuality Gate + Evidence Ledger",
    },
  },
  {
    id: "repo-entegrasyon",
    title: "Repo Entegrasyon Modeli",
    body: [
      "DeliveryFlow AI mevcut Git repolarına hafif bir adapter katmanı olarak eklenir.",
      "Her uygulama reposu kendi domain, build, test, policy ve environment bilgisini taşır; ortak standartlar merkezi DeliveryFlow Core üzerinden gelir.",
    ],
    code: { language: "text", value: repoStructure },
  },
  {
    id: "runtime",
    title: "OpenCode Runtime Yapısı",
    body: [
      "OpenCode Runtime agent, subagent, command ve skill yürütme ortamı olarak konumlanır.",
      "Repo-local command tanımları DeliveryFlow Core’dan gelen merkezi standartlarla birlikte çalışır.",
    ],
    code: { language: "text", value: "opencode\n/list-work\n/start-work BANK-PAY-3312\n/run-work BANK-PAY-3312" },
  },
  {
    id: "cli-akisi",
    title: "IDE Yakınında CLI Akışı",
    body: [
      "DeliveryFlow AI kod değiştirme, test çalıştırma, branch üretme, MR hazırlama ve evidence toplama gibi kritik adımları geliştiricinin gerçek repo context’ine yakın tutar.",
      "Harici bir web uygulaması görünürlük ve raporlama için faydalı olabilir; ancak execution context repo kökü, IDE, terminal, build/test komutları ve SCM akışıdır.",
      "Bu yaklaşım platform bağımlılığını azaltır, adapter modelini güçlendirir ve agent tool erişimini daha net sınırlandırır.",
    ],
    code: {
      language: "text",
      value: "IDE / Terminal\n  ↓\nOpenCode Runtime\n  ↓\nDeliveryFlow Commands\n  ↓\nRepo Adapter (.deliveryflow)\n  ↓\nDeliveryFlow Core + MCP Bridge\n  ↓\nQuality Gate + Evidence Ledger",
    },
  },
  {
    id: "agent-persona",
    title: "Agent ve Persona Modeli",
    body: [
      "Product Owner, Business Analyst, Solution Architect, Security Architect, Backend Engineer, QA Engineer, Judge Agent ve Release Manager gibi roller açık sorumluluk sınırlarıyla modellenir.",
      "Agent yetkileri role-based tool permission ile sınırlandırılır; örneğin Judge Agent kod değiştirmez, Backend Engineer PROD onayı vermez.",
    ],
  },
  {
    id: "skills",
    title: "Skills Yönetimi",
    body: [
      "Skills; API tasarımı, güvenlik analizi, test planı, release package veya evidence üretimi gibi tekrar kullanılabilir yetkinlik paketleridir.",
      "Merkezi yönetim sayesinde ekipler aynı kalite standardını farklı repolarda tekrar kullanabilir.",
    ],
  },
  {
    id: "commands",
    title: "Commands ve Workflow Kullanımı",
    body: [
      "Commands delivery akışının kontrollü giriş noktalarıdır. Automated Mode daha hızlı uçtan uca çalışırken Controlled Mode her fazı ayrı kalite kapısı olarak ele alır.",
    ],
    code: { language: "text", value: controlledCommands },
  },
  {
    id: "mcp",
    title: "MCP Entegrasyonları",
    body: [
      "MCP Bridge; Jira, SCM, CI/CD, API Catalog, Mailbox, Governance ve Environment sistemlerinden bağlam alır.",
      "Agent’lar kurumsal sistemlere doğrudan ve sınırsız erişmez; izinler ve audit trail yönetilebilir olmalıdır.",
    ],
  },
  {
    id: "quality",
    title: "Quality Gate ve Judge Mekanizması",
    body: [
      "Quality Gate katmanı test, security, API, architecture ve release kontrollerini işletir.",
      "Judge Agent bağımsız kalite kapısıdır ve PASS, PASS_WITH_ACTIONS veya BLOCKED kararı üretir.",
    ],
  },
  {
    id: "evidence",
    title: "Evidence Ledger",
    body: [
      "Evidence Ledger kararları, test sonuçlarını, sign-off’ları, promotion kayıtlarını ve handoff’ları denetlenebilir kayıt haline getirir.",
      "Test geçti veya security review tamamlandı gibi iddialar kanıtla desteklenmeden kabul edilmez.",
    ],
  },
  {
    id: "promotion",
    title: "UAT/PROD Promotion ve Sign-off Modeli",
    body: [
      "INT deploy merge sonrası otomatik kabul edilebilir. UAT ve PROD geçişleri explicit promotion ve human sign-off gerektirir.",
      "PROD promotion release evidence, güvenlik uygunluğu ve gerekli onaylar tamamlanmadan ilerlememelidir.",
    ],
    code: { language: "text", value: "/advance-work BANK-PAY-3312 UAT\n/advance-work BANK-PAY-3312 PROD" },
  },
  {
    id: "security",
    title: "Güvenlik ve Yetki Modeli",
    body: [
      "Secret, token, service account key veya MCP credential bilgileri repo içinde tutulmaz.",
      "Agent yetkileri role-based sınırlandırılır ve kritik adımlar human-in-the-loop sign-off ile yönetilir.",
    ],
  },
  {
    id: "onboarding",
    title: "Repo Onboarding Rehberi",
    body: [
      "Repo adaptasyonu init, validate ve runtime başlatma adımlarından oluşur.",
      "Profil dosyası uygulamanın domain, build, test, promotion ve governance bilgisini tanımlar.",
    ],
    code: {
      language: "bash",
      value: "deliveryflow init --profile spring-boot-api --domain payments\ndeliveryflow validate\nopencode\n\n/list-work\n/start-work BANK-PAY-3312\n/run-work BANK-PAY-3312\n\n" + repoProfile,
    },
  },
  {
    id: "best-practices",
    title: "Best Practices",
    body: [
      "Repo-local adapter, centrally governed framework: uygulama reposu kendi bağlamını taşır, standartlar DeliveryFlow Core’dan gelir.",
      "Framework’ün tamamı her repoya kopyalanmamalıdır; repo içinde yalnızca uygulamaya özel adaptasyon bulunmalıdır.",
      "Secret’ları repo içinde tutma. Evidence üretmeden kalite, güvenlik veya test iddiası üretme.",
      "PROD promotion kontrolsüz olmamalı; explicit promotion, human sign-off ve release evidence ile ilerlemelidir.",
      "Agent yetkilerini rol bazlı sınırla: Business Analyst kod yazmamalı, Judge Agent kod değiştirmemeli, Release Manager security sign-off vermemelidir.",
    ],
    code: { language: "text", value: coreStructure },
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    body: [
      "Path bulunamıyor: OpenCode repo root’tan başlatılmalı ve path’ler repo-relative olmalıdır.",
      "UAT promotion sign-off bekliyor: /collect-signoffs ve /complete-promotion komutlarını ya da kısa yol olarak /advance-work komutunu kullanın.",
      "Quality gate BLOCKED döndü: gate evidence dosyasını inceleyin, eksikleri tamamlayın ve gate’i tekrar çalıştırın.",
      "Business clarification eksik: /ask-business ve /apply-business-reply ile belirsizliği kapatın.",
      "Evidence Ledger boş veya eksik: /show-evidence ile kayıtları kontrol edin, eksik fazı yeniden çalıştırın.",
    ],
    code: {
      language: "text",
      value: "Doğru:\nenterprise-sources/policies/api-design-guideline.md\n\nYanlış:\n/Users/example/project/enterprise-sources/policies/api-design-guideline.md\n\n" + automatedCommands,
    },
  },
];
