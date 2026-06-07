# Implementation Plan: Başkan Havlu Tekstil Platform

## Overview

Başkan Havlu Tekstil dijital platformunun Next.js 15 App Router tabanlı tam implementasyon planı. 9 faz boyunca tasarlanan mimari bu görev listesiyle uygulamaya geçirilir. Görevler P0 (kritik) → P3 (opsiyonel optimizasyon) öncelik sırasına göre organize edilmiştir.

**Toplam Görev Sayısı:** ~90 atomik görev
**Tahmini Süre:** P0–P1: 5–7 gün | P2: 3–5 gün | P3: devam eden
**Deploy Hedefi:** P0 + P1 tamamlandıktan sonra canlı yayın

## Tasks

## P0 — Kritik (Deploy Öncesi Zorunlu)

### 1. Proje İskeleti ve Temel Yapılandırma
- [x] 1.1 Next.js 15 App Router projesi oluştur (`npx create-next-app@latest --typescript --tailwind --app`)
  - Requires: -
- [x] 1.2 TypeScript strict mode `tsconfig.json` yapılandır (`"strict": true`)
  - Requires: 1.1
- [x] 1.3 ESLint + Prettier yapılandır (`.eslintrc.json`, `.prettierrc`)
  - Requires: 1.1
- [x] 1.4 Shadcn UI kur (`npx shadcn@latest init`) ve temel bileşenleri ekle
  - Requires: 1.1
- [x] 1.5 Framer Motion kur ve `dynamic(() => import('framer-motion'), { ssr: false })` wrapper bileşeni oluştur
  - Requires: 1.1
- [x] 1.6 Lucide Icons kur (`npm install lucide-react`)
  - Requires: 1.1
- [x] 1.7 React Hook Form + Zod kur (`npm install react-hook-form zod @hookform/resolvers`)
  - Requires: 1.1
- [x] 1.8 `lib/config/site.ts` oluştur — tüm firma sabitlerini tanımla
  - Adres: Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26, Osmangazi / Bursa
  - Telefon: +90 507 342 06 61 | WA: https://wa.me/905073420661
  - E-posta: tekstil@baskanhavlu.com | Kuruluş: 1981
  - Requires: 1.1
- [x] 1.9 `.env.local` şablonu oluştur (tüm zorunlu değişkenler boş ama listelenmiş)
  - Requires: 1.1

