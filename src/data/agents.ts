import {
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  FileSearch,
  GitPullRequest,
  Landmark,
  MailQuestion,
  Scale,
  ShieldCheck,
  TestTubeDiagonal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Agent = {
  name: string;
  role: string;
  description: string;
  responsibility: string;
  icon: LucideIcon;
};

export const agents: Agent[] = [
  {
    name: "Product Owner Agent",
    role: "İş hedefi ve kapsam",
    description: "İş isteğinin hedefini, önceliğini ve kapsamını netleştirir.",
    responsibility: "Value, scope ve acceptance beklentisini teslimat akışına taşır.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Business Analyst Agent",
    role: "Acceptance criteria ve iş kuralları",
    description: "İş kurallarını, açık noktaları ve bağımlılıkları analiz eder.",
    responsibility: "Readiness gate için net, izlenebilir analiz çıktısı üretir.",
    icon: FileSearch,
  },
  {
    name: "Business Mail Agent",
    role: "Belirsizlik yönetimi",
    description: "İş birimine sorulacak mail taslaklarını hazırlar ve cevaba göre analizi günceller.",
    responsibility: "Eksik bilgiyle geliştirmeye geçilmesini engeller.",
    icon: MailQuestion,
  },
  {
    name: "Solution Architect Agent",
    role: "Mimari tasarım ve ADR",
    description: "Sistem etkilerini, C4 görünümünü ve mimari kararları üretir.",
    responsibility: "Kararları ADR ve evidence formatında kayıt altına alır.",
    icon: Landmark,
  },
  {
    name: "Security Architect Agent",
    role: "Güvenlik ve governance",
    description: "Authorization, audit, data classification ve threat model etkilerini değerlendirir.",
    responsibility: "Security Evidence Pack ve policy binding kontrollerini hazırlar.",
    icon: ShieldCheck,
  },
  {
    name: "Backend Engineer Agent",
    role: "Kod ve unit test",
    description: "Kod değişikliğini, testleri ve teknik dokümantasyon parçalarını üretir.",
    responsibility: "Repo profilindeki build ve test kurallarına göre ilerler.",
    icon: Code2,
  },
  {
    name: "API Reviewer Agent",
    role: "API quality gate",
    description: "API guideline, backward compatibility ve error model kontrollerini yapar.",
    responsibility: "Contract kırılımı ve governance uyumsuzluklarını görünür kılar.",
    icon: GitPullRequest,
  },
  {
    name: "QA Engineer Agent",
    role: "Test stratejisi",
    description: "Regression kapsamını, test kanıtlarını ve risk bazlı test planını hazırlar.",
    responsibility: "Test iddialarını evidence ledger ile destekler.",
    icon: TestTubeDiagonal,
  },
  {
    name: "Judge Agent",
    role: "Bağımsız kalite kapısı",
    description: "Çıktıları PASS, PASS_WITH_ACTIONS veya BLOCKED kararıyla değerlendirir.",
    responsibility: "Kod değiştirmez; kalite kararı ve aksiyon listesi üretir.",
    icon: Scale,
  },
  {
    name: "Release Manager Agent",
    role: "Release ve promotion",
    description: "Release package, UAT/PROD sign-off ve deployment evidence süreçlerini yönetir.",
    responsibility: "INT otomasyonunu UAT/PROD explicit sign-off modelinden ayırır.",
    icon: BadgeCheck,
  },
];
