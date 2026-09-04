# Başkan Havlu v2 Roadmap — Değişiklik Günlüğü

Bu dosya, 100 görevlik v2 roadmap'inin her görevinde yapılan değişiklikleri (veya
"sadece analiz, değişiklik yok" görevlerinde bulguları) kayıt altına alır.
Her görev kendi başlığı altında, tarih sırasıyla eklenir. Hiçbir görev üretime
deploy edilmemiştir — tüm çalışma yalnızca yerel repoda, `main` branch üzerinde.

---

## FAZ 0 — Güvenlik (Zorunlu)

### Görev 0.1 — Git commit + tag + backup

**Durum:** Tamamlandı.

- Roadmap başlamadan önceki tüm birikmiş çalışma (önceki oturumlardaki SEO/GEO
  altyapı temizliği, landing page şablonu, API sertleştirme, OG görsel sistemi vb.)
  tek bir checkpoint commit'te toplandı: `c48197d`.
- Tag: `v2-baseline-2026-07-23` — roadmap'te bir şey ters giderse
  `git reset --hard v2-baseline-2026-07-23` ile bu noktaya dönülebilir.
- **Push yapılmadı** (kullanıcı talimatı). Commit ve tag yalnızca yerel repoda.
- `.env.local` kontrolü yapıldı, commit'e dahil edilmedi (`.gitignore` zaten kapsıyor).

### Görev 0.2 — Build / Lint / Typecheck

**Durum:** Tamamlandı, hepsi yeşil.

```
npx tsc --noEmit   → 0 hata
npm run lint       → 0 hata, 0 uyarı
npm run build      → başarılı, 40 sayfa + /og route üretildi
```

---

## FAZ 1 — Kod Kalitesi (Analiz — Değişiklik Yapılmadı)

Bu fazın tamamı **yalnızca analiz** kapsamındadır. Aşağıdaki bulgular için
hiçbir dosya değiştirilmedi. Sayılar `grep` ile kod tabanı taranarak elde
edilmiştir (tahmini değil, ölçülmüştür).

### Görev 1 — Kod Tekrarı Analizi

| # | Tekrar Eden Desen | Nerede | Sayı | Öneri (uygulanmadı) |
|---|---|---|---|---|
| 1 | Koyu (`#1a1a1a`) zeminli sayfa başlığı + görünür breadcrumb (`<nav aria-label="Breadcrumb"><ol>...`) | `about`, `contact`, `new-collection`, `new-collection/[slug]`, `blog` sayfaları | 5 dosya, satır satır neredeyse birebir aynı JSX | Ortak bir `PageHeroBreadcrumb`/`Breadcrumb` bileşenine çıkarılabilir (AGENTS.md §9.2 eşiğini aşıyor — 3+ dosya) |
| 2 | "Eyebrow" etiketi (`text-xs font-semibold uppercase tracking-widest`, turuncu) | `about`, `LandingPage`, `FAQPreview`, `ProductCategories`, `ValueProposition` | 5 dosya, 8 kullanım | Küçük bir `Eyebrow` atomu adayı |
| 3 | Kategori/etiket "pill" rozeti (`rounded-full px-.. py-.. text-xs font-medium`, `#fff7f0`/`#cc6419`) | `blog`, `blog/[slug]`, `new-collection`, `new-collection/[slug]` | 4 dosya | Küçük bir `Tag`/`Chip` atomu adayı |
| 4 | WhatsApp URL inşası (`${SITE_CONFIG.contact.whatsappUrl}?text=${...}`) | 11 dosya | 12 kullanım | Zaten `SITE_CONFIG` tek kaynaktan besleniyor — abartılı soyutlama gerektirmiyor, düşük öncelik |
| 5 | CTA buton temel class'ı (`flex h-12 items-center justify-center rounded-md ...`) | `LandingPage`, `ContactForm`, `CTABand`, `HeroSection` | 7 kullanım | Zaten kısmen `components/ui/button.tsx` ile örtüşüyor ama bu 4 dosya onu kullanmıyor, kendi class string'lerini yazıyor |
| 6 | Inline `style={{ ... }}` renk ataması | Proje genelinde | **269 kullanım / 27 dosya** | AGENTS.md §26'da zaten bilinen teknik borç; büyük çaplı dönüşüm yalnızca kullanıcı açık isterse yapılır (AGENTS.md §6.2, §20) |

**Not:** E-posta gönderim tekrarı (4 API route) ve honeypot tutarsızlığı bu
roadmap başlamadan **önceki oturumda zaten giderilmişti** (`lib/services/email.service.ts`,
`lib/utils/honeypot.ts`) — burada tekrar listelenmedi.

### Görev 2 — Component Mimarisi Analizi

Mevcut envanter: `components/atoms` (1), `molecules` (1), `organisms` (13),
`templates` (1), `schema` (8), `motion-primitives` (2), `providers` (1), `ui` (11).

**Tekrar eden / konsolide edilebilecek component'ler:**

1. **Breadcrumb JSX'i component değil** — her sayfa kendi `<nav><ol>` yapısını
   yazıyor (bkz. Görev 1, #1). Şu an `components/schema/BreadcrumbSchema.tsx`
   yalnızca JSON-LD üretiyor, **görsel** breadcrumb'ın kendi bir bileşeni yok.
   Bu, gerçek bir eksik — 5 dosyada aynı görsel JSX kopyalanmış durumda.
2. **`components/organisms/` içinde 6 tane "hero benzeri koyu zemin section"**
   pattern'i (`about`, `contact`, `new-collection`, `new-collection/[slug]`
   sayfa dosyalarının içinde, component'e çıkarılmamış) — organism seviyesinde
   resmi bir `PageHero` bileşeni yok, her sayfa kendi başlık bloğunu inline yazıyor.
3. **`LandingPage` template zaten iyi bir örnek** — 11 landing page'in ortak
   yapısı doğru şekilde tek bileşende toplanmış (önceki oturumun işi).
4. **`components/ui/button.tsx` var ama çoğu CTA onu kullanmıyor** — `Hero`,
   `CTABand`, `ContactForm`, `LandingPage` kendi `<Link>`/`<a>` + inline style
   CTA'larını yazıyor. Bu, hem kod tekrarı hem tutarlılık riski (birinde stil
   güncellenir, diğerlerinde unutulur).

**Şu an dokunulmadı** — bunlar sonraki fazlarda (özellikle FAZ 2 Header, FAZ 7
Footer) ilgili görev kapsamında ele alınabilecek somut adaylardır.

### Görev 3 — Utility Fonksiyon Analizi

Mevcut envanter: `lib/utils.ts` (`cn()`), `lib/utils/metadata.ts`,
`lib/utils/analytics.ts`, `lib/utils/honeypot.ts`, `lib/utils/rate-limit.ts`.

**Bulgu:** Utility katmanında ciddi bir tekrar **yok** — her dosya tek
sorumluluk taşıyor, önceki oturumda zaten (email/rate-limit/honeypot)
tekilleştirilmişti. Tek gözlem:

- WhatsApp mesaj metni URL-encode işlemi (`encodeURIComponent(\`Merhaba, "${...}" hakkında...\`)`)
  ürün sayfalarında (`new-collection`, `new-collection/[slug]`) neredeyse aynı
  şablonla 2 kez yazılmış. Küçük bir `buildProductWhatsAppUrl(productName)`
  helper'ı çıkarılabilir ama etkisi düşük (2 dosya, tek satır) — AGENTS.md §9.2
  eşiğinin (3+) altında, şu an gerekçesi zayıf.

### Görev 4 — Performans Darboğazları Raporu

**Ölçülebilen:**
- `npm run build` (Turbopack) artık klasik Webpack rota-bazlı boyut tablosunu
  basmıyor — bu Next.js 16 Turbopack build'inin çıktı formatı farkı, bir
  regresyon değil. Gerçek KB rakamları için `@next/bundle-analyzer` zaten
  `devDependencies`'te kurulu ama **`next.config.ts`'e hiç bağlanmamış**
  (`withBundleAnalyzer(...)` sarmalayıcısı yok). Bu yüzden şu an net bir bundle
  boyutu rakamı **veremiyorum** — tahmini rakam uydurmak yerine bunu açıkça
  eksik olarak işaretliyorum.
- Görsel kaynaklı LCP/CLS riski şu an **yok** — sitede logo dışında hiç görsel
  yok (`public/images/` yalnızca 2 logo dosyası). Bu aynı zamanda bir tasarım
  eksikliği (bkz. önceki analiz raporu) ama performans açısından şu an bir
  yük oluşturmuyor.
