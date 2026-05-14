# DeliveryFlow AI

Enterprise SDLC için premium, profesyonel ve kurumsal görünümlü bir **landing page + dokümantasyon web uygulaması**.

DeliveryFlow AI, iş isteğinden production’a kadar yazılım teslimatını persona bazlı AI agent’lar, reusable skills, MCP tabanlı kurumsal entegrasyonlar, quality gate’ler, human sign-off mekanizmaları ve evidence ledger ile yöneten bir **Agentic Delivery Framework** yaklaşımını anlatır.

> Tekil AI asistanlarından, kurumsal agentic delivery ekiplerine.

## Amaç

Bu uygulama DeliveryFlow AI yaklaşımını şirket içinde tanıtmak, teknik ekiplerin entegrasyon modelini anlamasını sağlamak ve yönetişim/güvenlik/evidence temelli agentic delivery modelini görünür kılmak için hazırlanmıştır.

Uygulama özellikle şu mesajları öne çıkarır:

- DeliveryFlow AI yalnızca bir coding assistant değildir.
- AI agent’lar SDLC personaları olarak modellenir.
- İş isteğinden production’a kadar süreç kontrollü ve izlenebilir şekilde ilerler.
- Mevcut Git repolarına hafif bir adapter katmanı olarak entegre edilir.
- Ortak standartlar merkezi DeliveryFlow Core üzerinden yönetilir.
- MCP ile Jira, SCM, CI/CD, API Catalog, Mailbox, Governance ve Environment sistemleriyle entegrasyon sağlanır.
- Quality Gate ve Evidence Ledger sayesinde kritik iddialar kanıta bağlanır.
- INT deploy merge sonrası otomatik olabilir; UAT ve PROD explicit promotion ve sign-off ile ilerler.

## Teknoloji

- React
- TypeScript
- Vite
- Tailwind CSS
- lucide-react
- framer-motion

Backend veya veritabanı yoktur. Tüm içerik statik TypeScript data dosyalarından gelir.

## Local Çalıştırma

Bağımlılıkları kurun:

```bash
npm install
```

Development server başlatın:

```bash
npm run dev
```

Production build alın:

```bash
npm run build
```

Build çıktısını local preview etmek için:

```bash
npm run preview
```

## NPM Scriptleri

```bash
npm run dev
npm run build
npm run preview
```

`npm run build`, önce TypeScript build kontrolü yapar, ardından Vite production bundle üretir.

## Proje Yapısı

```text
delivery-flow/
  README.md
  package.json
  vite.config.ts
  tailwind.config.js
  tsconfig.json

  skills/
    premium-landing-page/
      SKILL.md

  src/
    app/
      App.tsx

    components/
      docs/
      landing/
      layout/
      ui/

    data/
      agents.ts
      commands.ts
      docs.ts
      integrations.ts
      repoTemplates.ts
      workflowSteps.ts

    styles/
      globals.css

    main.tsx
```

## Ana Bölümler

Uygulama tek sayfalık ama çok bölümlü bir landing page olarak tasarlanmıştır.

- Hero
- Enterprise Delivery Control Plane
- Neden DeliveryFlow AI?
- Agentic Delivery Framework Nedir?
- Agentic Coding Framework
- Operating Model
- Persona Bazlı Agent Ekibi
- Uçtan Uca Delivery Flow
- MCP ile Kurumsal Entegrasyonlar
- Git Repo Entegrasyon Modeli
- IDE Yakınında CLI Akışı
- Controlled ve Automated Kullanım Modları
- Governance, Security ve Audit
- Mimari Bileşenler
- Kurumsal Değer Önerisi
- Dokümantasyon
- Call to Action

## Dokümantasyon Alanı

Landing page içinde ayrı bir dokümantasyon bölümü vardır. Bu bölüm sol menülü bir layout ile çalışır ve içerikler `src/data/docs.ts` dosyasından gelir.

Dokümantasyon başlıkları şunları kapsar:

- DeliveryFlow AI Nedir?
- Agentic Delivery Framework Yaklaşımı
- Agentic Coding Framework Bileşenleri
- Repo Entegrasyon Modeli
- OpenCode Runtime Yapısı
- IDE Yakınında CLI Akışı
- Agent ve Persona Modeli
- Skills Yönetimi
- Commands ve Workflow Kullanımı
- MCP Entegrasyonları
- Quality Gate ve Judge Mekanizması
- Evidence Ledger
- UAT/PROD Promotion ve Sign-off Modeli
- Güvenlik ve Yetki Modeli
- Repo Onboarding Rehberi
- Best Practices
- Troubleshooting

## Tasarım Yaklaşımı

Tasarım premium, modern ve kurumsal bir ürün tanıtım sitesi hissi verecek şekilde kurgulanmıştır.

Öne çıkan tasarım kararları:

- Açık zemin üzerinde katmanlı ambient background
- Teal, amber, cobalt, cyan, champagne ve koyu slate tonları
- Kurumsal ama etkileyici gradient kullanımı
- Glass, glow ve soft shadow efektleri
- Repo-native SVG/CSS/React görseller
- Responsive grid ve kart yapıları
- Kod bloklarında copy button
- Smooth scroll navigasyon
- Landing page içinde dokümantasyon deneyimi

## İçerik Yönetimi

İçerikler component içine gömülü olmaktan çok data dosyaları üzerinden yönetilir.

Önemli data dosyaları:

- `src/data/agents.ts`: Persona bazlı agent listesi
- `src/data/workflowSteps.ts`: Uçtan uca delivery timeline adımları
- `src/data/integrations.ts`: MCP entegrasyon sistemleri
- `src/data/commands.ts`: Automated ve Controlled Mode komut akışları
- `src/data/repoTemplates.ts`: Repo adapter ve DeliveryFlow Core örnek yapıları
- `src/data/docs.ts`: Dokümantasyon makaleleri

## DeliveryFlow AI Mesajı

DeliveryFlow AI, AI destekli geliştirmeyi tekil prompt denemelerinden çıkarıp Git repo seviyesinde yönetilebilir bir enterprise delivery standardına dönüştürür.

Temel model:

```text
IDE / Terminal
  ↓
OpenCode Runtime
  ↓
DeliveryFlow Commands
  ↓
Repo Adapter (.deliveryflow)
  ↓
DeliveryFlow Core + MCP Bridge
  ↓
Quality Gate + Evidence Ledger
```

## Repo Entegrasyon Modeli

DeliveryFlow AI mevcut Git repolarına hafif bir adapter katmanı olarak eklenir.

Best practice:

```text
Repo-local adapter, centrally governed framework.
```

Her uygulama reposu kendi domain, build, test, policy ve environment bilgisini `.deliveryflow` profiliyle tanımlar. Ortak agent, skill, command, policy ve workflow standartları merkezi DeliveryFlow Core üzerinden yönetilir.

## Git Ignore Politikası

Projede `.gitignore` dosyası vardır ve aşağıdaki dosya/klasörleri dışarıda bırakır:

- `node_modules/`
- `dist/`
- build/cache çıktıları
- coverage çıktıları
- `.env` dosyaları
- log dosyaları
- OS/editor dosyaları
- hosting cache klasörleri

Bu nedenle remote repository’ye yalnızca kaynak kod, konfigürasyon ve dokümantasyon dosyaları gönderilir.

## Build Doğrulama

Son doğrulama komutu:

```bash
npm run build
```

Beklenen sonuç:

```text
tsc -b && vite build
✓ built
```

## Deployment

Bu uygulama statik frontend uygulamasıdır. `npm run build` sonrası oluşan `dist/` klasörü aşağıdaki platformlarda host edilebilir:

- GitHub Pages
- Vercel
- Netlify
- Azure Static Web Apps
- Nginx veya herhangi bir static hosting

## Notlar

- Uygulama tamamen Türkçe hazırlanmıştır.
- Teknik terimler gerektiğinde İngilizce korunmuştur.
- Backend entegrasyonu yoktur.
- Gerçek MCP, Jira, SCM veya CI/CD bağlantısı içermez; bu landing page yaklaşımı anlatan statik bir ürün/tanıtım uygulamasıdır.
