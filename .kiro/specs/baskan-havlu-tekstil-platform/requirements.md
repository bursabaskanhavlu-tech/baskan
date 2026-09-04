# Requirements Document

## Introduction

Başkan Havlu Tekstil (https://baskanhavlu.com) için kapsamlı, AI-optimize edilmiş, premium bir dijital platform geliştirilerek Türkiye'nin en yetkili havlu ve bornoz üreticisi web sitesi oluşturulacaktır. Platform; Google Arama, AI Arama motorları (ChatGPT, Gemini, Claude, Perplexity, Copilot, Grok) hakimiyeti, müşteri adayı oluşturma, toptan ve ihracat müşteri kazanımı ve marka otoritesi inşasını hedeflemektedir. Bu belge Phase 1: Master Architecture kapsamındaki gereksinimleri tanımlamaktadır.

## Glossary

- **Platform**: Başkan Havlu Tekstil için geliştirilen Next.js 15 tabanlı web uygulaması.
- **Landing_Page**: Belirli bir arama amacına yönelik tasarlanmış, dönüşüm odaklı açılış sayfası.
- **GEO** (Generative Engine Optimization): AI arama motorlarında üst sıralarda yer almayı sağlayan optimizasyon teknikleri bütünü.
- **SEO** (Search Engine Optimization): Geleneksel arama motorlarında üst sıralarda yer almayı sağlayan optimizasyon teknikleri bütünü.
- **Schema_Markup**: Yapılandırılmış veri (JSON-LD) biçiminde uygulanan semantik etiketleme sistemi.
- **CTA** (Call to Action): Kullanıcıyı belirli bir eyleme yönlendiren buton veya form bileşeni.
- **ISR** (Incremental Static Regeneration): Next.js'in belirli aralıklarla sayfaları yeniden oluşturduğu statik yenileme mekanizması.
- **Edge_Function**: Vercel'in küresel CDN kenarında çalışan sunucusuz fonksiyon.
- **LCP** (Largest Contentful Paint): Sayfanın en büyük görünür içerik öğesinin yüklenme süresi metriği.
- **CLS** (Cumulative Layout Shift): Sayfa yüklenirken oluşan görsel kararsızlık metriği.
- **INP** (Interaction to Next Paint): Kullanıcı etkileşimine yanıt süresi metriği.
- **Renderer**: Next.js oluşturma motoru; SSR, SSG veya ISR stratejisini uygulayan bileşen.
- **Yapılandırılmış_Veri**: JSON-LD formatında Schema.org uyumlu meta veri seti.
- **Dönüşüm_Formu**: Kullanıcıdan iletişim veya sipariş bilgisi toplayan form bileşeni.
- **CRM**: Müşteri İlişkileri Yönetim sistemi; form verilerinin iletildiği dış servis.
- **Chatbot**: Sitede gömülü, ziyaretçiyle otomatik etkileşim kuran AI asistan bileşeni.
- **llms_txt**: AI tarayıcılarına yönelik içerik kılavuzu dosyası (`/llms.txt`).
- **Renk_Paleti**: Turuncu ana renk (#E87722 veya eşdeğeri), sıcak bej, taş bej, krem beyaz ve koyu kömür renklerinden oluşan marka renk seti.
- **Premium_UI**: Apple / Tesla / Notion / Stripe / Linear görsel referanslarıyla uyumlu, lüks üretici hissi veren arayüz standardı.

---

## Requirements

---

### Requirement 1: Temel Mimari ve Teknik Altyapı

**User Story:** Bir teknik mimar olarak, tüm sistemin üzerine inşa edileceği sağlam, ölçeklenebilir ve yüksek performanslı bir teknik temel istiyorum; böylece platform tüm fazlarda tutarlı ve sürdürülebilir şekilde geliştirilebilsin.

#### Acceptance Criteria

1. THE Platform SHALL Next.js 15 (App Router), TypeScript (strict mode), Tailwind CSS v4 ve Shadcn UI kütüphanesi kullanılarak inşa edilmelidir.
2. THE Platform SHALL Vercel üzerinde konuşlandırılmalı; statik sayfalar ISR stratejisiyle, dinamik içerikler Edge_Function ile sunulmalıdır.
3. THE Platform SHALL tüm sayfa rotalarını `/app` dizini altında App Router yapısına uygun şekilde organize etmelidir.
4. THE Platform SHALL TypeScript strict modunu zorunlu kılacak `tsconfig.json` ve ESLint + Prettier yapılandırması içermelidir.
5. WHEN bir sayfa ziyaret edildiğinde, THE Renderer SHALL sayfayı ISR veya SSG stratejisiyle önceden oluşturulmuş olarak sunmalıdır; yalnızca gerçek zamanlı içerik gerektiren rotalar SSR kullanmalıdır.
6. THE Platform SHALL Framer Motion animasyon kütüphanesini yalnızca `dynamic import` ve `{ ssr: false }` seçeneğiyle yükleyerek sunucu taraflı render süresini etkilememelidir.
7. THE Platform SHALL global CSS değişkenleri aracılığıyla Renk_Paleti'ni Tailwind yapılandırmasına entegre etmelidir.
8. IF bir bağımlılık güncellemesi mevcut olduğunda, THE Platform SHALL `package.json` içinde sabitlenmiş (pinned) versiyon numaraları kullanmalıdır.

---

### Requirement 2: Performans ve Web Vitals Standartları

**User Story:** Bir site ziyaretçisi olarak, sayfaların hızlı ve akıcı yüklenmesini istiyorum; böylece ürünleri incelemek ve iletişim kurmak için uzun süre beklemek zorunda kalmayayım.

#### Acceptance Criteria

1. THE Platform SHALL Google PageSpeed Insights skorunu mobil ve masaüstü için 95 ve üzerinde tutmalıdır.
2. THE Platform SHALL LCP değerini 1,5 saniyenin altında tutmalıdır.
3. THE Platform SHALL CLS değerini 0,05'in altında tutmalıdır.
4. THE Platform SHALL INP değerini 150ms'nin altında tutmalıdır.
5. WHEN bir görsel bileşen sayfaya eklendiğinde, THE Platform SHALL tüm görselleri Next.js `Image` bileşeniyle, WebP/AVIF formatında ve `sizes` özelliği tanımlı olarak sunmalıdır.
6. WHEN bir sayfa ilk kez yüklendiğinde, THE Platform SHALL kritik CSS'i satır içi (inline) olarak eklemelidir; kritik olmayan stiller lazy-load edilmelidir.
7. THE Platform SHALL üçüncü taraf scriptleri (analitik, chat widget vb.) `next/script` ile `strategy="lazyOnload"` veya `strategy="afterInteractive"` olarak yüklemelidir.
8. THE Platform SHALL her sayfa için toplam JavaScript bundle boyutunu 200 KB (gzip) altında tutmalıdır; bu sınır aşıldığında build süreci uyarı vermelidir.
9. THE Platform SHALL Vercel CDN üzerinden statik varlıklar için `Cache-Control: public, max-age=31536000, immutable` başlığını uygulamalıdır.

---

### Requirement 3: Mobile-First Tasarım Sistemi ve Premium UI

**User Story:** Bir potansiyel toptan alıcı olarak, mobil cihazımda siteyi açtığımda profesyonel ve güvenilir bir marka izlenimi edinmek istiyorum; böylece firma ile iş yapmayı ciddiye alayım.

#### Acceptance Criteria

1. THE Platform SHALL tüm bileşenleri mobil ekrandan (320px) başlayarak tasarlamalı ve Tailwind breakpoint'leriyle kademeli olarak genişletmelidir.
2. THE Platform SHALL Premium_UI standartlarına uygun; geniş beyaz alan, net tipografi hiyerarşisi ve tutarlı köşe yarıçapları içeren bir tasarım sistemi uygulamalıdır.
3. THE Platform SHALL Renk_Paleti'ndeki turuncu rengi birincil CTA bileşenlerinde, bej/taş/krem tonlarını arka plan ve yüzey renklerinde, koyu kömürü ise metin ve kenarlık renklerinde kullanmalıdır.
4. THE Platform SHALL Inter veya eşdeğer bir sans-serif typeface kullanmalı; başlıklar için font-weight 700–900, gövde metni için 400–500 aralığını uygulamalıdır.
5. WHEN bir kullanıcı bir CTA butonunu hover ettiğinde, THE Platform SHALL Framer Motion ile 200ms süreli, ease-out eğrili bir ölçek veya renk geçiş animasyonu uygulamalıdır.
6. THE Platform SHALL koyu mod (dark mode) desteğini Tailwind `dark:` varyantlarıyla sunmalıdır; kullanıcı sistem tercihini temel almalıdır.
7. THE Platform SHALL dokunmatik hedef alanlarını (buton, link, form alanı) minimum 44×44 piksel olarak boyutlandırmalıdır.
8. THE Platform SHALL renk kontrastı oranını WCAG 2.1 AA standardına (metin için minimum 4.5:1) uygun şekilde sağlamalıdır.

---

### Requirement 4: Ana Sayfa (Homepage)

**User Story:** Bir site ziyaretçisi olarak, ana sayfaya geldiğimde firmanın ne yaptığını, neden güvenilir olduğunu ve nasıl iletişime geçebileceğimi anında anlamak istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL ana sayfada sırasıyla şu bölümleri içermelidir: Hero, Değer Önerisi, Ürün Kategorileri, Üretim Kapasitesi Sayaçları, Referanslar/Müşteri Logoları, SSS Özeti ve CTA Bandı.
2. THE Platform SHALL hero bölümüne birincil anahtar kelimeyi (ör. "Türkiye'nin Lider Havlu Üreticisi") H1 etiketi içinde, LCP hedefine uygun şekilde yerleştirmelidir.
3. WHEN ana sayfa yüklendiğinde, THE Platform SHALL hero görselini `priority` özellikli Next.js Image bileşeniyle önceden yüklenmiş olarak sunmalıdır.
4. THE Platform SHALL üretim kapasitesi bölümünde (günlük üretim adedi, ihracat ülke sayısı, yıllık üretim kapasitesi gibi) sayısal verileri animasyonlu sayaçlarla göstermelidir.
5. THE Platform SHALL ana sayfaya `WebSite`, `Organization` ve `LocalBusiness` Schema_Markup tiplerini JSON-LD formatında eklemelidir.
6. THE Platform SHALL ana sayfada sticky (sabit) bir WhatsApp CTA butonunu tüm ekran boyutlarında görünür tutmalıdır.
7. WHEN bir kullanıcı sayfayı aşağı kaydırdığında, THE Platform SHALL navigasyon çubuğunu ekranın üst kısmına sabit (sticky) olarak kilitlemelidir.

---

### Requirement 5: Ürün Kataloğu ve Koleksiyon Sayfaları

**User Story:** Bir toptan alıcı olarak, ürün çeşitlerini, özelliklerini ve minimum sipariş miktarlarını kolayca incelemek istiyorum; böylece sipariş vermeden önce doğru ürünü seçebileyim.

#### Acceptance Criteria

1. THE Platform SHALL ürün koleksiyonlarını `/new-collection/` altında kategori bazlı listeleme sayfalarıyla sunmalıdır.
2. THE Platform SHALL her ürün kartında; ürün görseli, ürün adı, gramaj (g/m²), boyut seçenekleri, renk paleti ve "Teklif İste" CTA'sını göstermelidir.
3. THE Platform SHALL her koleksiyon sayfasına `CollectionPage` ve `Product` Schema_Markup tiplerini JSON-LD formatında eklemelidir.
4. WHEN bir kullanıcı bir ürün kartına tıkladığında, THE Platform SHALL ürün detay sayfasını veya hızlı önizleme modal'ını 300ms içinde açmalıdır.
5. THE Platform SHALL ürün listelerini filtre ve sıralama bileşenleriyle (kategori, gramaj, kullanım alanı) desteklemelidir; filtre değişikliklerinde URL parametresi güncellenmelidir.
6. THE Platform SHALL her ürün sayfasına `ImageObject` Schema_Markup tipiyle ürün görsellerini işaretlemelidir.
7. IF bir ürün görseli mevcut değilse, THE Platform SHALL marka renk paleti ve logo içeren bir yer tutucu görsel göstermelidir.

---

### Requirement 6: Fabrika Otorite Sayfaları

**User Story:** Bir ihracat alıcısı olarak, firmanın üretim kapasitesi, kalite standartları ve sertifikaları hakkında detaylı bilgiye erişmek istiyorum; böylece tedarikçi değerlendirmemi güvenle yapabileyim.

#### Acceptance Criteria

1. THE Platform SHALL `/about/` altında şu alt bölümleri içeren bir fabrika otorite merkezi oluşturmalıdır: Firma Hakkında, Üretim Süreci, Kalite Kontrol, Üretim Kapasitesi, İhracat Hizmetleri, Özel Üretim (Private Label), Sertifikalar ve Referanslar.
2. THE Platform SHALL üretim süreci bölümünü adım adım görsel akışla (iplik seçimi → dokuma → boya → kalite kontrol → paketleme) sunmalıdır.
3. THE Platform SHALL sertifikalar bölümünde her sertifikayı görsel, sertifika adı, veren kurum ve geçerlilik bilgisiyle listelemelidir.
4. THE Platform SHALL fabrika otorite sayfasına `Organization`, `Brand` ve `Person` (yetkili kişi) Schema_Markup tiplerini eklemelidir.
5. THE Platform SHALL minimum 50 maddelik bir SSS bölümü oluşturmalı ve her SSS maddesini `FAQPage` Schema_Markup tipiyle işaretlemelidir.
6. THE Platform SHALL müşteri referanslarını logo, firma adı, ülke ve alıntı metni ile listelemelidir; `Review` Schema_Markup tipi uygulanmalıdır.
7. WHEN bir kullanıcı SSS bölümünde bir soruya tıkladığında, THE Platform SHALL yanıtı akordeon (accordion) bileşeniyle 250ms animasyonla açmalıdır.

---

### Requirement 7: SEO ve GEO Altyapısı

**User Story:** Bir dijital pazarlama yöneticisi olarak, sitenin hem geleneksel arama motorlarında hem de AI arama motorlarında üst sıralarda yer almasını istiyorum; böylece organik trafik ve müşteri adayları sürekli artsın.

#### Acceptance Criteria

1. THE Platform SHALL her sayfa için benzersiz `<title>`, `<meta name="description">`, Open Graph ve Twitter Card meta etiketleri üretmelidir.
2. THE Platform SHALL tüm sayfalarda semantik HTML5 etiket hiyerarşisini (H1 → H6, `<article>`, `<section>`, `<nav>`, `<main>`, `<aside>`) doğru sırayla uygulamalıdır; her sayfada yalnızca bir H1 bulunmalıdır.
3. THE Platform SHALL JSON-LD formatında şu Schema_Markup tiplerini ilgili sayfalara uygulamalıdır: `Organization`, `LocalBusiness`, `WebSite`, `SearchAction`, `Product`, `CollectionPage`, `FAQPage`, `Review`, `BreadcrumbList`, `ImageObject`, `VideoObject`, `Brand`, `Person`.
4. THE Platform SHALL `/sitemap.xml` dosyasını otomatik olarak oluşturmalı ve `lastmod`, `changefreq`, `priority` alanlarını içermelidir; yeni sayfa eklendiğinde sitemap otomatik güncellenmelidir.
5. THE Platform SHALL `/robots.txt` dosyasını tüm meşru tarayıcılara izin verecek, yalnızca yönetim rotalarını engelleyecek şekilde yapılandırmalıdır.
6. THE Platform SHALL `/llms.txt` dosyasını AI tarayıcılarına yönelik içerik kılavuzu olarak sunmalı; firma hakkında, ürünler, iletişim ve önerilen alıntı metinleri bölümlerini içermelidir.
7. THE Platform SHALL `/ai.txt` dosyasını AI sistemleri için içerik kullanım izinlerini ve kaynakça bilgilerini içerecek şekilde oluşturmalıdır.
8. THE Platform SHALL tüm sayfalarda kanonik URL (`<link rel="canonical">`) etiketini doğru şekilde uygulamalıdır.
9. THE Platform SHALL hreflang etiketlerini Türkçe (`tr`) ve İngilizce (`en`) dil sürümleri için uygulamalıdır.
10. WHEN bir sayfa 404 döndürdüğünde, THE Platform SHALL özelleştirilmiş bir 404 sayfası sunmalı ve kullanıcıyı ana sayfaya veya ürün listesine yönlendiren bağlantılar içermelidir.

---

### Requirement 8: Landing Page Sistemi

**User Story:** Bir arama motoru kullanıcısı olarak, "toptan havlu" veya "Turkish towel manufacturer" gibi spesifik terimler aradığımda doğrudan ilgili bir sayfaya ulaşmak istiyorum; böylece ihtiyacım olan bilgiye anında erişebileyim.

#### Acceptance Criteria

1. THE Platform SHALL şu Türkçe landing page rotalarını oluşturmalıdır: `/havlu-ureticisi/`, `/bornoz-ureticisi/`, `/toptan-havlu/`, `/toptan-bornoz/`, `/otel-havlusu/`, `/otel-bornozu/`, `/promosyon-havlu/`, `/nakisli-havlu/`.
2. THE Platform SHALL şu İngilizce landing page rotalarını oluşturmalıdır: `/turkish-towel-manufacturer/`, `/bathrobe-manufacturer/`, `/wholesale-towel-supplier/`.
3. THE Platform SHALL her landing page'i o sayfanın hedef anahtar kelimesine yönelik benzersiz H1, meta başlık ve meta açıklamayla yapılandırmalıdır.
4. THE Platform SHALL her landing page'e o kategoriye özel `Product` veya `Service` Schema_Markup tipini uygulamalıdır.
5. THE Platform SHALL her landing page'e sayfa içi bir Dönüşüm_Formu (teklif veya numune istek formu) yerleştirmelidir.
6. THE Platform SHALL landing page içeriklerini ISR stratejisiyle sunmalıdır; yeniden doğrulama süresi (revalidate) maksimum 3600 saniye olmalıdır.
7. THE Platform SHALL landing page URL yapısını kalıcı (301) yönlendirme kurallarıyla tutarlı hâlde tutmalıdır; URL değişikliğinde eski URL otomatik yönlendirilmelidir.

---

### Requirement 9: Dönüşüm Sistemi ve Formlar

**User Story:** Bir toptan alıcı olarak, ürün hakkında teklif istemek veya numune sipariş etmek için hızlı ve kolay bir form doldurmak istiyorum; böylece satış ekibiyle iletişime geçebileyim.

#### Acceptance Criteria

1. THE Platform SHALL şu Dönüşüm_Formu tiplerini desteklemelidir: Teklif İstek Formu, Toplu Sipariş Formu, Numune İstek Formu, İhracat Sorgulama Formu, Genel İletişim Formu.
2. WHEN bir kullanıcı bir formu doldurup gönderdiğinde, THE Platform SHALL form verisini sunucu taraflı bir Edge_Function üzerinden doğrulamalı ve CRM uyumlu bir formatta (JSON) kaydetmelidir.
3. THE Platform SHALL tüm form alanlarını React Hook Form ve Zod şema doğrulamasıyla istemci ve sunucu tarafında çift katmanlı validate etmelidir.
4. WHEN bir form başarıyla gönderildiğinde, THE Platform SHALL kullanıcıya 3 saniye içinde görünür bir başarı bildirimi göstermeli ve formu temizlemelidir.
5. IF bir form gönderimi başarısız olduğunda, THE Platform SHALL kullanıcıya açıklayıcı bir hata mesajı göstermeli ve form verilerini kaybetmemelidir.
6. THE Platform SHALL tüm formlarda honeypot alanı ve rate limiting (IP başına dakikada maksimum 5 istek) uygulayarak spam koruması sağlamalıdır.
7. THE Platform SHALL form verilerini e-posta otomasyon sistemine (Resend, Postmark veya eşdeğeri) iletebilecek bir adaptör katmanı içermelidir.
8. THE Platform SHALL sticky WhatsApp butonunu ekranın sağ alt köşesinde, tüm sayfalarda ve tüm ekran boyutlarında sabit olarak göstermelidir; tıklandığında önceden tanımlı mesaj metniyle WhatsApp Web'i açmalıdır.

---

### Requirement 10: AI Chatbot Altyapısı

**User Story:** Gece saatlerinde siteyi ziyaret eden bir potansiyel müşteri olarak, sorularıma anında yanıt alabilmek istiyorum; böylece satış temsilcisi müsait olmasa bile süreç ilerleyebilsin.

#### Acceptance Criteria

1. THE Platform SHALL bir AI Chatbot bileşeni için kancalama noktası (hook point) içermelidir; chatbot kodu dinamik import ile yalnızca kullanıcı etkileşim başlattığında yüklenmelidir.
2. THE Platform SHALL chatbot widget'ını üçüncü taraf servis (Tidio, Intercom, Crisp veya eşdeğeri) entegrasyonuna hazır şekilde yapılandırmalıdır; entegrasyon kodu tek bir environment variable ile etkinleştirilip devre dışı bırakılabilmelidir.
3. THE Platform SHALL chatbot widget'ının sayfa performansı üzerindeki etkisini sıfırlamak için `strategy="lazyOnload"` ile yüklenmiş `next/script` bileşeni kullanmalıdır.
4. WHEN bir chatbot oturumu başladığında, THE Platform SHALL firma adı, ürün kategorileri ve iletişim bilgilerini içeren bir sistem bağlamı (system context) sağlamalıdır.

---

### Requirement 11: Çok Dilli Destek (Türkçe / İngilizce)

**User Story:** Bir yabancı ihracat alıcısı olarak, sitenin İngilizce sürümüne erişmek istiyorum; böylece ürünler ve ihracat koşulları hakkında ana dilimde bilgi edinebileyim.

#### Acceptance Criteria

1. THE Platform SHALL Next.js App Router ile `tr` ve `en` dil sürümlerini desteklemeli; dil rotaları `/tr/...` ve `/en/...` öneki veya alan adı tabanlı yönlendirme ile ayrılmalıdır.
2. THE Platform SHALL tüm UI metinlerini i18n dosyalarında (JSON veya ts formatında) yönetmeli; sabit kodlanmış metin içermemelidir.
3. WHEN bir kullanıcı tarayıcı dilini `en` olarak ayarladığında, THE Platform SHALL ilk ziyarette otomatik olarak İngilizce sürüme yönlendirmelidir; kullanıcı dil tercihini cookie ile saklamalıdır.
4. THE Platform SHALL hreflang etiketlerini her sayfada Türkçe ve İngilizce eş değer sayfaları birbirine bağlayacak şekilde uygulamalıdır.
5. THE Platform SHALL tüm Schema_Markup içeriklerini aktif dile uygun dilde üretmelidir.

---

### Requirement 12: Analitik ve İzleme Altyapısı

**User Story:** Bir pazarlama yöneticisi olarak, hangi sayfaların en çok ziyaret edildiğini, hangi formların dönüştüğünü ve organik trafiğin nereden geldiğini ölçmek istiyorum; böylece içerik ve reklam stratejimi veriyle yönlendirebileyim.

#### Acceptance Criteria

1. THE Platform SHALL Google Analytics 4 entegrasyonunu `next/script` ile `strategy="afterInteractive"` kullanarak uygulamalıdır; ölçüm kimliği bir environment variable üzerinden yapılandırılmalıdır.
2. THE Platform SHALL Google Search Console doğrulama meta etiketini veya dosyasını desteklemelidir.
3. THE Platform SHALL her form gönderiminde, her CTA tıklamasında ve her WhatsApp butonuna tıklamada bir GA4 özel olayı (custom event) tetiklemelidir.
4. THE Platform SHALL Vercel Analytics ve Speed Insights bileşenlerini `next/analytics` üzerinden entegre etmelidir.
5. WHEN bir sayfa 500 hatası döndürdüğünde, THE Platform SHALL hatayı Vercel log pipeline'ına kaydettirmeli ve opsiyonel olarak harici bir hata izleme servisi (Sentry veya eşdeğeri) üzerinden raporlamalıdır.

---

### Requirement 13: İçerik Yönetimi ve Dinamik İçerik Altyapısı

**User Story:** Bir içerik editörü olarak, geliştirici müdahalesi olmadan ürün açıklamalarını, SSS içeriklerini ve blog yazılarını güncellemek istiyorum; böylece içerik yönetimi bağımsız bir süreçle yürütülebilsin.

#### Acceptance Criteria

1. THE Platform SHALL içerik verilerini (ürünler, SSS, referanslar, blog yazıları) merkezi JSON, MDX veya Headless CMS uyumlu bir veri katmanında yönetmelidir.
2. THE Platform SHALL ürün, SSS ve blog içeriklerini tek bir tip-güvenli (type-safe) TypeScript veri şemasıyla tanımlamalıdır.
3. WHEN yeni bir ürün verisi eklendiğinde, THE Platform SHALL ilgili koleksiyon sayfasını ve sitemapı otomatik olarak yeniden oluşturmalıdır (ISR tetiklemesi).
4. THE Platform SHALL Headless CMS entegrasyonu (Sanity, Contentful veya eşdeğeri) için bir adaptör katmanı içermelidir; CMS servisi environment variable ile değiştirilebilir olmalıdır.
5. THE Platform SHALL görsel varlıkları (ürün fotoğrafları, fabrika görselleri) Vercel Blob, Cloudinary veya eşdeğer bir CDN servisi üzerinden sunmalıdır.

---

### Requirement 14: Güvenlik ve Erişilebilirlik

**User Story:** Bir platform yöneticisi olarak, sitenin güvenlik açıklarına karşı korumalı ve tüm kullanıcı gruplarına erişilebilir olmasını istiyorum; böylece hem yasal uyumluluk hem de kullanıcı güveni sağlanmış olsun.

#### Acceptance Criteria

1. THE Platform SHALL HTTP güvenlik başlıklarını (`Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Strict-Transport-Security`, `Referrer-Policy`) Next.js `next.config.ts` içinde yapılandırmalıdır.
2. THE Platform SHALL tüm çevresel değişkenleri (API anahtarları, webhook URL'leri) `.env.local` ve Vercel Environment Variables üzerinde saklamalı; kaynak kodda hiçbir gizli değer bulunmamalıdır.
3. THE Platform SHALL tüm form girişlerini sunucu tarafında sanitize ederek XSS ve injection saldırılarına karşı korumalıdır.
4. THE Platform SHALL tüm interaktif bileşenleri klavye navigasyonu ve ekran okuyucu desteği ile WCAG 2.1 AA standardına uygun şekilde uygulamalıdır.
5. THE Platform SHALL tüm görseller için açıklayıcı `alt` metni sağlamalıdır; dekoratif görseller için `alt=""` kullanılmalıdır.
6. THE Platform SHALL `<html lang="tr">` (veya aktif dile uygun) özelliğini her sayfada doğru şekilde ayarlamalıdır.
7. THE Platform SHALL GDPR uyumluluğu için çerez onay banner'ı içermeli; kullanıcı onayı olmadan analitik ve pazarlama scriptleri çalıştırılmamalıdır.

---

### Requirement 15: İletişim Sayfası ve Yerel İşletme Bilgileri

**User Story:** Bir müşteri adayı olarak, firmanın adresini, telefon numarasını ve çalışma saatlerini kolayca bulmak istiyorum; böylece doğrudan iletişime geçebileyim.

#### Acceptance Criteria

1. THE Platform SHALL `/contact/` sayfasını adres, telefon, e-posta, çalışma saatleri ve yerleşik harita bileşeni içerecek şekilde oluşturmalıdır.
2. THE Platform SHALL iletişim sayfasına `LocalBusiness` ve `ContactPage` Schema_Markup tiplerini eklemelidir.
3. THE Platform SHALL iletişim sayfasında genel bir Dönüşüm_Formu sunmalıdır.
4. WHEN bir kullanıcı telefon numarasına tıkladığında, THE Platform SHALL mobil cihazlarda `tel:` protokolü üzerinden doğrudan arama başlatmalıdır.
5. THE Platform SHALL NAP (Name, Address, Phone) bilgilerini site genelinde tutarlı ve yapılandırılmış veri olarak uygulamalıdır.

---

### Requirement 16: Sayfa Geçişleri ve Kullanıcı Deneyimi Mikro-Animasyonları

**User Story:** Bir site ziyaretçisi olarak, sayfalar arasında gezerken akıcı geçiş animasyonları görmek istiyorum; böylece deneyimim Premium_UI standardıyla uyumlu hissettirsin.

#### Acceptance Criteria

1. THE Platform SHALL Next.js App Router `layout.tsx` ve Framer Motion `AnimatePresence` bileşeniyle sayfa giriş/çıkış animasyonlarını uygulamalıdır.
2. THE Platform SHALL scroll-triggered animasyonları Framer Motion `useInView` hook'uyla; element görünüme girdiğinde fade-in + translateY(20px → 0) geçişini 400ms içinde tamamlamalıdır.
3. THE Platform SHALL animasyonları `prefers-reduced-motion: reduce` medya sorgusu aktif olduğunda devre dışı bırakmalıdır.
4. WHEN bir kullanıcı bir bağlantıya tıkladığında, THE Platform SHALL sayfa geçiş animasyonunu 300ms içinde tamamlamalıdır ve LCP'yi olumsuz etkilememelidir.

---

## Faz Kapsamı Notu

Bu gereksinimler dokümanı **Phase 1: Master Architecture** kapsamını tanımlamaktadır.

---

## Phase 3: SEO + GEO Authority Gereksinimleri

---

### Requirement 17: Teknik SEO Altyapısı — Meta ve Kanonik Sistem

**User Story:** Bir SEO mühendisi olarak, sitenin her sayfasının dinamik, benzersiz ve doğru meta verilerle donatılmasını istiyorum; böylece arama motorları her sayfayı doğru şekilde indeksleyebilsin.

#### Acceptance Criteria

1. THE Platform SHALL her sayfa için `generateMetadata()` fonksiyonuyla dinamik `<title>` (maks. 60 karakter), `<meta name="description">` (maks. 160 karakter), Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) ve Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) etiketleri üretmelidir.
2. THE Platform SHALL tüm sayfalarda `<link rel="canonical" href="...">` etiketini sayfanın kanonik URL'iyle doğru şekilde uygulamalıdır; parametre içeren URL'lerde kanonik parametresiz sürüme işaret etmelidir.
3. THE Platform SHALL hreflang etiketlerini her sayfada `tr` ve `en` dil sürümleri için `<link rel="alternate" hreflang="tr" href="...">` ve `<link rel="alternate" hreflang="en" href="...">` olarak uygulamalıdır.
4. THE Platform SHALL `<html lang="tr">` (veya aktif dile uygun) özelliğini her sayfada doğru şekilde ayarlamalıdır.
5. THE Platform SHALL Google Search Console doğrulaması için meta doğrulama etiketi veya HTML dosyası desteği sunmalıdır.
6. THE Platform SHALL Bing Webmaster Tools doğrulaması için meta etiket desteği sunmalıdır.

---

### Requirement 18: İndeksleme ve Sitemap Sistemi

**User Story:** Bir dijital pazarlama yöneticisi olarak, sitenin tüm önemli sayfalarının arama motorlarınca hızla keşfedilmesini ve indekslenmesini istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL Next.js `app/sitemap.ts` ile `/sitemap.xml` dosyasını otomatik oluşturmalı; her URL için `loc`, `lastmod`, `changefreq` ve `priority` alanlarını içermelidir.
2. THE Platform SHALL `/image-sitemap.xml` dosyasını oluşturmalı; tüm ürün görsellerini `image:loc`, `image:title`, `image:caption` alanlarıyla listelenmelidir.
3. THE Platform SHALL `/video-sitemap.xml` dosyasını oluşturmalı; fabrika/ürün videoları varsa `video:title`, `video:description`, `video:thumbnail_loc` alanlarını içermelidir.
4. THE Platform SHALL `/robots.txt` dosyasını şu kuralla yapılandırmalıdır: tüm meşru botlara ana içerik izin verilir, yalnızca `/api/`, `/_next/`, `/admin/` yolları engellenir; sitemap URL'si belirtilir.
5. WHEN yeni bir sayfa veya ürün eklendiğinde, THE Platform SHALL ISR ile sitemap otomatik güncellenmelidir; güncelleme gecikmesi 3600 saniyeyi aşmamalıdır.
6. THE Platform SHALL IndexNow protokolünü desteklemeli; yeni içerik yayınlandığında `indexnow.org` ve Bing'e otomatik ping göndermelidir.
7. THE Platform SHALL `/robots.txt` içinde sitemap URL referansını içermelidir.

---

### Requirement 19: Schema Markup (Yapılandırılmış Veri) Sistemi

**User Story:** Bir SEO mühendisi olarak, sitenin tüm önemli içeriklerinin Google Rich Results ve AI sistemleri tarafından anlaşılabilir yapılandırılmış veriyle işaretlenmesini istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL **Organization Schema**'yı ana sayfaya ve tüm sayfalara global olarak JSON-LD formatında eklemelidir; `name`, `url`, `logo`, `contactPoint`, `address`, `sameAs` (sosyal medya URL'leri) alanlarını içermelidir.
2. THE Platform SHALL **LocalBusiness Schema**'yı ana sayfa ve iletişim sayfasına eklemelidir; `name`, `address`, `telephone`, `openingHours`, `geo` (enlem/boylam), `priceRange` alanlarını içermelidir.
3. THE Platform SHALL **WebSite Schema**'yı ana sayfaya eklemelidir; `SearchAction` tipiyle site içi arama özelliğini `potentialAction` olarak tanımlamalıdır.
4. THE Platform SHALL **Product Schema**'yı her ürün sayfasına eklemelidir; `name`, `description`, `image`, `brand`, `offers` (fiyat yerine "Fiyat için İletişime Geçin"), `material`, `weight` alanlarını içermelidir.
5. THE Platform SHALL **CollectionPage + ItemList Schema**'yı ürün koleksiyon sayfasına eklemelidir; her ürün `ListItem` olarak listelenmelidir.
6. THE Platform SHALL **FAQPage Schema**'yı tüm SSS içeren sayfalara eklemelidir; her soru–cevap çifti `Question` + `Answer` tipiyle işaretlenmelidir.
7. THE Platform SHALL **BreadcrumbList Schema**'yı iç sayfalara eklemelidir; her adım `ListItem` ile sıralı olarak tanımlanmalıdır.
8. THE Platform SHALL **Review Schema**'yı müşteri görüşleri bölümlerine eklemelidir; `reviewRating`, `author`, `reviewBody` alanlarını içermelidir.
9. THE Platform SHALL **ImageObject Schema**'yı ürün görselleri ve fabrika fotoğraflarına eklemelidir; `url`, `width`, `height`, `name`, `description` alanlarını içermelidir.
10. THE Platform SHALL **Brand Schema**'yı Organization Schema içinde `brand` alanı olarak tanımlamalıdır.
11. THE Platform SHALL tüm Schema verilerini `<script type="application/ld+json">` formatında, ilgili sayfanın `<head>` bölümüne eklemelidir.
12. WHEN bir Schema ekleme veya güncelleme yapıldığında, THE Platform SHALL Google Rich Results Test aracıyla doğrulanabilir geçerli JSON-LD üretmelidir.