- `FadeIn` (Framer Motion) her sayfada onlarca kez kullanılıyor (özellikle
  `LandingPage` template: hero'da 3, özellik kartlarında sayı kadar, SSS'de 2 —
  tek bir landing page'de ~10-15 `FadeIn` örneği). Her biri kendi
  `useInView` (IntersectionObserver) kaydı açıyor — tek başına ağır değil,
  ama kümülatif olarak izlenmesi gereken bir büyüklük.
- Framer Motion, `next/dynamic` + `{ ssr: false }` ile değil, doğrudan
  `'use client'` sınırıyla içe aktarılıyor (`requirements.md` Requirement 1.6
  bunu istiyor). Bu, App Router'da genellikle sorun değil — App Router zaten
  client component'leri otomatik olarak ayrı bir client chunk'a ayırıyor —
  ama spec'in birebir istediği `dynamic(..., { ssr: false })` deseni
  uygulanmamış durumda. Gerçek bir performans sorunu olduğuna dair kanıt yok,
  sadece spec-kod sapması olarak not ediyorum.

**Sonraki adım için not:** FAZ 10 (Görev 51-60, Performance) içinde
`@next/bundle-analyzer`'ı `next.config.ts`'e bağlayıp gerçek bir ölçüm
yapmayı öneriyorum — bu, o fazın doğal kapsamı, şimdi (analiz-only fazında)
config değiştirmek istemedim.

---

## FAZ 2 — Header

### Görev 5 — Header UX Analizi (Analiz — Değişiklik Yapılmadı)

`components/organisms/Navbar.tsx` incelendi. Bulgular:

1. **Kritik bulgu — iç bağlantı/SEO açığı:** Navbar'da yalnızca 3 link var:
   Ürünler (`/new-collection`), Hakkımızda, İletişim. **11 landing page'in
   hiçbiri** (`/havlu-ureticisi`, `/toptan-havlu`, `/otel-havlusu` vb.) ve
   **`/blog` de** üst navigasyonda yer almıyor.
2. **`/blog` site genelinde hiçbir bileşenden linklenmiyor** — `grep href="/blog"`
   sıfır sonuç verdi (Navbar, Footer, ana sayfa, landing page'ler dahil hiçbiri
   bağlanmıyor). Blog yalnızca `sitemap.ts` üzerinden bulunabiliyor; gerçek bir
   ziyaretçi için fiilen "orphan" durumda. `requirements.md` Requirement 25.1
   ("ana navigasyon... 11 Landing Page'i bağlamalı") ve 25.7 ("orphan page
   oluşmamalı") ile doğrudan çelişiyor.
3. Footer da yalnızca 5/11 landing page'i linkliyor (bkz. Görev 2 notları) —
   ama Footer, FAZ 7 kapsamında; burada sadece not düşülüyor, dokunulmadı.
4. **Breakpoint tutarsızlığı — kendi AGENTS.md'mde hata buldum:** AGENTS.md
   §11'de "Navbar masaüstünde yatay menü, `lg:` altında mobil menüye düşer"
   yazmışım, ama gerçek kod `md:` breakpoint kullanıyor. Bu, benim önceki
   analiz turumda yaptığım bir hata — düzeltildi (bkz. altta).
5. **Logo render mekanizması kırılgan, dokunulmayacak:** `logo-text.png`
   dosyasının gerçek boyutu **2000×2000 (kare)**. Header'da `200×80`'lik bir
   kutuya `object-fit: cover` + `transform: scale(1.5)` ile zorlanıyor — çok
   katmanlı bir kırpma/zoom hack'i. AGENTS.md §2.8 ve §7.4 gereği logo
   dosyasına ve mevcut kırpma davranışına **dokunulmayacak**; bu bölüm FAZ 2
   kapsamında değiştirilmeyecek sayılan bir alan olarak işaretlendi.
6. Sticky davranış zaten var (`fixed` + scroll>80px'te blur/gölge) — Görev 7
   bunu sıfırdan kurmak yerine gözden geçirip iyileştirecek.
7. Mobil menü açıkken `body` scroll kilidi yok, `Escape` ile kapama yok,
   focus trap yok — Görev 10'da ele alınacak.
8. Mobil overlay açıldığında hiçbir giriş animasyonu yok (anlık `display` ile
   açılıyor) — Görev 9/10 kapsamında değerlendirilecek.

**Sonuç:** Görev 6-10 için somut, ölçülmüş bir çalışma planı çıktı. En yüksek
değerli iş: `/blog`'u ve mümkün olduğunca çok landing page'i gerçek
navigasyona kazandırmak (mega menu, Görev 8).

**Yan düzeltme (bu görev kapsamında, dosya dışı):** `AGENTS.md` §11'deki
yanlış `lg:` referansı `md:` olarak düzeltildi (gerçek kodla eşleşmesi için).

---

### Görev 6 — Header Redesign

**Durum:** Tamamlandı. Dosya: `components/organisms/Navbar.tsx`.

1. **Gerçek kontrast bug'ı düzeltildi.** Header `scrolled` olmadan tam saydamdı
   (`backgroundColor: 'transparent'`) ve nav metni/logo her zaman sabit koyu
   (`#1a1a1a`) renkteydi. `about`, `contact`, `new-collection`,
   `new-collection/[slug]`, `blog`, `blog/[slug]` sayfalarının üst bölümü koyu
   (`#1a1a1a`) zeminli olduğu için, sayfa ilk açıldığında (scroll=0) header
   fiilen **görünmez/okunaksızdı** — koyu metin koyu zemin üzerinde. Düzeltme:
   header artık her zaman aynı opak bej zemin + blur'u kullanıyor
   (`rgba(250,248,245,0.96)`); yalnızca scroll'da gölge derinleşiyor. Bu, hem
   ana sayfa/landing page'lerdeki (açık hero) görünümü bozmuyor hem de koyu
   hero'lu sayfalardaki gerçek bug'ı gideriyor.
2. **`/blog` linki `navLinks`'e eklendi** — Görev 5'te tespit edilen "blog
   hiçbir yerden linklenmiyor" sorununun bir kısmı artık çözüldü (header hem
   masaüstü hem mobil menüde `navLinks` dizisini paylaştığı için tek
   değişiklik iki yerde de etkili oldu).
3. **Logo render mekanizmasına dokunulmadı** (bkz. Görev 5, madde 5) — sadece
   `<header>` seviyesindeki arka plan/gölge stiline dokunuldu.

**Doğrulama:** `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).

### Görev 7 — Sticky Header İncelemesi

**Durum:** İncelendi, ek kod değişikliği yapılmadı (gerekçeli karar).

Header zaten `fixed top-0` ile her sayfada sabit — bu anlamda "sticky" olma
gereksinimi zaten karşılanıyordu; asıl eksik, Görev 6'da düzeltilen
okunabilirlik sorunuydu. Ek bir "scroll'da küçülme" (header height shrink)
efekti değerlendirildi ama **uygulanmadı**: logo konteyneri sabit `80px`
yükseklikte hardcoded (`width:200px, height:80px`) ve header'ın mevcut
yüksekliği (`h-24` = 96px) bu kutuyla hizalı. Header'ı örneğin `h-20`'ye
(80px) küçültmek, logo kutusunun dikey boşluğunu sıfırlayıp görsel olarak
sıkışık/riskli bir sonuç doğurabilirdi — ve logo alanına dokunmamak Görev
5'te zaten kırmızı çizgi olarak işaretlenmişti. Somut bir bug olmadığı için
(AGENTS.md §20: "somut bug olmadan yeniden yazma") bu değişiklik yapılmadı.

---

### Görev 8 — Mega Menu

**Durum:** Tamamlandı. Dosya: `components/organisms/Navbar.tsx`.

Görev 5'in en yüksek değerli bulgusu çözüldü: masaüstü nav'da "Ürünler"
artık düz bir link değil, tıklamayla açılan bir mega menu tetikleyicisi.
Menü 3 sütun halinde **11 landing page'in tamamını** kategorize ediyor:

- **Havlu:** Havlu Üreticisi, Toptan Havlu, Otel Havlusu, Promosyon Havlu, Nakışlı Havlu
- **Bornoz:** Bornoz Üreticisi, Toptan Bornoz, Otel Bornozu
- **Export:** Turkish Towel Manufacturer, Wholesale Towel Supplier, Bathrobe Manufacturer

Alt kısımda `/new-collection`'a giden "Tüm Koleksiyon" vurgulu bağlantısı var.

**Uygulanan etkileşim/erişilebilirlik temeli** (tam a11y cilası Görev 10'da):
- `aria-expanded` + `aria-haspopup="true"` buton üzerinde.
- Dışarı tıklayınca kapanır (`mousedown` + ref kontrolü).
- `Escape` tuşuyla kapanır.
- Link'e tıklanınca menü otomatik kapanır (`onClick={() => setProductsOpen(false)}`).

**Doğrulama:**
- `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).
- **Gerçek dev server'da canlı test edildi** — sadece "derlendi" denmedi:
  çalışan `localhost:3000` sürecine `curl` ile istek atılıp `aria-haspopup`,
  `aria-expanded="false"` ve "Ürünler" metninin gerçekten HTML çıktısında
  olduğu doğrulandı; `.next/dev/logs/next-development.log`'da hydration
  hatası olmadığı teyit edildi.

**Kapsam dışı bırakılan (bilinçli):** Mobil menüde henüz bu kategorili yapı
yok — mobil hâlâ "Ürünler"i düz link olarak gösteriyor. Bu, ayrı roadmap
görevi olduğu için (Görev 9) kapsam dışında tutuldu.

---

### Görev 9 — Mobil Menü

**Durum:** Tamamlandı. Dosya: `components/organisms/Navbar.tsx`.

- Mobil menüde "Ürünler" artık masaüstüyle tutarlı şekilde bir akordeon:
  dokununca 3 kategori (Havlu/Bornoz/Export) + "Tüm Koleksiyon" bağlantısı
  açılıyor. Aynı `productsOpen` state'i masaüstü mega menu ile paylaşılıyor
  (iki ayrı state tutmaya gerek yoktu, tek state iki yerde de doğru çalışıyor
  çünkü ikisi aynı anda görünür olamaz — biri `md:` altında, diğeri üstünde).
- **Gerçek bug düzeltildi:** Mobil overlay konteynerinde `overflow-y-auto`
  yoktu. Akordeon açılınca (11 link + 3 başlık + CTA'lar) küçük ekranlarda
  içerik viewport'u taşıp alttaki WhatsApp/Teklif Al butonlarını erişilemez
  hale getirebilirdi. `overflow-y-auto` eklendi.
- Link'e tıklanınca hem mobil menü hem akordeon kapanıyor (`setMobileOpen(false)`
  + `setProductsOpen(false)` birlikte).

**Doğrulama:** `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).

---

### Görev 10 — Header Accessibility

**Durum:** Tamamlandı. Dosya: `components/organisms/Navbar.tsx`.

Görev 5'te tespit edilen 3 eksik giderildi:

1. **Body scroll-lock:** Mobil menü açıkken `document.body.style.overflow = 'hidden'`
   uygulanıyor, kapanınca önceki değere geri dönüyor (bir sonraki sayfada
   `overflow` state'i sızmasın diye önceki değer saklanıp geri yükleniyor,
   sabit `'auto'` yazılmıyor).
2. **Escape ile kapama:** Mobil menü de artık (mega menu'yle tutarlı şekilde)
   `Escape` tuşuna basınca kapanıyor.
3. **Focus yönetimi:** Mobil menü açılınca odak otomatik kapatma butonuna
   taşınıyor; kapanınca odak hamburger butonuna geri dönüyor (klavye/ekran
   okuyucu kullanıcısının odağı kaybetmemesi için).
4. **`aria-current="page"`:** Aktif sayfanın nav linki hem masaüstünde hem
   mobilde `aria-current="page"` alıyor ve turuncu vurgu rengiyle
   işaretleniyor — kullanıcı "şu an neredeyim" bilgisini görsel + programatik
   olarak alıyor.

**Düzeltilen ek lint uyarısı:** `react-hooks/exhaustive-deps` — cleanup
fonksiyonu içinde `ref.current`'a doğrudan erişim yerine, ref değeri effect
içinde bir değişkene kopyalanıp cleanup'ta o değişken kullanıldı (React'ın
önerdiği doğru desen).

**Doğrulama:**
- `tsc` ✅ · `lint` ✅ (0 hata, 0 uyarı) · `build` ✅ (40 sayfa + `/og`).
- Canlı test: `/about` sayfası `curl` ile çekildi, `aria-current="page"`
  gerçekten HTML çıktısında bulundu; hydration hatası yok.

---

## FAZ 2 Özeti (Görev 5-10 — Tamamlandı)

Header artık: (1) hiçbir sayfada okunaksız olmuyor, (2) `/blog` ve 11 landing
page'in tamamı gerçek navigasyondan erişilebilir, (3) mobil ve masaüstünde
tutarlı, erişilebilir bir mega menu/akordeon yapısına sahip. Logo dosyasına
ve mevcut kırpma mekanizmasına hiçbir noktada dokunulmadı.

**Değişen tek dosya:** `components/organisms/Navbar.tsx` (+ `AGENTS.md`'de
1 satırlık `md:`/`lg:` düzeltmesi).

---

## FAZ 3 — Hero

### Görev 11 — Hero UX Analizi (Analiz — Değişiklik Yapılmadı)

`components/organisms/HeroSection.tsx` incelendi. Bulgular:

1. **Kritik bulgu — CTA hiyerarşi ters dönmüş:** AGENTS.md §8.1'in kendisi
   "Birincil CTA: Teklif Al → /contact, İkincil CTA: WhatsApp" diye tanımlıyor.
   Ama Hero'da **"Ürünleri İncele"** (ürün gezme, bir dönüşüm eylemi değil)
   dolu turuncu (`#e87722`) zeminle en yüksek görsel ağırlığı alıyor; asıl
   birincil eylem olması gereken **"Teklif Al" ise sade bir outline/border
   buton**. Üstelik 3 buton yan yana aynı boyutta — hiçbiri net öne çıkmıyor
   (klasik "çok seçenek = düşük dönüşüm" sorunu).
2. **Güven şeridi (stats) tutarsız:** 4 kutudan 2'si gerçek veri (1981,
   ihracat pazarları), 2'si veri değil ifade ("Otel · Kurum · Promosyon",
   "Özel Üretim") — "istatistik" görünümünde ama içerik olarak istatistik
   değiller. İçerik **doğru ve dürüst** (uydurma yok), sadece sunum tutarsız.