### 2. Design Token ve Stil Sistemi
- [x] 2.1 `tailwind.config.ts` — renk tokenları tanımla (orange-500: #E87722, beige, charcoal paleti)
  - Requires: 1.1
- [x] 2.2 `app/globals.css` — CSS custom properties (--color-orange, --space-*, --radius-*)
  - Requires: 2.1
- [x] 2.3 `next/font` ile Plus Jakarta Sans ve DM Serif Display fontlarını kur
  - Requires: 1.1
- [x] 2.4 Tailwind tipografi ölçeği yapılandır (Display/H1–H4/Body LG/Body/Caption/Label)
  - Requires: 2.1

### 3. Temel Atom Bileşenler
- [x] 3.1 `Button` bileşeni — 5 varyant (primary/secondary/ghost/whatsapp/destructive), 3 boyut, tüm durumlar
  - Requires: 2.1
- [x] 3.2 `Badge` bileşeni — 6 varyant (default/premium/new/export/hotel/certificate)
  - Requires: 2.1
- [x] 3.3 `Input` bileşeni — focus/error/success durumları, 48px yükseklik
  - Requires: 2.1
- [x] 3.4 `Select` bileşeni — Shadcn Select üzerine marka stili
  - Requires: 2.1, 3.3
- [x] 3.5 `Textarea` bileşeni — min 120px, aynı stil sistemi
  - Requires: 2.1, 3.3
- [x] 3.6 `FormGroup` bileşeni — label + field + error mesajı sarmalayıcı
  - Requires: 3.3

### 4. Güvenlik ve next.config.ts
- [x] 4.1 `next.config.ts` — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy güvenlik başlıkları
  - Requires: 1.1
- [x] 4.2 `next.config.ts` — 301 yönlendirmeler (`/urunler` → `/new-collection`, `/hakkimizda` → `/about`, `/iletisim` → `/contact`)
  - Requires: 4.1
- [x] 4.3 `next.config.ts` — AVIF + WebP image formatları, minimum cacheTTL
  - Requires: 4.1
- [x] 4.4 `next.config.ts` — `optimizePackageImports` (lucide-react, framer-motion, @radix-ui)
  - Requires: 4.1
- [x] 4.5 `middleware.ts` — temel bot filtreleme (user-agent) + i18n yönlendirme hazırlığı
  - Requires: 1.1

### 5. SEO Temel Altyapı
- [x] 5.1 `lib/utils/metadata.ts` — `generatePageMetadata()` fonksiyonu (title, description, OG, Twitter Card, canonical, hreflang)
  - Requires: 1.8
- [x] 5.2 `app/robots.ts` — robots.txt (/api/, /_next/ engelleme, GPTBot/Google-Extended izin, sitemap referansı)
  - Requires: 1.1
- [x] 5.3 `app/sitemap.ts` — otomatik sitemap.xml (tüm sayfalar, lastmod, priority, changefreq)
  - Requires: 1.1
- [x] 5.4 `app/image-sitemap.ts` — görsel sitemap (ürün görselleri)
  - Requires: 1.1
- [x] 5.5 `/public/llms.txt` — gerçek firma verileriyle AI kılavuz dosyası
  - Requires: 1.8
- [x] 5.6 `/public/ai.txt` — AI içerik izin ve entity dosyası
  - Requires: 1.8
- [x] 5.7 `app/not-found.tsx` — özel 404 sayfası (ana sayfa + ürünler + iletişim bağlantıları)
  - Requires: 1.1

### 6. Layout ve Navigasyon
- [x] 6.1 `app/[locale]/layout.tsx` — root layout (Navbar, Footer, StickyWhatsApp, CookieConsent)
  - Requires: 3.1, 5.1
- [x] 6.2 `Navbar` organism — logo, nav linkleri, dil değiştirici, "Teklif Al" CTA; scroll'da mat arka plan
  - Requires: 3.1, 6.1
- [x] 6.3 `Navbar` mobil hamburger menü — tam ekran overlay, animasyon
  - Requires: 6.2
- [x] 6.4 `Footer` organism — 4 sütun ızgara; NAP bilgileri, linkler, sosyal medya
  - Requires: 1.8, 3.1
- [x] 6.5 `StickyWhatsApp` bileşeni — sağ alt sabit, `https://wa.me/905073420661`, ön mesaj
  - Requires: 1.8, 3.1

### 7. Form ve Lead API Sistemi
- [x] 7.1 `lib/validations/lead.schema.ts` — Zod şemaları (quote, sample, bulk, export, contact)
  - Requires: 1.7
- [x] 7.2 Resend kurulumu (`npm install resend`) + domain doğrulaması (baskanhavlu.com DNS kaydı)
  - Requires: 1.1
- [x] 7.3 `lib/services/email.service.ts` — Resend adaptörü (tekstil@baskanhavlu.com hedef)
  - Requires: 7.2
- [x] 7.4 Upstash Redis kurulumu (`npm install @upstash/redis`) + `lib/utils/rate-limit.ts`
  - Requires: 1.1
- [x] 7.5 `app/api/lead/quote/route.ts` — Edge Runtime, Zod doğrulama, honeypot, rate limit, Resend
  - Requires: 7.1, 7.3, 7.4
- [x] 7.6 `app/api/lead/sample/route.ts` — aynı yapı
  - Requires: 7.5
- [x] 7.7 `app/api/lead/export/route.ts` — aynı yapı
  - Requires: 7.5
- [x] 7.8 `app/api/contact/route.ts` — aynı yapı
  - Requires: 7.5
- [x] 7.9 `ContactForm` organism — React Hook Form + Zod + form gönderim akışı + başarı/hata durumları
  - Requires: 3.3, 3.6, 7.1
- [x] 7.10 Form başarısında `/tesekkurler/` yönlendirme veya inline başarı mesajı
  - Requires: 7.9

### 8. GDPR Çerez Sistemi
- [x] 8.1 `components/providers/CookieConsentProvider.tsx` — context + localStorage yönetimi
  - Requires: 1.1
- [x] 8.2 `CookieConsentBanner` bileşeni — "Kabul Et" + "Yalnızca Zorunlu" butonları
  - Requires: 3.1, 8.1
- [x] 8.3 GDPR banner root layout'a entegre et
  - Requires: 6.1, 8.2
- [x] 8.4 Koşullu GA4 yükleme (consent = analytics ise yükle)
  - Requires: 8.1

---

## P1 — Yüksek Öncelik (İlk Hafta)

### 9. Schema Markup Bileşenleri
- [x] 9.1 `components/schema/OrganizationSchema.tsx` — gerçek NAP verileri (site.ts'den)
  - Requires: 1.8
- [x] 9.2 `components/schema/LocalBusinessSchema.tsx` — açılış saatleri, geo koordinat
  - Requires: 9.1
- [x] 9.3 `components/schema/WebSiteSchema.tsx` — SearchAction (site içi arama varsa)
  - Requires: 1.8
- [x] 9.4 `components/schema/ProductSchema.tsx`
  - Requires: 1.8
- [x] 9.5 `components/schema/FAQSchema.tsx`
  - Requires: 1.8
- [x] 9.6 `components/schema/BreadcrumbSchema.tsx`
  - Requires: 1.8
- [x] 9.7 `components/schema/ReviewSchema.tsx`
  - Requires: 1.8

### 10. Ana Sayfa
- [x] 10.1 `HeroSection` — H1 başlık, CTA çifti (Teklif Al + Koleksiyonu Gör), güven sinyalleri (1981, Arap ülkeleri, Yunanistan)
  - Requires: 3.1, 6.1
- [x] 10.2 `TrustBar` — partner/müşteri logoları yatay şerit
  - Requires: 6.1
- [x] 10.3 `ValueProposition` — 6 özellik kartı (1981 kuruluş, esnek MOQ, özel üretim vb.)
  - Requires: 3.1
- [x] 10.4 `ProductCategories` — asimetrik ızgara, 6 kategori kartı, görsel + CTA
  - Requires: 3.1
- [x] 10.5 `WhyUsSection` — dürüst 6 kart (sayaç YOK — iş modeline uygun)
  - Requires: 3.1
- [x] 10.6 `FactoryShowcase` — 2 sütun, metin + fabrika fotoğraf kolajı
  - Requires: 3.1
- [x] 10.7 `TestimonialCarousel` — 5s otomatik, dokunma desteği
  - Requires: 3.1
- [x] 10.8 `FAQPreview` — 6 soru, akordeon, "Tüm SSS" linki
  - Requires: 3.1
- [x] 10.9 `CTABand` — turuncu arka plan, "Teklif Al" + "WhatsApp" butonları
  - Requires: 3.1
- [x] 10.10 Ana sayfa metadata (generateMetadata), Organization + LocalBusiness + WebSite Schema
  - Requires: 5.1, 9.1, 9.2, 9.3

### 11. Ürün Sistemi
- [x] 11.1 `content/products/` — 6 kategori JSON verisi (el, yüz, banyo, kafa, ayak havlusu, promosyon)
  - Requires: 1.8
- [x] 11.2 `ProductCard` molecule — görsel, ad, kullanım alanı, özelleştirme, "Teklif İste" CTA
  - Requires: 3.1
- [x] 11.3 `QuickFacts` bileşeni — kategori, materyal, MOQ (dinamik), teslimat notu
  - Requires: 3.1
- [x] 11.4 `/new-collection/` sayfa — filtre sidebar + ProductCard ızgarası (ISR r:3600)
  - Requires: 11.1, 11.2, 9.4
- [x] 11.5 `/new-collection/[slug]/` sayfa — görsel galeri + ürün bilgisi + CTA + ImageObject Schema
  - Requires: 11.1, 11.2, 9.4
- [x] 11.6 Filtre bileşeni — kategori, kullanım alanı (URL parametresi ile, kanonik yönetimi dahil)
  - Requires: 11.4

### 12. Hakkımızda Sayfası
- [x] 12.1 `/about/` sayfa — hero, firma hakkında (1981, fason model dürüst tanım)
  - Requires: 6.1, 5.1
- [x] 12.2 `ProcessStep` bileşeni + üretim süreci bölümü (5 adım, yatay/dikey zaman çizelgesi)
  - Requires: 3.1
- [x] 12.3 İhracat hizmetleri bölümü — Arap Ülkeleri, Yunanistan
  - Requires: 12.1
- [x] 12.4 Özel üretim / Private Label bölümü
  - Requires: 12.1
- [x] 12.5 `FAQItem` bileşeni + tam SSS listesi (55 soru, 10 kategori, akordeon)
  - Requires: 3.1
- [x] 12.6 `content/faq/` — JSON SSS verisi (CONV-3'teki 55 soru)
  - Requires: 1.1
- [x] 12.7 Sertifikalar bölümü — "Henüz doğrulanmamış" notu ile placeholder yapı
  - Requires: 12.1
- [x] 12.8 Referanslar bölümü — TestimonialCard ızgarası (gerçek veri gelince dolacak)
  - Requires: 3.1
- [x] 12.9 `/about/` metadata + Organization + Brand + FAQPage Schema
  - Requires: 5.1, 9.1, 9.5

### 13. İletişim Sayfası
- [x] 13.1 `/contact/` sayfa — iki sütun layout (form sol, bilgi + harita sağ)
  - Requires: 7.9, 6.1
- [x] 13.2 WhatsApp öncelikli kart — yeşil kart, +90 507 342 06 61, ön mesajlı link
  - Requires: 1.8
- [x] 13.3 NAP bilgi bloku — adres, telefon (`tel:` link), e-posta (`mailto:` link), çalışma saatleri
  - Requires: 1.8
- [x] 13.4 Statik harita görseli veya Google Maps embed (GDPR uyumlu — onay sonrası yükle)
  - Requires: 8.1
- [x] 13.5 `/contact/` metadata + LocalBusiness + ContactPage Schema
  - Requires: 5.1, 9.2

### 14. Öncelikli 4 Landing Sayfa
- [x] 14.1 `/havlu-ureticisi/` — AITA yapısı, FAQPage Schema, hedef: "havlu tedarikçisi bursa"
  - Requires: 7.9, 9.5, 5.1
- [x] 14.2 `/toptan-havlu/` — AITA yapısı, FAQPage Schema, hedef: "toptan havlu tedarikçisi"
  - Requires: 14.1
- [x] 14.3 `/otel-havlusu/` — AITA yapısı, FAQPage Schema, hedef: "otel havlusu tedarikçisi"
  - Requires: 14.1
- [x] 14.4 `/promosyon-havlu/` — AITA yapısı, FAQPage Schema, hedef: "promosyon havlu logolu"
  - Requires: 14.1
- [x] 14.5 Her landing sayfa için dahili bağlantı kontrolü (hub & spoke doğrulaması)
  - Requires: 14.1, 14.2, 14.3, 14.4

---

## P2 — Orta Öncelik (İkinci Hafta)

### 15. Kalan 7 Landing Sayfa
- [x] 15.1 `/bornoz-ureticisi/` — AITA yapısı, FAQPage Schema
  - Requires: 14.1
- [x] 15.2 `/toptan-bornoz/`
  - Requires: 14.1
- [x] 15.3 `/otel-bornozu/`
  - Requires: 14.1
- [x] 15.4 `/nakisli-havlu/`
  - Requires: 14.1
- [x] 15.5 `/turkish-towel-manufacturer/` — İngilizce AITA, ihracat alıcısı odaklı
  - Requires: 14.1
- [x] 15.6 `/bathrobe-manufacturer/` — İngilizce
  - Requires: 14.1
- [x] 15.7 `/wholesale-towel-supplier/` — İngilizce
  - Requires: 14.1

### 16. Blog Sistemi
- [x] 16.1 `app/[locale]/blog/page.tsx` — blog listesi (ISR r:1800), BreadcrumbList Schema
  - Requires: 6.1
- [x] 16.2 `app/[locale]/blog/[slug]/page.tsx` — makale sayfası, Article Schema, ilgili makaleler
  - Requires: 16.1
- [x] 16.3 `content/blog/` — MDX veya JSON içerik yapısı
  - Requires: 1.1
- [x] 16.4 İlk 10 blog makalesi içeriğini yaz ve yayınla (LAUNCH-6 listesi, Gün 8–28 arası)
  - Requires: 16.2, 16.3

### 17. Analytics ve Gözlemlenebilirlik
- [x] 17.1 GA4 entegrasyonu — `next/script` strategy="afterInteractive", GDPR koşullu
  - Requires: 8.1
- [x] 17.2 GA4 custom eventler: `form_submit`, `whatsapp_click`, `cta_click`, `product_view`
  - Requires: 17.1
- [x] 17.3 `/tesekkurler/` sayfası + GA4 `conversion` eventi
  - Requires: 17.1, 7.10
- [x] 17.4 Vercel Analytics + Speed Insights kurulumu (`@vercel/analytics`, `@vercel/speed-insights`)
  - Requires: 1.1
- [~] 17.5 Sentry kurulumu (`@sentry/nextjs`), source map CI adımı
  - Requires: 1.1
- [~] 17.6 Google Search Console doğrulama meta etiketi layout'a ekle
  - Requires: 6.1
- [~] 17.7 Bing Webmaster Tools doğrulama meta etiketi layout'a ekle
  - Requires: 6.1

### 18. GDPR Sayfaları
- [x] 18.1 `/gizlilik-politikasi/` sayfası — GDPR uyumlu içerik
  - Requires: 6.1
- [x] 18.2 `/cerez-politikasi/` sayfası — çerez kategorileri ve kullanım
  - Requires: 6.1
- [~] 18.3 Footer'a "Çerez Tercihleri" + "Gizlilik Politikası" + "Çerez Politikası" linkleri ekle
  - Requires: 6.4, 18.1, 18.2

### 19. Çok Dilli Destek
- [~] 19.1 `next-intl` kurulumu (`npm install next-intl`)
  - Requires: 1.1
- [~] 19.2 `messages/tr.json` — tüm Türkçe UI metinleri
  - Requires: 19.1
- [~] 19.3 `messages/en.json` — tüm İngilizce UI metinleri
  - Requires: 19.1
- [~] 19.4 Middleware i18n yönlendirme — tarayıcı dili tespiti, cookie tercihi
  - Requires: 4.5, 19.1
- [~] 19.5 Hreflang etiketleri tüm sayfalarda (TR/EN çifti)
  - Requires: 5.1

### 20. Performans Optimizasyonu
- [~] 20.1 Bundle analyzer kur ve ilk rapor üret (`npm install @next/bundle-analyzer`)
  - Requires: 1.1
- [~] 20.2 Tüm `<Image>` bileşenlerine `width`, `height`, `sizes` prop'larını ekle
  - Requires: 10.1
- [~] 20.3 Hero görseli `priority` + `fetchpriority="high"` ile optimize et
  - Requires: 10.1
- [~] 20.4 `preconnect` direktifleri layout'a ekle (Google Fonts, CDN)
  - Requires: 6.1
- [~] 20.5 Üçüncü taraf scriptlerin `strategy` değerlerini denetle (afterInteractive/lazyOnload)
  - Requires: 17.1

---

## P3 — Düşük Öncelik (Üçüncü Hafta ve Sonrası)

### 21. Gelişmiş Animasyonlar
- [~] 21.1 Sayfa geçiş animasyonları — Framer Motion `AnimatePresence` + layout
  - Requires: 1.5
- [~] 21.2 Scroll-triggered fade-in (useInView, opacity+y, stagger 80ms)
  - Requires: 1.5
- [~] 21.3 Kart hover efektleri — translateY(-4px) + shadow artışı
  - Requires: 3.1, 1.5
- [~] 21.4 `prefers-reduced-motion` desteği — tüm animasyonlar devre dışı
  - Requires: 21.1

### 22. CI/CD Pipeline
- [x] 22.1 GitHub Actions workflow — lint → type-check → npm audit → build
  - Requires: 1.3
- [~] 22.2 Lighthouse CI kurulumu (`lighthouserc.js`, 6 URL, 3 tekrar)
  - Requires: 22.1
- [~] 22.3 Linkinator — kırık bağlantı tarama CI adımı
  - Requires: 22.1
- [~] 22.4 Sentry release oluşturma + source map yükleme (deploy sonrası)
  - Requires: 17.5, 22.1

### 23. İndeksleme ve Büyüme Aktivasyonu
- [~] 23.1 Google Search Console property kur, sitemap.xml gönder
  - Requires: 5.3
- [~] 23.2 Bing Webmaster Tools kurulumu + sitemap gönder
  - Requires: 5.3
- [~] 23.3 IndexNow: 10 öncelikli URL için ilk manuel ping
  - Requires: 5.2
- [~] 23.4 Google Business Profile aç ve doğrula (fiziksel adres kartı)
  - Requires: 13.3
- [~] 23.5 5 tekstil/yerel dizine firma kaydı (Bursa rehberleri, Alibaba, Kompass)
  - Requires: 23.4
- [~] 23.6 Instagram biyografisine site linki ekle (baskanhavlu.com)
  - Requires: -

### 24. Chatbot ve CMS (Opsiyonel)
- [~] 24.1 Chatbot hook point bileşeni — env variable ile aktif/pasif
  - Requires: 6.1
- [~] 24.2 CMS adaptör katmanı — `lib/services/product.service.ts` (JSON/Sanity anahtarı)
  - Requires: 11.1
- [~] 24.3 Webhook tabanlı ISR revalidate (`app/api/revalidate/route.ts`)
  - Requires: 11.4

---

## Lansman Kontrol Listesi

### Teknik Hazırlık
- [~] domain baskanhavlu.com → Vercel DNS doğrulaması
- [~] SSL sertifikası aktif (Vercel otomatik Let's Encrypt)
- [~] robots.txt erişilebilir: `curl https://baskanhavlu.com/robots.txt`
- [~] sitemap.xml erişilebilir: `curl https://baskanhavlu.com/sitemap.xml`
- [~] llms.txt erişilebilir: `curl https://baskanhavlu.com/llms.txt`
- [~] 404 sayfası doğru çalışıyor: `/var-olmayan-sayfa` testi

### Dönüşüm Hazırlığı
- [~] WhatsApp tıklama testi: `https://wa.me/905073420661` açılıyor
- [~] Teklif formu gönderim testi → tekstil@baskanhavlu.com e-posta alıyor
- [~] Numune formu gönderim testi → e-posta alıyor
- [~] StickyWhatsApp her sayfada görünür
- [~] `/tesekkurler/` sayfası form sonrası açılıyor
- [~] GDPR banner ilk ziyarette görünüyor

### SEO Hazırlığı
- [~] Google Search Console doğrulaması tamamlandı
- [~] sitemap.xml GSC'ye eklendi
- [~] Ana sayfa GSC "URL İnceleme → İndeksleme İste" tıklandı
- [~] Rich Results Test: ana sayfa Schema doğrulandı
- [~] Bing Webmaster Tools kuruldu

### Analitik Hazırlık
- [~] GA4 ölçüm kimliği aktif
- [~] `form_submit` eventi test edildi (GA4 Realtime görünüyor)
- [~] `whatsapp_click` eventi test edildi
- [~] Vercel Analytics dashboard'da veri görünüyor

---

## Go / No-Go Kriterleri

### LAUNCH BLOCKER (Bunlar olmadan deploy yapılamaz)
1. `lib/config/site.ts` → tüm NAP alanları dolu (boş string yok)
2. `wa.me/905073420661` → WhatsApp açılıyor (test edildi)
3. `tekstil@baskanhavlu.com` → test e-postası alındı (Resend aktif)
4. `robots.txt` → geçerli, /api/ engelli, sitemap referanslı
5. `sitemap.xml` → erişilebilir, tüm sayfalar listeli
6. GDPR banner → çalışıyor, "Yalnızca Zorunlu" seçilince GA4 yüklenmiyor
7. 404 sayfası → özel tasarım, yönlendirme linkleri var
8. Güvenlik başlıkları → CSP, HSTS, X-Frame-Options aktif
9. SSL → aktif (Vercel otomatik)
10. Form başarısında e-posta geliyor → KRITIK

### LAUNCH UYARI (Lansman sonrası 48 saat içinde tamamlanmalı)
- Google Search Console doğrulaması
- sitemap.xml GSC'ye gönderim
- Google Business Profile başvurusu
- İlk blog makalesi yayını

### GENEL HAZIRLIK SKORU HEDEFİ
- Lighthouse Mobile Performance: ≥ 85 (lansman için minimum)
- Lighthouse Accessibility: ≥ 90
- Lighthouse SEO: ≥ 95
- Lighthouse Best Practices: ≥ 85

---

## Görev Bağımlılık Grafiği (Özet)

```
1.1 → 1.2 → 1.3 (temel)
1.1 → 1.4, 1.5, 1.6, 1.7 (bağımlılıklar)
1.1 → 1.8 → site.ts (tüm NAP)
2.1, 2.2, 2.3 → 3.1–3.6 (atom bileşenler)
3.1 + 6.1 → 10.1–10.9 (ana sayfa)
7.1–7.8 → 7.9 → 7.10 (form sistemi)
5.1, 9.1–9.7 → tüm sayfa Schema'ları
8.1–8.4 → GDPR (tüm analytics bağımlı)
14.1 → 14.2, 14.3, 14.4 → 15.1–15.7 (landing sayfalar)
11.1–11.6 + 16.1–16.4 → blog + ürün sistemi
17.1–17.7 → analytics (8.1 bağımlı)
22.1 → 22.2, 22.3, 22.4 → CI/CD
23.1–23.6 → büyüme aktivasyonu
```


## Task Dependency Graph

```json
{
  "waves": [
    {
      "wave": 1,
      "name": "Temel Altyapı ve Konfigürasyon",
      "tasks": ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2.1", "2.2", "2.3", "2.4", "4.1", "4.2", "4.3", "4.4", "4.5"]
    },
    {
      "wave": 2,
      "name": "Atom Bileşenler ve Güvenlik",
      "tasks": ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7"]
    },
    {
      "wave": 3,
      "name": "Layout, GDPR ve Form API",
      "tasks": ["6.1", "6.2", "6.3", "6.4", "6.5", "7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7", "7.8", "7.9", "7.10", "8.1", "8.2", "8.3", "8.4"]
    },
    {
      "wave": 4,
      "name": "Schema ve Ana Sayfa",
      "tasks": ["9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7", "10.1", "10.2", "10.3", "10.4", "10.5", "10.6", "10.7", "10.8", "10.9", "10.10"]
    },
    {
      "wave": 5,
      "name": "Ürün Sistemi, Hakkımızda ve İletişim",
      "tasks": ["11.1", "11.2", "11.3", "11.4", "11.5", "11.6", "12.1", "12.2", "12.3", "12.4", "12.5", "12.6", "12.7", "12.8", "12.9", "13.1", "13.2", "13.3", "13.4", "13.5"]
    },
    {
      "wave": 6,
      "name": "Öncelikli Landing Sayfalar",
      "tasks": ["14.1", "14.2", "14.3", "14.4", "14.5"]
    },
    {
      "wave": 7,
      "name": "Kalan Landing Sayfalar, Blog ve Analytics",
      "tasks": ["15.1", "15.2", "15.3", "15.4", "15.5", "15.6", "15.7", "16.1", "16.2", "16.3", "16.4", "17.1", "17.2", "17.3", "17.4", "17.5", "17.6", "17.7", "18.1", "18.2", "18.3", "19.1", "19.2", "19.3", "19.4", "19.5", "20.1", "20.2", "20.3", "20.4", "20.5"]
    },
    {
      "wave": 8,
      "name": "CI/CD, İndeksleme ve Büyüme Aktivasyonu",
      "tasks": ["21.1", "21.2", "21.3", "21.4", "22.1", "22.2", "22.3", "22.4", "23.1", "23.2", "23.3", "23.4", "23.5", "23.6", "24.1", "24.2", "24.3"]
    }
  ]
}
```
  1.1 (Next.js init)
    ├── 1.2 (TypeScript)
    ├── 1.3 (ESLint/Prettier)
    ├── 1.4 (Shadcn UI)
    ├── 1.5 (Framer Motion)
    ├── 1.6 (Lucide Icons)
    ├── 1.7 (React Hook Form + Zod)
    └── 1.8 (site.ts — NAP sabitleri)
          └── tüm schema + içerik bileşenleri

Katman 1 — Stil Sistemi:
  2.1 (Tailwind tokens)
    └── 3.1–3.6 (Atom bileşenler)
          └── 6.1–6.5 (Layout + Nav + Footer + WhatsApp)

Katman 2 — Güvenlik + SEO:
  4.1–4.5 (next.config.ts + middleware)
  5.1–5.7 (metadata, robots, sitemap, llms.txt, ai.txt)

Katman 3 — GDPR (Analytics öncesi zorunlu):
  8.1 → 8.2 → 8.3 → 8.4
    └── 17.1 (GA4 — GDPR koşullu)

Katman 4 — API + Form:
  7.1 (Zod) → 7.2 (Resend) → 7.3 (email service)
  7.4 (Redis rate limit)
    └── 7.5–7.8 (API routes)
          └── 7.9 (ContactForm)
                └── 7.10 (teşekkür)

Katman 5 — Sayfa İçerikleri:
  Schema (9.1–9.7) + Layout (6.1) + Metadata (5.1)
    └── Ana Sayfa (10.1–10.10)
    └── Ürün Sistemi (11.1–11.6)
    └── Hakkımızda (12.1–12.9)
    └── İletişim (13.1–13.5)
    └── Landing Sayfalar (14.1–14.5 → 15.1–15.7)

Katman 6 — Blog + i18n + Analytics:
  16.1–16.4 (Blog)
  17.1–17.7 (Analytics)
  19.1–19.5 (i18n)
  18.1–18.3 (GDPR sayfaları)
  20.1–20.5 (Performans)

Katman 7 — CI/CD + Büyüme:
  22.1–22.4 (CI/CD)
  23.1–23.6 (İndeksleme + GBP)
  21.1–21.4 (Animasyonlar)
  24.1–24.3 (Opsiyonel)
```

## Notes

- **İş Modeli:** Başkan Havlu Tekstil bir fabrika üretici ve tekstil tedarikçisi üretim koordinatörüdür. İçeriklerde ve Schema'da bu gerçek doğru yansıtılmalıdır.
- **NAP Kaynağı:** Tüm adres/telefon/e-posta değerleri yalnızca `lib/config/site.ts` dosyasından okunmalı, sabit kodlanmamalıdır.
- **Sertifika:** Mevcut sertifika doğrulanmadan Schema'ya veya içeriğe eklenmemelidir.
- **WhatsApp:** Tüm bağlantılar `https://wa.me/905073420661` formatında, Türkçe/İngilizce ön mesajlarla yapılandırılmalıdır.
- **Go/No-Go:** P0 grubundaki 10 blocker kriteri karşılanmadan production deploy yapılmamalıdır.
- **Lighthouse Hedefi:** Lansman için mobil ≥ 85, SEO ≥ 95 minimum; uzun vadede ≥ 95/100.


### Dalga Açıklamaları

```
Dalga 1 — Temel Altyapı:
  1.1 (Next.js init) → 1.2–1.9 (bağımlılıklar + site.ts NAP sabitleri)
  2.1–2.4 (Design tokens)
  4.1–4.5 (Güvenlik + next.config.ts + middleware)

Dalga 2 — Atom Bileşenler + SEO Temel:
  3.1–3.6 (Button, Badge, Input, FormGroup)
  5.1–5.7 (metadata, robots.txt, sitemap.xml, llms.txt, ai.txt, 404)

Dalga 3 — Layout + GDPR + Form API (bu olmadan sayfa yok):
  6.1–6.5 (Root layout, Navbar, Footer, StickyWhatsApp)
  7.1–7.10 (Zod, Resend, rate limit, API routes, ContactForm)
  8.1–8.4 (CookieConsentProvider, banner, koşullu GA4)

Dalga 4 — Schema + Ana Sayfa (görünür içerik başlar):
  9.1–9.7 (Organization, LocalBusiness, Product, FAQ, Breadcrumb, Review, ImageObject Schema)
  10.1–10.10 (Hero, TrustBar, ValueProp, ProductCategories, WhyUs, Factory, Testimonial, FAQ, CTA Band)

Dalga 5 — Ürün, Hakkımızda, İletişim:
  11.1–11.6 (Ürün sistemi + koleksiyon sayfaları)
  12.1–12.9 (Hakkımızda — fabrika otorite)
  13.1–13.5 (İletişim — NAP, harita, form)

Dalga 6 — Öncelikli 4 Landing Sayfa (P0 deploy sonrası ilk hedef):
  14.1–14.5 (havlu-ureticisi, toptan-havlu, otel-havlusu, promosyon-havlu)

Dalga 7 — Kalan 7 Landing + Blog + Analytics + i18n + Performans:
  15.1–15.7 | 16.1–16.4 | 17.1–17.7 | 18.1–18.3 | 19.1–19.5 | 20.1–20.5

Dalga 8 — CI/CD + İndeksleme + Büyüme + Opsiyonel:
  21.1–21.4 (animasyonlar) | 22.1–22.4 (CI/CD) | 23.1–23.6 (GSC, GBP, dizinler) | 24.1–24.3 (chatbot, CMS)
```