---

### Requirement 20: GEO (Generative Engine Optimization) Altyapısı

**User Story:** Bir dijital pazarlama direktörü olarak, ChatGPT, Gemini, Claude, Perplexity, Copilot ve Grok gibi AI sistemlerinin, kullanıcılar Türkiye'deki havlu üreticisini sorduğunda Başkan Havlu Tekstil'i kaynak olarak göstermesini istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL `/llms.txt` dosyasını kök dizinde sunmalıdır; dosya: firma adı, kuruluş yılı, üretim kapasitesi, ürün kategorileri, sertifikalar, ihracat yaptığı ülkeler, iletişim bilgileri ve AI sistemlerine yönelik alıntı önerileri bölümlerini içermelidir.
2. THE Platform SHALL `/ai.txt` dosyasını kök dizinde sunmalıdır; dosya: içerik kullanım izinleri (crawling:yes, indexing:yes, training:yes/no tercihi), atıf formatı, güncel versiyon bilgisi ve güncelleme tarihi alanlarını içermelidir.
3. THE Platform SHALL her sayfa için makine okunabilir "Entity Block" bölümü oluşturmalıdır; bu bölüm görünmez bir `<div aria-hidden="true">` değil, `<section class="entity-facts">` veya schema ile işaretlenmiş görünür içerik olmalıdır.
4. THE Platform SHALL firma hakkında bir "AI Citation Page" oluşturmalıdır (`/hakkimizda-ai/` veya `/about/entity/`); bu sayfa: firma tam adı, kuruluş tarihi, faaliyet alanı, üretim kapasitesi, sertifikalar, coğrafi konum, ihracat pazarları ve iletişim bilgilerini düz metin ve JSON-LD formatında içermelidir.
5. THE Platform SHALL tüm ürün ve hizmet sayfalarını "Fact Block" yapısıyla donatmalıdır; her fact block: konu, iddianın kanıtı (sayısal veri veya sertifika referansı) ve bağlamsal açıklamayı içermelidir.
6. THE Platform SHALL içerik yazımında "Entity-First" yaklaşımını uygulamalıdır; her paragraf bir varlık (entity) ile başlamalı ve o varlık hakkında doğrulanabilir bir özellik veya ilişki içermelidir.
7. THE Platform SHALL semantic entity ilişkilerini `sameAs` alanıyla Wikidata, Google Knowledge Graph ve sektör directory kayıtlarına bağlamalıdır.