3. **Kod tekrarı:** Aynı 4 kategori ikonu (otel, bornoz, promosyon, özel
   üretim) hem masaüstü alt kartlarda (2 tanesi) hem mobil pill şeridinde
   (4 tanesi) elle yazılmış inline SVG olarak **iki kez** kodlanmış — projenin
   geri kalanı `lucide-react` kullanırken burası tutarsız.
4. **Mobil hero gereksiz uzun:** Mobilde hem "İstatistikler" grid'i hem de
   ayrı bir "kategori pill" şeridi (4 ikon) art arda gösteriliyor — ikisi de
   büyük ölçüde aynı bilgiyi (otel/bornoz/promosyon/özel üretim) tekrarlıyor.
   İkisi üst üste, mobilde bir sonraki bölüme ulaşmadan önce gereksiz scroll
   uzunluğu yaratıyor. Pill şeridi tamamen `aria-hidden="true"` dekoratif —
   kaldırılması SEO/schema'yı etkilemez.
5. **Scroll ipucu yok:** Hero `min-h-[88vh]` — bu kadar yüksek bir bölümde
   kullanıcıya "aşağıda daha fazla içerik var" sinyali veren bir gösterge yok.
6. Motion (Görev 16) zaten iyi durumda (staggered `FadeIn`) — küçük bir
   mikro-etkileşim (buton hover lift) eklenebilir.

**Sonuç:** Görev 12-17 kapsamında tek dosyada (`HeroSection.tsx`) toplu ama
görev bazlı loglanan bir düzenleme yapılacak.

### Görev 12-17 — Uygulama (Premium Hero, CTA, Trust, Scroll, Motion, Mobile)

**Durum:** Tamamlandı. Tek dosya: `components/organisms/HeroSection.tsx`.
Tüm alt görevler aynı dosyada doğal olarak iç içe geçtiği için tek seferde
uygulanıp doğrulandı; her görevin katkısı ayrı ayrı aşağıda listeleniyor.

- **Görev 13 (CTA optimizasyonu):** Hiyerarşi düzeltildi. "Teklif Al" artık
  dolu turuncu birincil buton ve **ilk sırada**; WhatsApp ikinci (yeşil
  outline); "Ürünleri İncele" üçüncü, düşük görsel ağırlıklı bir metin
  linkine indirgendi (ok ikonuyla). AGENTS.md §8.1 ile artık birebir uyumlu.
