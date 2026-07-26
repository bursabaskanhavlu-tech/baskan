# AGENTS.md — Başkan Havlu Tekstil Dijital Platformu

**Bu dosya bu projenin anayasasıdır.** `baskanhavlu.com` üzerinde çalışan her insan veya AI ajanı, herhangi bir kod satırı yazmadan önce bu dosyayı okumuş ve kabul etmiş sayılır. Bir talimat bu dosyayla çelişiyorsa, önce bu dosyadaki ilkeler uygulanır, sonra kullanıcıya çelişki açıkça bildirilir.

Bu dosya bir şablon değildir — projenin gerçek, doğrulanmış mevcut durumuna dayanır (renk kodları, dosya yolları, bileşen adları, API rotaları birebir kod tabanından alınmıştır). Kod tabanı değiştikçe bu dosya da güncellenmelidir; ama **güncelleme gerekçesi her zaman "kod böyle çalışıyor" olmalı, "böyle olsa daha iyi olur" değil.**

---

## 0. Tek Cümlede Görev Tanımı

**Bu proje sıfırdan yeniden yazılmıyor.** 1981'den beri faaliyet gösteren gerçek bir Bursa firmasının, çalışan ve büyümekte olan bir SEO/GEO altyapısı var. Görev: bu altyapıyı **asla kırmadan**, üzerine kurumsal seviyede tasarım, kullanıcı deneyimi, performans ve güven inşa etmek.

> **Önce koru. Sonra geliştir.** Bu iki kelime, bu dosyadaki her kuralın üst kuralıdır.

---

## 1. Vizyon ve İş Bağlamı

### 1.1 Kim bu firma?

- **Başkan Havlu Tekstil** — 1981'den bu yana Bursa Osmangazi, Havlucular Çarşısı'nda faaliyet gösteren bir **tekstil tedarik ve özel/fason üretim koordinasyon** firmasıdır.
- **Doğrudan fabrika değildir.** Güvenilir üreticilerle koordineli çalışarak havlu, bornoz ve promosyon tekstili tedarik eder. Bu ayrım hukuki ve stratejik olarak kritiktir (bkz. §14).
- Hedef kitle: oteller, kurumlar, kuaförler/güzellik salonları, promosyon/reklam ajansları, perakende mağazaları ve **Arap Ülkeleri + Yunanistan** pazarlarına ihracat alıcıları.
- Tüm gerçek NAP (Ad/Adres/Telefon) verisi tek kaynaktan okunur: **`lib/config/site.ts` → `SITE_CONFIG`**. Hiçbir bileşen, sayfa veya metin bu değerleri elle tekrar yazmaz.

### 1.2 Platformun amacı

1. **SEO otoritesi** — Google'da "Bursa havlu tedarikçisi", "toptan havlu", "otel havlusu" gibi sorgularda üst sıra.
2. **GEO otoritesi (Generative Engine Optimization)** — ChatGPT, Gemini, Claude, Perplexity gibi AI arama sistemleri bir kullanıcı "Bursa'da havlu tedarikçisi" diye sorduğunda bu siteyi kaynak göstersin. *Bu hedefe zaten kısmen ulaşılmış durumda — bu, korunması gereken canlı bir varlıktır, deneysel bir hedef değil.*
3. **Lead üretimi** — Teklif formu + WhatsApp üzerinden gerçek satış fırsatı.
4. **Marka otoritesi** — "Pazarcı/bayi" değil, "kurumsal, güvenilir tedarik koordinatörü" algısı.

### 1.3 Bu proje neyi hedeflemiyor?