---

### Requirement 21: Topikal Otorite Kümeleri (Topic Clusters)

**User Story:** Bir içerik stratejisti olarak, sitenin havlu ve tekstil üretimi konularında Google'da topikal otorite kazanabilmesi için birbiriyle bağlantılı sayfa kümelerini yapılandırmak istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL şu 6 topikal otorite kümesini oluşturmalıdır: Havlu Üretimi, Bornoz Üretimi, Otel Tekstili, Toptan Tekstil, Promosyon Tekstil, İhracat Tekstil.
2. THE Platform SHALL her küme için bir **pillar page** (sütun sayfası) oluşturmalıdır; pillar page: konuya kapsamlı giriş, alt konulara bağlantılar, FAQ bölümü ve Schema markup içermelidir.
3. THE Platform SHALL her pillar page'e en az 3 **supporting page** (destekleyici alt sayfa) bağlamalı ve her destekleyici sayfanın pillar sayfasına geri bağlantı içermesini sağlamalıdır.
4. THE Platform SHALL landing page'lerle topikal kümeleri birbirine dahili bağlantılarla entegre etmelidir; `/havlu-ureticisi/` sayfası Havlu Üretimi kümesinin pillar sayfası olarak işlev görmelidir.
5. THE Platform SHALL iç bağlantı yapısını "hub and spoke" modeliyle oluşturmalıdır; ana kategori sayfaları hub, alt sayfalar spoke rolünü üstlenmelidir.
6. WHEN yeni bir içerik sayfası oluşturulduğunda, THE Platform SHALL o sayfanın ait olduğu topikal kümenin pillar sayfasına ve en az 2 ilgili destekleyici sayfaya bağlantı içermesini zorunlu kılmalıdır.