- **Görev 14 (Trust Elements):** CTA altına, sitede **zaten var olan** bir
  vaadi (`/tesekkurler` sayfasındaki "En geç 24 saat içinde size geri
  döneceğiz" ifadesiyle birebir aynı) tekrar eden küçük bir güven satırı
  eklendi: "Teklif taleplerine en geç 24 saat içinde dönüş yapıyoruz." —
  **yeni bir iddia değil**, zaten sitede tutarlı şekilde kullanılan bir
  sözü daha görünür bir yere taşımak (AGENTS.md §14.2 ihlali yok).
- **Görev 15 (Scroll davranışı):** Hero altına, azaltılmış hareket
  tercihine duyarlı, statik/sade bir "Aşağı Kaydırın" göstergesi eklendi.
- **Görev 16 (Motion):** CTA butonlarına `hover:-translate-y-0.5` mikro
  lift efekti eklendi (transform-only, CLS'e etkisi yok).
- **Görev 17 (Mobile Hero):** Mobildeki tekrarlayan kategori-pill şeridi
  (4 elle-yazılmış SVG ikon, ~100 satır) kaldırıldı — bilgi zaten üstteki
  "İstatistikler" şeridinde mevcut. Mobil hero artık daha kısa, tekrar yok.
- **Görev 12 (Premium Hero) / Görev 11 madde 3 (kod tekrarı):** Kalan 2 alt
  kart ikonu (otel, promosyon) elle yazılmış SVG yerine `lucide-react`
  (`Building2`, `Gift`) ile değiştirildi — projenin geri kalanıyla tutarlı.

**Doğrulama:** `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).

### ⚠️ Görev 11-17 sırasında bulunan kritik, site geneli bug — `FadeIn`

Hero değişikliklerini gerçek dev server'da canlı doğrularken (`curl` +
`.next/dev/logs/next-development.log` kontrolü), tarayıcı konsolundan gelen
**gerçek bir hydration hatası** yakalandı. Bu, Hero'ya özgü değildi —
`ValueProposition`, `FAQPreview`, `CTABand` dahil **`FadeIn` kullanan her
bileşende** oluşuyordu.

**Kök neden:** Bu, önceki oturumda düzeltilen hydration çökmesiyle **aynı
kök neden ailesinden** ama farklı bir tezahürüydü. O düzeltmede `FadeIn`'in
farklı bir DOM ağacı render etmesi (yapısal sorun) giderilmişti, ama
`initial`/`animate` hedeflerindeki `y` (dikey kayma) değeri hâlâ
`reduceMotion`'a bağlıydı: `{ opacity: 0, y: reduceMotion ? 0 : 24 }`.
`reduceMotion` sunucuda her zaman `null`, tarayıcıda ise (bu makinede
"Reduced Motion" işletim sistemi ayarı açık olduğu için) **istemcinin ilk
render'ında bile** `true` dönüyor — yani sunucunun ürettiği `transform:
translateY(24px)` ile istemcinin hydration anında beklediği `transform:
none` birbirini tutmuyordu. Bu, her `FadeIn` örneğinde ayrı ayrı loglanan
bir "hydration mismatch" hatasına yol açıyordu (sayfa tamamen boşalmıyordu
bu kez — önceki yapısal düzeltme sayesinde — ama konsol her sayfada
onlarca hata ile doluyordu, bu kabul edilemez).

**Düzeltme:** `components/motion-primitives/fade-in.tsx` — `initial` ve
`animate` hedefleri artık **sabit** (`HIDDEN`/`VISIBLE`, `reduceMotion`'dan
tamamen bağımsız). `reduceMotion` yalnızca `transition.duration`/`delay`
değerlerini etkiliyor (0 yapıyor) — bu değerler SSR çıktısındaki `style`
attribute'una hiç yansımadığı için sunucu/istemci arasında **hiçbir**
uyuşmazlık oluşturamaz. Azaltılmış hareket tercihi hâlâ tam olarak
karşılanıyor (geçiş anlık oluyor, kayma animasyonu görünmüyor) — sadece
artık bunu SSR'ı bozmadan yapıyor.

**Doğrulama — dürüst not:** `tsc`/`lint`/`build` yeşil. Ama bu spesifik hata
sınıfı yalnızca **gerçek bir tarayıcının** JS çalıştırıp hydration yapmasıyla
ortaya çıkıyor; `curl` sadece sunucu HTML'ini çekiyor, JS çalıştırmıyor —
bu yüzden `curl` ile "hata yok" diye kesin doğrulama **yapamam**. Düzeltmenin
doğruluğuna mekanizmayı tam anlayarak (SSR'a yansıyan tek değişken artık
sabit) yüksek güvenle inanıyorum, ama **sizin tarayıcınızda sert yenileme
(Ctrl+Shift+R) yapıp konsolda kırmızı hata kalmadığını doğrulamanızı
öneririm** — özellikle sizde zaten "Reduced Motion" açık olduğu için bu
hatayı en çok siz görürsünüz.

---

## FAZ 4 — Ürünler

### Görev 18-21 — Product Card, Hover, Grid, Kategori Yapısı

**Durum:** Tamamlandı. Dosya: `app/new-collection/page.tsx`.

**Analiz bulguları (uygulanmadan önce):**
1. **Gerçek bug:** "WhatsApp ile sor" `aria-label`'ına sahip buton, görsel
   olarak bir `ArrowRight` (sağ ok) ikonu gösteriyordu — WhatsApp/telefon ile
   hiçbir ilgisi olmayan yanlış bir ikon. Screen reader kullanıcısı doğru
   bilgiyi alıyordu ama görme engeli olmayan bir kullanıcı için ikon
   anlamsızdı.
2. Kartlarda hover'da yalnızca gölge artıyordu, sitenin geri kalanında
   (ProductCategories, CTABand, Hero CTA'ları) artık standart olan
   `hover:-translate-y` lift efekti eksikti.
3. Ürün adı kart içinde `<h2>` idi — sayfanın kendi `<h1>`'i ile aynı
   hiyerarşi seviyesinde 6 ayrı `<h2>` anlamsal olarak zayıftı.
4. 6 ürün, 3 kategoriye (`havlu`:3, `otel`:2, `promosyon`:1) ayrılmış veri
   modeline sahipken, sayfa hepsini tek, kategorisiz bir ızgarada gösteriyordu.

**Uygulanan değişiklikler:**
- WhatsApp butonu artık `lucide-react`'in `Phone` ikonunu kullanıyor.
- Kart hover'ına `hover:-translate-y-1` eklendi (transform-only, CLS'e etkisi yok).
- Kart JSX'i tekrarı önlemek için dosya-içi (yalnızca bu dosyada kullanılan,
  export edilmeyen) bir `ProductCard` bileşenine çıkarıldı — 3 kategori
  döngüsünde aynı ~70 satırlık JSX'in kopyalanmasını önledi.
- Ürünler artık kategoriye göre gruplu gösteriliyor: her kategori kendi
  başlığı (ürün sayısıyla birlikte) + kendi ızgarasıyla render ediliyor.
  Ürün adı artık doğru şekilde `<h3>` (kategori `<h2>`'sinin altında).
- **Görev 20 (Responsive Grid):** İncelendi, değişiklik yapılmadı — mevcut
  `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` deseni zaten AGENTS.md §11'e
  uygun kademeli artış. 6 ürünlük küçük katalogda 4. bir sütun eklemek
  dengesiz bir satır (4+2) yaratırdı; mevcut 3 sütun (2 satır × 3) en
  dengeli seçenek.

**Doğrulama:**
- `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).
- Canlı test: `/new-collection` `curl` ile çekildi — sunucu tarafında hata
  yok, 3 kategori başlığı ve 6 ürünün tamamı (El Havlusu, Banyo Havlusu,
  Promosyon Havlu dahil doğrulandı) render'da mevcut, WhatsApp butonu 6 kez
  doğru şekilde bulundu.

---

### Görev 22 — Product Detail UX

**Durum:** Tamamlandı. Dosya: `app/new-collection/[slug]/page.tsx`.

"Benzer Ürünler" (related products) kartları yalnızca metindi, ana ızgaradaki
kartlarla görsel tutarlılığı yoktu. Küçük bir `BrandPatternPanel` thumbnail'i
+ `hover:-translate-y-1` eklendi — artık ana koleksiyon ızgarasıyla aynı
görsel dile sahip. Breadcrumb JSX tekrarına (Görev 1/5'te not edilmiş bilinen
bulgu) bilinçli olarak dokunulmadı — o, ayrı, çok dosyalı bir refactor konusu.

### Görev 23 — Schema

**Durum:** Tamamlandı. Dosyalar: `components/schema/CollectionPageSchema.tsx`
(yeni), `app/new-collection/page.tsx`, `app/new-collection/[slug]/page.tsx`.

1. **Eksik schema eklendi:** `/new-collection` listeleme sayfasında hiç
   şema yoktu (yalnızca `BreadcrumbSchema`) — `requirements.md` Requirement
   19.5'in istediği `CollectionPage` + `ItemList` şeması artık ekleniyor,
   6 ürünün tamamı `ListItem` olarak listeleniyor.
2. **`ProductSchema`'nın `image` alanı düzeltildi:** Önceden **6 ürünün
   tamamı** aynı genel logo görselini (`SITE_CONFIG.seo.ogImage`) paylaşıyordu
   — Google Rich Results için zayıf bir sinyal (aynı görsel, farklı ürünler).
   Artık her ürün, FAZ Görev 8'de kurulan dinamik OG görsel rotasını
   (`/og?title=<ürün adı>`) kullanıyor — her ürünün şema görseli artık
   **kendi adını içeren, birbirinden farklı** bir görsel. Sahte veri
   eklenmedi (§14.2) — sadece zaten var olan, doğrulanmış bir mekanizma
   yeniden kullanıldı.
3. **Fiyat alanı bilinçli olarak eklenmedi** — AGENTS.md §21 "fiyat asla
   sayfa içinde gösterilmez" kuralı zaten mevcut `offers.description`
   metniyle ("Fiyat için iletişime geçin") uyumlu; bu kasıtlı bir iş modeli
   kararı, eksiklik değil.

**Doğrulama:**
- `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).
- **Canlı JSON-LD doğrulaması** (yalnızca "derlendi" denmedi): `curl` ile
  hem `/new-collection` hem `/new-collection/el-havlusu` çekildi;
  `CollectionPageSchema`'nın gerçek 6 ürünü `ItemList` olarak listelediği
  ve `ProductSchema`'nın `image` alanının artık
  `https://baskanhavlu.com/og?title=El%20Havlusu` gibi ürüne özel bir URL
  ürettiği ham JSON çıktısından doğrulandı.

---

## FAZ 4 Özeti (Görev 18-23 — Tamamlandı)

Ürün kataloğu artık kategorilere ayrılmış, tutarlı hover/motion diline sahip,
gerçek bir bug (yanlış WhatsApp ikonu) düzeltilmiş ve schema kapsamı
genişletilmiş durumda (CollectionPage/ItemList eklendi, Product image'ları
artık ürüne özel).

---

## FAZ 5 — Firma

### Görev 24-28 — Kurumsal Sayfa, Hikaye, Üretim Süreci, Kalite, İhracat

**Durum:** Tamamlandı. Dosya: `app/about/page.tsx`.

**Önce analiz:** `requirements.md` Requirement 6.1, `/about` sayfasının şu alt
bölümleri içermesini istiyor: *Firma Hakkında, Üretim Süreci, Kalite Kontrol,
Üretim Kapasitesi, İhracat Hizmetleri, Özel Üretim (Private Label),
Sertifikalar, Referanslar*. Mevcut sayfada **"Kalite Kontrol" ve "Özel Üretim
(Private Label)" hiç yoktu** — Kalite Kontrol sadece 5 adımlık üretim
sürecinin içinde tek bir madde olarak geçiyordu, Özel Üretim ise hiç
bahsedilmiyordu.

**Bilinçli olarak eklenmeyenler (gerekçeli):** Üretim Kapasitesi, Sertifikalar
ve Referanslar — bunlar için gerçek rakam/belge/müşteri verisi yok; AGENTS.md
§14.2 gereği **uydurulmadı**, önceki oturumlarda zaten bilinen boşluk olarak
işaretlenmiş durumda kalmaya devam ediyor.

**Uygulanan değişiklikler:**
- **Görev 25 (Hikaye):** "Kim Biz?" paragrafına Havlucular Çarşısı'nın
  Türkiye'nin en köklü havlu ticaret merkezlerinden biri olduğu (zaten
  `llms.txt`'de kullanılan bir konumlandırma) eklendi — anlatıyı biraz daha
  "hikaye" hissi versin diye. **Kendi kendimi düzelttiğim bir an:** İlk
  taslakta "kuşaklar boyu süren tedarikçi ilişkileri" gibi doğrulanamayan bir
  ifade yazmıştım — hiçbir yerde teyit edilmemiş bir iddiaydı, fark edip
  kaldırdım, yayına hiç girmeden.
- **Görev 26 (Üretim Süreci):** 5 adıma (İplik Seçimi, Dokuma, Boyama, Kalite
  Kontrol, Paketleme & Sevkiyat) `lucide-react` ikonları eklendi (Scissors,
  Layers, Palette, ShieldCheck, Truck) — önceden sadece numaralı daireydi.
- **Görev 27 (Kalite):** Süreç adımlarının altına ayrı bir "Kalite Kontrol
  Yaklaşımımız" vurgu kutusu eklendi. **Kendi kendimi düzelttiğim ikinci an:**
  İlk taslakta "dikiş sağlamlığı, renk haslığı ve gramaj tutarlılığı kontrol
  edilir" gibi spesifik, doğrulanmamış teknik kontrol kriterleri yazmıştım —
  makul/inandırıcı görünse de gerçekte teyit edilmemiş bir iddiaydı, fark
  edip yalnızca zaten var olan genel ifadeye ("her parti titizlikle kontrol
  edilir") geri döndürdüm.
- **Görev 24 (Özel Üretim / Private Label — eksik bölüm eklendi):** Yeni bir
  bölüm: Logo Nakışı/Baskı, Özel Renk Seçimi, Özel Ambalaj — üçü de zaten
  ürün verisinde (`content/products`) ve SSS'lerde tekrarlanan, doğrulanmış
  hizmetler; yeni bir iddia değil, dağınık halde olan bilginin kendi
  bölümünde toplanması.
- **Görev 28 (İhracat):** `llms.txt`'de zaten listelenen "İhracat
  organizasyonu" hizmeti, ihracat bölümüne küçük bir rozet olarak eklendi.

**Doğrulama:**
- `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).
- Canlı test: `/about` `curl` ile çekildi — "Özel Üretim", "Kalite Kontrol
  Yaklaşımımız" ve "İhracat organizasyonu tedarik sürecine dahildir" metinleri
  render'da bulundu, sunucu tarafında hata yok.

**Önemli not — kendi kendine denetim:** Bu görev sırasında **iki kez**
kendi yazdığım içeriği tekrar okuyup doğrulanamayan iddiaları fark edip
kaldırdım. Bu, AGENTS.md §14.2'nin ne kadar kolay ihlal edilebileceğini
(iyi niyetle, "muhtemelen doğrudur" diye yazarken) ve gözden geçirmenin
neden zorunlu olduğunu gösteriyor.

---

## FAZ 6 — Güven

### Görev 29-33 — Trust Section, İstatistikler, Referanslar, Sertifikalar, SSS

**Durum:** Tamamlandı. Dosyalar: `components/organisms/FAQPreview.tsx`,
`app/about/page.tsx`.

**Görev 30 (İstatistikler):** Hero ve About'taki istatistik şeritleri
(Görev 11'de zaten incelenmişti) gözden geçirildi — hepsi gerçek/doğrulanabilir
veriye (1981, 2 ihracat bölgesi, 6 ürün kategorisi) dayanıyor, ek değişiklik
gerekmedi.

**Görev 31 (Referanslar) ve Görev 32 (Sertifikalar):** İncelendi, **hiçbir
değişiklik yapılmadı** — gerçek müşteri yorumu veya sertifika verisi yok.
`ReviewSchema.tsx` bileşeni tanımlı ama hâlâ hiçbir sayfada kullanılmıyor
(doğru davranış — gerçek veri gelene kadar böyle kalmalı). Sahte
referans/sertifika **eklenmedi** (AGENTS.md §14.2).

**Görev 33 (SSS) — gerçek, önceden fark edilmemiş bir schema bug'ı bulundu
ve düzeltildi:**

`/about` sayfası kendi `FAQSchema`'sını 4 soruyla (firma/konum/sektör/ihracat
odaklı) tanımlıyordu, ama sayfa içinde görünür olarak **tamamen farklı bir
soru seti** (`FAQPreview`'ın 6 genel ürün/sipariş sorusu) render ediliyordu.
Yani JSON-LD şema, sayfada görünen içerikle **uyuşmuyordu** — Google Rich
Results kurallarına göre bu bir risktir (şema görünür içeriği yansıtmalı).
Ayrıca **ana sayfada** `FAQPreview` (6 soru) görünür olarak render ediliyordu
ama hiç `FAQSchema`'sı yoktu — kayıp bir fırsat.

**Düzeltme:**
- `FAQPreview` artık kendi verisiyle **kendi `FAQSchema`'sını da render
  ediyor** — bileşen nerede kullanılırsa kullanılsın şema/görünür içerik
  otomatik olarak eşleşiyor.
- `/about` sayfası artık `FAQPreview` kullanmıyor; kendi `faqItems`'ını
  (zaten `FAQSchema`'sında kullanılan aynı dizi) `FAQAccordion` ile
  doğrudan render ediyor — şema ve görünür içerik artık **birebir aynı
  kaynaktan** geliyor.
- "Tüm soruları görüntüle" linki `/about#sss`'e gidiyordu ama artık orada
  farklı bir konu (firma soruları) olduğu için, bağlam karışıklığını önlemek
  adına linki "Başka bir sorunuz mu var? İletişime geçin →" (`/contact`)
  olarak güncelledim.

**Doğrulama:**
- `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).
- **Canlı JSON-LD doğrulaması:** Hem `/` hem `/about` `curl` ile çekildi;
  her iki sayfada da `FAQPage` şemasının içeriğinin sayfada görünen
  sorularla **birebir eşleştiği** ham JSON çıktısından teyit edildi
  (ana sayfada MOQ/logo/numune/ihracat/teslimat/otel soruları; about'ta
  firma/konum/sektör/ihracat soruları).

---

## FAZ 7 — Footer

### Görev 34-36 — Footer Redesign, SEO Footer, İletişim

**Durum:** Tamamlandı. Dosya: `components/organisms/Footer.tsx`.

**Görev 35 (SEO Footer) — Görev 5'te önceden tespit edilmiş bulgunun
çözümü:** Footer'ın "Ürün Kategorileri" kolonunda **11 landing page'in
yalnızca 4'ü** linkliydi; üstelik "El Havlusu" ve "Banyo Havlusu" adında iki
ayrı link görünüyordu ama **ikisi de aynı genel `/new-collection`
URL'sine** gidiyordu — sanki ayrı sayfalarmış gibi görünen ama olmayan
linkler. Düzeltildi: artık 8 Türkçe landing page'in tamamı ayrı bir
"Ürün Kategorileri" kolonunda, 3 İngilizce (export) landing page ise yeni
bir "Export" kolonunda listeleniyor. Footer artık **11 landing page'in
tamamına + Blog'a** gerçek, doğru linkler içeriyor.
- Grid `lg:grid-cols-4`'ten `lg:grid-cols-3 xl:grid-cols-5`'e çıkarıldı
  (5. kolon eklendiği için), kademeli artış korunarak (AGENTS.md §11: tek
  adımda büyük sıçrama yapılmaz).

**Görev 36 (İletişim) — gerçek bir tutarsızlık düzeltildi:** Footer yalnızca
"Pzt–Cum 09:00–18:00" gösteriyordu; `SITE_CONFIG.openingHours`'ta ikinci bir
kayıt (`Cmt 09:00-14:00`) var ve bu, `/contact` sayfasında zaten
gösteriliyordu — footer bunu sessizce atlıyordu. Artık footer da
`SITE_CONFIG.openingHours` dizisinin **her iki** kaydını da gösteriyor
(programatik olarak, sabit metin tekrar yazılmadan — AGENTS.md §14.4 NAP
tutarlılığı ilkesine daha uygun).

**Görev 34 (Footer redesign):** Her kolona kademeli gecikmeli `FadeIn`
eklendi (sitenin geri kalanıyla tutarlı motion dili).

**Doğrulama:**
- `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).
- Canlı test: Ana sayfa `curl` ile çekildi; "Bornoz Üreticisi", "Nakışlı
  Havlu", "Wholesale Towel Supplier", "Bathrobe Manufacturer" linkleri ve
  "Cmt 09:00" (Cumartesi saati) render'da doğrulandı.

---

## FAZ 8 — Motion

### Görev 37 — Motion System

**Durum:** İncelendi, değişiklik gerekmedi. `grep` ile doğrulandı: `motion.div`
(Framer Motion) yalnızca `components/motion-primitives/fade-in.tsx` içinde
kullanılıyor — sitenin hiçbir yerinde ad-hoc/tutarsız bir Framer Motion
kullanımı yok. AGENTS.md §10.1'in istediği "tek giriş noktası" kuralı zaten
tam olarak sağlanıyor.

### Görev 38 — Page Transition

**Durum:** Değerlendirildi, **uygulanmadı** (bilinçli karar). AGENTS.md
§10.4 bunu zaten açıkça yasaklıyor: sayfa geçiş animasyonu (`AnimatePresence`
ile route transition) eklenmeden önce LCP/INP etkisinin ölçülmesi ve App
Router navigasyon davranışıyla çakışmadığının doğrulanması gerekiyor. Bu
altyapı (Lighthouse CI, gerçek ölçüm ortamı) şu an yok. Somut bir kullanıcı
talebi veya ölçülmüş bir sorun olmadan, çalışan bir navigasyon davranışını
riske atacak bir animasyon eklemek "önce koru, sonra geliştir" ilkesine
aykırı olurdu.

### Görev 39 — Micro Interaction

**Durum:** Tamamlandı (kapsamlı ama hedefli). Dosyalar: `CTABand.tsx`,
`ContactForm.tsx`.

`grep` ile doğrulandı: `active:` (basma/tıklama) durumu sitede yalnızca
`components/ui/button.tsx`'te vardı — Hero, CTABand, ContactForm, ProductCard
gibi elle stillendirilmiş CTA'ların hiçbirinde basma anı geri bildirimi
yoktu. En yüksek trafikli/dönüşüm kritik CTA'lara (`CTABand`'ın iki butonu,
`ContactForm`'un gönder butonu) `active:scale-[0.97-0.98]` eklendi — hafif
bir "basılma" hissi. **Bilinçli olarak sitedeki her tek butona uygulanmadı**
(ör. footer, 404 sayfası gibi düşük trafikli CTA'lar) — bu, orantısız,
düşük değerli bir kapsam genişlemesi olurdu.

### Görev 40 — Loading State

**Durum:** Değerlendirildi, ek değişiklik gerekmedi. Site neredeyse tamamen
statik (SSG/ISR) render ediliyor; sayfalar arası gezinmede gerçek bir
"yükleniyor" boşluğu oluşmuyor. Tek gerçek asenkron işlem — `ContactForm`
gönderimi — zaten kendi yükleme durumuna sahip ("Gönderiliyor..." metni +
buton `disabled`). Next.js `loading.tsx` dosya kuralını eklemek, statik
sayfalar için görünür bir fayda sağlamayacağından uygulanmadı.

### Görev 41 — Skeleton

**Durum:** Değerlendirildi, uygulanmadı. Skeleton ekranları, veri asenkron
yüklenirken (client-side fetch, resim yükleme vb.) anlamlıdır. Sitede şu an
ne client-side veri çekimi ne de gerçek görsel var (yalnızca anında render
olan `BrandPatternPanel`) — var olmayan bir gecikme için skeleton eklemek
"gerekiyorsa geliştir" ilkesine aykırı, gereksiz kod olurdu. Gerçek ürün
fotoğrafları eklendiğinde (`next/image` ile) tekrar değerlendirilebilir.

**Doğrulama (Görev 39 için):** `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`).

---

## FAZ 9 — Responsive

### Görev 42-50 — Tablet, Desktop, UltraWide, Landscape, Fold, Safe Area

**Durum:** Tamamlandı (1 somut düzeltme + kapsamlı kod denetimi).

**Görev 50 (Safe Area) — gerçek, uygulanan düzeltme:** `StickyWhatsApp`
butonu `bottom-6 right-6` ile sabit konumlandırılıyordu; çentikli/ev tuşu
göstergeli iOS cihazlarda güvenli alan payı hesaba katılmıyordu. Düzeltildi:
`bottom`/`right` artık `calc(1.5rem + env(safe-area-inset-*))` kullanıyor.
**Ön koşul da eklendi** — `env()` değerlerinin sıfır dönmemesi için
`<meta name="viewport">`'a `viewport-fit=cover` gerekiyordu ve bu **hiç
yoktu**; `app/layout.tsx`'e `export const viewport: Viewport = { ...,
viewportFit: 'cover' }` eklendi (Next.js 16 `generateViewport`/`viewport`
API'si — `node_modules/next/dist/docs`'tan doğrulandı). Canlı `curl` testiyle
üretilen meta etiketinde `viewport-fit=cover`'ın gerçekten çıktığı teyit
edildi.

**Görev 42-49 (Tablet/Desktop/UltraWide/Landscape/Fold) — kod denetimi:**
`grep` ile tüm sabit piksel genişlikleri (`width: '...px'`) tarandı —
sitede yalnızca **3 logo kutusu** (Navbar masaüstü/mobil, Footer) sabit
piksel kullanıyor; bunların hepsi Görev 5'te zaten "dokunulmayacak" olarak
işaretlenmiş logo kırpma mekanizmasının bir parçası. Bunların dışında
sitenin tamamı Tailwind'in duyarlı (`sm:`/`md:`/`lg:`/`xl:`) sınıflarıyla,
mobile-first ilkesine (AGENTS.md §11) uygun şekilde inşa edilmiş; `max-w-7xl`
konteynerleri UltraWide ekranlarda içeriğin aşırı genişlememesini zaten
sağlıyor. Görsel tarayıcı testi yapamadığım için (bu ortamda ekran görüntüsü
alma aracı yok) spekülatif/kanıtsız değişiklik yapılmadı — yalnızca somut,
kod okuyarak doğrulanabilir sorunlar (safe area) düzeltildi.

**Doğrulama:** `tsc` ✅ · `lint` ✅ · `build` ✅ (40 sayfa + `/og`). Canlı test:
ana sayfa `curl` ile çekildi, `viewport-fit=cover` render'da doğrulandı.

---

## FAZ 10 — Performance

**Görev 51 (Image) — kod denetimi, değişiklik yok:** `grep -r "next/image"` →
proje genelinde yalnızca 3 `<Image>` kullanımı var (Navbar masaüstü/mobil
logo, Footer logo), üçü de açık `width`/`height` ile. Ürün/hero görselleri
henüz gerçek fotoğraf değil (`BrandPatternPanel`, bkz. Görev 12/24), yani
optimize edilecek gerçek bir ürün görseli yok — bu AGENTS.md §7.3'te zaten
bilinen ve kabul edilmiş bir durum. Aksiyon gerekmiyor.

**Görev 52 (Code Split) — kod denetimi, değişiklik yok:** Next.js App
Router zaten route bazlı otomatik code-splitting yapıyor (her `page.tsx`
kendi chunk'ı). `'use client'` sınırları zaten en yaprak seviyede (13 dosya:
StickyWhatsApp, ContactForm, FadeIn, Navbar, FAQAccordion, GoogleAnalytics,
CookieConsent*, birkaç `ui/` primitive'i) — server component ağacının geri
kalanı hiç client JS'e dahil olmuyor. Manuel `next/dynamic` ile ayrılacak
büyük/nadir kullanılan bir bileşen (harita, grafik, ağır modal) yok —
`grep "next/dynamic"` sıfır sonuç verdi çünkü henüz buna ihtiyaç duyacak
bir bileşen mevcut değil. Spekülatif bölme eklenmedi.

**Görev 53 (Bundle) — tamamlandı (önceki adımda):** `@next/bundle-analyzer`
`next.config.ts`'e `ANALYZE=true` bayrağı arkasında eklendi, normal build
davranışını etkilemiyor. Turbopack ile uyumsuz olduğu `node_modules/@next/
bundle-analyzer/index.js` kaynağından doğrulandı (kütüphane `process.env.
TURBOPACK` algılayınca kendini pasifleştiriyor); `ANALYZE=true npx next
build --webpack` ile çalıştırılıp gerçek `client.html`/`edge.html`/
`nodejs.html` raporları üretildiği doğrulandı, ardından normal `npm run
build` ile varsayılan Turbopack durumu geri yüklendi.

**Görev 54 (Lazy) — kod denetimi, değişiklik yok:** Sitede lazy-load
gerektirecek ağır/nadir-görünür bir bileşen yok (görsel yok, harita yok,
video yok). `components/ui/dialog.tsx` tanımlı ama hiçbir yerde
kullanılmıyor (`grep` ile doğrulandı) — bu, shadcn taban kitinin bir
parçası olarak bırakıldı (AGENTS.md §9.4 "mevcut envanteri bil" ilkesi
gereği ileride form/onay akışı gerekirse hazır olsun diye), silinmedi;
ölü kod temizliği kapsamı dışında tutuldu ve burada ayrıca not edildi.

**Görev 55 (Font) — kod denetimi, değişiklik yok:** `app/layout.tsx` zaten
`next/font/google` ile `Plus_Jakarta_Sans`/`DM_Serif_Display`'i `display:
'swap'` ve CSS değişkeni (`variable`) olarak yüklüyor; `<head>`'de Google
Fonts domainlerine `preconnect` var. Bu, Next.js'in önerdiği optimal
desenin birebir kendisi. Aksiyon gerekmiyor.

**Görev 56 (CLS) — kod denetimi, değişiklik yok:** `HeroSection.tsx`
incelendi: dış grid `min-h-[88vh]` ile viewport'a göre sabit yükseklikte,
içerik yüklendikçe büyümüyor; görsel kolaj alanı `aspectRatio: '4/3'` ile
sabitlenmiş; `BrandPatternPanel` saf CSS/SVG (ağ isteği yok, async yükleme
yok) olduğundan geç gelen içerik kaynaklı sıçrama riski yok. `FadeIn`
yalnızca `opacity`/`transform` (y ekseni) animasyonu yapıyor — layout
özelliklerine (height/width/margin) dokunmuyor, bu yüzden CLS bütçesine
katkısı sıfır (AGENTS.md §10.4 ile uyumlu, zaten kasıtlı bir tasarım).
Fontlar `display: swap` olduğundan FOIT değil FOUT riski var ama bu CLS
değil (yalnızca metin stilinde geçici fark, layout'ta değil — `Plus Jakarta
Sans`/`DM Serif Display` ile sistem fallback'i benzer x-height'e sahip
oldukları için pratikte gözle görülür sıçrama riski düşük). Aksiyon
gerekmiyor.

**Görev 57 (LCP) — kod denetimi, değişiklik yok:** Ana sayfa LCP adayı
hero `<h1>` — sunucu tarafında düz metin olarak render ediliyor, herhangi
bir görsel/async veriye bağımlı değil, `display: swap` fontu render'ı
bloklamıyor (yalnızca fallback fontla anında görünür, sonra swap olur).
Kritik render yolunda bloklayan üçüncü taraf script yok (GA4 zaten
`afterInteractive`, bkz. Görev 51/60 bulgusu). LCP'yi geciktirecek bir
yapı tespit edilmedi.

**Görev 58 (INP) — kod denetimi, değişiklik yok:** Etkileşimli client
bileşenleri (`Navbar` menü aç/kapa, `FAQAccordion`, `ContactForm`) basit
state güncellemeleri; ağır senkron hesaplama, büyük liste re-render'ı veya
bloklayan `useEffect` zinciri yok. `GoogleAnalytics.tsx` `Script`'leri
`afterInteractive` stratejisiyle yükleniyor, ana thread'i ilk etkileşim
öncesi bloklamıyor. Aksiyon gerekmiyor.

**Görev 59 (Caching) — kod denetimi, değişiklik yok:** `next.config.ts`
`headers()` zaten tüm statik varlıklara `Cache-Control: public, max-age=0,
stale-while-revalidate=86400` uyguluyor (AGENTS.md §13 ile birebir uyumlu).

**Görev 60 (Lighthouse) — tamamlandı:** `lighthouserc.js` (proje kökü)
oluşturuldu. İlk taslakta `staticDistDir: '.next'` kullanılmıştı ama bu
yalnızca tam statik export'lar için doğru bir ayar — proje edge API
route'ları ve dinamik segmentler (`[slug]`) içerdiğinden gerçek bir sunucu
gerekiyor; kendi kendine yakalanıp `startServerCommand: 'npm run start'` +
`startServerReadyPattern: 'Ready in'` ile düzeltildi. Dosyada açık bir kod
yorumu var: **bilinçli olarak `.github/workflows/ci.yml`'e bağlanmadı**
çünkü CI değişiklikleri yalnızca gerçek bir GitHub Actions çalıştırmasıyla
doğrulanabilir (bu ortamda mümkün değil); kullanıcı isterse ayrı bir adım
olarak eklenebilir (AGENTS.md §19.4).

**Doğrulama:** `tsc --noEmit` ✅ (sıfır hata) · `npm run lint` ✅ (sıfır
uyarı/hata) · `npm run build` ✅ — 40 sayfa + `/og` başarıyla üretildi,
route tablosu önceki fazlarla birebir aynı (yeni route eklenmedi/kırılmadı).
`lighthouserc.js` bir TS/JS derleme adımına dahil olmadığından `tsc`'yi
etkilemiyor; içeriği elle gözden geçirilerek doğrulandı.

---

## FAZ 11 — SEO

**Görev 61 (Meta) — kod denetimi, değişiklik yok:** `grep "export const metadata"` ile
tüm `app/**/page.tsx` tarandı — 30+ sayfanın tamamı `generatePageMetadata()`
kullanıyor, hiçbiri elle metadata yazmıyor (AGENTS.md §4.3/§15 ile birebir
uyumlu). Canlı `curl` testiyle bir landing page (`/havlu-ureticisi`) için
`title`/`description`/`canonical`/OG/Twitter/`robots` etiketlerinin tam ve
doğru render edildiği doğrulandı.

**Görev 62 (Schema) — GERÇEK BUG BULUNDU VE DÜZELTİLDİ:** Ana sayfa ve
Hakkımızda'da `<OrganizationSchema />` VE `<LocalBusinessSchema />` birlikte
render ediliyordu. `OrganizationSchema` zaten `@type: ["Organization",
"LocalBusiness"]` olarak **birleşik** tanımlanmış (`@id: .../#organization`)
ve kendi kod yorumunda "duplicate önleme" amacıyla yazılmıştı — ama ayrıca
eklenen `LocalBusinessSchema` (`@type: "LocalBusiness"`, farklı
`@id: .../#localbusiness`) aynı gerçek işletme için **ikinci, farklı ID'li
bir entity beyanı** yaratıyordu (aynı ad/adres/telefon/geo/openingHours
tekrar ediliyordu). Bu, Google'ın entity çözümlemesini karıştırabilecek bir
GEO/SEO tutarlılık sorunu (AGENTS.md §16 "entity-first" hedefiyle çelişiyor).
Canlı `curl` ile doğrulandı: düzeltme öncesi ana sayfada `GeoCoordinates`×2,
`PostalAddress`×2, `OpeningHoursSpecification`×4 (iki ayrı entity'den);
düzeltme sonrası ×1/×1/×2 (tek entity).
**Düzeltme:** `LocalBusinessSchema`'nın tek benzersiz alanı
(`currenciesAccepted`) `OrganizationSchema`'ya eklendi (alan eklemek, red
line #5'i ihlal etmiyor); `app/page.tsx` ve `app/about/page.tsx`'ten
`<LocalBusinessSchema />` çağrısı kaldırıldı (bileşenin kendisi silinmedi —
`/contact` sayfası onu tek başına, `Organization` ile çakışmadan kullanmaya
devam ediyor). `AGENTS.md` §17 tablosu bu düzeltilmiş kullanım desenini
yansıtacak şekilde güncellendi.

**Görev 63 (Heading) — kod denetimi, değişiklik yok:** Her `page.tsx`'te
tam olarak 1 `<h1>` var (script ile sayıldı); 11 landing page ortak
`LandingPage.tsx` şablonunu kullandığından ve şablonda da tek `<h1>`
olduğundan hepsi otomatik olarak uyumlu. Aksiyon gerekmiyor.

**Görev 64 (Internal Link) — kod denetimi, değişiklik yok:** Tüm 11
landing page `relatedLinks` prop'unu kullanıyor (orphan page riski yok).
Blog detay sayfası (`app/blog/[slug]/page.tsx`) "Bloga Dön" + kategori
bazlı "İlgili Makaleler" bağlantıları içeriyor; ürün detay sayfası
`/`, `/new-collection` ve ilgili ürünlere bağlanıyor. Aksiyon gerekmiyor.

**Görev 65 (Canonical) — kod denetimi + canlı test, değişiklik yok:**
`generatePageMetadata()` her zaman parametre içermeyen temiz URL'i
canonical yapıyor; canlı testte doğrulandı.

**Görev 66 (OpenGraph) / Görev 67 (Twitter) — canlı test, değişiklik yok:**
`/havlu-ureticisi` üzerinde tüm `og:*` ve `twitter:*` etiketleri (title,
description, url, image 1200×630, locale, card türü) eksiksiz render
edildi. Dinamik OG görsel endpoint'i (`/og?title=...`) canlı olarak
`curl` ile test edildi: `200 image/png` döndüğü doğrulandı.

**Görev 68 (Robots) — kod denetimi, değişiklik yok:** `app/robots.ts`
zaten `/api/`, `/_next/`, `/admin/`, `/tesekkurler/` disallow ediyor, AI
bot allowlist'i (9 bot) korunuyor. Sayfa bazlı `robots` meta etiketi
(`index, follow`) canlı testte doğrulandı. Aksiyon gerekmiyor.

**Görev 69 (Sitemap) — GERÇEK BUG BULUNDU VE DÜZELTİLDİ:**
`app/sitemap.ts` statik/landing/ürün sayfaları için `lastModified: new
Date().toISOString()` (build anı) kullanıyordu — bu, gerçek içerik
değişmese bile **her build'de** "az önce güncellendi" sinyali üretiyordu.
Google'ın sitemap kılavuzu güvenilmez `lastmod` değerlerinin göz ardı
edilebileceğini belirtiyor; bu da AGENTS.md §14.2'nin ruhuna aykırı bir
"sahte tazelik sinyali". **Düzeltme:** Gerçek per-item tarihi olan blog
yazıları (`post.date`) olduğu gibi bırakıldı; gerçek bir "içerik son
güncelleme" verisi bulunmayan statik/landing/ürün sayfalarında
`lastModified` alanı tamamen kaldırıldı (Next.js'te opsiyonel — sahte
tarih yerine alanı hiç göndermemek tercih edildi). Canlı `curl` ile
`/sitemap.xml` çekildi: ilgili sayfalarda `<lastmod>` artık hiç yok, blog
sayfalarında gerçek tarihler (`2026-06-07`...`2026-06-14`) hâlâ doğru
şekilde görünüyor.

**Görev 70 (Images) — kod denetimi, değişiklik yok:** `grep "<Image"`
ile tüm kullanımlar tarandı (Navbar×2, Footer×1) — üçü de açık `alt`
metni içeriyor. Diğer "Image" eşleşmeleri (`HeroSection.tsx`) yalnızca
gerçek fotoğraf geldiğinde kullanılacak bir JSX yorumu, gerçek kod değil.
Aksiyon gerekmiyor.

**Doğrulama:** `tsc --noEmit` ✅ · `npm run lint` ✅ · `npm run build` ✅
(40 sayfa + `/og`, route tablosu değişmedi). Canlı testler: ana sayfa
JSON-LD'de tekilleşme doğrulandı, `/sitemap.xml` ve `/og` canlı olarak
çekildi ve doğru içerik döndürdüğü teyit edildi.

---

## FAZ 12 — GEO

**Görev 71 (AI Search) — kod denetimi, değişiklik yok:** `app/robots.ts`
AI bot allowlist'i (9 bot: GPTBot, Google-Extended, PerplexityBot,
ClaudeBot, anthropic-ai, Applebot-Extended, cohere-ai, CCBot, Omgilibot)
daraltılmadı, olduğu gibi korundu (AGENTS.md §16 kırmızı çizgi).

