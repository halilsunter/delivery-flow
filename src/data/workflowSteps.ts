export type WorkflowStep = {
  title: string;
  description: string;
};

export const workflowSteps: WorkflowStep[] = [
  { title: "Work Intake", description: "Jira veya work tracker üzerinden çalışmaya hazır iş isteği alınır." },
  { title: "Feature Branch", description: "Repo profilindeki branch standardına göre izole geliştirme alanı açılır." },
  { title: "Readiness Gate", description: "Acceptance criteria, risk, bağımlılık ve eksik bilgi kontrol edilir." },
  { title: "Context Pack", description: "Kod, policy, API, geçmiş karar ve sistem bağlamı bir araya getirilir." },
  { title: "Analysis", description: "İş kuralları, etki alanı, açık noktalar ve çözüm kapsamı netleştirilir." },
  { title: "Business Clarification", description: "Belirsiz konular iş birimine sorulur ve gelen cevap evidence olarak işlenir." },
  { title: "Architecture & ADR", description: "Mimari yaklaşım, entegrasyon etkisi ve kritik kararlar ADR olarak kaydedilir." },
  { title: "Security Evidence", description: "Authorization, audit, data classification ve threat model etkileri belgelenir." },
  { title: "Implementation & Unit Test", description: "Kod değişikliği ve unit testler repo-local komutlarla üretilir." },
  { title: "Merge Request", description: "MR açıklaması, değişiklik özeti, riskler ve kanıt bağlantıları hazırlanır." },
  { title: "CI/CD Quality Gates", description: "Build, test, API, security ve policy gate sonuçları değerlendirilir." },
  { title: "Judge Gate", description: "Bağımsız kalite kontrolü PASS, PASS_WITH_ACTIONS veya BLOCKED sonucu üretir." },
  { title: "Release Package", description: "Release kapsamı, değişiklik etkisi ve deployment notları paketlenir." },
  { title: "UAT Promotion & Sign-off", description: "UAT geçişi explicit promotion ve ilgili ekip sign-off’larıyla ilerler." },
  { title: "PROD Promotion & Sign-off", description: "PROD geçişi human sign-off ve release evidence tamamlanmadan ilerlemez." },
  { title: "Evidence Ledger", description: "Kararlar, testler, handoff’lar, onaylar ve ortam geçişleri kayıt altına alınır." },
  { title: "Executive Brief", description: "Yönetim için hız, risk, kalite ve release durumu özetlenir." },
];