---

### Requirement 22: Landing Page SEO Sistemi

**User Story:** Bir SEO uzmanı olarak, belirli anahtar kelimeler için optimize edilmiş, her biri benzersiz içerik barındıran ve arama amacına tam uyumlu landing page'lerin oluşturulmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL şu 11 landing page'i oluşturmalıdır ve her biri benzersiz içerik barındırmalıdır (içerik çakışması %10'un altında olmalıdır):
   - `/havlu-ureticisi/` — Hedef: "havlu üreticisi", "havlu imalatçısı", "havlu fabrikası"
   - `/bornoz-ureticisi/` — Hedef: "bornoz üreticisi", "bornoz fabrikası"
   - `/toptan-havlu/` — Hedef: "toptan havlu", "toptan havlu satışı"
   - `/toptan-bornoz/` — Hedef: "toptan bornoz", "toptan bornoz satışı"
   - `/otel-havlusu/` — Hedef: "otel havlusu", "otel havlu tedarikçisi"
   - `/otel-bornozu/` — Hedef: "otel bornozu", "otel bornoz tedarikçisi"
   - `/promosyon-havlu/` — Hedef: "promosyon havlu", "logolu havlu"
   - `/nakisli-havlu/` — Hedef: "nakışlı havlu", "işlemeli havlu"
   - `/turkish-towel-manufacturer/` — Hedef: "Turkish towel manufacturer", "Turkey towel factory"
   - `/bathrobe-manufacturer/` — Hedef: "bathrobe manufacturer Turkey", "Turkish bathrobe supplier"
   - `/wholesale-towel-supplier/` — Hedef: "wholesale towel supplier", "bulk towel supplier Turkey"
2. THE Platform SHALL her landing page için şu yapıyı uygulamalıdır: hedef anahtar kelime içeren H1, değer önerisi, ürün örnekleri, fabrika otoritesi özeti, müşteri görüşleri, SSS (5–8 soru), iletişim formu.
3. THE Platform SHALL her landing page'e sayfaya özgü FAQPage Schema ve Product/Service Schema eklemelidir.
4. THE Platform SHALL her landing page'in ilgili topikal kümenin pillar sayfasına ve en az 3 iç sayfaya bağlantı içermesini sağlamalıdır.
5. THE Platform SHALL landing page içeriklerini ISR ile sunmalı; revalidate süresi maksimum 3600 saniye olmalıdır.
6. THE Platform SHALL eski URL'lerden yeni URL'lere 301 kalıcı yönlendirmeleri `next.config.ts` içinde tanımlamalıdır.

---

### Requirement 23: Semantik HTML ve İçerik Yapısı

**User Story:** Bir SEO mühendisi olarak, sitenin HTML yapısının hem arama motorları hem de AI crawler'ları için anlam açısından zengin ve doğru hiyerarşide olmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL tüm sayfalarda yalnızca bir `<h1>` etiketi kullanmalıdır; H1 içinde sayfanın birincil hedef anahtar kelimesi yer almalıdır.
2. THE Platform SHALL `<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, `<aside>` etiketlerini anlam hiyerarşisine uygun şekilde kullanmalıdır.
3. THE Platform SHALL `<nav>` bileşenine `aria-label="Ana Navigasyon"` eklemeli; birden fazla nav varsa her birini farklı etiketle işaretlemelidir.
4. THE Platform SHALL ürün açıklamalarını `<article>` etiketi içinde, özellikleri `<dl>` (tanım listesi) etiketiyle yapılandırmalıdır.
5. THE Platform SHALL ekmek kırıntısı (breadcrumb) navigasyonunu `<nav aria-label="Breadcrumb">` + `<ol>` yapısıyla oluşturmalı ve BreadcrumbList Schema ile eşleştirmelidir.
6. THE Platform SHALL tüm bağlantılarda anlam taşıyan `anchor text` kullanmalıdır; "buraya tıklayın", "daha fazla" gibi generik metinler kullanılmamalıdır.
7. THE Platform SHALL `<img>` etiketlerinde `alt` metnini ürün adı + özellik + bağlam formatında yazmalıdır (ör: "Başkan Havlu 600g/m² Otel Havlusu — Beyaz").

---

### Requirement 24: Core Web Vitals ve Performans SEO

**User Story:** Bir teknik SEO uzmanı olarak, sitenin Google PageSpeed skorunun 95+ olmasını ve Core Web Vitals'ın Google'ın "İyi" eşiklerini karşılamasını istiyorum; çünkü performans doğrudan sıralama faktörüdür.

#### Acceptance Criteria

1. THE Platform SHALL LCP (Largest Contentful Paint) değerini 1,5 saniyenin altında tutmalıdır; hero görseli `priority` + `fetchpriority="high"` ile yüklenmelidir.
2. THE Platform SHALL CLS (Cumulative Layout Shift) değerini 0,05'in altında tutmalıdır; tüm görsellere `width` ve `height` özelliği verilmeli, web font yüklemesinde `font-display: swap` kullanılmalıdır.
3. THE Platform SHALL INP (Interaction to Next Paint) değerini 150ms'nin altında tutmalıdır; ağır JavaScript işlemleri Web Worker veya `scheduler.postTask` API'siyle ana iş parçacığından ayrılmalıdır.
4. THE Platform SHALL tüm görselleri WebP birincil format, AVIF ise `<picture>` etiketi ile tarayıcı desteği olan cihazlara sunmalıdır.
5. THE Platform SHALL Next.js `Image` bileşenini tüm görsellerde kullanmalı; `sizes` özelliğini viewport'a göre doğru tanımlamalıdır.
6. THE Platform SHALL kritik olmayan CSS'i `<link rel="preload">` ve `media` sorgusuyla erteleyerek ilk yükleme süresiyle etkilememelidir.
7. THE Platform SHALL üçüncü taraf scriptlerini (GA4, chatbot, vb.) `next/script` ile `strategy="afterInteractive"` veya `strategy="lazyOnload"` olarak yüklemelidir.

---

### Requirement 25: Dahili Bağlantı (Internal Linking) Grafiği

**User Story:** Bir SEO stratejisti olarak, sitenin dahili bağlantı yapısının sayfa otoritesini doğru sayfalar arasında dağıtmasını ve tarayıcı botların tüm önemli sayfaları kolayca keşfetmesini istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL ana navigasyonda ana kategori sayfalarını (Ürünler, Hakkımızda, İletişim + 11 Landing Page) bağlamalıdır.
2. THE Platform SHALL her ürün sayfasından ilgili kategori sayfasına ve en az 2 ilgili landing page'e bağlantı içermelidir.
3. THE Platform SHALL footer'da tüm landing page'lere bağlantı içeren bir "Ürün Kategorileri" bölümü sunmalıdır.
4. THE Platform SHALL her landing page'den aynı topikal kümedeki diğer landing page'lere "İlgili Sayfalar" bölümüyle bağlantı kurmalıdır.
5. THE Platform SHALL SSS yanıtlarında ilgili ürün veya hizmet sayfalarına bağlantı içermelidir; her SSS yanıtı için en az 1 dahili bağlantı hedeflenmelidir.
6. THE Platform SHALL blog veya içerik sayfaları oluşturulduğunda, ilgili ürün veya landing page'e en az 2 bağlantı içermesini zorunlu kılmalıdır.
7. THE Platform SHALL orphan page (hiçbir dahili bağlantıyla ulaşılamayan sayfa) oluşmamasını sağlamalı; tüm sayfalar en az bir dahili bağlantıyla erişilebilir olmalıdır.

---

## Phase 4: Content Authority + Conversion Engine Gereksinimleri

---

### Requirement 26: İçerik Otorite Sistemi — SSS (50+ Madde)

**User Story:** Bir içerik stratejisti olarak, sitenin her önemli konuyu kapsayan en az 50 soruluk bir SSS sistemi sunmasını istiyorum; böylece hem kullanıcılar hem de AI sistemleri bu kaynağı başvuru noktası olarak kullansın.

#### Acceptance Criteria

1. THE Platform SHALL minimum 50 maddelik bir SSS sistemi oluşturmalıdır; sorular şu 10 kategoride organize edilmelidir: Üretim, Fiyatlandırma, Minimum Sipariş (MOQ), İhracat Süreci, Numune Süreci, Özelleştirme / Logo Nakışı, Teslimat Süreleri, Ödeme Koşulları, Kalite Kontrol, Otel Tekstili.
2. THE Platform SHALL SSS içeriklerini her biri en az 5 soru içerecek şekilde kategorilere dağıtmalıdır; tek bir kategoride 10'dan fazla soru bulunmamalıdır (denge için).
3. THE Platform SHALL her SSS yanıtını somut, fabrika otoritesine dayalı ve doğrulanabilir bilgiyle yazmalıdır; "kaliteli ürünler sunuyoruz" gibi muğlak ifadeler kullanılmamalıdır.
4. THE Platform SHALL SSS sayfasını kategori sekmeli (tabbed) yapıda sunmalıdır; kullanıcı sekmeye tıklayınca ilgili kategori soruları listelenir.
5. THE Platform SHALL FAQPage Schema'yı tüm SSS içeriğine uygulamalıdır (Requirement 19.6 ile uyumlu).
6. WHEN bir SSS kategorisi sayfası görüntülendiğinde, THE Platform SHALL o kategorideki tüm soruları doğrudan ilgili ürün veya hizmet sayfasına dahili bağlantıyla bağlamalıdır.

---

### Requirement 27: Blog Mimarisi (100 Makale Şablonu)

**User Story:** Bir SEO içerik mimarı olarak, sitenin topikal otoritesini pekiştirecek ve AI sistemlerine atıf verisi sağlayacak yapılandırılmış bir blog sistemi istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL bir blog mimarisi oluşturmalı; makaleler şu 8 kategoride yapılandırılmalıdır: Havlu Üretim Rehberleri, Bornoz Üretim Rehberleri, Otel Tekstil Çözümleri, Toptan Havlu Alım Rehberleri, Türk Tekstil Sektörü, İhracat Rehberleri, Özel Marka (Private Label) Tekstil, Promosyon Tekstil Pazarlama.
2. THE Platform SHALL her blog kategorisi için en az 12 makale başlığı şablonu oluşturmalıdır; toplam 100 makale şablonu hedeflenmelidir.
3. THE Platform SHALL her blog makalesinin şu yapıyı izlemesini zorunlu kılmalıdır: H1 başlık (anahtar kelime içerir), giriş (problem tanımı), H2 ana bölümler (3–5 adet), Fact Block (somut veriler), dahili bağlantılar (en az 2), ilgili ürüne CTA, SSS bölümü (3–5 soru).
4. THE Platform SHALL blog makalelerini ISR ile sunmalıdır; yeni makale yayınlandığında sitemap otomatik güncellenmelidir.
5. THE Platform SHALL blog listesi sayfasına `/blog/` rotasını ve her makaleye `/blog/[slug]/` rotasını atamalıdır.
6. THE Platform SHALL her blog makalesine Article Schema ve BreadcrumbList Schema uygulamalıdır.
7. THE Platform SHALL "İlgili Makaleler" bileşeniyle her makale sonunda 3 bağlantılı makale önermeli; öneriler aynı kategoriden seçilmelidir.

---

### Requirement 28: Landing Page İçerik Sistemi (Conversion-Optimized)

**User Story:** Bir dönüşüm optimizasyon uzmanı olarak, her landing page'in belirli bir hedef kitleye hitap eden, güven inşa eden ve somut bir eyleme yönlendiren yapıda yazılmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL her landing page için şu içerik yapısını uygulamalıdır:
   - **Bölüm 1 — Dikkat (Attention):** Fayda odaklı H1 başlık + 1 cümle değer önerisi + birincil CTA
   - **Bölüm 2 — İlgi (Interest):** Problem → Çözüm yapısı, 3 maddelik liste
   - **Bölüm 3 — Güven (Trust):** Somut fabrika verileri (kapasite, yıl, sertifika)
   - **Bölüm 4 — Kanıt (Proof):** 2–3 müşteri görüşü + ülke / firma adı
   - **Bölüm 5 — Ürün Örnekleri:** 4–6 ilgili ürün kartı
   - **Bölüm 6 — Eylem (Action):** Dönüşüm formu (compact, 5 alan) + WhatsApp CTA
   - **Bölüm 7 — SSS:** Sayfaya özgü 5–8 soru
2. THE Platform SHALL her landing page'deki H1 başlığı hedef anahtar kelimeyi içermeli ve fayda odaklı olmalıdır (ör: "Fabrikadan Direkt Toptan Havlu — MOQ Esnekliği ile").
3. THE Platform SHALL her landing page'deki tüm iddiaları somut verilerle desteklemelidir; "yüksek kalite" yerine "600 g/m², Oeko-Tex sertifikalı" gibi doğrulanabilir ifadeler kullanılmalıdır.
4. THE Platform SHALL landing page içeriklerini "No Fluff" kuralına uygun yazmalıdır; her cümle bilgi taşımalı, dolgu metin bulunmamalıdır.
5. THE Platform SHALL her landing page'e en az 2 CTA (birincil + ikincil) yerleştirmelidir; birincil CTA her zaman birinci ekranda (above the fold) görünür olmalıdır.
6. THE Platform SHALL İngilizce landing page'leri (/turkish-towel-manufacturer/, /bathrobe-manufacturer/, /wholesale-towel-supplier/) İngilizce içerikle, ihracat alıcısına yönelik terminolojiyle yazmalıdır.

---

### Requirement 29: Kopya (Copywriting) Sistemi ve Ton Kılavuzu

**User Story:** Bir marka yazarı olarak, sitenin tüm metin içeriklerinin tutarlı, otoriter ve B2B alıcısına güven veren bir tonda yazılmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL tüm sayfalarda şu ton kılavuzunu uygulamalıdır: kurumsal (corporate), lüks üretici otoritesi, B2B odaklı, somut ve gerçek veriye dayalı — pazaryeri veya bayi tonu kesinlikle bulunmamalıdır.
2. THE Platform SHALL şu CTA metinlerini standart olarak kullanmalıdır: "Toptan Teklif Al", "Numune İste", "Toplu Sipariş Başlat", "Fabrikayla İletişime Geç", "İhracat Sorgulama" — genel "İletişim" veya "Gönder" gibi zayıf metinler kullanılmamalıdır.
3. THE Platform SHALL ürün açıklamalarını şu formatta yazmalıdır: materyal özelliği + teknik veri + kullanım alanı + fayda; ör: "Combed ring %100 pamuk, 600 g/m², otel banyo havlusu — maksimum yumuşaklık ve uzun ömür."
4. THE Platform SHALL fabrika otorite bölümünde şu içerik blokları bulunmalıdır: Firma hikayesi (kuruluş yılı, büyüme), Üretim kapasitesi (sayısal), Makine parkı (özet), İhracat ülkeleri (liste), Sertifikalar (görsel + ad), Kalite kontrol süreci (adım adım).
5. THE Platform SHALL hero bölümlerinde güçlü, somut başlıklar kullanmalıdır; muğlak süperlatiflere (en iyi, eşsiz, mükemmel) yer verilmemelidir — yerine doğrulanabilir iddialar kullanılmalıdır (ör: "Dünyanın 40'tan Fazla Ülkesine İhracat Yapan Türk Havlu Üreticisi").

---

### Requirement 30: Dönüşüm Sistemi — Form ve Lead Capture

**User Story:** Bir müşteri adayı (lead) oluşturma uzmanı olarak, sitedeki her formun minimum sürtünmeyle maksimum veri toplamasını ve CRM sistemine hazır formatta iletmesini istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL şu 5 form tipini desteklemelidir ve her biri benzersiz alanlar içermelidir:
   - **Teklif İstek Formu:** Ad, Firma, E-posta, Telefon, Ürün Türü, Tahmini Miktar, Mesaj
   - **Toplu Sipariş Formu:** Ad, Firma, Ülke, E-posta, Telefon, Ürün Türü, Miktar, Teslimat Tarihi, Özel İstek
   - **Numune İstek Formu:** Ad, E-posta, Telefon, İstenen Ürün, Teslimat Adresi, Notlar
   - **İhracat Sorgulama Formu:** Ad, Firma, Ülke, E-posta, Telefon, İthalat Kapasitesi, Ödeme Tercihi, Mesaj
   - **Genel İletişim Formu:** Ad, E-posta, Telefon, Konu, Mesaj
2. THE Platform SHALL her form gönderiminde şu lead verisini CRM uyumlu JSON formatında kaydetmelidir: `name`, `company`, `country`, `email`, `phone`, `orderType`, `quantityRange`, `contactMethod`, `formType`, `sourcePage`, `timestamp`, `language`.
3. THE Platform SHALL her formda WhatsApp fallback bağlantısı sunmalıdır; form altında "Hızlı yanıt için WhatsApp ile yazın" + yönlendirme bağlantısı görünür olmalıdır.
4. THE Platform SHALL form gönderim sonrası bir teşekkür mesajı göstermeli ve ardından ilgili ürün sayfasına yönlendirme seçeneği sunmalıdır.
5. THE Platform SHALL tüm formlar için Requirement 9.6'da tanımlanan spam koruma mekanizmalarını (honeypot + rate limiting) uygulamalıdır.
6. THE Platform SHALL her sayfada en az 2 CTA bulunmasını zorunlu kılmalıdır; sticky WhatsApp butonu tüm sayfalarda her zaman görünür olmalıdır.

---

### Requirement 31: Güven Sistemi (E-E-A-T)

**User Story:** Bir B2B alıcısı olarak, sitenin içeriğinin gerçek bir üretici tarafından yayınlandığını, firmayı tanıyabileceğimi ve yatırımımın güvende olduğunu hissettiren somut kanıtlar görmek istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL firma otorite bölümünü şu içerik bloklarıyla oluşturmalıdır: kuruluş yılı ve tarihsel büyüme, üretim alanı (m²), günlük/yıllık üretim kapasitesi, çalışan sayısı (varsa), ihracat yapılan ülke sayısı ve bölgeler.
2. THE Platform SHALL sertifikalar bölümünü görsel + sertifika adı + veren kurum + geçerlilik bilgisiyle oluşturmalıdır; minimum ISO veya Oeko-Tex gibi sektör sertifikaları listelenmelidir.
3. THE Platform SHALL müşteri görüşlerini şu yapıyla sunmalıdır: alıntı metni, müşteri adı, unvanı, firma adı, ülke — kurumsal referanslar için firma logosu da eklenmelidir.
4. THE Platform SHALL kalite kontrol sürecini adım adım görsel akışla tanımlamalıdır; her adımda uygulanan test veya kontrol yöntemi belirtilmelidir.
5. THE Platform SHALL "Fabrika Turu" veya "Üretim Galerisi" bölümüyle gerçek fabrika fotoğraflarını göstermelidir; stok görsel kullanılmamalıdır.
6. THE Platform SHALL tüm sayısal iddiaları (kapasite, ihracat, yıl) meta veri veya schema markup ile işaretleyerek makinece doğrulanabilir kılmalıdır.

---

### Requirement 32: AI İçerik Okunabilirliği

**User Story:** Bir GEO uzmanı olarak, sitenin tüm içeriğinin LLM'ler (ChatGPT, Gemini vb.) tarafından kolayca okunabilir, anlaşılabilir ve alıntılanabilir formatta yazılmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL tüm içerik sayfalarını "Entity-First" yazım kuralıyla yapılandırmalıdır; her H2 veya H3 altındaki ilk cümle bir varlık adı (firma, ürün, lokasyon) ile başlamalıdır.
2. THE Platform SHALL "Fact Block" bileşenini anahtar sayfa ve bölümlerde kullanmalıdır; her fact block: başlık (varlık), 3–5 madde halinde doğrulanabilir gerçek, kaynak veya referans içermelidir.
3. THE Platform SHALL ürün ve hizmet sayfalarına "Quick Facts" kutusu eklemeli; kutu şu alanları içermelidir: Kategori, Materyal, Gramaj Aralığı, Minimum Sipariş, Teslimat Süresi, Sertifika.
4. THE Platform SHALL blog makalelerini ve landing page içeriklerini paragraf başı 3 cümle maksimum kuralıyla yapılandırmalıdır; uzun paragraflar AI tarayıcılarının içerik çıkarmasını güçleştirir.
5. THE Platform SHALL tablo ve liste formatını tercih etmelidir; kıyaslama, özellik ve süreç içerikleri düz paragraf yerine tablo veya madde listesiyle sunulmalıdır.
6. THE Platform SHALL her içerik sayfasına `datePublished` ve `dateModified` meta alanlarını eklemeli; bu alanlar Article Schema ile işaretlenmelidir.

---

## Phase 5: Technical Infrastructure + Performance + Final Audit Gereksinimleri

---

### Requirement 33: Frontend Mimarisi ve Rendering Stratejisi

**User Story:** Bir yazılım mimarı olarak, platformun her sayfa tipi için doğru rendering stratejisini kullanmasını istiyorum; böylece performans, SEO ve ölçeklenebilirlik aynı anda sağlansın.

#### Acceptance Criteria

1. THE Platform SHALL Next.js 15 App Router ile şu rendering stratejisi matrisini uygulamalıdır:
   - **SSG (Static Site Generation):** Ana sayfa, hakkımızda, iletişim, landing page'ler
   - **ISR (Incremental Static Regeneration):** Ürün listesi (`revalidate: 3600`), ürün detay (`revalidate: 3600`), blog sayfaları (`revalidate: 1800`)
   - **SSR (Server Side Rendering):** Arama sonuçları, filtreli ürün listeleri (URL parametreli)
   - **Edge Runtime:** API rotaları (`/api/lead/*`), `robots.txt`, `sitemap.xml` yanıt başlıkları
2. THE Platform SHALL tüm `'use client'` direktiflerini yalnızca gerçekten istemci taraflı etkileşim gerektiren yaprak bileşenlere (leaf components) uygulamalıdır; layout ve sayfa bileşenleri varsayılan olarak Server Component olmalıdır.
3. THE Platform SHALL Framer Motion animasyon bileşenlerini `dynamic(() => import(...), { ssr: false })` ile yüklemeli; animasyon olmayan Server Component'lar aynı sayfada etkilenmemelidir.
4. THE Platform SHALL route-based code splitting'i Next.js App Router'ın varsayılan davranışına bırakmalı; ek manuel chunk konfigürasyonu yalnızca `next.config.ts` içinde `experimental.optimizePackageImports` ile yapılmalıdır.
5. THE Platform SHALL kritik CSS'i Next.js'in built-in inline CSS optimizasyonuyla ilk HTML yanıtına gömmeli; kritik olmayan stiller asenkron yüklenmelidir.
6. THE Platform SHALL font yüklemesini `next/font` ile yapmalı; `display: 'swap'` ve `preload: true` ayarları uygulanmalıdır.

---

### Requirement 34: Performans Mühendisliği ve Core Web Vitals

**User Story:** Bir performans mühendisi olarak, platformun tüm sayfalarda Google'ın "İyi" eşiklerini karşılamasını ve PageSpeed 95+ skorunu korumasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL LCP < 1.5s hedefine ulaşmak için hero görselini `<Image priority fetchpriority="high">` ile yüklemeli; hero içindeki `<h1>` metni sunucu tarafında render edilmiş olmalıdır.
2. THE Platform SHALL CLS < 0.05 hedefine ulaşmak için şu kuralları uygulamalıdır: tüm `<Image>` bileşenlerine `width` ve `height` verilmeli; web font yüklemesinde `font-display: swap` kullanılmalı; dinamik içerik alanları için `min-height` rezervasyonu yapılmalıdır.
3. THE Platform SHALL INP < 150ms hedefine ulaşmak için ağır hesaplamalar `requestIdleCallback` veya `startTransition` ile ana iş parçacığından ertelenmeli; event handler'lar debounce/throttle uygulamalıdır.
4. THE Platform SHALL JavaScript bundle boyutunu sayfa başına 200 KB (gzip) altında tutmalıdır; `@next/bundle-analyzer` ile her build'de bundle raporu üretilmelidir.
5. THE Platform SHALL üçüncü taraf scriptlerin toplam engelleme süresini (TBT) 200ms altında tutmalıdır; GA4, chatbot ve diğer scriptler `strategy="lazyOnload"` ile yüklenmelidir.
6. THE Platform SHALL tüm görselleri şu hiyerarşiyle sunmalıdır: AVIF (öncelikli) → WebP (fallback) → JPEG/PNG (son çare); `<picture>` etiketi ve Next.js `Image` formats konfigürasyonu kullanılmalıdır.
7. THE Platform SHALL statik varlıklar için Vercel CDN'de `Cache-Control: public, max-age=31536000, immutable` başlığını uygulamalıdır.

---

### Requirement 35: Çok Katmanlı Önbellekleme Stratejisi

**User Story:** Bir DevOps mühendisi olarak, platformun tekrarlayan isteklerde veritabanı veya hesaplama yüküne neden olmadan maksimum hızla yanıt vermesini istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL şu 4 katmanlı önbellekleme mimarisini uygulamalıdır:
   - **Katman 1 — Tarayıcı Önbelleği:** Statik varlıklar için 1 yıl; HTML için `no-cache, must-revalidate`
   - **Katman 2 — CDN Önbelleği (Vercel Edge):** SSG/ISR sayfaları için `stale-while-revalidate`; API rotaları için `s-maxage=60, stale-while-revalidate=300`
   - **Katman 3 — Next.js Data Cache:** `fetch()` çağrılarında `{ next: { revalidate: N } }` veya `{ cache: 'force-cache' }` seçenekleri
   - **Katman 4 — ISR Önbelleği:** Ürün ve blog sayfaları için `revalidate` değerleri Requirement 33.1 matrisine uygun
2. THE Platform SHALL ISR yeniden doğrulama (revalidation) mekanizmasını `next/cache` modülündeki `revalidatePath()` ve `revalidateTag()` ile programatik olarak tetikleyebilmelidir.
3. THE Platform SHALL API rotaları için `Cache-Control: s-maxage=60, stale-while-revalidate=300` başlığını uygulamalıdır; lead form API'leri (`/api/lead/*`) önbelleğe alınmamalıdır (`Cache-Control: no-store`).

---

### Requirement 36: API Tasarımı ve Lead Yönetimi

**User Story:** Bir backend mühendisi olarak, tüm form gönderimlerini işleyen API rotalarının güvenli, hızlı ve tip-güvenli olmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL şu API rotalarını oluşturmalıdır: `/api/lead/quote`, `/api/lead/sample`, `/api/lead/bulk`, `/api/lead/export`, `/api/contact` — her biri yalnızca `POST` metodunu kabul etmelidir.
2. THE Platform SHALL tüm API giriş verilerini Zod şemasıyla sunucu tarafında doğrulamalıdır; doğrulama hatası durumunda `400` durum kodu ve hata detayı döndürülmelidir.
3. THE Platform SHALL API yanıt sürelerini 200ms altında tutmalıdır; uzun işlemler (e-posta gönderimi, CRM çağrısı) arka planda (fire-and-forget) işlenmelidir.
4. THE Platform SHALL API rotalarını Edge Runtime'da çalıştırmalıdır: `export const runtime = 'edge'` direktifi kullanılmalıdır.
5. THE Platform SHALL tüm API rotalarına IP tabanlı rate limiting uygulamalıdır: `/api/lead/*` için dakikada maksimum 5 istek, `/api/contact` için dakikada maksimum 3 istek.
6. THE Platform SHALL her başarılı lead kaydında e-posta otomasyon servisine (Resend veya Postmark) bildirim göndermeli ve lead verisini CONV-5 JSON şemasına uygun formatta kaydetmelidir.
7. THE Platform SHALL CORS politikasını yalnızca `baskanhavlu.com` ve `www.baskanhavlu.com` origin'lerine izin verecek şekilde yapılandırmalıdır.

---

### Requirement 37: Güvenlik Altyapısı

**User Story:** Bir güvenlik mühendisi olarak, platformun üretim ortamında yaygın web güvenlik açıklarına karşı korumalı olmasını ve güvenlik başlıklarının doğru yapılandırılmış olmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL `next.config.ts` içinde aşağıdaki HTTP güvenlik başlıklarını tüm yanıtlara uygulamalıdır:
   - `Content-Security-Policy`: script, style, img, font, connect kaynaklarını beyaz listeyle kısıtlar
   - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
2. THE Platform SHALL tüm çevresel değişkenleri (API anahtarları, webhook token'ları, DB bağlantı dizileri) `.env.local` ve Vercel Environment Variables'da saklamalı; hiçbir gizli değer kaynak kodda bulunmamalıdır.
3. THE Platform SHALL tüm form girişlerini sunucu tarafında DOMPurify veya eşdeğeri ile sanitize etmelidir; Zod doğrulamasından geçmeyen hiçbir değer işlenmemelidir.
4. THE Platform SHALL tüm formlarda honeypot alanı uygulamalıdır; honeypot dolu gelen istekler loglanmalı ve sessizce reddedilmelidir.
5. THE Platform SHALL Vercel Firewall veya middleware katmanında şüpheli bot trafiğini (user-agent tabanlı) filtreleyebilecek yapıda olmalıdır.
6. THE Platform SHALL tüm bağımlılıkları `npm audit` ile düzenli tarama yapacak bir CI adımında kontrol etmeli; yüksek önem dereceli (high/critical) açık bulunan paketler deploy engellenerek bildirilmelidir.
7. WHEN bir API rotası bilinmeyen bir hata döndürdüğünde, THE Platform SHALL hata detaylarını istemciye iletmemeli; yalnızca genel hata mesajı ve benzersiz hata kimliği döndürmelidir.

---

### Requirement 38: Gözlemlenebilirlik ve İzleme

**User Story:** Bir DevOps mühendisi olarak, platformun üretim ortamında gerçek zamanlı olarak izlenebilmesini, hataların otomatik raporlanmasını ve performans regresyonlarının erken tespit edilmesini istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL Google Analytics 4'ü `next/script` ile `strategy="afterInteractive"` olarak entegre etmeli; ölçüm kimliği environment variable üzerinden yapılandırılmalıdır.
2. THE Platform SHALL şu GA4 özel olaylarını tetiklemelidir: `form_submit` (form tipi + kaynak sayfa), `cta_click` (CTA metni + sayfa), `whatsapp_click` (kaynak sayfa), `product_view` (ürün ID + adı), `lead_converted` (form tipi).
3. THE Platform SHALL Vercel Analytics ve Speed Insights paketlerini `@vercel/analytics` ve `@vercel/speed-insights` ile entegre etmeli; her sayfada otomatik web vitals raporlaması yapılmalıdır.
4. THE Platform SHALL Sentry'yi `@sentry/nextjs` ile entegre etmeli; `SENTRY_DSN` environment variable üzerinden yapılandırılmalıdır; uncaught exception ve unhandled promise rejection'lar otomatik raporlanmalıdır.
5. THE Platform SHALL Sentry'de kaynak haritalarını (source maps) yüklemelidir; production build'de source map dosyaları istemciye gönderilmemelidir.
6. THE Platform SHALL Google Search Console doğrulama mekanizmasını (meta etiketi veya HTML dosyası) desteklemelidir.
7. THE Platform SHALL Bing Webmaster Tools doğrulama meta etiketini `layout.tsx` üzerinden tüm sayfalara eklemelidir.

---

### Requirement 39: Veritabanı Katmanı (İsteğe Bağlı / Hazır Yapı)

**User Story:** Bir yazılım mimarı olarak, lead verilerini, ürünleri, SSS içeriklerini ve blog yazılarını kalıcı ve tip-güvenli bir veritabanı yapısında saklayabilmek istiyorum; ilk fazda bu katman isteğe bağlı olsa da mimari hazır olmalıdır.

#### Acceptance Criteria

1. THE Platform SHALL veritabanı katmanını bir adaptör deseniyle soyutlamalıdır; birincil veri kaynağı JSON dosyaları veya Headless CMS olabilir, ileride Supabase / PlanetScale gibi bir servisle değiştirilebilir.
2. THE Platform SHALL şu veri modellerini tip-güvenli TypeScript arayüzleriyle tanımlamalıdır: `Lead`, `Product`, `FAQItem`, `BlogPost`, `Testimonial`, `Certificate` — her model `id`, `createdAt`, `updatedAt` alanlarını içermelidir.
3. THE Platform SHALL lead verilerini öncelikle Vercel KV veya Upstash Redis üzerinde geçici olarak saklayabilmeli; uzun vadeli depolama için harici CRM veya veritabanına adaptör aracılığıyla iletmelidir.
4. THE Platform SHALL tüm veritabanı sorgu ve yazma işlemlerini bir servis katmanı (`/lib/services/`) üzerinden yapmalıdır; API rotaları doğrudan veritabanı istemcisi kullanmamalıdır.
5. IF veritabanı bağlantısı başarısız olduğunda, THE Platform SHALL lead verilerini e-posta yedek mekanizmasıyla iletmeli ve hatayı Sentry'ye raporlamalıdır.

---

### Requirement 40: Deployment ve DevOps

**User Story:** Bir DevOps mühendisi olarak, platformun Vercel üzerinde sıfır kesinti (zero downtime) ile deploy edilmesini, ortam değişkenlerinin güvenli yönetilmesini ve CI/CD pipeline'ının otomatik çalışmasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL Vercel üzerinde deploy edilmeli; `main` branch'e her push'ta otomatik production deploy tetiklenmelidir.
2. THE Platform SHALL `preview` branch'lere her PR açıldığında otomatik preview deployment oluşturmalıdır; preview URL'si PR açıklamasına otomatik eklenir.
3. THE Platform SHALL CI pipeline'ında şu adımları sırasıyla çalıştırmalıdır: `npm run lint` → `npm run type-check` → `npm run build` → production deploy.
4. THE Platform SHALL lint veya type-check hatası durumunda deploy işlemini durdurmalı ve hata raporunu CI loglarına yazmalıdır.
5. THE Platform SHALL ortam değişkenlerini üç ortam için ayrı ayrı yapılandırmalıdır: `development` (.env.local), `preview` (Vercel Preview Env), `production` (Vercel Production Env).
6. THE Platform SHALL Vercel'in otomatik ölçeklendirme (auto scaling) ve edge network altyapısını kullanmalıdır; manuel sunucu yapılandırması gerekmemelidir.
7. THE Platform SHALL `next.config.ts` içinde `output: 'standalone'` veya standart Vercel deployment konfigürasyonunu kullanmalıdır; Docker ihtiyacı yalnızca self-hosting durumunda geçerlidir.

---

### Requirement 41: Final Sistem Denetimi (Full Audit)

**User Story:** Bir teknik direktör olarak, platform üretime geçmeden önce tüm sistemlerin — SEO, GEO, performans, güvenlik, erişilebilirlik, mobil ve Schema — kapsamlı bir denetimden geçmesini ve eksiklerin düzeltilmesini istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL deploy öncesi şu denetim kategorilerini otomatik veya yarı-otomatik araçlarla tamamlamalıdır:
   - **SEO Denetimi:** Tüm sayfalarda H1 varlığı, canonical URL, meta description, hreflang, kırık bağlantı kontrolü
   - **GEO Denetimi:** `llms.txt`, `ai.txt`, `robots.txt` varlığı ve içerik doğruluğu; Schema markup Google Rich Results Test onayı
   - **Performans Denetimi:** Lighthouse CI — LCP, CLS, INP, PageSpeed skoru; bundle analyzer raporu
   - **Güvenlik Denetimi:** HTTP güvenlik başlıkları (`securityheaders.com` eşdeğeri), `npm audit` raporu, ortam değişkeni sızıntı kontrolü
   - **Erişilebilirlik Denetimi:** Axe-core otomatik tarama; Lighthouse accessibility skoru ≥ 95
   - **Mobil Denetim:** 375px ve 320px breakpoint'lerinde tüm kritik sayfaların render testi
   - **Schema Denetimi:** JSON-LD syntax doğrulaması, Google Rich Results Test onayı, zorunlu alan eksikliği kontrolü
2. THE Platform SHALL her denetim kategorisi için geçer/kalır (pass/fail) çıktısı üretmeli; başarısız kontroller deploy pipeline'ını uyarı (warning) veya engel (error) olarak işaretlemelidir.
3. THE Platform SHALL denetim sonuçlarını `audit-report.json` formatında `/.kiro/audit/` dizinine kaydetmelidir.
4. WHEN bir denetim kriteri başarısız olduğunda, THE Platform SHALL hatanın kaynağını (sayfa URL'si, bileşen adı veya kural) ve önerilen düzeltme adımını içeren bir rapor üretmelidir.
5. THE Platform SHALL Lighthouse CI'yi `lighthouserc.js` konfigürasyonu ile CI pipeline'ına entegre etmeli; `performance: 95`, `accessibility: 95`, `best-practices: 90`, `seo: 100` eşik değerlerini geçemeyen build'ler fail olarak işaretlenmelidir.

---

## Phase 7: Kritik Düzeltmeler + Gerçek Veri Entegrasyonu

---

### Requirement 42: NAP Tutarlılığı ve Veri Kaynağı Kilidi

**User Story:** Bir SEO mühendisi olarak, firma adı, adres ve telefon bilgilerinin tüm sayfa içerikleri, Schema markup ve AI dosyalarında birebir aynı olmasını istiyorum; tutarsızlık yerel SEO sıralamalarını ve AI varlık tespitini olumsuz etkiler.

#### Acceptance Criteria

1. THE Platform SHALL `lib/config/site.ts` dosyasını tüm sistemin tek veri kaynağı (source of truth) olarak kullanmalıdır; hiçbir bileşen telefon, adres veya e-posta değerini sabit kodlamamalıdır.
2. THE Platform SHALL şu NAP değerlerini tüm sayfa içerikleri, Schema markup, footer, iletişim sayfası, llms.txt ve ai.txt dosyalarında birebir aynı kullanmalıdır:
   - **Ad:** Başkan Havlu Tekstil
   - **Adres:** Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26, Osmangazi / Bursa, Türkiye
   - **Telefon:** +90 507 342 06 61
   - **E-posta:** tekstil@baskanhavlu.com
3. THE Platform SHALL WhatsApp bağlantılarını yalnızca `https://wa.me/905073420661` formatında kullanmalıdır; diğer format varyasyonları kullanılmamalıdır.
4. [SUPERSEDED 2026-09-03 — bkz. AGENTS.md, lib/config/site.ts] THE Platform SHALL firma kuruluş yılını "1996" olarak tüm Schema ve içeriklerde doğru yansıtmalıdır; iş modeli "doğrudan havlu ve bornoz imalatı"dır (eski "1981 / tedarik-koordinasyon" tanımı geçersizdir). "25+ yıl" gibi türev ifadeler Schema'da değil yalnızca pazarlama metninde kullanılabilir.
5. WHEN bir bileşen iletişim bilgisi gösterdiğinde, THE Platform SHALL `SITE_CONFIG` nesnesinden değeri okumalı; hiçbir zaman sabit string kullanmamalıdır.

---

### Requirement 43: İş Modeli Doğruluğu ve Yanıltıcı İddia Yasağı

**User Story:** Bir hukuki uyum uzmanı olarak, platformun iş modelini doğru şekilde "tekstil tedarik ve özel üretim koordinasyonu" olarak tanımlamasını istiyorum; doğrulanamayan fabrika kapasitesi, çalışan sayısı veya sertifika iddiası bulunmamalıdır.

#### Acceptance Criteria

1. THE Platform SHALL iş modelini tüm içeriklerde "tekstil tedarik ve özel/fason üretim koordinasyonu" olarak tanımlamalıdır; "fabrikamız", "kendi üretimimiz", "fabrika sahipleriyiz" gibi ifadeler kullanılmamalıdır.
2. THE Platform SHALL doğrulanmamış üretim kapasitesi rakamları kullanmamalıdır; "günlük X adet üretim", "yıllık X adet" gibi ifadeler içerik veya Schema'ya eklenmemelidir.
3. THE Platform SHALL sertifika iddiasını yalnızca gerçek ve belgeli sertifika mevcutsa eklemeli; sertifika doğrulanmadan "ISO sertifikalı", "Oeko-Tex sertifikalı" gibi ifadeler kullanılmamalıdır.
4. THE Platform SHALL ihracat kapsamını yalnızca doğrulanmış pazarlarla sınırlandırmalıdır: Arap Ülkeleri ve Yunanistan; "40+ ülke", "global ihracat" gibi abartılı ifadeler kullanılmamalıdır.
5. THE Platform SHALL çalışan sayısını belirtmemelidir; bu veri doğrulanmadan Schema veya içeriğe eklenmemelidir.
6. WHEN içerik bir iddada bulunduğunda, THE Platform SHALL iddiayı somut, doğrulanabilir bir veriyle desteklemelidir; desteklenemeyen iddialar "muğlak pazarlama metni" olarak değerlendirilmeli ve kaldırılmalıdır.

---

### Requirement 44: GDPR Çerez Onay Sistemi

**User Story:** Bir AB vatandaşı olarak, siteye ilk girdiğimde hangi çerezlerin toplandığını açıkça görmek ve izin vermeden analitik takibinin başlamamasını istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL tüm ziyaretçilere ilk ziyarette çerez onay banner'ı göstermelidir; banner iki seçenek sunmalıdır: "Kabul Et" (tüm çerezler) ve "Yalnızca Zorunlu" (yalnızca teknik zorunlu çerezler).
2. THE Platform SHALL kullanıcı "Yalnızca Zorunlu" seçtiğinde GA4, Vercel Analytics ve pazarlama scriptlerini yüklememeli; yükleme yalnızca "Kabul Et" seçimi sonrasında gerçekleşmelidir.
3. THE Platform SHALL çerez tercihini `localStorage`'da `cookie_consent` anahtarıyla saklamalı; tercih mevcut olduğunda banner tekrar gösterilmemelidir.
4. THE Platform SHALL footer'da "Çerez Tercihleri" bağlantısını sunmalı; bu bağlantı tıklandığında kullanıcının tercihini değiştirebildiği bir modal açmalıdır.
5. THE Platform SHALL `/cerez-politikasi/` ve `/gizlilik-politikasi/` sayfalarını oluşturmalı; bu sayfalar toplanan veriler, saklama süreleri ve kullanıcı hakları bilgisini içermelidir.
6. THE Platform SHALL çerez onay yönetimini `CookieConsentProvider` context bileşeni ile merkezi olarak yönetmelidir; her bileşen onay durumunu bu provider'dan okumalıdır.

---

### Requirement 45: Dönüşüm Sistemi Gerçek Veri ile Güncelleme

**User Story:** Bir potansiyel müşteri olarak, WhatsApp butonuna tıkladığımda gerçek bir iş numarasına ulaşmak ve formları doldurduğumda mesajımın gerçekten ilgili kişiye ulaştığından emin olmak istiyorum.

#### Acceptance Criteria

1. THE Platform SHALL tüm WhatsApp bağlantılarını `https://wa.me/905073420661` adresiyle oluşturmalı; Türkçe sayfalarda `?text=Merhaba%2C%20bilgi%20almak%20istiyorum.`, İngilizce sayfalarda `?text=Hello%2C%20I%20would%20like%20to%20get%20information.` ön mesajını eklemeli; ürün sayfalarında ürün adını dinamik olarak mesaja dahil etmelidir.
2. THE Platform SHALL tüm form bildirimlerini `tekstil@baskanhavlu.com` adresine iletmelidir; gönderici adres `no-reply@baskanhavlu.com` olmalıdır (Resend veya Postmark ile doğrulanmış domain).
3. THE Platform SHALL form gönderimlerinde e-posta servisinin başarısız olması durumunda lead verisini Vercel KV'ye yedek olarak yazmalı ve hatayı Sentry'ye raporlamalıdır.
4. THE Platform SHALL teşekkür sayfasını `/tesekkurler/` rotasında oluşturmalıdır; form gönderimi sonrası kullanıcı bu sayfaya yönlendirilmeli; GA4 `conversion` eventi bu sayfada tetiklenmelidir.

---

### Requirement 46: Ürün Sistemini Gerçek İş Modeline Uyarlama

**User Story:** Bir içerik editörü olarak, ürün sayfalarının gerçek ürün yelpazesini ve iş modelini yansıtmasını istiyorum; sahte stok, SKU veya üretim kapasitesi verisi bulunmamalıdır.

#### Acceptance Criteria

1. THE Platform SHALL ürün sistemini stok/envanter yönetimi yerine kategori bazlı tanımlamalıdır; her kategori ürün adı, kullanım alanı, özelleştirme seçenekleri ve MOQ notunu içermelidir; somut stok adedi belirtilmemelidir.
2. THE Platform SHALL şu 6 ürün kategorisini oluşturmalıdır: El Havlusu, Yüz Havlusu, Banyo Havlusu, Kafa/Saç Havlusu, Ayak Havlusu, Promosyon Havlu.
3. THE Platform SHALL MOQ bilgisini "Stok ve ürüne göre değişir — teklif için iletişime geçin" olarak göstermelidir; sabit rakam belirtilmemelidir.
4. THE Platform SHALL teslimat süresini "Sipariş büyüklüğüne göre belirlenir — teklif aşamasında netleştirilir" olarak göstermelidir.
5. THE Platform SHALL her ürün kategorisi sayfasına "Teklif Al" CTA'sını ve WhatsApp hızlı iletişim butonunu yerleştirmelidir; ziyaretçinin doğrudan sipariş yapabileceği izlenimi verilmemelidir (önce teklif, sonra sipariş akışı).

---

## Phase 8: Production Launch + Growth Gereksinimleri

---

### Requirement 47: Google Arama İndeksleme Sistemi

**User Story:** Bir dijital pazarlama yöneticisi olarak, site canlıya alındıktan sonraki 7 gün içinde Google'ın öncelikli sayfaları indekslemesini istiyorum; böylece organik trafik en kısa sürede başlasın.

#### Acceptance Criteria

1. THE Platform SHALL deploy sonrası Google Search Console'a domain property olarak eklenebilmeli; doğrulama için DNS TXT kaydı veya HTML dosyası yöntemi desteklenmelidir.
2. THE Platform SHALL sitemap.xml ve image-sitemap.xml dosyalarını Google Search Console üzerinden gönderilebilecek şekilde sunmalıdır.
3. THE Platform SHALL IndexNow API entegrasyonunu `/api/revalidate` endpoint'i üzerinden tetikleyebilmeli; yeni içerik yayınlandığında `https://api.indexnow.org/indexnow` adresine POST isteği göndermelidir.
4. THE Platform SHALL şu öncelik sırasıyla ilk indeksleme talebini işlemeli: Ana Sayfa → /havlu-ureticisi/ → /toptan-havlu/ → /otel-havlusu/ → /promosyon-havlu/ → /new-collection/ → /about/ → /contact/.
5. THE Platform SHALL `robots.txt` dosyasını yalnızca `/api/`, `/_next/`, `/admin/` yollarını engelleyecek şekilde yapılandırmalı; tüm içerik sayfaları taranabilir olmalıdır.
6. THE Platform SHALL Bing Webmaster Tools doğrulaması için meta etiket desteği sunmalıdır.

---

### Requirement 48: Google Business Profile Uyumu

**User Story:** Bir yerel SEO uzmanı olarak, platformun Google Business Profile ile tam uyumlu NAP bilgilerine sahip olmasını istiyorum; böylece Bursa yerel arama sonuçlarında ve Google Maps'te görünürlük sağlansın.

#### Acceptance Criteria

1. THE Platform SHALL Google Business Profile NAP bilgileriyle birebir eşleşen adres, telefon ve firma adını tüm sayfalarda kullanmalıdır.
2. THE Platform SHALL LocalBusiness Schema'daki `hasMap` alanını Google Maps bağlantısıyla (`https://share.google/fBgq5t9yzyukx2Fte`) doldurmalıdır.
3. THE Platform SHALL iletişim sayfasına yerleşik Google Maps görünümünü desteklemelidir; statik harita görseli veya iframe embed olarak sunulabilir.
4. THE Platform SHALL yapılandırılmış veriler ile Google Business Profile kategori seçiminin tutarlı olmasını sağlamalıdır: birincil kategori "Tekstil Tedarikçisi" veya eşdeğeri olmalıdır.

---

### Requirement 49: Dönüşüm Takibi ve GA4 Event Sistemi

**User Story:** Bir büyüme analisti olarak, hangi sayfaların lead ürettiğini, hangi CTA'ların tıklandığını ve WhatsApp'a nereden geldiğini ölçmek istiyorum; böylece büyüme kararlarımı veriye dayalı verebileceyim.

#### Acceptance Criteria

1. THE Platform SHALL şu GA4 custom event'lerini tanımlamalı ve doğru şekilde tetiklemelidir: `form_submit` (form tipi + kaynak sayfa), `whatsapp_click` (kaynak konum + sayfa), `cta_click` (metin + sayfa), `product_view` (kategori + sayfa).
2. THE Platform SHALL `/tesekkurler/` sayfasını oluşturmalı; bu sayfanın GA4'te dönüşüm hedefi olarak işaretlenebilmesi için `conversion` eventi tetiklenmelidir.
3. THE Platform SHALL form gönderim başarısı durumunda kullanıcıyı `/tesekkurler/` rotasına yönlendirmeli veya sayfa içi başarı mesajı gösterirken aynı anda `form_submit` GA4 eventini tetiklemelidir.
4. THE Platform SHALL WhatsApp butonuna her tıklamada `whatsapp_click` eventini kaynak bilgisiyle (sticky buton, ürün sayfası, iletişim sayfası) birlikte tetiklemelidir.

---

### Requirement 50: Lansmanı Takiben İlk 30 Günlük İçerik Sistemi

**User Story:** Bir SEO içerik stratejisti olarak, site canlıya geçtikten sonraki 30 gün içinde yayınlanacak 10 blog makalesinin hazır olmasını istiyorum; makaleler yüksek niyet anahtar kelimelerini hedeflemeli ve AI tarafından alıntılanabilir yapıda olmalıdır.

#### Acceptance Criteria

1. THE Platform SHALL ilk 10 blog makalesini LAUNCH-6'da tanımlanan sıra ve başlık yapısına göre yayınlamaya hazır hâle getirmelidir; her makale şu yapıyı izlemelidir: H1 (anahtar kelime), giriş, 3–5 H2 bölüm, Fact Block, dahili link (2+), CTA, FAQ (3–5 soru).
2. THE Platform SHALL her blog makalesine Article Schema ve BreadcrumbList Schema uygulamalıdır.
3. THE Platform SHALL blog makalesinin her H2 bölümünü en fazla 3 paragraf, her paragrafı en fazla 3 cümle ile sınırlandırmalıdır; bu yapı AI sistemlerinin içerik çıkarmasını kolaylaştırır.
4. THE Platform SHALL her blog makalesinde ilgili ürün kategorisi sayfasına ve en az bir landing page'e dahili bağlantı içermelidir.