**Görev 72 (llms.txt) — GERÇEK EKSİK BULUNDU VE TAMAMLANDI:**
`public/llms.txt`'in "Önemli Sayfalar" listesi 11 TR/EN landing page'den
yalnızca 6'sını içeriyordu (`havlu-ureticisi`, `bornoz-ureticisi`,
`toptan-bornoz`, `otel-bornozu`, `nakisli-havlu`, `/blog` eksikti); "Blog"
bölümü ise `content/blog/index.ts`'teki gerçek **10** yazıdan yalnızca
**3**'ünü listeliyordu (`grep "slug:"` ile doğrulandı). Bu, GEO için kritik
olan dosyanın zaman içinde yeni sayfa/yazı eklenirken güncellenmediğini
gösteriyor (AGENTS.md §16 "yeni sayfa eklendiğinde bu dosyalar da
güncellenir" kuralına aykırı bir drift). **Düzeltme:** Eksik 5 TR landing
page + `/blog` "Önemli Sayfalar"a, eksik 7 blog yazısı "Blog" bölümüne
eklendi. Hiçbir mevcut doğrulanmış veri/satır silinmedi, yalnızca zaten var
olan gerçek sayfalar/yazılar eklendi (fabrikasyon yok — hepsi
`content/blog/index.ts` ve gerçek route yapısından doğrulandı). Versiyon
3.0 → 3.1, `Last Updated` 2026-06-10 → 2026-07-26 olarak güncellendi. Canlı
`curl` ile `/llms.txt` çekilip tüm yeni satırların doğru render edildiği
teyit edildi.

**Görev 73 (ai.txt) — kod denetimi, değişiklik yok:** İçerik hâlâ doğru ve
güncel (entity verisi, izinler, atıf formatı) — eksik/stale bir alan tespit
edilmedi, gereksiz yere versiyon/tarih güncellenmedi (AGENTS.md §16: "yalnızca
gerçek veri değiştiğinde güncellenir").

**Görev 74 (JSON-LD) / Görev 75 (Organization) — bkz. FAZ 11 Görev 62:**
Ana sayfa ve Hakkımızda'daki `Organization`/`LocalBusiness` çakışması zaten
bu fazda düzeltilmişti; burada tekrar doğrulandı, ek bulgu yok.

**Görev 76 (Product) — kod denetimi, bilinen sınırlama (düzeltilmedi):**
`ProductSchema`'daki `offers.Offer` alanında `price`/`priceCurrency` yok —
yalnızca `description: "Fiyat için iletişime geçin"` var. Google'ın Product
rich result kılavuzu `Offer` için `price` alanını bekliyor; bu eksikliği
Search Console'da bir uyarı olarak görme ihtimali var. **Bilinçli olarak
düzeltilmedi** çünkü tek "düzeltme" sahte bir fiyat uydurmak olurdu — bu
AGENTS.md §14.2 ve §21'i ("Fiyat asla sayfa içinde gösterilmez") doğrudan
ihlal eder. Bu, kabul edilmiş bir mimari ödünleşim olarak burada
belgelendi; kullanıcı ileride fiyat aralığı paylaşmaya karar verirse
`ProductSchema`'ya `price` eklenebilir.

**Görev 77 (FAQ) — kod denetimi, değişiklik yok:** `FAQSchema` her
kullanıldığı yerde görünür içerikle birebir eşleşiyor (bkz. FAZ 6/7'de
düzeltilen `FAQPreview` kendi kendine yeten hale getirilmişti). Ek bulgu yok.

**Görev 78 (Article) — GERÇEK BUG BULUNDU VE DÜZELTİLDİ:**
`ArticleSchema.isPartOf` her blog yazısında `@id:
"https://baskanhavlu.com/#website"` referansı veriyordu ama
`WebSiteSchema` (ana sayfada render edilen) hiç `@id` alanı
**tanımlamıyordu** — yani referans, var olmayan bir düğüme işaret eden
"asılı" (dangling) bir bağlantıydı. **Düzeltme:** `WebSiteSchema`'ya
`'@id': `${SITE_CONFIG.url}/#website`` eklendi (yalnızca alan eklendi,
mevcut zorunlu alan kaldırılmadı — red line #5 ile uyumlu). Canlı `curl`
ile ana sayfada `"@type":"WebSite","@id":"https://baskanhavlu.com/#website"`
render edildiği doğrulandı.

**Görev 79 (LocalBusiness) — bkz. FAZ 11 Görev 62:** Aynı düzeltme
kapsamında ele alındı.

**Görev 80 (Citation) — kod denetimi, değişiklik yok:** `llms.txt`'teki
"Önerilen AI Atıf Formatı" (TR/EN) zaten doğrulanabilir, somut ifadeler
kullanıyor (1981, Bursa Osmangazi Havlucular Çarşısı, Arap ülkeleri +
Yunanistan) — abartılı/doğrulanamayan iddia yok. Aksiyon gerekmiyor.

**Doğrulama:** `tsc --noEmit` ✅ · `npm run lint` ✅ · `npm run build` ✅
(40 sayfa + `/og`). Canlı testler: `/llms.txt` güncel içerikle çekildi,
ana sayfa JSON-LD'de `WebSite` `@id`'sinin render edildiği doğrulandı.

---

## FAZ 13 — Güvenlik

**Görev 81 (Rate Limit) — AGENTS.md GÜNCELLENDİ (kod değişikliği yok):**
Kod denetiminde `lib/utils/rate-limit.ts`'in **zaten** tüm 4 API route'una
(`contact`, `lead/quote`, `lead/sample`, `lead/export`) `checkRateLimit()`
çağrısıyla bağlı olduğu doğrulandı — bu, bu oturumun önceki bir FAZ'ında
(FAZ 0/13 altyapısı) tamamlanmıştı. Ancak `AGENTS.md` §18 ve §26 hâlâ
"Rate limiting kodu şu an yok" yazıyordu — bu artık **yanlış/stale** bir
belge-kod sapmasıydı (tam da AGENTS.md'nin kendisinin uyardığı türden).
**Düzeltme:** İki bölüm de gerçek duruma göre güncellendi (implemente
edildi, Upstash env yoksa sessizce no-op, prod'da gerçek koruma için
Netlify env değişkeni gerekiyor notuyla).

**Görev 82 (Spam) — kod denetimi, değişiklik yok:** `lib/utils/honeypot.ts`
+ tüm 4 route'ta kullanımı doğrulandı. `ContactForm.tsx`'te honeypot input
`className="hidden"` + `tabIndex={-1}` + `aria-hidden="true"` ile hem
görsel olarak hem ekran okuyucudan doğru şekilde gizlenmiş (erişilebilirlik
tuzağı yok). Canlı `curl` testiyle honeypot dolu istek `{"success":true}`
(sessiz red) döndürdüğü doğrulandı.

**Görev 83 (CORS) — kod denetimi, değişiklik yok:** `grep -i "cors"` /
`Access-Control-Allow-Origin` sıfır sonuç verdi — API rotalarında hiçbir
CORS header'ı yok, yani tarayıcılar varsayılan olarak yalnızca same-origin
isteklere izin veriyor. Bu güvenli varsayılan davranış; gereksiz bir CORS
genişletmesi eklenmedi.

**Görev 84 (Headers) — kod denetimi, değişiklik yok:** `next.config.ts`
`securityHeaders` zaten CSP, HSTS, X-Frame-Options: DENY, X-Content-Type-
Options, Referrer-Policy, Permissions-Policy içeriyor. Aksiyon gerekmiyor.

**Görev 85 (Validation) — kod denetimi, değişiklik yok:** `lib/validations/
lead.schema.ts` incelendi — her alanda `min`/`max` sınırları var, e-posta/
telefon formatı doğrulanıyor, honeypot ayrıca Zod seviyesinde de (`max(0)`)
kontrol ediliyor (savunma katmanı). Canlı `curl` ile eksik alanlı bir
istek gönderildi, beklenen `400` + alan bazlı hata mesajları doğrulandı.

**Görev 86 (Logging) — GERÇEK EKSİK BULUNDU VE DÜZELTİLDİ:** Tüm 4 API
route'unda `catch { return ...genel hata... }` bloğu gerçek hatayı
**tamamen yutuyordu** — `sendLeadEmail` (Resend REST çağrısı) başarısız
olursa (ör. API anahtarı geçersiz, Resend downtime), site sahibinin bunu
fark edebileceği hiçbir sunucu tarafı iz kalmıyordu; lead sessizce kayboluyordu.
**Düzeltme:** Her route'ta `catch (error) { console.error('[api/...] Lead
işlenemedi:', error); ... }` eklendi — istemciye dönen genel hata mesajı
**değişmedi** (AGENTS.md §18 "stack trace/iç detay asla döndürülmez"
korundu), yalnızca sunucu tarafı (Netlify function log) görünürlüğü
eklendi.

**Doğrulama:** `tsc --noEmit` ✅ · `npm run lint` ✅ · `npm run build` ✅.
Canlı testler: honeypot dolu istek sessizce kabul edildi, geçersiz payload
`400` + alan hataları döndürdü.

---

## FAZ 14 — İçerik

**Görev 87 (Blog) — GERÇEK İHLAL BULUNDU VE DÜZELTİLDİ (AGENTS.md §14.1/
§14.2):** `grep -rniE "favori|mükemmel|eşsiz|en iyi|lider|garantili"` ile
tüm `content/`, `app/`, `components/` tarandı. `content/blog/index.ts`'te
3 gerçek ihlal bulundu:
1. Satır 36: "Otel sektörünün **favori** seçeneği" (doğrulanamayan
   popülerlik iddiası) → "Otel sektöründe sıkça tercih edilir."
2. Satır 132: "5 yıldızlı otellerin **favorisi**" (doğrulanamayan,
   spesifik iddia) → "Yüksek gramaj ve uzun ömürlü kullanım için tercih
   edilir."
3. Satır 135: "...plaj tesisleri için **mükemmel**" (AGENTS.md §14.1'de
   açıkça yasaklanan muğlak süperlatif) → "...plaj tesislerinde tercih
   edilir."
Bunlar önceki bir oturumdan kalma, o zaman fark edilmemiş gerçek içerik
ihlalleriydi — bu roadmap'in kendi denetim adımı sayesinde yakalandı.
Ayrıca AGENTS.md §26'daki "Blog'da 3 makale var (hedef: en az 10)" notu da
**stale** çıktı — gerçekte `content/blog/index.ts`'te **10** makale var;
not güncellendi.

**Görev 88 (Landing) / Görev 89 (Category) — kod denetimi, değişiklik
yok:** Aynı süperlatif/fabrikasyon taraması 11 landing page + `content/
products/index.ts` üzerinde tekrarlandı, ek ihlal bulunmadı.

**Görev 90 (FAQ) — kod denetimi, değişiklik yok:** Örnek FAQ yanıtları
(`toptan-havlu`, `promosyon-havlu`, `nakisli-havlu`) incelendi — MOQ ve
teslimat süresi soruları tutarlı şekilde "ürüne/stoğa göre değişir, teklif
aşamasında netleşir" formülasyonunu kullanıyor (AGENTS.md §21 ile birebir
uyumlu, sabit rakam icat edilmemiş).

**Görev 91 (About) — kod denetimi, değişiklik yok:** Bu oturumun önceki
bir aşamasında (FAZ 5) zaten iki kendi kendine yakalanan fabrikasyon
("kuşaklar boyu tedarikçi ilişkileri", spesifik QC kriterleri) düzeltilip
kaldırılmıştı. Bu FAZ'da yeniden tarandı, ek bulgu yok.

**Görev 92 (Export) — kod denetimi, değişiklik yok:** İhracat/pazar
iddiaları (`SITE_CONFIG.exportRegions`, "Arap Ülkeleri ve Yunanistan")
tüm sayfalarda tutarlı; doğrulanamayan ülke sayısı/hacim rakamı
kullanılmıyor.

**Doğrulama:** `tsc --noEmit` ✅ · `npm run lint` ✅ · `npm run build` ✅.
Canlı test: `/blog/bornoz-secim-rehberi` çekildi, düzeltilmiş metnin
("tercih edilir") doğru render edildiği ve eski süperlatif ifadelerin
tamamen kalktığı doğrulandı.

---

## FAZ 15 — Son

**Görev 93 (Accessibility) — GERÇEK BUG BULUNDU VE DÜZELTİLDİ:**
`grep "outline-none"` ile tarama yapıldı. `components/ui/*` ve
`StickyWhatsApp.tsx` doğru desende (`outline-none` + `focus-visible:ring-*`
ile değiştiriliyor). Ancak **`ContactForm.tsx`'teki 6 form alanının tümü**
(`fullName`, `company`, `email`, `phone`, `productType` select, `message`
textarea) yalnızca `outline-none` + `focus:border-[#e87722]` (ince 1px
kenarlık rengi değişimi) kullanıyordu — projenin geri kalanında tutarlı
şekilde kullanılan görünür `focus-visible:ring` halkası **yoktu**. Bu,
düşük görme keskinliğine sahip kullanıcılar için zayıf bir odak
göstergesiydi ve AGENTS.md §12'nin "focus-visible halkası hiçbir bileşende
tamamen kaldırılmaz" ilkesiyle tutarsızdı. **Düzeltme:** Tüm 6 alana
`focus-visible:ring-2 focus-visible:ring-[#e87722]/40 focus-visible:ring-offset-1`
eklendi — marka turuncusuyla tutarlı, projenin geri kalanıyla aynı desende
bir odak halkası.

**Görev 94 (WCAG) — BULGU BELGELENDİ, DEĞİŞİKLİK YAPILMADI (kullanıcı
kararı gerekiyor):** WCAG 2.1 AA kontrast oranı hesaplandı: `#8a7050`
(beige-700, "koyu bej metin" — site genelinde caption/ikincil metin rengi
olarak yaygın kullanılıyor, örn. Hero istatistik etiketleri, blog
meta bilgisi) `#faf8f5` (beige-50, sayfa zemini) üzerinde **~4.39:1**
kontrast oranı veriyor — AA küçük metin eşiği olan **4.5:1'in hafifçe
altında** (büyük metin eşiği 3:1'i rahatça geçiyor). Bu, AGENTS.md §7.1'de
"SABİT — değiştirilemez" olarak kilitlenmiş marka paletinin bir parçası;
hex değerini değiştirmek red line #8'i ihlal eder. **Bilinçli olarak
düzeltilmedi** — bu tam olarak AGENTS.md §20'nin "büyük çaplı, riskli bir
refactor kullanıcıya önceden bildirilmeden başlatılmaz" ilkesine giren bir
durum (onlarca dosyada kullanılan bir rengin, hangi bağlamlarda küçük metin
için kullanıldığının tek tek görsel doğrulaması gerekir). Kullanıcıya nihai
raporda ayrıca bildirilecek; iki seçenek var: (a) mevcut haliyle kabul
et (fark çok küçük, çoğu gerçek kullanıcı için algılanamaz), (b) küçük
metin bağlamlarında bu tonu `charcoal-600 (#5c5c5c)` gibi daha koyu bir
tonla değiştir.

**Görev 95 (Analytics) — kod denetimi, değişiklik yok:** `GoogleAnalytics.tsx`
zaten çerez onayına bağlı, `strategy="afterInteractive"`, `anonymize_ip:
true` ile doğru şekilde implemente edilmiş. Aksiyon gerekmiyor.

**Görev 96 (Error Tracking) — GERÇEK EKSİK BULUNDU VE KISMEN DÜZELTİLDİ:**
`app/` altında `error.tsx`/`global-error.tsx` **hiç yoktu** — bir Server
Component'te yakalanmamış bir hata oluşursa Next.js'in jenerik, marka dışı
varsayılan hata sayfası gösterilirdi. **Düzeltme:** `app/not-found.tsx` ile
aynı görsel dille (`FadeIn`, marka renkleri, gradyan zemin) tutarlı bir
`app/error.tsx` oluşturuldu — "Tekrar Dene" (reset), "Ana Sayfaya Dön" ve
"WhatsApp ile Yaz" (AGENTS.md §8.2 fallback ilkesiyle uyumlu) seçenekleri
sunuyor; hatayı `console.error` ile sunucu/tarayıcı konsoluna logluyor
(harici bir Sentry/hata izleme servisi **eklenmedi** — bu, yeni bir
bağımlılık + hesap + DSN gerektiren, kullanıcı onayı gerektiren ayrı bir
karar; AGENTS.md §26'daki "Sentry kurulu değil" bilgisi hâlâ doğru).
Not: Gerçek bir çalışma zamanı hatası tetiklenerek canlı doğrulama
yapılamadı (bu, çalışan sayfalara geçici/riskli bir hata enjeksiyonu
gerektirirdi); doğrulama yalnızca `tsc`/`build`'in dosyayı Next.js'in
beklediği `{ error, reset }` imzasıyla sorunsuz derlemesi üzerinden yapıldı.

**Görev 97 (QA) — canlı test:** 20 rota (tüm statik sayfalar, tüm 11
landing page, blog ve ürün detay örnekleri) `curl` ile tek tek çekildi,
**hepsi `200`** döndü.

**Görev 98 (Cross Browser) — yapılamadı, açıkça belirtiliyor:** Bu ortamda
gerçek tarayıcı/ekran görüntüsü aracı yok; Safari/Firefox/Chrome arası
görsel/etkileşim farkları test edilemedi. Spekülatif bir "düzeltme"
yapılmadı.

**Görev 99 (Final Polish) — kod denetimi, küçük bulgu belgelendi:**
`.env.example`'da kodda hiç kullanılmayan 4 değişken var
(`NEXT_PUBLIC_WHATSAPP_NUMBER`, `INDEXNOW_KEY`, `NEXT_PUBLIC_CHATBOT_ENABLED`,
`NEXT_PUBLIC_TIDIO_KEY` — `grep "process.env"` ile doğrulandı, kodda hiç
referans yok). Bunlar gelecekteki planlı entegrasyonlar olabileceğinden
(IndexNow, Tidio chatbot) kullanıcı onayı olmadan **silinmedi**; yalnızca
burada not düşüldü.

**Görev 100 (Production Review) — bu bölüm + aşağıdaki final rapor.**

**Doğrulama:** `tsc --noEmit` ✅ · `npm run lint` ✅ (prettier ile 1 dosya
otomatik formatlandı) · `npm run build` ✅. Canlı test: 20/20 rota `200`.

---

## GÖRSEL YÜKSELTME (100 görev sonrası, kullanıcı talebiyle)

100 görevlik roadmap bittikten sonra kullanıcı sitede "tasarım aynı"
gözlemini paylaştı. Netleştirme: FAZ 2-9'daki değişiklikler bileşen
düzeyindeydi (Navbar mega menu, Hero CTA sırası, Footer sütunları), genel
sayfa iskeleti/kart dili kasıtlı olarak dokunulmamıştı (AGENTS.md'nin
"marka/renk paletine dokunma" kırmızı çizgisi). Kullanıcı "tüm site,
kapsamlı" bir görsel yükseltme istedi — **hiçbir renk hex değeri, font,
logo veya URL değiştirilmeden**, yalnızca kart derinliği/gölge/hover
hiyerarşisi/rozet stili tutarlı şekilde yükseltildi.

**Uygulanan tutarlı "kart dili":** `rounded-xl` → `rounded-2xl`,
`shadow-sm` taban + `hover:-translate-y-1 hover:shadow-lg/xl`, ikon
konteynerleri düz `#fff7f0` yerine `linear-gradient(135deg,#fff7f0,#ffe8cc)`
+ `#ffd0a3` kenarlık ile daha premium bir görünüm.

**Değiştirilen dosyalar:**
- `FAQAccordion.tsx` — düz `divide-y` liste → her soru ayrı kart
  (`rounded-xl border`), açık durumda `#fff7f0` zemin + turuncu kenarlık,
  +/× ikonu artık dairesel bir rozet içinde. Bu bileşen `LandingPage`,
  `FAQPreview` ve `About` üzerinden **çoğu sayfada** kullanıldığından tek
  başına yüksek etkili bir değişiklik.
- `LandingPage.tsx` (11 sayfayı etkiler) — hero güven rozetleri (Kuruluş/
  İhracat) düz metinden beyaz pill/chip'e; özellik kartları yeni gradyan
  ikon + gölge + hover lift; ilgili sayfa linkleri gölgeli/hover lift chip.
- `ValueProposition.tsx` (ana sayfa) — aynı kart dili uygulandı.
- `ProductCategories.tsx` (ana sayfa) — **GERÇEK ÖLÜ ÖZELLİK BULUNDU VE
  HAYATA GEÇİRİLDİ**: veri modelinde `large: true` alanı ilk kategoriye
  (Otel Havlusu) atanmış ama grid'de hiç kullanılmıyordu — kod muhtemelen
  bir bento-grid (asimetrik, bir kartın büyük göründüğü) düzeni
  hedefliyordu ama hiç bağlanmamıştı. `sm:col-span-2` + büyütülmüş
  `min-h`/tipografi ile gerçek bir bento düzeni olarak bağlandı; artık
  ana sayfanın "Ürün Kategorileri" bölümü tek düze 7 eşit kutu yerine
  bir hiyerarşiye sahip.
- `app/about/page.tsx` — Özel Üretim kartları ve Kalite Kontrol kutusu
  yeni kart diline hizalandı; süreç adımı ikon dairelerine gölge, ihracat
  pazar rozetlerine gölge + hafif turuncu zemin eklendi.
- `app/contact/page.tsx` — WhatsApp kartı ve NAP bilgi kartına gölge +
  hover lift eklendi. **GERÇEK İÇERİK İHLALİ BULUNDU:** "Ortalama yanıt:
  5 dakika" — kodun hiçbir yerinde doğrulanmamış, tek seferlik icat
  edilmiş bir rakamdı (AGENTS.md §14.2). "Anında iletişim ve hızlı yanıt"
  ile değiştirildi (zaten sitede kullanılan, doğrulanabilir ifade).
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` — blog kartlarına ve
  ilgili makale kartlarına gölge + güçlü hover lift.
- `app/new-collection/page.tsx`, `app/new-collection/[slug]/page.tsx` —
  ürün kartlarına, "Hızlı Bilgi" kutusuna ve benzer ürün kartlarına gölge
  + hover lift; alt CTA bloğuna ince radyal gradyan vurgusu.

**Doğrulama:** Her adımdan sonra `tsc --noEmit` ✅ ve `npm run lint` ✅
çalıştırıldı (birkaç yerde IDE'nin önerdiği kanonik Tailwind class'ları —
`orange-500`, `min-h-55` vb. — kullanıldı, keyfi `[#hex]`/`[Npx]` yerine).
Son adımda `npm run build` ✅ (40 sayfa + `/og`, route tablosu değişmedi)
ve **21 rotanın tamamı** `curl` ile tek tek çekilip **hepsi `200`** olarak
doğrulandı. Not: Bu ortamda tarayıcı/ekran görüntüsü aracı yok — görsel
sonucun nihai onayı kullanıcının `localhost:3000`'de kendi gözüyle
kontrolüne bağlı.

---

## Sonraki Adım

**FAZ 0-15 (Görev 1-100) + görsel yükseltme geçişi TAMAMLANDI.** Yayına
alma/deploy/push yapılmadı — kullanıcının local test + onayı bekleniyor.