- Yeni bir marka kimliği veya yeni bir renk paleti **değil**.
- Sıfırdan bir bilgi mimarisi veya URL yapısı **değil**.
- Deneysel/moda bir teknoloji geçişi (örn. başka bir framework'e taşınma) **değil**.
- Doğrulanamayan pazarlama iddiaları eklemek **değil** (bkz. §14.2 — bu firma için geçmişte özellikle temizlenmiş bir konu).

---

## 2. KIRMIZI ÇİZGİLER — Asla İhlal Edilmeyecek Kurallar

Bu bölüm, kullanıcının doğrudan talimatıdır ve her şeyden önceliklidir.

1. **Mevcut çalışan SEO yapısını asla bozma.** `generatePageMetadata()` (`lib/utils/metadata.ts`), her sayfadaki `title`/`description`/`canonical`/`openGraph`/`twitter` alanları, mevcut URL slug'ları — hiçbiri "daha iyi olur" diye yeniden tasarlanmaz.
2. **Mevcut GEO başarısını asla bozma.** `/public/llms.txt`, `/public/ai.txt`, `app/robots.ts` içindeki AI bot izinleri (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `anthropic-ai`, `Applebot-Extended`, `cohere-ai`, `CCBot`, `Omgilibot`) — bunlar bilinçli GEO kararlarıdır, "temizlik" bahanesiyle daraltılmaz.
3. **Mevcut URL yapısını gereksiz yere değiştirme.** 11 landing page rotası (`/havlu-ureticisi`, `/toptan-havlu`, `/otel-havlusu`, `/promosyon-havlu`, `/bornoz-ureticisi`, `/toptan-bornoz`, `/otel-bornozu`, `/nakisli-havlu`, `/turkish-towel-manufacturer`, `/bathrobe-manufacturer`, `/wholesale-towel-supplier`) + `/new-collection`, `/new-collection/[slug]`, `/about`, `/contact`, `/blog`, `/blog/[slug]` — bunlar aylarca indekslenmiş, backlink toplamış URL'ler olabilir. Bir URL değişmesi **zorunluysa**, `next.config.ts` içindeki `redirects()` bloğuna 301 kaydı eklenmeden asla yapılmaz.
4. **Metadata sistemini gereksiz yere yeniden yazma.** `generatePageMetadata()` fonksiyonunun imzasını değiştirmeden önce onu çağıran **tüm** sayfaları (30+ dosya) etkileyeceğini unutma.
5. **JSON-LD yapılarını yalnızca geliştir, çalışanları bozma.** `components/schema/` altındaki 8 şema bileşeni (`OrganizationSchema`, `LocalBusinessSchema`, `WebSiteSchema`, `ProductSchema`, `FAQSchema`, `BreadcrumbSchema`, `ReviewSchema`, `ArticleSchema`) zaten Google Rich Results ile uyumlu tasarlanmış. Yeni alan eklenebilir, mevcut zorunlu alan (`@type`, `name`, `address` vb.) kaldırılamaz.
6. **`llms.txt`, `ai.txt`, `robots.txt`, `sitemap.ts` içeriğini koru.** Bu dosyalara madde eklenebilir (yeni ürün, yeni sayfa, yeni pazar); mevcut satırlar yalnızca **gerçek veri değiştiğinde** güncellenir.
7. **"Çalışan sistemi 'daha iyi olur' diye yeniden yazma."** Bir bileşen çalışıyor, test edilmiş, canlıda ise; onu yeniden yazmak için gerekçe "daha temiz kod" değil, **somut bir bug, somut bir eksik özellik veya somut bir kullanıcı talebi** olmalıdır.
8. **Marka renklerine ve logoya dokunma.** Turuncu `#E87722` ailesi, bej/krem tonları, koyu kömür `#1A1A1A`, WhatsApp yeşili `#25D366` — bunlar sabittir (tam palet için bkz. §7.1). `public/images/logo-icon.png` ve `public/images/logo-text.png` değiştirilmez, kırpılmaz, renk değiştirilmez.

Bu 8 madde ihlal edilirse, yapılan iş ne kadar "kaliteli" görünürse görünsün **başarısız** sayılır.

---

## 3. Yazılım Mimarisi

### 3.1 Teknoloji Yığını (gerçek, doğrulanmış)

| Katman | Teknoloji | Not |
|---|---|---|
| Framework | **Next.js 16.2.11**, App Router | Bkz. §4 — bu, eğitim verinizdeki Next.js değildir |
| Dil | TypeScript, `strict: true` | `tsconfig.json` |
| UI kütüphanesi | React 19.2.4 | Server Components varsayılan |
| Stil | Tailwind CSS v4 (CSS-first, `@theme`) + Shadcn UI (`base-nova` stili) + Base UI | `tailwind.config.*` dosyası **yok**, her şey `app/globals.css` içinde |
| Animasyon | Framer Motion (`framer-motion`) | Sadece `components/motion-primitives/` üzerinden kullanılır |
| Form | React Hook Form + Zod | `lib/validations/lead.schema.ts` |
| İkon | `lucide-react` | Tek ikon kaynağı |
| E-posta | Resend — **REST API'ye doğrudan `fetch`**, npm paketi yüklü değil | API route'larda inline |
| Analitik | Google Analytics 4 — çerez onayına bağlı, elle yazılmış `components/organisms/GoogleAnalytics.tsx` | Vercel Analytics **kullanılmıyor** (bkz. §3.3) |
| Deploy | **Netlify** (`netlify.toml`) | Vercel **değil** — bkz. §3.3 |
| CI | GitHub Actions (`.github/workflows/ci.yml`): format check → lint → type-check → `npm audit` → build | Deploy adımı yok, Netlify kendi CI'ında build alır |
| Veri katmanı | Veritabanı yok; `content/products/index.ts`, `content/blog/index.ts` tip güvenli statik TS modülleri | CMS entegrasyonu yok |
| i18n | Yok. `next-intl` kaldırıldı. İngilizce sayfalar ayrı statik route (`/turkish-towel-manufacturer` vb.), gerçek `/en/` prefix routing yok | Bkz. §26 |

### 3.2 Dizin Yapısı

```
app/                      → App Router sayfaları (her klasör bir route)
  api/lead/{quote,sample,export}/route.ts, api/contact/route.ts → Edge runtime lead API'leri
  [slug]/                 → dinamik rotalar (blog, new-collection ürün detayı)
  layout.tsx              → root layout: font, Navbar, Footer, StickyWhatsApp, CookieConsent, GA4
  robots.ts, sitemap.ts   → otomatik üretilen SEO dosyaları
  globals.css             → TÜM tasarım tokenları burada (@theme)
components/
  atoms/                  → en küçük, saf görsel birimler (örn. BrandPatternPanel)
  molecules/              → birden fazla atom'un bileşimi (örn. FAQAccordion)
  organisms/              → sayfa bölümleri (HeroSection, Navbar, Footer, ContactForm...)
  templates/              → çok sayfa paylaşan tam düzenler (örn. LandingPage — 11 sayfa bunu kullanır)
  schema/                 → JSON-LD üreten bileşenler (görsel çıktısı yok, sadece <script>)
  motion-primitives/      → Framer Motion sarmalayıcıları (FadeIn, motion re-export)
  providers/              → React context sağlayıcıları (CookieConsentProvider)
  ui/                     → Shadcn tabanlı temel UI kit (button, input, select, dialog...)
content/
  products/index.ts       → PRODUCTS: Product[] — 6 kategori
  blog/index.ts           → BLOG_POSTS: BlogPost[]
lib/
  config/site.ts           → SITE_CONFIG — tek doğru veri kaynağı (NAP, ihracat, sosyal medya)
  utils/metadata.ts        → generatePageMetadata() — TÜM sayfa metadata'sı buradan geçer
  utils/analytics.ts       → trackEvent/trackFormSubmit/trackWhatsAppClick/trackCTAClick/trackProductView
  utils.ts                 → genel yardımcılar (cn() vb.)
  validations/lead.schema.ts → Zod şemaları
types/global.d.ts          → window.gtag global tip tanımı
.kiro/specs/baskan-havlu-tekstil-platform/ → requirements.md, design.md, tasks.md, audit-report.md
```

`hooks/` dizini henüz **yok** ama `components.json` alias'ı (`@/hooks`) hazır — yeni bir custom hook gerekirse buraya eklenir, `components/` içine gömülmez.

### 3.3 Deploy platformu gerçeği (kritik bilgi)

Site **Netlify**'da yayınlanıyor (`netlify.toml` mevcut, `@netlify/plugin-nextjs` kullanılıyor). `.kiro/specs/` altındaki dokümanlar Vercel varsayımıyla yazılmıştır (Vercel Edge, Vercel KV, Vercel Blob, Vercel Analytics) — bu doğrudan spec ile gerçek altyapı arasındaki bilinen bir sapmadır. **Spec dokümanlarındaki "Vercel" referanslarını körü körüne uygulama.** Vercel'e özel bir paket (`@vercel/*`) asla eklenmez; bir önceki denemede bu paketler Netlify'da sessizce çalışmayıp GA4'ün tamamen devre dışı kalmasına yol açmıştı.

### 3.4 Rendering stratejisi

- Statik sayfalar (ana sayfa, landing page'ler, hakkımızda, iletişim) → **Server Component**, varsayılan statik render.
- `app/new-collection/[slug]/page.tsx`, `app/blog/[slug]/page.tsx` → `generateStaticParams()` ile SSG.
- API rotaları → `export const runtime = 'edge'`.
- `'use client'` yalnızca gerçekten etkileşim gerektiren yaprak bileşenlere yazılır (form, accordion, mobil menü, animasyon sarmalayıcı). Sayfa (`page.tsx`) ve layout dosyaları asla `'use client'` olmaz.

---

## 4. Next.js Kuralları

### 4.1 "Bu, eğitim verinizdeki Next.js değil"

Proje **Next.js 16.2.11** kullanıyor. Bu, çoğu AI modelinin eğitim kesim tarihinden sonra çıkmış olabilir ve API'ler, konvansiyonlar, dosya yapısı ezberden bildiğinizden farklı olabilir. **Herhangi bir Next.js API'si hakkında emin değilseniz, kod yazmadan önce `node_modules/next/dist/docs/` altındaki güncel dokümantasyonu okuyun.** Özellikle:
- `app/01-getting-started/18-upgrading.md`
- `app/02-guides/upgrading/` (versiyon geçiş notları)
- `app/02-guides/migrating-to-cache-components.md`

Deprecation uyarılarına her zaman uyulur; "eskiden böyleydi" varsayımıyla kod yazılmaz.

### 4.2 Server/Client Component disiplini

- Varsayılan: **Server Component**. `'use client'` yalnızca `useState`, `useEffect`, event handler, tarayıcı API'si (localStorage, window) veya Framer Motion hook'u gerektiğinde eklenir.
- Bir bileşeni client yapmak zorunda kaldığınızda, mümkünse **en yaprak (leaf) seviyede** yapın — örn. `ContactForm.tsx` client'tır ama onu içeren `app/contact/page.tsx` server component olarak kalır ve `generateMetadata` üretebilir.
- Şema bileşenleri (`components/schema/*`) her zaman server component'tır (sadece `<script type="application/ld+json">` render eder, hiçbir interaktivite yoktur).

### 4.3 Metadata sistemi kuralları

- Her yeni sayfa **mutlaka** `generatePageMetadata()` (`lib/utils/metadata.ts`) kullanır. Elle `export const metadata = {...}` yazılmaz.
- Zorunlu parametreler: `title`, `path`. Önerilir: `description`, `keywords`. Fonksiyon zaten `canonical`, `hreflang` (tr/en/x-default), `openGraph`, `twitter`, `robots` alanlarını otomatik üretir — bunları elle tekrar yazmayın.
- `SITE_CONFIG.seo.ogImage` şu an tek, statik bir görsel (`/images/logo-icon.png`). Sayfa başına dinamik OG görseli (`next/og` ile `ImageResponse`) eklemek **geliştirmedir**, ama önce mevcut statik görselin kaldırılmayacağından emin olun (fallback olarak kalmalı).

### 4.4 Dinamik rotalar

- `generateStaticParams()` kullanan `[slug]` rotaları (`new-collection/[slug]`, `blog/[slug]`) `content/` altındaki statik veriden türetilir. Yeni bir ürün/blog eklemek = `content/products/index.ts` veya `content/blog/index.ts`'ye yeni bir obje eklemek; route dosyasına dokunmaya gerek yoktur.
- `notFound()` çağrısı, slug bulunamadığında zorunludur (mevcut pattern korunur).

### 4.5 next.config.ts

- Güvenlik başlıkları (`securityHeaders` array'i) ve CSP, mevcut izinli domain listesini daraltmadan genişletilir.
- `redirects()` bloğu yalnızca **eklenir**, mevcut 301 kuralı silinmez (eski URL hâlâ dışarıdan link alıyor olabilir).
- `turbopack.root: __dirname` ayarı workspace belirsizliğini önlemek için bilinçli eklendi — kaldırılmaz.

---

## 5. TypeScript Kuralları

- `tsconfig.json` → `strict: true`, `noUncheckedIndexedAccess: true`, `noImplicitReturns: true`, `noFallthroughCasesInSwitch: true`. Bu ayarları gevşetmek (`// @ts-ignore`, `as any`) **yasaktır**; tip hatası varsa kök nedeni çözülür.
- `@/*` path alias'ı `tsconfig.json` içinde tanımlı — relative import (`../../../lib/...`) yerine her zaman `@/lib/...`, `@/components/...` kullanılır.
- Her yeni veri modeli (`Product`, `BlogPost`, lead form tipi vb.) `interface` ile tanımlanır ve ilgili `content/` veya `lib/validations/` dosyasında tutulur — dağınık, sayfa içi tip tanımı yapılmaz.
- Zod şeması olan her form için TypeScript tipi Zod'dan türetilir (`z.infer<typeof schema>`), iki kez elle yazılmaz.
- `process.env['KEY']` erişim biçimi (köşeli parantez) korunur — `noUncheckedIndexedAccess` bunu zorunlu kılıyor.

---

## 6. Tailwind CSS Kullanım Standardı

### 6.1 Mevcut gerçek

Tailwind v4, tamamen CSS-first (`@theme inline` bloğu `app/globals.css` içinde). Ayrı bir `tailwind.config.ts` **yok** — renk, radius, font, spacing tokenları CSS custom property olarak tanımlı.

**Ancak mevcut kodun büyük kısmı bu tokenları Tailwind utility class'ı olarak değil, doğrudan inline `style={{ color: '#e87722' }}` şeklinde kullanıyor.** Bu, bilinen bir teknik borçtur (bkz. §26), ama şu anki kodun **çoğunluk deseni** budur.

### 6.2 Yeni kod yazarken kural

- **Yeni bileşen yazarken:** Mümkün olduğunda Tailwind utility class + CSS değişkeni tercih edin (`className="text-[var(--color-orange-500)]"` veya doğrudan tanımlıysa `className="bg-orange-500"`), ama **etraftaki mevcut bileşenle görsel/kod tutarlılığını bozmayın.** Bir dosyanın içinde yarı inline-style yarı Tailwind class karışımı yaratmayın — bir dosyayı düzenliyorsanız o dosyanın mevcut deseniyle devam edin.
- **Toplu "inline style → Tailwind class" dönüşümü** kendiliğinden bir görev değildir; yalnızca kullanıcı açıkça isterse yapılır (büyük, riskli, görsel regresyona açık bir refactordur — bkz. §20).
- Yeni bir marka rengi tonu gerekiyorsa önce `app/globals.css` `@theme inline` bloğuna token olarak eklenir, sonra kullanılır — sayfa içinde rastgele yeni hex değer icat edilmez.
- Responsive class'lar mobile-first yazılır: taban class, sonra `sm:`, `md:`, `lg:`, `xl:` artışı.

### 6.3 Yasaklı

- `!important` kullanımı.
- Satır içi `<style>` blokları.
- Tailwind class'larını ezmek için yüksek özgüllükte (specificity) CSS seçicileri.

---

## 7. UI Prensipleri — Marka Kimliği ve Tasarım Sistemi

### 7.1 Renk Paleti (SABİT — değiştirilemez)

| Grup | Token | Hex | Kullanım |
|---|---|---|---|
| Turuncu (ana marka) | `orange-50` | `#FFF7F0` | açık vurgu zemini |
| | `orange-100` | `#FFE8CC` | hover zemini |
| | `orange-200` | `#FFD0A3` | devre dışı |
| | `orange-400` | `#FF9F52` | açık vurgu |
| | **`orange-500`** | **`#E87722`** | **ana marka rengi — birincil CTA** |
| | `orange-600` | `#CC6419` | hover |
| | `orange-700` | `#A85210` | basılı |
| | `orange-900` | `#6B2F08` | koyu aksan |
| Bej/Krem | `beige-50` | `#FAF8F5` | sayfa zemini |
| | `beige-100` | `#F5F0EA` | kart zemini |
| | `beige-200` | `#EDE5D8` | bölücüler |
| | `beige-300` | `#E0D4C0` | kenarlıklar |
| | `beige-500` | `#C4A882` | taş bej vurgu |
| | `beige-600` | `#A88C64` | ikincil metin |
| | `beige-700` | `#8A7050` | koyu bej metin |
| Kömür (nötr) | `charcoal-900` | `#1A1A1A` | birincil metin, koyu bölüm zemini |
| | `charcoal-800` | `#2D2D2D` | ikincil koyu ton |
| | `charcoal-700` | `#404040` | üçüncül metin |
| | `charcoal-600` | `#5C5C5C` | gövde metni |
| | `charcoal-300` | `#B3B3B3` | koyu zeminde ikincil metin |
| | `charcoal-100` | `#F0F0F0` | açık bölücü |
| Anlamsal | `whatsapp` | `#25D366` | yalnızca WhatsApp CTA/ikonları |
| | success/error/warning | `#16A34A` / `#DC2626` / `#D97706` | form durumları |

**Kural:** Turuncu yalnızca birincil eylem (CTA) ve marka vurgusu için kullanılır; sayfanın her yerine serpiştirilmez. WhatsApp yeşili yalnızca WhatsApp bağlamında kullanılır, genel "başarı" rengi olarak kullanılmaz.

Tonal varyasyon (gradyan, opacity katmanı) **aynı palet içinde** serbesttir — bu proje kapsamında hero/CTA bölümlerine eklenen ince radyal gradyanlar (`rgba(232,119,34,0.0x)` gibi) bu ilkeye örnektir. Yeni bir ana renk **eklenmez**.

### 7.2 Tipografi

- Başlıklar: `DM Serif Display` (`--font-heading`) — premium, editoryal bir vurgu için, genelde H1'lerde `fontFamily: 'var(--font-heading, serif)'`.
- Gövde: `Plus Jakarta Sans` (`--font-sans`), ağırlıklar 400–800.
- İki font ailesi de `next/font/google` ile `display: 'swap'` olarak yüklenir (CLS koruması).
- Ölçek: `--text-display: 4.5rem`, `h1: 3.5rem`, `h2: 2.5rem`, `h3: 1.75rem`, `h4: 1.375rem`, `body-lg: 1.125rem`, `body: 1rem`, `caption: 0.8125rem`.

### 7.3 Görsel/Fotoğraf politikası

**Gerçek fabrika/ürün fotoğrafı yok.** Bu bilinen ve kabul edilmiş bir durumdur — sahte/stok fotoğraf ile doldurulmaz (E-E-A-T ve dürüstlük ilkesi, bkz. §14). Geçici çözüm: `components/atoms/BrandPatternPanel.tsx` — marka renkleriyle desenli, kasıtlı görünen bir dolgu paneli. Yeni bir görsel alanı gerektiğinde:
1. Önce gerçek fotoğraf olup olmadığını sor.
2. Yoksa `BrandPatternPanel`'i (veya aynı desenli/tutarlı yeni bir varyantını) kullan.
3. **Asla** "görsel buraya gelecek", dosya yolu, `TODO` gibi ziyaretçiye görünen debug metni bırakma — bu daha önce sitede gerçek bir profesyonellik sorunu yaratmıştı.

### 7.4 Logo

- `public/images/logo-icon.png` (ikon) ve `public/images/logo-text.png` (yazı logosu). İkisi de **değiştirilmez, yeniden renklendirilmez, oranı bozulmaz.**
- Footer'da logo `brightness-0 invert` ile beyaza çevriliyor (koyu zemin üstünde) — bu kabul edilmiş bir teknik ama tasarımsal karardır, korunur.

---

## 8. UX Prensipleri

### 8.1 B2B dönüşüm önceliği

Bu bir e-ticaret sitesi **değildir** — ziyaretçi doğrudan sipariş veremez, önce teklif ister. Her sayfa tasarımı şu hiyerarşiyi izler:
1. **Birincil CTA:** "Teklif Al" / "Teklif İste" → `/contact` formuna götürür.
2. **İkincil CTA:** WhatsApp — anında, düşük sürtünmeli iletişim kanalı. `SITE_CONFIG.contact.whatsappUrl` + önceden doldurulmuş mesaj her zaman kullanılır.
3. `StickyWhatsApp` bileşeni her sayfada, her ekran boyutunda sabit görünür kalır — kaldırılmaz veya gizlenmez.

### 8.2 Form sürtünmesi

- Formlar kısa tutulur (mevcut `ContactForm` 6-7 alan). Yeni zorunlu alan eklemeden önce gerçekten gerekli mi diye sorgulanır.
- Her formda honeypot alanı zorunludur (spam koruması — bkz. §18).
- Başarı durumu formu **temizlemeli** ve görünür bir onay mesajı göstermelidir (mevcut `ContactForm` deseni).
- Form başarısızlığında kullanıcıya her zaman bir WhatsApp fallback bağlantısı sunulur — mevcut desen korunur.

### 8.3 Güven sinyalleri

- Kuruluş yılı (1981), ihracat pazarları (Arap Ülkeleri, Yunanistan), sektör deneyimi — her önemli sayfada (hero, landing page trust strip) tutarlı şekilde tekrar edilir.
- Güven sinyalleri **her zaman doğrulanabilir olmalı** (bkz. §14.2) — sayı, tarih, coğrafya gibi somut veriler; "en iyi", "eşsiz", "mükemmel" gibi muğlak süperlatifler kullanılmaz.

### 8.4 İçerik hiyerarşisi (landing page şablonu)

`components/templates/LandingPage.tsx` şu sırayı zorunlu kılar ve yeni landing page eklenirken bu sıra bozulmaz:
Hero (eyebrow + H1 + intro + 2 CTA + güven şeridi) → Özellik kartları (ikon + başlık + açıklama, 3 adet) → SSS akordeonu → İlgili sayfalar (iç bağlantı) → CTA Band.

---

## 9. Component Standartları

### 9.1 Katman kuralı

`atoms → molecules → organisms → templates` hiyerarşisine uyulur:
- **Atom:** Bağımsız, en küçük görsel birim, iş mantığı yok (`BrandPatternPanel`).
- **Molecule:** Birkaç atomun/ikonun bileşimi, sınırlı state olabilir (`FAQAccordion`).
- **Organism:** Bir sayfa bölümü, kendi verisini/mantığını taşıyabilir (`HeroSection`, `Navbar`, `Footer`, `ContactForm`).
- **Template:** Birden fazla sayfanın paylaştığı tam iskelet, prop'larla içerik alır (`LandingPage`).
- **Schema:** Görsel çıktısı olmayan, yalnızca JSON-LD üreten bileşenler — ayrı bir kategori, UI hiyerarşisine dahil değil.

### 9.2 Yeniden kullanım eşiği

- Aynı JSX deseni **3 veya daha fazla dosyada** tekrarlanıyorsa, ortak bir bileşene/şablona çıkarılır (bu projede 11 landing page'in `LandingPage` şablonuna taşınması bu ilkenin uygulanmış hâlidir).
- 1-2 tekrar için erken soyutlama yapılmaz — "belki lazım olur" bileşeni yazılmaz.

### 9.3 Prop tasarımı

- Her yeni paylaşılan bileşen (özellikle template/organism) prop arayüzünü açık `interface` ile tanımlar, `any` kullanılmaz.
- Zorunlu/opsiyonel prop ayrımı içerik gerçeğine göre yapılır: bir landing page'de "ilgili sayfalar" yoksa `relatedLinks?` opsiyonel kalır (mevcut `LandingPage` deseni).

### 9.4 Mevcut envanteri bil, tekrar icat etme

Yeni bir bileşen yazmadan önce şu klasörlere bakılır: `components/ui/` (temel form/buton/dialog kit'i zaten var), `components/molecules/`, `components/organisms/`. Aynı işi yapan bir bileşen varsa o genişletilir, ikincisi yazılmaz.

---

## 10. Motion Prensipleri

### 10.1 Tek giriş noktası

Tüm scroll-reveal animasyonu `components/motion-primitives/fade-in.tsx` → `<FadeIn>` üzerinden yapılır. Sayfa içinde doğrudan `motion.div` yazılmaz; `FadeIn` sarmalayıcısı kullanılır (tutarlılık + reduced-motion güvenliği tek yerden yönetilir).

### 10.2 KRİTİK KURAL — Reduced motion, SSR/CSR tutarlılığı

`useReducedMotion()` (Framer Motion) sunucuda her zaman `null`, tarayıcıda gerçek işletim sistemi tercihini döndürür. **Bu değere göre farklı bir DOM/element ağacı render etmek (`if (reduceMotion) return <div>... else return <motion.div>...`) hydration mismatch'e ve sitenin tamamen boş görünmesine yol açar** — bu proje tarihinde gerçekleşmiş, teşhis edilmiş ve düzeltilmiş bir olaydır.

**Kural:** `reduceMotion` değeri yalnızca **aynı elemanın prop değerlerini** (transition süresi, offset miktarı) etkilemek için kullanılır; elemanın kendisini veya component ağacının yapısını asla değiştirmez. `FadeIn`'in güncel implementasyonu bu kuralın referans örneğidir — her koşulda `motion.div` render eder, sadece `duration`/`y` değerini `reduceMotion ? 0 : ...` ile ayarlar.

### 10.3 Kullanım deseni

```tsx
<FadeIn delay={0.1}>{...}</FadeIn>          // tekil blok
<FadeIn delay={i * 0.06} key={item.id}>...</FadeIn>  // liste/grid stagger, index bazlı artan gecikme
<FadeIn aria-hidden={true} className="...">...</FadeIn>  // dekoratif/görsel-only bloklar
```

- Dekoratif/salt görsel bloklar (`BrandPatternPanel` sarmalayan `FadeIn`) `aria-hidden={true}` alır.
- Gecikme (`delay`) değerleri 0.05–0.2 aralığında tutulur; büyük gecikmeler algılanan performansı düşürür.
- Above-the-fold (hero) içerik için bile `FadeIn` kullanılır — `useInView` marjı (`-15% 0px`) bunu ilk yüklemede de tetikler.

### 10.4 Yasaklı

- `prefers-reduced-motion` kontrolünü göz ardı eden yeni animasyon kütüphanesi/deseni eklemek.
- Sayfa geçiş animasyonu (`AnimatePresence` ile route transition) — şu an **yok**; eklenecekse önce LCP/INP etkisi ölçülür, App Router navigasyon davranışıyla çakışmadığından emin olunur.
- Layout shift'e yol açan animasyon (yükseklik/genişlik animasyonu yerine `opacity`/`transform` tercih edilir — CLS bütçesi §13'te).

---

## 11. Responsive Kurallar

- **Mobile-first zorunlu.** Taban stil 320px için tasarlanır, yukarı doğru `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` genişletilir.
- Dokunma hedefleri (buton, link, form alanı) minimum **44×44px**.
- `Navbar` masaüstünde yatay menü, `lg:` altında tam ekran mobil overlay menüsüne düşer — bu davranış korunur, yeni nav öğesi eklenirken her iki durum da güncellenir.
- Hero, ürün grid'i, landing page bölümleri her zaman `sm:grid-cols-2 lg:grid-cols-3` gibi kademeli artış deseni izler; tek adımda 1→4 sütun gibi sıçramalar yapılmaz.
- Yatay taşma (`overflow-x`) sıfır tolerans — yeni bir geniş içerik (tablo, kod bloğu, grid) eklenirken kendi `overflow-x-auto` konteynerine alınır.

---

## 12. Accessibility (Erişilebilirlik) Standartları

- Hedef: WCAG 2.1 AA. Metin kontrastı ≥ 4.5:1 (küçük metin), ≥ 3:1 (büyük başlık/UI bileşeni).
- Her `<img>`/`next/image` çağrısında anlamlı `alt` metni zorunlu; salt dekoratif görsellerde `alt=""` + `aria-hidden="true"`.
- Tüm interaktif olmayan ikon/SVG'ler `aria-hidden="true"` alır (mevcut desen).
- Form alanlarında `<label htmlFor>` eşleşmesi zorunlu (mevcut `ContactForm` deseni).
- Breadcrumb `<nav aria-label="Breadcrumb">` + `<ol>` yapısı korunur; ana navigasyon `aria-label="Ana Navigasyon"` alır.
- Klavye navigasyonu: tüm tıklanabilir öğeler `<button>`/`<a>` olmalı, `onClick`'li `<div>` kullanılmaz.
- Odak görünürlüğü (`focus-visible` halkası) hiçbir bileşende `outline: none` ile tamamen kaldırılmaz.
- **Otomatik erişilebilirlik testi şu an yok** (axe-core, Lighthouse CI kurulu değil) — bu bilinen bir boşluktur (§26), yeni bileşen eklerken manuel kontrol (klavye + ekran okuyucu mantığıyla düşünerek) geliştiricinin sorumluluğundadır.

---

## 13. Performans Hedefleri

`.kiro/specs/baskan-havlu-tekstil-platform/requirements.md` dosyasındaki Requirement 2 ve Requirement 24'te tanımlanan hedefler bağlayıcıdır:

| Metrik | Hedef |
|---|---|
| Google PageSpeed (mobil + masaüstü) | ≥ 95 |
| LCP (Largest Contentful Paint) | < 1.5s |
| CLS (Cumulative Layout Shift) | < 0.05 |
| INP (Interaction to Next Paint) | < 150ms |
| Sayfa başına JS bundle (gzip) | < 200 KB |

Pratik kurallar:
- Her `<Image>` çağrısında `width`/`height` veya `fill` + `sizes` zorunlu; hero görseli varsa `priority`.
- Üçüncü taraf script'ler (`next/script`) `strategy="afterInteractive"` veya `"lazyOnload"` ile yüklenir, asla `beforeInteractive` ile bloklanmaz (GA4 zaten bu deseni izliyor, bkz. `GoogleAnalytics.tsx`).
- `@next/bundle-analyzer` kurulu — büyük bir bağımlılık eklenmeden önce bundle etkisi göz önüne alınır.
- Statik varlıklar için `Cache-Control: public, max-age=0, stale-while-revalidate=86400` deseni (`next.config.ts` `headers()`) korunur.

---

## 14. İçerik Üretim Standartları

### 14.1 Ton kılavuzu

Kurumsal, B2B odaklı, somut veriye dayalı, lüks-ama-mütevazı bir üretim-koordinatörü otoritesi. **Pazaryeri/bayi tonu (ünlem işareti dolu, "KAÇIRMAYIN", abartılı büyük harf) kesinlikle kullanılmaz.**

Standart CTA metinleri: *"Toptan Teklif Al"*, *"Numune İste"*, *"Teklif İste"*, *"WhatsApp ile Sor/Yaz"*. Jenerik *"Gönder"*, *"Tıklayın"*, *"Buraya"* gibi zayıf/anlamsız anchor text kullanılmaz.

### 14.2 Doğrulanabilirlik kuralı — EN KRİTİK İÇERİK KURALI

Bu firma için geçmişte **bilinçli olarak temizlenmiş** iddialar var: *"Günlük 10.000+ üretim"*, *"40+ ülkeye ihracat"*, *"ISO/Oeko-Tex sertifikalı"*, *"20.000 m² fabrika"*, *"Fabrikamız"* — bunların hepsi doğrulanamadığı için kaldırıldı ve yerine doğrulanabilir ifadeler (*"Arap Ülkeleri ve Yunanistan"*, *"tedarikçimiz"*, *"üretim koordinasyonu"*) kondu.

**Kural:** Hiçbir yeni içerik, sayı, istatistik veya iddia; `SITE_CONFIG`'de olmayan veya kullanıcı tarafından doğrulanmamış bir veriye dayanamaz. Şüphe durumunda:
- Sahte fotoğraf, sahte müşteri yorumu, sahte sertifika **asla üretilmez.**
- "Muhtemelen doğrudur" mantığıyla rakam icat edilmez.
- Eksik veri varsa, içerik o veriyi atlar veya kullanıcıdan ister — asla tahmin doldurmaz.

Bu kural SEO/GEO otoritesinin temelidir: Google E-E-A-T ve AI GEO güvenilirliği, doğrulanabilir, tutarlı gerçeklere dayanır; tek bir yakalanan yanlış iddia tüm entity güvenilirliğine zarar verir.

### 14.3 Entity-first yazım (GEO için)

Her H2/H3 altındaki ilk cümle bir varlık adıyla (firma, ürün, lokasyon) başlar. Paragraflar kısa tutulur (AI içerik çıkarımı için ideal: paragraf başına maksimum 3 cümle). Karşılaştırma/özellik içerikleri düz paragraf yerine liste veya tablo ile sunulur.

### 14.4 NAP tutarlılığı

Adres, telefon, e-posta, WhatsApp numarası, kuruluş yılı — **hiçbir zaman elle yazılmaz**, her zaman `SITE_CONFIG` üzerinden okunur. Bu tutarlılık hem yerel SEO hem AI entity tanıma için zorunludur.

---

## 15. SEO Kuralları

- Her sayfa **tek bir `<h1>`** içerir; H1 hedef anahtar kelimeyi içerir.
- `generatePageMetadata()` dışında elle metadata üretimi yapılmaz (bkz. §4.3).
- Canonical URL her zaman parametre içermeyen, temiz sürüme işaret eder.
- İç bağlantı disiplini korunur: her landing page ilgili kategori sayfasına ve en az birkaç kardeş landing page'e bağlanır (`relatedLinks` prop'u — bkz. `LandingPage` template). Yeni sayfa eklerken "orphan page" (hiçbir yerden linklenmeyen sayfa) oluşturulmaz — mutlaka `app/sitemap.ts`'e ve en az bir navigasyon/iç bağlantı noktasına eklenir.
- 301 yönlendirmesi gereken her URL değişikliği `next.config.ts` `redirects()`'e eklenir, eski kural silinmez.
- `app/sitemap.ts` yeni statik/dinamik sayfa eklendiğinde güncellenir (mevcut desen: `staticPages`, `landingPagesTR`, `landingPagesEN`, `blogPages`, `productPages` dizileri).
- Anchor text her zaman anlamlıdır; "buraya tıklayın", "daha fazla" gibi jenerik metin kullanılmaz.

---

## 16. GEO Kuralları (AI Arama Optimizasyonu)

- `app/robots.ts` içindeki AI bot allowlist'i (GPTBot, Google-Extended, PerplexityBot, ClaudeBot, anthropic-ai, Applebot-Extended, cohere-ai, CCBot, Omgilibot) **daraltılmaz**; yeni önemli bir AI crawler ortaya çıkarsa listeye eklenir.
- `public/llms.txt` ve `public/ai.txt` — firma kimliği, ürünler, iletişim, önerilen AI atıf metni içerir. Yeni bir sayfa/ürün/pazar eklendiğinde bu dosyalar da güncellenir (versiyon numarası ve `Last Updated` tarihi artırılır), ama mevcut doğrulanmış alanlar silinmez.
- `components/schema/EntityBlock.tsx` — footer üstünde görünen, makine + insan tarafından okunabilir "entity signal" bloğu. Görünür kalmalı, `aria-hidden` yapılmaz (GEO'nun temel gereği: gizli değil, görünür yapılandırılmış içerik).
- Yeni içerik "Entity-First" ilkesiyle yazılır (§14.3).
- Fact Block / Quick Facts deseni (ürün detay sayfasındaki `dl` yapısı gibi) yeni ürün/hizmet içeriğinde tercih edilir — düz paragraf yerine yapılandırılmış veri.

---

## 17. JSON-LD / Schema Kuralları

- Mevcut şema bileşenleri ve kullanıldıkları sayfalar:

| Bileşen | Nerede kullanılır |
|---|---|
| `OrganizationSchema` | Ana sayfa, Hakkımızda |
| `LocalBusinessSchema` | Ana sayfa, Hakkımızda, İletişim |
| `WebSiteSchema` | Ana sayfa (`SearchAction` **kasıtlı olarak kaldırılmış** — site içi arama yok, bkz. yorum satırı) |
| `ProductSchema` | Ürün detay sayfaları |
| `FAQSchema` | Hakkımızda, tüm landing page'ler |
| `BreadcrumbSchema` | Hemen hemen tüm iç sayfalar |
| `ArticleSchema` | Blog yazı sayfaları |
| `ReviewSchema` | Tanımlı, gerçek müşteri verisi geldiğinde kullanılacak |

- **Yeni şema eklerken** önce Google Rich Results Test ile geçerliliği doğrulanır (zihinsel olarak: zorunlu alanlar eksiksiz mi?).
- Şemaya **doğrulanmamış veri koyulmaz** (§14.2 ile aynı kural — sertifika, rakam, review şeması boşsa render edilmez, sahte veriyle doldurulmaz).
- `WebSiteSchema`'ya siteiçi arama özelliği eklenmeden `SearchAction` geri eklenmez (Google Search Console uyarısına yol açar — bu bilinçli bir düzeltmeydi).

---

## 18. Güvenlik Kuralları

- HTTP güvenlik başlıkları (`next.config.ts` `securityHeaders`): CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy — daraltılmadan genişletilir. Yeni bir üçüncü taraf servis eklenirse (ör. yeni bir analytics), CSP'ye ilgili domain eklenir; **kullanılmayan domain CSP'de bırakılmaz** (bkz. geçmişteki Vercel/Sentry domain temizliği).
- Hiçbir API anahtarı, webhook URL'si veya gizli değer kaynak kodda sabit yazılmaz; `.env.local` / hosting ortam değişkeni olarak tutulur. `.env.example` şablon olarak güncel tutulur ama gerçek değer içermez.
- Tüm form girdileri Zod ile sunucu tarafında doğrulanır (istemci doğrulaması **tek başına yeterli değildir**).
- Her formda honeypot alanı zorunludur (mevcut desen: gizli `honeypot` input, dolu gelirse "sessizce" `{success:true}` dönülür — saldırgana bilgi sızdırılmaz).
- **Bilinen boşluk:** Rate limiting kodu şu an yok (Upstash Redis env şablonu var, implementasyon yok). Bu alanda çalışan bir geliştirici bunu "zaten var" varsaymamalı, `tasks.md`'nin bu maddeyi yanlışlıkla `[x]` işaretlediğini bilmelidir (bkz. §26).
- API rotaları yalnızca `POST` kabul eder, `export const runtime = 'edge'` ile çalışır.
- Bilinmeyen/beklenmeyen API hatalarında istemciye asla stack trace veya iç detay döndürülmez — genel hata mesajı (mevcut desen).

---

## 19. Test Süreçleri

### 19.1 Şu an var olan

Otomatik test altyapısı (unit test, Storybook, axe-core, Lighthouse CI, görsel regresyon) **kurulu değildir.** CI pipeline'ı yalnızca: `format:check` → `lint` → `type-check` → `npm audit` → `build`.

### 19.2 Her değişiklik için minimum bar (zorunlu)

Bir değişiklik "tamamlandı" sayılmadan önce şu üç komut **hatasız** geçmelidir:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Prettier uyarısı çıkarsa `npx prettier --write <dosya>` ile otomatik düzeltilir, elle formatlanmaz.

### 19.3 Manuel doğrulama

- Görsel bir değişiklik yapıldıysa `npm run dev` ile en az ana sayfa + değişen sayfa(lar) tarayıcıda kontrol edilir.
- Yeni bir animasyon/interaktif bileşen eklendiğinde, `prefers-reduced-motion` açık bir sistemde de test edilir (bkz. §10.2'deki gerçek olay).
- Form değişikliği yapıldıysa başarı **ve** hata senaryosu elle tetiklenir.

### 19.4 Gelecek geliştirme (opsiyonel, kullanıcı onayıyla)

Lighthouse CI veya axe-core eklenmesi değerli bir geliştirmedir ama **mevcut CI akışını bozmadan**, ayrı bir adım olarak eklenmelidir; mevcut `ci.yml` yeniden yazılmaz, üzerine eklenir.

---

## 20. Refactor Prensipleri

- Refactor gerekçesi her zaman **somut** olmalı: gerçek kod tekrarı (3+ dosya), gerçek bir bug'ın kök nedeni, veya kullanıcının açık talebi. "Daha temiz olur" tek başına yeterli gerekçe değildir.
- Refactor öncesi: değişecek dosyaların tam listesi çıkarılır, her biri okunur, mevcut davranış anlaşılır.
- Refactor sonrası: §19.2'deki üç komut + etkilenen sayfaların görsel kontrolü zorunludur.
- Büyük çaplı, riskli bir refactor (ör. tüm inline style'ları Tailwind class'a çevirmek, tüm renkleri token'a bağlamak) **kullanıcıya önceden bildirilmeden** başlatılmaz — bu, geniş görsel regresyon riski taşır.
- Ölü kod (kullanılmayan import, kullanılmayan bağımlılık, boş dizin) fark edildiğinde temizlenir, ama bu bir "yan görev" olarak yapılır, ana değişikliğin kapsamını genişletmez — kullanıcıya ayrıca bildirilir.

---

## 21. B2B Kullanıcı Deneyimi ve Kurumsal İletişim — Ek Kurallar

- Yanıt beklentisi yönetimi: "En kısa sürede size geri döneceğiz", "24 saat içinde yanıt" gibi ifadeler yalnızca gerçekten karşılanabilecekse kullanılır.
- İhracat/uluslararası alıcı içeriği (İngilizce landing page'ler) yerelleştirilmiş terminoloji kullanır (ör. "MOQ", "wholesale", "export"), doğrudan Türkçe'den kelimesi kelimesine çeviri yapılmaz.
- Fiyat asla sayfa içinde gösterilmez ("Fiyat için iletişime geçin" / "toplu sipariş fiyatlandırması" mevcut deseni korunur) — bu bilinçli bir B2B satış stratejisidir.
- MOQ (minimum sipariş miktarı) ve teslimat süresi her zaman "değişkendir, teklif aşamasında netleşir" olarak ifade edilir; sabit rakam icat edilmez (§14.2 ile aynı ilke).

---

## 22. Git ve Commit Kuralları

- Commit mesajları öz, "neden" odaklı yazılır; ne değiştiğini diff zaten gösterir.
- Yalnızca kullanıcı açıkça istediğinde commit atılır — otomatik/proaktif commit yapılmaz.
- Bir commit tek bir mantıksal değişikliği kapsar; ilgisiz düzeltmeler (ör. formatting + yeni özellik) ayrı commit'lere bölünür.
- `git push --force`, `git reset --hard`, branch silme gibi geri dönüşü zor işlemler yalnızca kullanıcının açık, o anki talimatıyla yapılır.
- `.env.local`, gerçek API anahtarı içeren hiçbir dosya commit edilmez (`.gitignore` zaten bunu kapsıyor — bozulmaz).
- Secrets/anahtar barındırma ihtimali olan bir dosya stage edilmeden önce içeriği kontrol edilir.

---

## 23. Yayınlama (Deployment) Kuralları

- Hedef platform **Netlify**'dır (bkz. §3.3) — Vercel'e özgü hiçbir paket veya konfigürasyon eklenmez.
- Yayına almadan önce kullanıcı **localde** test eder (`npm run dev` / `npm run build && npm run start`) — bu projenin mevcut iş akışı budur, otomatik deploy tetiklenmez.
- Ortam değişkenleri (`RESEND_API_KEY`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, doğrulama meta etiketleri vb.) `.env.example`'da şablon olarak belgelenir, gerçek değerler yalnızca Netlify ortam değişkenlerinde ve `.env.local`'de tutulur.
- Yayın öncesi kontrol listesi (`tasks.md` "Lansman Kontrol Listesi" bölümü) referans alınabilir, ama §26'daki uyarıyı unutmadan — bazı maddeler gerçekte tamamlanmamış olabilir, kod kontrol edilmeden işaretlere güvenilmez.

---

## 24. Yapılmaması Gerekenler — Özet Liste

1. Renk paletini, logoyu, marka tonunu değiştirmek.
2. Mevcut URL'leri 301 yönlendirmesi olmadan değiştirmek/silmek.
3. `generatePageMetadata()` dışında elle metadata yazmak.
4. `llms.txt` / `ai.txt` / `robots.ts` içeriğini daraltmak veya bilinçli AI bot izinlerini kaldırmak.
5. Doğrulanamayan istatistik, sertifika, fabrika kapasitesi, müşteri yorumu üretmek.
6. Sahte/stok fotoğraf kullanmak; görünür "TODO"/dosya-yolu placeholder bırakmak.
7. Vercel'e özgü paket (`@vercel/*`) eklemek — deploy hedefi Netlify.
8. `useReducedMotion` veya benzeri yalnızca-tarayıcıda-bilinen bir değere göre **farklı element ağacı** render etmek (hydration crash riski — bkz. §10.2).
9. Çalışan bir bileşeni yalnızca "daha temiz kod" gerekçesiyle yeniden yazmak.
10. `tsconfig.json`'daki strict ayarları gevşetmek, `as any` / `@ts-ignore` ile tip hatası bastırmak.
11. `tasks.md`/`audit-report.md`'deki "✅ tamamlandı" işaretlerine kod okumadan güvenmek (bkz. §23, bilinen doküman-kod sapması).
12. Kullanıcı istemeden commit/push/deploy yapmak.
13. Form/API güvenlik katmanını (Zod doğrulama, honeypot) zayıflatmak veya kaldırmak.
14. Yeni bir "geçici" çözümü kalıcı hale getirip belgelemeden bırakmak.

---

## 25. Karar Alma Öncelik Sırası

Bir görevde birden fazla ilke çatıştığında, aşağıdaki sıra uygulanır (üsttekiler alttakileri ezer):

1. **Kullanıcının o anki açık talimatı** (özellikle güvenlik, veri kaybı veya geri dönüşü zor bir işlemle ilgiliyse).
2. **§2 Kırmızı Çizgiler** (mevcut SEO/GEO/URL/schema/marka koruması).
3. **Doğruluk ve dürüstlük** (§14.2 — asla sahte/doğrulanmamış içerik).
4. **Güvenlik** (§18 — veri/kullanıcı güvenliği).
5. **Erişilebilirlik ve performans hedefleri** (§12, §13).
6. **Tutarlılık** (mevcut kod deseniyle uyum — yeni bir "doğru" yol icat etmek yerine mevcut deseni izlemek).
7. **Kod kalitesi / DRY** (§9.2, §20 — yalnızca gerçek tekrar varsa).
8. **Estetik tercih / "daha iyi olabilir" fikirleri** — bunlar önerilir, kullanıcı onayı olmadan uygulanmaz.

Belirsizlik durumunda (örn. bir spec maddesi mevcut kodla çelişiyor, veya bir talimat §2'yi ihlal edebilir): **durdurulur, kullanıcıya açıkça sorulur veya durum raporlanır** — sessizce bir yön seçilip devam edilmez.

---

## 26. Bilinen Teknik Borç ve Doküman-Kod Sapması (Gelecek Ajanlar İçin)

Bu bölüm, sıfırdan keşif yapmayı önlemek için, kod tabanı okunarak doğrulanmış mevcut boşlukları listeler:

- **`tasks.md` ve `audit-report.md` güvenilir değildir** — birçok madde `[x]` işaretli ama kodda yok: rate limiting (Upstash Redis), Sentry/hata izleme, Lighthouse CI, dark mode, gerçek i18n routing, Storybook/axe-core testleri.
- Deploy platformu **Netlify**, spec dokümanları **Vercel** varsayıyor — spec'i harfiyen uygulamadan önce bu sapma akılda tutulur.
- Gerçek fotoğraf, gerçek müşteri referansı, gerçek sertifika **yok** — bunlar sahte veriyle doldurulmaz, kullanıcıdan istenir.
- Ürün kataloğu 6 genel kategoriden ibaret; gerçek SKU/gramaj/renk verisi yok.
- Blog'da 3 makale var (hedef: en az 10).
- `lib/services/` soyutlama katmanı yok; e-posta gönderim mantığı 4 API route dosyasında (`quote`, `sample`, `export`, `contact`) benzer şekilde tekrarlanıyor — bu, ileride gerçek bir "3+ tekrar" refactor adayıdır (§20 kriterini karşılar), ama kullanıcı onayı olmadan başlatılmaz.
- `i18n/` ve `messages/` dizinleri disk üzerinde boş halde duruyor (içerikleri silinmiş, dizinler kalmış) — zararsız ama temizlenebilir.

---

## 27. Kaynak Doküman Haritası

Bu dosya, aşağıdaki dokümanların **özeti değil**, onlardan damıtılmış operasyonel kurallardır. Derinlemesine bağlam gerektiğinde asıl kaynağa gidilir:

| Doküman | İçerik | Güvenilirlik notu |
|---|---|---|
| `.kiro/specs/baskan-havlu-tekstil-platform/requirements.md` | 50 gereksinim, 8 faz, EARS formatında kabul kriterleri | Niyet/hedef olarak güvenilir |
| `.kiro/specs/baskan-havlu-tekstil-platform/design.md` | Tasarım tokenları, sayfa UX mimarisi, SEO/GEO/CONV/TECH/LAUNCH teknik planları | Tasarım niyeti güvenilir; bazı bölümler (Vercel varsayımı, test altyapısı) gerçek koddan sapmış |
| `.kiro/specs/baskan-havlu-tekstil-platform/tasks.md` | ~90 atomik görev, öncelik sıralı | **Durum işaretleri (`[x]`) doğrulanmadan güvenilmez** — bkz. §26 |
| `.kiro/specs/baskan-havlu-tekstil-platform/audit-report.md` | Faz 6-8 denetim geçmişi, kaldırılan yanıltıcı iddialar, üretim hazırlık skoru | Tarihsel karar gerekçesi olarak değerli (özellikle §14.2'nin kökeni) |
| `README.md` | Kısa proje özeti, teknoloji yığını, başlangıç komutları | Genel bakış için güncel tutulmalı |
| `CLAUDE.md` | `@AGENTS.md` içe aktarır | Bu dosyaya işaret eder, ayrıca düzenlenmez |

---

**Son söz:** Bu proje, gerçek bir işletmenin gerçek müşteri kazanma aracıdır. Her satır kod, ya güveni artırır ya azaltır; ya SEO/GEO otoritesini büyütür ya riske atar. Emin olmadığınızda hızlı hareket etmek yerine doğru soruyu sormak, bu projede her zaman daha değerlidir.
