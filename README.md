# Başkan Havlu Tekstil — baskanhavlu.com

Premium Türk havlu ve tekstil tedarikçisi için Next.js 15 tabanlı dijital platform.

## Teknoloji Yığını

- **Framework:** Next.js 16 (App Router)
- **Dil:** TypeScript (strict mode)
- **Stil:** Tailwind CSS v4 + Shadcn UI
- **Animasyon:** Framer Motion
- **Deploy:** Netlify
- **E-posta:** Resend
- **Analitik:** GA4 (çerez onayı sonrası koşullu yüklenir)

## Başlangıç

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Proje Yapısı

```
app/          → Next.js App Router sayfaları
components/   → Atom / Molecule / Organism bileşenler
lib/          → Yardımcı fonksiyonlar, servisler, config
content/      → Ürün, SSS, blog JSON içerikleri
public/       → Statik dosyalar (llms.txt, ai.txt)
messages/     → i18n TR/EN çeviri dosyaları
```

## Spec Dokümanları

Tüm mimari, tasarım ve görev kararları `.kiro/specs/baskan-havlu-tekstil-platform/` altındadır:

- `requirements.md` — 50 gereksinim (Phase 1–9)
- `design.md` — UI/UX, SEO, GEO, teknik mimari
- `tasks.md` — ~90 atomik görev, öncelik bazlı

## İletişim

**Başkan Havlu Tekstil**
Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26, Osmangazi / Bursa
+90 507 342 06 61 | tekstil@baskanhavlu.com
