# Design Document

## Overview

Başkan Havlu Tekstil dijital platformunun tam UI/UX mimarisi. Bu doküman Phase 2: Elite UI/UX Architecture kapsamında, kodlamaya geçmeden önce platformun nasıl görünmesi, davranması ve hissettirmesi gerektiğini tanımlar. Referans noktaları: Apple, Stripe, Tesla, Linear — geleneksel tekstil şablonlarından tamamen ayrışan, lüks üretici konumlandırması.

---

## 1. TASARIM SİSTEMİ — Design Tokens

### 1.1 Renk Sistemi

#### Birincil — Premium Turuncu

| Token        | Değer     | Kullanım               |
| ------------ | --------- | ---------------------- |
| `orange-50`  | `#FFF7F0` | Açık arka plan vurgusu |
| `orange-100` | `#FFE8CC` | Hover arka planları    |
| `orange-200` | `#FFD0A3` | Devre dışı durumlar    |
| `orange-400` | `#FF9F52` | Açık vurgular          |
| `orange-500` | `#E87722` | **Ana marka rengi**    |
| `orange-600` | `#CC6419` | Hover durumu           |
| `orange-700` | `#A85210` | Basılı durum           |
| `orange-900` | `#6B2F08` | Koyu aksan             |

#### İkincil — Bej / Krem

| Token       | Değer     | Kullanım         |
| ----------- | --------- | ---------------- |
| `beige-50`  | `#FAF8F5` | Sayfa arka planı |
| `beige-100` | `#F5F0EA` | Kart arka planı  |
| `beige-200` | `#EDE5D8` | Bölücüler        |
| `beige-300` | `#E0D4C0` | Kenarlıklar      |
| `beige-500` | `#C4A882` | Taş Bej vurgu    |
| `beige-600` | `#A88C64` | İkincil metin    |
| `beige-700` | `#8A7050` | Koyu bej         |

#### Nötr — Koyu Kömür

| Token          | Değer     | Kullanım         |
| -------------- | --------- | ---------------- |
| `charcoal-900` | `#1A1A1A` | Birincil metin   |
| `charcoal-800` | `#2D2D2D` | İkincil metin    |
| `charcoal-700` | `#404040` | Üçüncül metin    |
| `charcoal-600` | `#5C5C5C` | Devre dışı metin |
| `charcoal-300` | `#B3B3B3` | Kenarlıklar      |
| `charcoal-100` | `#F0F0F0` | Bölücüler        |

#### Anlamsal Renkler

| Token      | Değer     | Kullanım        |
| ---------- | --------- | --------------- |
| `success`  | `#16A34A` | Form başarısı   |
| `error`    | `#DC2626` | Form hatası     |
| `warning`  | `#D97706` | Uyarı durumları |
| `whatsapp` | `#25D366` | WhatsApp butonu |

---

### 1.2 Tipografi Sistemi

**Birincil Yazı Tipi:** Plus Jakarta Sans (veya Inter)
**Aksan Yazı Tipi:** DM Serif Display (premium başlıklar, hero)

#### Ölçek Tablosu

| Sınıf   | Mobil | Tablet | Masaüstü | Ağırlık | Satır Y. | Harf A. |
| ------- | ----- | ------ | -------- | ------- | -------- | ------- |
| Display | 36px  | 52px   | 72px     | 800     | 1.05     | -0.03em |
| H1      | 28px  | 40px   | 56px     | 700     | 1.10     | -0.02em |
| H2      | 24px  | 32px   | 40px     | 700     | 1.15     | -0.01em |
| H3      | 20px  | 24px   | 28px     | 600     | 1.25     | 0em     |
| H4      | 18px  | 20px   | 22px     | 600     | 1.35     | 0em     |
| Body LG | 16px  | 17px   | 18px     | 400     | 1.65     | 0em     |
| Body    | 14px  | 15px   | 16px     | 400     | 1.65     | 0em     |
| Caption | 11px  | 12px   | 13px     | 500     | 1.50     | 0.06em  |
| Label   | 11px  | 12px   | 12px     | 600     | 1.40     | 0.08em  |

**Maksimum satır uzunluğu:** 65ch (gövde metni okunabilirliği)
**Metin hizalama:** Mobilde soldan hizalı (merkez değil — daha güçlü hissettiriri)

---

### 1.3 Boşluk Sistemi (8px Tabanlı)

| Token      | Değer | Kullanım                  |
| ---------- | ----- | ------------------------- |
| `space-1`  | 4px   | Mikro boşluk (ikon–metin) |
| `space-2`  | 8px   | Bileşen içi padding       |
| `space-3`  | 12px  | Etiket padding            |
| `space-4`  | 16px  | Kart padding (mobil)      |
| `space-6`  | 24px  | Kart padding (masaüstü)   |
| `space-8`  | 32px  | Bölüm içi boşluk          |
| `space-12` | 48px  | Bölüm boşluğu (mobil)     |
| `space-16` | 64px  | Bölüm boşluğu (masaüstü)  |
| `space-24` | 96px  | Büyük bölüm padding       |
| `space-32` | 128px | Hero padding              |

---

### 1.4 Köşe Yarıçapı

| Token         | Değer  | Kullanım                |
| ------------- | ------ | ----------------------- |
| `radius-xs`   | 4px    | Küçük rozetler          |
| `radius-sm`   | 6px    | Etiketler               |
| `radius-md`   | 8px    | Butonlar, inputlar      |
| `radius-lg`   | 12px   | Küçük kartlar           |
| `radius-xl`   | 16px   | Ürün kartları           |
| `radius-2xl`  | 24px   | Modallar, paneller      |
| `radius-3xl`  | 32px   | Hero görseli            |
| `radius-full` | 9999px | Hap butonlar, avatarlar |

---

### 1.5 Gölge Sistemi

| Token           | Değer                              | Kullanım             |
| --------------- | ---------------------------------- | -------------------- |
| `shadow-xs`     | `0 1px 2px rgba(0,0,0,0.04)`       | Subtle elevation     |
| `shadow-sm`     | `0 2px 8px rgba(0,0,0,0.06)`       | Kartlar (default)    |
| `shadow-md`     | `0 4px 16px rgba(0,0,0,0.08)`      | Kartlar (hover)      |
| `shadow-lg`     | `0 8px 32px rgba(0,0,0,0.10)`      | Açılır menüler       |
| `shadow-xl`     | `0 16px 48px rgba(0,0,0,0.12)`     | Modallar             |
| `shadow-2xl`    | `0 24px 64px rgba(0,0,0,0.14)`     | Hero elementleri     |
| `shadow-orange` | `0 8px 24px rgba(232,119,34,0.30)` | CTA butonlar (hover) |

---

### 1.6 Animasyon Değerleri

#### Zamanlama

| Token                 | Değer | Kullanım                    |
| --------------------- | ----- | --------------------------- |
| `duration-instant`    | 0ms   | Anında değişimler           |
| `duration-fast`       | 150ms | Hover renk değişimi         |
| `duration-normal`     | 200ms | Buton hover, küçük geçişler |
| `duration-medium`     | 300ms | Kart hover, açılır panel    |
| `duration-slow`       | 400ms | Sayfa içi scroll animasyonu |
| `duration-deliberate` | 600ms | Hero giriş animasyonu       |

#### Eğriler

| Token         | Değer                         | Kullanım            |
| ------------- | ----------------------------- | ------------------- |
| `ease-out`    | `cubic-bezier(0, 0, 0.2, 1)`  | Giriş animasyonları |
| `ease-in`     | `cubic-bezier(0.4, 0, 1, 1)`  | Çıkış animasyonları |
| `ease-spring` | `stiffness: 300, damping: 30` | Elastik efektler    |

---

## 2. BİLEŞEN HİYERARŞİSİ

### 2.1 Temel Bileşenler (Atoms)

#### Button

```
Varyantlar:
  primary    → turuncu dolu, beyaz metin, shadow-orange (hover)
  secondary  → beyaz, turuncu kenarlık, turuncu metin
  ghost      → şeffaf, koyu kömür metin, beige-100 (hover)
  whatsapp   → #25D366 dolu, beyaz metin

Boyutlar:
  sm  → h:36px, px:14px, text:13px
  md  → h:44px, px:20px, text:15px  (varsayılan)
  lg  → h:52px, px:28px, text:17px

Durumlar:
  default  → temel stil
  hover    → scale(1.02) + shadow-orange, 200ms ease-out
  active   → scale(0.98), 100ms
  loading  → devre dışı + sağda spinner
  disabled → opacity:0.4, cursor:not-allowed

Erişilebilirlik:
  → min 44×44px dokunma hedefi
  → focus-visible: 2px turuncu ring, 2px offset
```

#### Badge / Tag

```
Varyantlar:
  default     → beige-100 arka plan, charcoal-700 metin
  premium     → orange-50 arka plan, orange-600 metin
  new         → koyu kömür arka plan, beyaz metin
  export      → charcoal-800 arka plan, beyaz metin
  hotel       → beige-500 arka plan, beyaz metin
  certificate → yeşil arka plan tonu

Boyut: h:22px, px:8px, text:11px, font-weight:600, radius-sm
Büyük harf: evet, letter-spacing:0.06em
```

#### Input / Select / Textarea

```
Yükseklik: 48px (tekli satır), textarea: min 120px
Kenarlık: 1.5px charcoal-300
Focus: orange-500 kenarlık, orange-50 gölge halesi
Hata: error kenarlık + metin
Başarı: success kenarlık + ikon
Etiket: her zaman görünür, üstte (floating değil)
Dolgu: 14px yatay, 12px dikey
radius-md
```

#### Icon

```
Kütüphane: Lucide Icons
Boyutlar:
  inline    → 16px (metin içinde)
  button    → 20px (buton içinde)
  feature   → 24px (özellik listesi)
  emphasis  → 32px (kart vurgusu)
  hero      → 48px (büyük semboller)
Renk: bağlama uygun — turuncu vurgu, kömür nötr
Stroke: 1.5px
```

---

### 2.2 Bileşik Bileşenler (Molecules)

#### ProductCard

```
Boyut: 280×380px (masaüstü), tam genişlik (mobil)
Görsel bölge: 2:3 oran, object-fit:cover, radius-xl üst
  → hover: scale(1.05) görsel, 300ms ease-out
  → hover: üst katman — yarı şeffaf koyu, CTA ikonları ortaya çıkar

Alt bölge: px:16px, py:14px, beyaz arka plan
  Satır 1: ürün adı (H4, kömür-900)
  Satır 2: gramaj rozeti + renk sayısı
  Satır 3: "Teklif İste" → ghost buton, tam genişlik

Kart hover:
  → translateY(-4px) + shadow-md → shadow-lg
  → 200ms ease-out
  → kenarlık: charcoal-100 → orange-200
```

#### TestimonialCard

```
Padding: 24px
Arka plan: beige-50
Sol kenarlık: 4px turuncu
İçerik:
  → Alıntı ikonu (turuncu, 32px) üstte
  → Alıntı metni (Body LG, italic, kömür-800)
  → Ayırıcı
  → Avatar + Ad + Unvan + Ülke bayrağı
  → Yıldız derecelendirmesi (5/5, turuncu)
radius-lg, shadow-sm
```

#### StatCounter

```
Düzen: ortalanmış dikey yığın
Sayı: Display boyutunda, orange-500, mono yazı tipi
Birim: H3, kömür-700
Etiket: Caption, kömür-600, büyük harf
Alt çizgi vurgu: 2px turuncu, merkezi, 32px genişlik

Izgara:
  Mobil: 2×2 ızgara
  Masaüstü: 4×1 yatay
```

#### ProcessStep

```
Mobil: dikey zaman çizelgesi
  → Turuncu nokta (16px daire) + dikey çizgi
  → Sağda: Adım No (caption, turuncu) + Başlık (H3) + Açıklama (body)

Masaüstü: yatay zaman çizelgesi
  → Turuncu daire (44px) ile adım numarası
  → Yatay bağlantı çizgisi (kesikli veya düz)
  → Altında başlık + kısa açıklama
Adımlar: 5 (iplik → dokuma → boyama → kalite → paketleme)
```

#### FAQItem

```
Padding: 20px yatay, 18px dikey
Soru: H4 ağırlığı, kömür-900
Sağda: + / × ikonu (turuncu, 20px)
  → + → × dönüşüm: 200ms rotasyon animasyonu
Yanıt: body, kömür-700, max-h-0 → max-h-[değer], 250ms ease
Alt kenarlık: 1px charcoal-100
```

#### CertificateBadge

```
Boyut: sabit genişlik kart
Padding: 20px
Logo: 64×64px, object-contain, merkezi
Sertifika adı: H4
Veren kurum: body, kömür-600
Geçerlilik: caption badge (yeşil)
radius-lg, shadow-sm, kenarlık: beige-300
```

---

### 2.3 Organizmasal Bileşenler (Organisms)

#### Navbar

```
Yükseklik: 64px (masaüstü) / 56px (mobil)
Arka plan: şeffaf → beige-50/95 + blur + shadow-sm (80px kaydırmadan sonra)
Geçiş: 200ms ease

Masaüstü düzeni:
  Sol: Logo (24px yükseklik)
  Orta: Nav linkleri — Ürünler / Hakkımızda / İletişim + Dil değiştirici
  Sağ: "WhatsApp" ghost + "Teklif Al" primary

Mobil düzeni:
  Sol: Logo
  Sağ: Hamburger ikon (3 çizgi → × animasyonu)
  Menü: Tam ekran kaydırma paneli
    → beyaz arka plan, navigasyon linkleri büyük (H3)
    → "Teklif Al" büyük turuncu buton en altta
    → kapanma: dışarı tıklama veya × ikonu

Nav link hover: underline animasyonu — sol→sağ, 200ms, turuncu
Aktif sayfa: turuncu metin + alt vurgu
```

#### StickyWhatsApp

```
Konum: sabit, sağ alt, bottom:24px, right:24px, z:50
Boyut: 56×56px, tam yuvarlak
Renk: #25D366 dolu, beyaz ikon (24px)
Hover: scale(1.10), shadow-lg, 200ms
Tooltip: "WhatsApp ile Ulaşın" — hover açılır, sola doğru, masaüstü
Mobil: bottom:80px (alt nav varsa üste kaçmasın)
Davranış: tıklandığında → wa.me linki, önceden yazılmış Türkçe mesaj
```

#### Footer

```
Arka plan: charcoal-900
Metin: beyaz / beige-300

Masaüstü: 4 sütun ızgara
  Sütun 1: Logo + kısa açıklama + sosyal ikon sırası
  Sütun 2: Hızlı Bağlantılar (nav linkler)
  Sütun 3: Ürün Kategorileri
  Sütun 4: İletişim (adres, tel, e-posta) + WhatsApp butonu

Tablet: 2×2 ızgara
Mobil: tek sütun, katlı

Alt çubuk: ince kenarlık üstünde, telif hakkı + gizlilik + kullanım

Link hover: beige-300 → beyaz, 150ms
```

---

## 3. SAYFA BAZLI UX MİMARİSİ

### 3.1 Ana Sayfa (/)

#### Bölüm 1: Hero

```
Yükseklik: 100vh (mobil: min 600px)
Düzen:
  Masaüstü: iki sütun
    Sol (%58): metin içeriği, sol hizalı
    Sağ (%42): görsel — köşeli kırpılmış lüks havlu fotoğrafı
  Mobil: dikey yığın
    Üst: görsel (4:3 oran)
    Alt: metin içeriği

Metin içeriği:
  [1] Rozet: "Türkiye'nin Güvenilir Havlu Üreticisi"
      → orange-50 arka plan, orange-600 metin, uppercase, 12px
  [2] H1: "Dünyanın En İyi Otellerinde Kullanılan Havlular Burada Üretilir"
      → Display boyutu, charcoal-900, DM Serif Display
  [3] Alt başlık: 1–2 cümle değer önerisi
      → Body LG, charcoal-700, max 52ch
  [4] CTA çifti:
      → "Teklif Al" primary lg butonu
      → "Koleksiyonu Gör" secondary lg butonu
      → Mobilde tam genişlik, dikey yığın

Güven sinyalleri (H1'ın hemen altında):
  → 4 satır içi stat: "30+ Yıl Deneyim", "40+ Ülkeye İhracat", "10.000+ Günlük Üretim", "ISO Sertifikalı"
  → Ufak ikon + metin, satır içi, charcoal-600

Görsel:
  → Sıcak ışıklandırmalı lüks havlu makro fotoğrafı
  → Sağ taraf radius-3xl ile hafif kırpılmış
  → Parallax: kaydırırken görselin hafif yukarı hareketi

Arka plan: beige-50 (saf beyaz değil, sıcak krem)

Animasyon (page load):
  → Rozet: scale(0.85) + opacity(0) → scale(1) + opacity(1), 500ms, delay:0
  → H1: opacity(0) + y(24) → opacity(1) + y(0), 600ms, delay:100ms
  → Alt başlık: aynı, delay:200ms
  → CTA grubu: aynı, delay:300ms
  → Güven sinyalleri: aynı, delay:400ms
  → Görsel: opacity(0) → opacity(1), 800ms, delay:50ms
```

#### Bölüm 2: Güven Şeridi (Trust Bar)

```
Yükseklik: 72px (masaüstü), otomatik (mobil)
Arka plan: beyaz, üst/alt kenarlık: beige-200
İçerik: 6–8 müşteri/partner logosu
  → Gri/mat başlangıç filtresi
  → Hover: tam renk, 200ms geçiş
Düzen:
  Masaüstü: 8 sütun flex, eşit aralık
  Mobil: yatay kaydırma (overflow-x:auto, gizli kaydırma çubuğu)
Etiket: Solda küçük "Güvenen Markalar" → charcoal-400, caption
```

#### Bölüm 3: Değer Önerisi

```
Padding: section (96px dikey)
Arka plan: beige-50
Üst etiket: "NEDEN BAŞKAN HAVLU?" — caption, turuncu
Başlık: H2, charcoal-900
Alt başlık: Body LG, charcoal-600, max 60ch, merkezi

Özellik kartı ızgarası:
  Masaüstü: 3×2 ızgara
  Tablet: 2×3 ızgara
  Mobil: tek sütun

Her kart:
  Padding: 28px
  İkon: 40px, turuncu daire arka plan
  Başlık: H3
  Açıklama: Body, max 20 kelime
  radius-xl, shadow-sm
  Hover: shadow-md + translateY(-4px), 200ms

6 Özellik:
  1. Günlük 10.000+ Üretim Kapasitesi
  2. 40+ Ülkeye İhracat Deneyimi
  3. Oeko-Tex & ISO Sertifikalı Üretim
  4. 48 Saatte Özel Üretim Teklifi
  5. Minimum Sipariş Esnekliği
  6. Çevre Dostu Üretim Süreçleri
```

#### Bölüm 4: Ürün Kategorileri

```
Padding: section
Arka plan: beyaz
Üst etiket + H2 + CTA ("Tüm Ürünleri Gör") — iki sütun başlık düzeni

Masaüstü ızgara: asimetrik 3 sütun
  Sol geniş (1/2): büyük kategori kartı (Otel Havluları)
  Sağ dar (1/2): 2 üst üste kategori kartı (Bornozlar / Toptan)

Mobil: tek sütun kaydırma

Kategori Kartı:
  Boyut: değişken, min 200px yükseklik
  Görsel: tam kart arka planı (object-cover)
  Üst katman: alt kademeli gradyan (şeffaf → %70 siyah)
  İçerik (sol alt):
    Kategori adı: H2, beyaz
    Ürün sayısı: Body, beyaz/80
    "İncele →": ghost/beyaz buton
  Hover:
    → Görsel: scale(1.04), 400ms
    → CTA: slide-right: underline uzuyor
radius-2xl, overflow:hidden
```

#### Bölüm 5: Üretim Kapasitesi Sayaçları

```
Padding: section
Arka plan: charcoal-900 (koyu — güçlü kontrast)
Düzen:
  Masaüstü: 4 sütun
  Mobil: 2×2 ızgara

Her sayaç:
  Sayı: Display, orange-500, mono font
  Birim: H3, beige-300
  Etiket: Caption, beige-500, büyük harf
  Alt çizgi: 2px, orange-500, 40px genişlik, merkezi
  Dikey ayrıcılar (masaüstü): 1px beige-700 çizgi

Sayaçlar:
  "10.000+"  → Günlük Üretim Kapasitesi
  "40+"      → İhracat Yapılan Ülke
  "5.000.000+"→ Yıllık Üretim (Adet)
  "30+"      → Yıl Sektör Deneyimi

Animasyon: IntersectionObserver ile tetikle → 0'dan sayıya, 1.5s, ease-out
```

#### Bölüm 6: Ürün Vitrini

```
Padding: section
Arka plan: beige-50
Üst etiket + H2 + "Tümünü Gör" bağlantısı

Ürün kartı ızgarası:
  Masaüstü: 4 sütun
  Tablet: 2 sütun
  Mobil: 2 sütun (küçük kart)

8 öne çıkan ürün kartı — ProductCard bileşeni
"Tüm Koleksiyonu Gör" CTA — ortalanmış, lg secondary buton
```

#### Bölüm 7: Fabrika Vitrini

```
Padding: section
Arka plan: beyaz
Düzen:
  Masaüstü: iki sütun
    Sol (%45): Başlık, açıklama, özellik listesi, "Fabrikamızı Keşfedin" CTA
    Sağ (%55): 2×2 fotoğraf kolajı (fabrika içi görseller)
  Mobil: dikey yığın — görsel üstte, metin altta

Özellik listesi (5 madde):
  → Onay ikonu (turuncu) + metin
  → Ör: "Modern teknoloji ile donanmış 20.000 m² üretim alanı"

Görsel kolajı:
  → 4 fotoğraf, farklı boyutlar (asimetrik ızgara)
  → radius-xl, shadow-md
  → Hover: hafif scale + parlaklık
```

#### Bölüm 8: Referanslar / Görüşler

```
Padding: section
Arka plan: charcoal-900
Üst etiket: beyaz/50 + H2 beyaz

Carousel:
  → Aynı anda 1 kart (mobil), 3 kart (masaüstü)
  → Otomatik oynatma: 5s döngü, kullanıcı etkileşiminde duraklar
  → Dokunma/swipe desteği
  → Nokta navigatörü (alt, turuncu aktif)

Her kart: TestimonialCard bileşeni (koyu arka plan üzerinde)
```

#### Bölüm 9: SSS Önizleme

```
Padding: section
Arka plan: beige-50
Düzen:
  Masaüstü: iki sütun ızgara (3+3)
  Mobil: tek sütun

Maksimum 6 soru göster — FAQItem bileşeni
"Tüm Soruları Gör" CTA — turuncu bağlantı

Sorular: en yaygın, dönüşüm odaklı (MOQ, teslimat, numune, sertifika)
```

#### Bölüm 10: CTA Bandı

```
Padding: 80px dikey
Arka plan: orange-500
Metin: beyaz

Merkezi düzen:
  H2: büyük, beyaz, DM Serif Display
  Alt başlık: Body LG, white/80
  İki buton:
    → "Hemen Teklif Al" → beyaz dolu, orange-600 metin
    → "WhatsApp ile Ulaş" → beyaz kenarlıklı ghost

Arka plan dokusunun hafif desen varyasyonu (subtle noise/grain)
```

---

### 3.2 Ürün / Koleksiyon Sayfası (/new-collection/)

#### Sayfa Başlığı Bölümü

```
Yükseklik: 240px (masaüstü), 180px (mobil)
Arka plan: charcoal-900 veya zengin fabrika görseli + koyu katman
İçerik: Ekmek Kırıntısı (üstte) + H1 (altında) + ürün sayısı
Ekmek Kırıntısı: Anasayfa → Koleksiyon
  → charcoal-300 bağlantı, " / " ayırıcı, aktif: beyaz
```

#### Filtre + Ürün Izgarası

```
Masaüstü düzeni: 2 sütun
  Sol (%22): Yapışkan filtre kenar çubuğu
  Sağ (%78): Ürün kartı ızgarası (3 sütun)

Mobil: filtre çubuğu → "Filtrele" butonu → alt çekmece paneli

Filtre Kenar Çubuğu:
  Bölümler (akordeon): Kategori, Gramaj (kaydırıcı), Boyut (checkbox), Renk (renk lekeleri), Kullanım Alanı
  "Filtreleri Temizle" bağlantısı — alt kısım
  Seçili filtre sayısı rozeti

Sıralama çubuğu (ızgaranın üstünde):
  Sol: "X ürün gösteriliyor"
  Sağ: Sıralama seçici (Önerilen / Yeni / Gramaj)

Ürün Izgarası:
  Masaüstü: 3 sütun
  Tablet: 2 sütun
  Mobil: 2 sütun (küçük kart)
  → ProductCard bileşeni
  → Yükleme: iskelet (skeleton) animasyonu
```

#### Ürün Detay Sayfası

```
Masaüstü: 2 eşit sütun, yapışkan sağ panel (kaydırmada sabit)
Mobil: dikey yığın

Sol: Görsel Galerisi
  → Ana görsel: kare, radius-2xl, shadow-md
  → Alt satır: 4 küçük resim (thumbnail)
  → Tıklama: ana görsel değişir, 300ms cross-fade
  → Yakınlaştırma: hover'da büyüteç ikonu → lightbox

Sağ: Ürün Bilgisi
  [1] Ekmek kırıntısı
  [2] Rozetler (Yeni, Çok Satan, İhracat)
  [3] H1: Ürün adı
  [4] Kısa açıklama
  [5] Özellik tablosu: gramaj, boyutlar, iplik tipi, sertifika
  [6] Renk seçici: renkli daireler, seçili = turuncu ring
  [7] Boyut seçici: pill butonlar
  [8] CTA grubu:
      → "Teklif İste" primary lg, tam genişlik
      → "WhatsApp ile Sor" whatsapp, tam genişlik
  [9] Güven sinyali: "Ücretsiz numune • Hızlı teslimat • Fabrikadan direkt"

İlgili Ürünler (alt kısım): 4 ProductCard yatay kaydırma
```

---

### 3.3 Katalog / Hakkımızda Sayfası (/about/)

#### Hero

```
Yükseklik: 500px (masaüstü), 360px (mobil)
Görsel: Fabrika havadan veya geniş üretim alanı fotoğrafı
Katman: %40 koyu gradyan
İçerik (sol orta):
  Rozet: "Fabrikamız"
  H1: "30 Yıllık Üretim Deneyimi ile Sektörün Güvenilir Adresi"
  Alt başlık: 1 cümle
```

#### Firma Hakkında

```
Düzen: iki sütun (metin sol / fabrika fotoğrafı sağ)
Metin: H2 + 3 paragraf içerik
Alt kısım: 3 vurgu stat (inline, turuncu)
Görsel: radius-2xl, shadow-lg, hafif çerçeve desen
```

#### Üretim Süreci

```
Arka plan: beige-50
Üst etiket + H2

5 Adım — ProcessStep bileşeni:
  1. İplik Seçimi → 2. Dokuma → 3. Boyama → 4. Kalite Kontrol → 5. Paketleme & İhracat

Masaüstü: yatay zaman çizelgesi, adım altında açıklama
Mobil: dikey zaman çizelgesi

Her adım:
  → Turuncu numaralı daire (48px)
  → Bağlantı çizgisi
  → İkon (24px, beyaz)
  → Başlık + kısa açıklama
```

#### Üretim Kapasitesi

```
Arka plan: beyaz
StatCounter bileşeni — 4 büyük sayaç
Alt kısım: kapasite özellikleri listesi (ikon + metin)
```

#### Kalite Kontrol

```
Arka plan: beige-50
Sol: metin içeriği, süreç adımları
Sağ: Sertifika logolar ızgarası (CertificateBadge)

Sertifikalar ızgarası:
  Masaüstü: 3–4 sütun
  Mobil: 2 sütun
```

#### İhracat Hizmetleri

```
Arka plan: charcoal-900 (koyu — güçlü etki)
İçerik: H2 (beyaz) + dünya haritası görseli + ihracat yaptığı ülke sayısı
Alt: ülke/bölge listesi (Avrupa, Orta Doğu, Amerika...)
CTA: "İhracat Teklifini Al" — turuncu buton
```

#### Referanslar

```
İki bölüm:
  1. Logo Izgarası: müşteri/partner logoları, gri filtre → renkli hover
  2. Detaylı Görüşler: TestimonialCard ızgarası (3 sütun masaüstü)
```

#### SSS (Tümü — 50+ madde)

```
Arka plan: beige-50
Kategori sekmeleri: Genel / Ürünler / Sipariş / İhracat / Kargo
FAQItem bileşeni, tam liste, akordeon
"Cevabınızı bulamadınız mı?" → WhatsApp CTA bandı
```

---

### 3.4 İletişim Sayfası (/contact/)

#### Düzen

```
Üst: Sayfa başlığı bölümü (240px, koyu arka plan)
  H1: "İletişime Geçin"
  Alt başlık: "En geç 24 saatte yanıt veriyoruz"

Ana İçerik: iki sütun
  Masaüstü: Form sol (%55) | Bilgi + Harita sağ (%45)
  Mobil: Bilgi üst, Form alt
```

#### İletişim Formu

```
Arka plan: beyaz kart, shadow-lg, radius-2xl, padding:40px

Başlık: H2 "Teklif veya Bilgi Alın"
Alt başlık: "Formunuzu doldurun, 24 saat içinde geri arayalım"

Alanlar:
  Satır 1: Ad Soyad [%50] + Firma Adı [%50]
  Satır 2: E-posta [%50] + Telefon [%50]
  Satır 3: Ürün Türü [seçici, tam genişlik]
  Satır 4: Tahmini Miktar [%50] + Teslimat Süresi [%50]
  Satır 5: Mesaj [textarea, 4 satır, tam genişlik]
  Gönder: Büyük turuncu buton, tam genişlik, "Teklif Gönder"
  Alt metin: kilit ikonu + "Bilgileriniz güvendedir"

Mobil: tüm satırlar tek sütun
```

#### İletişim Bilgileri Paneli

```
WhatsApp Öncelikli Kart:
  → Yeşil arka plan (#25D366), beyaz metin
  → Büyük WhatsApp ikonu
  → "Hemen WhatsApp'tan Yazın" butonu
  → "Ortalama yanıt: 5 dakika"

İletişim Detayları:
  → Adres (harita pin ikonu)
  → Telefon (telefon ikonu, tel: link)
  → E-posta (zarf ikonu, mailto: link)
  → Çalışma Saatleri (saat ikonu)

Harita:
  → Yerleşik Google Maps veya statik harita görseli
  → radius-xl, 280px yükseklik
  → "Büyük Haritada Gör" bağlantısı
```

---

## 4. LANDING SAYFALAR UX ŞABLONU

Her landing sayfa (/havlu-ureticisi/, /turkish-towel-manufacturer/ vb.) aynı şablonu kullanır:

```
Bölüm 1: Hero (mini) — 400px, H1 hedef anahtar kelime, CTA
Bölüm 2: Değer Önerisi — 3 özellik kartı
Bölüm 3: Ürün Örnekleri — ilgili 4–6 ürün kartı
Bölüm 4: Fabrika Otoritesi — özet kapasite + sertifika
Bölüm 5: Referanslar — 2–3 görüş kartı
Bölüm 6: İletişim Formu — compact versiyon
Bölüm 7: SSS — sayfa özelinde 5–8 soru
```

Her sayfa için benzersiz içerik, renk tonu aynı, düzen aynı.

---

## 5. ERİŞİLEBİLİRLİK KILAVUZLARRi

### Renk Kontrastı Matrisi

| Ön Plan      | Arka Plan    | Oran   | Sonuç              |
| ------------ | ------------ | ------ | ------------------ |
| Beyaz        | orange-500   | 3.2:1  | AA (büyük metin) ✓ |
| charcoal-900 | orange-500   | 4.8:1  | AA (tüm metin) ✓   |
| Beyaz        | charcoal-900 | 18.1:1 | AAA ✓              |
| charcoal-900 | beige-50     | 15.5:1 | AAA ✓              |
| charcoal-600 | beyaz        | 5.9:1  | AA ✓               |

### Odak Yönetimi

- Tüm etkileşimli elementler: `focus-visible` ile 2px turuncu halka
- Modal açıldığında: odak modal'a taşır
- Modal kapandığında: odak tetikleyici elemana döner
- "İçeriğe Geç" gizli bağlantısı — klavye kullanıcıları için

### Dokunma Hedefleri

- Tüm butonlar, bağlantılar, form alanları: minimum 44×44px
- Kartlar: tüm kart alanı tıklanabilir

---

## 6. DÖNÜŞÜM OPTİMİZASYON ÇERÇEÇ

### CTA Hiyerarşisi (Her Sayfada)

1. **Seviye 1 — Birincil CTA:** "Teklif Al" (turuncu dolu, lg)
2. **Seviye 2 — İkincil CTA:** "WhatsApp ile Ulaş" (yeşil veya ghost)
3. **Seviye 3 — Keşif CTA:** "Koleksiyonu Gör" (secondary buton)
4. **Seviye 4 — Pasif:** Sayfa alt bağlantıları

### Güven Sinyali Hiyerarşisi

1. Müşteri logo şeridi — hero'nun hemen altında
2. Sayısal kapasite rakamları — somut, büyük, dikkat çekici
3. Sertifika rozetleri — ürün ve fabrika sayfasında
4. Müşteri görüşleri — ülke + firma adıyla, gerçekçi
5. İletişim bilgilerinin netliği — adres, tel, harita

### Form Psikolojisi

- Alan sayısı: maksimum 7 (fazlası terk artırır)
- İlk alan: "Ad Soyad" (düşük sürtünme, güven inşa eder)
- Zorunlu alan işareti: "\*" değil — yalnızca isteğe bağlı alanları "(isteğe bağlı)" ile işaretle
- Gönder butonu metni: "Teklif Gönder" (değer odaklı, "Gönder" değil)
- Güven metni buton altında: "Spam göndermiyoruz • 24 saat içinde yanıt"

---

## 7. MOBİL-ÖNCE DUYARLI STRATEJİ

### Breakpoint'ler

| İsim | px     | Hedef Cihaz            |
| ---- | ------ | ---------------------- |
| xs   | 320px  | iPhone SE              |
| sm   | 375px  | iPhone standart        |
| sm+  | 430px  | iPhone Plus / Pro Max  |
| md   | 768px  | iPad, tablet           |
| lg   | 1024px | iPad Pro, küçük laptop |
| xl   | 1280px | Masaüstü               |
| 2xl  | 1536px | Geniş masaüstü         |

### Izgara Sistemi

| Breakpoint | Sütunlar | Kenar Boşluğu | Boşluk |
| ---------- | -------- | ------------- | ------ |
| xs–sm      | 4        | 16px          | 16px   |
| md         | 8        | 24px          | 24px   |
| lg+        | 12       | 32px          | 24px   |

**Maksimum konteyner genişliği:** 1280px, merkezi

### Kritik Mobil Kararlar

- Navbar: hamburger menü, tam ekran overlay (dokunma dostu)
- Hero: görsel üstte (dikkat çeker), metin altta (dönüşüm için)
- Ürün ızgarası: 2 sütun (1 sütun çok büyük, 3 sütun çok küçük)
- Formlar: tek sütun, geniş inputlar (kolayca odaklanılır)
- CTA butonlar: tam genişlik (büyük dokunma hedefi)
- Tüm hover efektleri: dokunmada basınç efektine dönüşür

---

## 8. GÖRSEL KİMLİK KILAVUZu

### Fotoğrafçılık Standardı

**Ürün Çekimleri:**

- Arka plan: saf beyaz veya yumuşak krem
- Işık: yumuşak kutu ışığı, sert gölge yok
- Açı: üst, ¾, yakın makro (tekstür için)
- Renk tonu: sıcak (3200–4000K), soğuk değil
- Minimum çözünürlük: 2400×3200px (2:3 oran)

**Fabrika Çekimleri:**

- Temiz, aydınlık, modern tesisi yansıtır
- İşçiler odaklanmış, profesyonel
- Makine ve ekipman açıkça görünür
- Geniş açı panoramik çekimler

**Bağlam Çekimleri:**

- Otel banyosu kurulumu (asılı havlu, spa ambiyansı)
- Kişisel bakım anı çekimleri
- Paketleme ve kurumsal kimlik

### İkon Stili

- Kütüphane: Lucide Icons (tutarlılık için)
- Stroke genişliği: 1.5px
- Stil: outline (filled değil — daha premium görünür)
- Boyut: tasarım sisteminden (16/20/24/32/48px)

### İllüstrasyon / Soyut Grafik

Kullanılmaz. Yalnızca gerçek fotoğraflar ve ikonlar.
Stok görsel: kesinlikle kullanılmaz. Orijinal veya özel çekim.

---

## Faz Kapsamı Notu

Bu tasarım dokümanı **Phase 2: Elite UI/UX Architecture** kapsamını tanımlamaktadır.

Sonraki Fazlar:

- **Phase 3:** SEO + GEO Authority — içerik stratejisi ve anahtar kelime mimarisi
- **Phase 4:** Content Authority + Conversion — kopya, görseller ve dönüşüm optimizasyonu
- **Phase 5:** Technical Infrastructure — CI/CD, izleme, ölçeklendirme ve güvenlik

---

## Architecture

Başkan Havlu Tekstil UI/UX mimarisi üç katmanlı bir yapı üzerine inşa edilmiştir:

### Katman 1: Tasarım Sistemi (Design System)

Tüm görsel kararların tek kaynağı. Design token'ları (renkler, boşluk, tipografi, gölge, animasyon değerleri) bu katmanda tanımlanır. Tailwind CSS konfigürasyonu ve CSS custom properties bu token'ları yansıtır. Değişiklik tek noktadan yapılır, tüm platforma yayılır.

```
DesignSystem
  ├── Tokens (renkler, boşluk, tipografi, gölge, animasyon)
  ├── Breakpoints (xs:320 → 2xl:1536)
  └── Izgara Sistemi (4/8/12 sütun, kenar boşlukları)
```

### Katman 2: Bileşen Hiyerarşisi (Component Hierarchy)

Atomic Design metodolojisi:

```
Atoms (Temel)
  ├── Button (5 varyant, 3 boyut, 5 durum)
  ├── Badge/Tag (6 varyant)
  ├── Input/Select/Textarea (3 durum)
  ├── Icon (5 boyut, Lucide)
  └── Avatar/Logo

Molecules (Bileşik)
  ├── ProductCard
  ├── TestimonialCard
  ├── StatCounter
  ├── ProcessStep
  ├── FAQItem
  ├── CertificateBadge
  └── FormGroup

Organisms (Organizmasal)
  ├── Navbar (masaüstü + mobil)
  ├── Hero (ana sayfa + sayfa bazlı)
  ├── ProductGrid (filtre + kart ızgarası)
  ├── TestimonialCarousel
  ├── ContactSection (form + harita)
  ├── Footer
  └── StickyWhatsApp
```

### Katman 3: Sayfa Mimarisi (Page Architecture)

Her sayfa, organizmasal bileşenlerin düzenli kombinasyonundan oluşur:

```
Pages
  ├── Homepage (/)
  │     Hero → TrustBar → ValueProp → ProductCategories →
  │     StatCounters → ProductShowcase → FactoryShowcase →
  │     Testimonials → FAQ Preview → CTA Band → Footer
  │
  ├── Products (/new-collection/)
  │     PageHero → FilterSidebar + ProductGrid → Footer
  │
  ├── ProductDetail (/new-collection/[slug]/)
  │     Breadcrumb → ImageGallery + ProductInfo →
  │     RelatedProducts → Footer
  │
  ├── About (/about/)
  │     Hero → CompanyInfo → Process → Capacity →
  │     QualityControl → ExportServices → Testimonials →
  │     FAQ (full) → Footer
  │
  ├── Contact (/contact/)
  │     PageHero → ContactForm + ContactInfo + Map → Footer
  │
  └── LandingPages (/havlu-ureticisi/ vb.)
        MiniHero → ValueProp → ProductSamples →
        FactorySummary → Testimonials → ContactForm →
        FAQ → Footer
```

### Animasyon Mimarisi

```
AnimationSystem
  ├── Scroll-Triggered (IntersectionObserver)
  │     Tetikleyici: görünümün %15'i görünürken
  │     Varsayılan: opacity(0)+y(24) → opacity(1)+y(0)
  │     Stagger: çocuklar arası 80ms
  │
  ├── Hover States (CSS/Framer Motion)
  │     Kart: translateY(-4px) + shadow artışı
  │     Buton: scale(1.02) + shadow-orange
  │     Görsel: scale(1.04–1.05) + parlaklık
  │
  ├── Page Transitions (Framer AnimatePresence)
  │     Çıkış: opacity(1)→0 + y(0)→-8, 150ms
  │     Giriş: opacity(0)→1 + y(8)→0, 250ms, delay:50ms
  │
  └── Counter Animation
        0 → hedef, 1.5s, ease-out, IntersectionObserver ile
```

### Yapışkan Elementler Mimarisi

```
StickyLayer (z-index: 40–50)
  ├── Navbar (z:40, scroll sonrası arka plan değişir)
  └── WhatsAppFAB (z:50, sabit sağ-alt, tüm sayfalarda)
```

---

## Components and Interfaces

### Bileşen API Tanımları

#### Button

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'destructive'
  size: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onClick?: () => void
  href?: string // link modu
  children: ReactNode
}
```

#### ProductCard

```typescript
interface ProductCardProps {
  id: string
  name: string
  slug: string
  imageUrl: string
  imageAlt: string
  gramWeight: number // g/m²
  availableColors: string[]
  sizeOptions: string[]
  badges?: Array<'new' | 'bestseller' | 'export' | 'hotel'>
  onQuoteRequest?: (productId: string) => void
}
```

#### TestimonialCard

```typescript
interface TestimonialCardProps {
  quote: string
  customerName: string
  customerTitle: string
  companyName: string
  countryCode: string // bayrak için ISO kodu
  rating: 1 | 2 | 3 | 4 | 5
  logoUrl?: string
}
```

#### StatCounter

```typescript
interface StatCounterProps {
  value: number
  suffix?: string // "+", "K+", "M+"
  label: string
  description?: string
  animationDuration?: number // ms, varsayılan: 1500
}
```

#### FAQItem

```typescript
interface FAQItemProps {
  question: string
  answer: string
  isOpen?: boolean
  onToggle?: () => void
  category?: 'general' | 'product' | 'order' | 'export' | 'shipping'
}
```

#### NavigationItem

```typescript
interface NavItem {
  label: string
  href: string
  isActive?: boolean
  children?: NavItem[] // açılır alt menü
}
```

#### ContactForm

```typescript
interface ContactFormProps {
  variant: 'full' | 'compact' | 'quote' | 'sample' | 'export'
  onSuccess?: (data: FormData) => void
  onError?: (error: Error) => void
  prefilledProduct?: string
}
```

### Sayfa Düzeni Bileşenleri

#### PageLayout (Temel Sarmalayıcı)

```typescript
interface PageLayoutProps {
  children: ReactNode
  showNavbar?: boolean // varsayılan: true
  showFooter?: boolean // varsayılan: true
  showWhatsApp?: boolean // varsayılan: true
  navTransparent?: boolean // hero sayfalar için
  pageTitle?: string
  pageDescription?: string
}
```

#### Section (Standart Bölüm Kapsayıcı)

```typescript
interface SectionProps {
  children: ReactNode
  background?: 'white' | 'beige' | 'charcoal' | 'orange' | 'cream'
  paddingY?: 'sm' | 'md' | 'lg' | 'xl' // bölüm dikey dolgusu
  fullWidth?: boolean
  id?: string // anchor navigasyonu
}
```

---

## Data Models

### Ürün Veri Modeli

```typescript
interface Product {
  id: string
  slug: string
  name: {
    tr: string
    en: string
  }
  category: ProductCategory
  description: {
    short: { tr: string; en: string }
    full: { tr: string; en: string }
  }
  specifications: {
    gramWeight: number // g/m²
    dimensions: Dimension[] // ör: ["50x90", "70x140"]
    material: string // ör: "100% Pamuk"
    threadType: string // ör: "Combed Ring"
  }
  colors: ProductColor[]
  images: ProductImage[]
  badges: ProductBadge[]
  isPublished: boolean
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

interface ProductColor {
  name: { tr: string; en: string }
  hex: string
  imageUrl: string
}

interface ProductImage {
  url: string
  alt: { tr: string; en: string }
  isPrimary: boolean
  width: number
  height: number
}

type ProductCategory = 'hotel-towel' | 'bathrobe' | 'wholesale' | 'promo' | 'custom'
type ProductBadge = 'new' | 'bestseller' | 'export' | 'hotel'
type Dimension = string
```

### İçerik Veri Modeli

```typescript
interface FAQItem {
  id: string
  question: { tr: string; en: string }
  answer: { tr: string; en: string }
  category: FAQCategory
  order: number
  isPublished: boolean
}

interface Testimonial {
  id: string
  quote: { tr: string; en: string }
  customerName: string
  customerTitle: string
  companyName: string
  countryCode: string
  rating: number
  logoUrl?: string
  isPublished: boolean
  order: number
}

interface Certificate {
  id: string
  name: string
  issuingBody: string
  logoUrl: string
  validUntil?: Date
  order: number
}

interface StatItem {
  id: string
  value: number
  suffix: string
  label: { tr: string; en: string }
  order: number
}
```

### Form Veri Modeli

```typescript
interface QuoteRequest {
  id?: string
  fullName: string
  companyName?: string
  email: string
  phone: string
  productType: string
  estimatedQuantity?: string
  preferredDelivery?: string
  message?: string
  formType: 'quote' | 'bulk' | 'sample' | 'export' | 'contact'
  createdAt?: Date
  source?: string // hangi sayfadan geldi
  language?: 'tr' | 'en'
}

// Zod doğrulama şeması karşılığı
interface QuoteRequestValidation {
  fullName: { min: 2; max: 100 }
  email: { format: 'email' }
  phone: { min: 10; max: 20 }
  message: { max: 2000 }
  // honeypot alanı: sunucu tarafında kontrol
}
```

### Navigasyon Veri Modeli

```typescript
interface NavigationConfig {
  main: NavItem[]
  footer: {
    quickLinks: NavItem[]
    products: NavItem[]
    company: NavItem[]
  }
  cta: {
    primary: { label: { tr: string; en: string }; href: string }
    whatsapp: { phoneNumber: string; defaultMessage: { tr: string; en: string } }
  }
}
```

---

## Correctness Properties

### Property 1: Renk Tutarlılığı

Tüm sayfalarda Renk_Paleti token'ları doğrudan CSS değerleri yerine kullanılır. `#E87722` değeri yalnızca `orange-500` token üzerinden erişilir.
**Validates: Requirements 3.3**

### Property 2: Tipografi Tutarlılığı

Tanımlanmış ölçek tablosu dışında herhangi bir font boyutu kullanılmaz. Ölçek tablosundaki 9 sınıf dışında `font-size` tanımlanmaz.
**Validates: Requirements 3.4**

### Property 3: Boşluk Tutarlılığı

Tüm margin ve padding değerleri `space-*` token'larından türetilir. Rastgele piksel değerleri kullanılmaz.
**Validates: Requirements 3.2**

### Property 4: Animasyon Erişilebilirliği

`prefers-reduced-motion: reduce` medya sorgusu aktifken hiçbir transform veya opacity animasyonu çalışmaz — yalnızca anlık geçişler kalır.
**Validates: Requirements 16.3**

### Property 5: Kontrast Oranı

Hiçbir metin–arka plan kombinasyonu WCAG 2.1 AA minimumunun (4.5:1 normal, 3:1 büyük metin) altına düşmez.
**Validates: Requirements 3.8, 14.4**

### Property 6: Odak Görünürlüğü

Tüm interaktif elementler klavyeyle odaklandığında görünür bir odak halkası gösterir. `outline:none` yalnızca `focus-visible` alternatifiyle birlikte kullanılır.
**Validates: Requirements 14.4**

### Property 7: Dokunma Hedefi

Tüm tıklanabilir/dokunulabilir elementler minimum 44×44px alanı kapsar.
**Validates: Requirements 3.7**

### Property 8: CTA Görünürlüğü

Her sayfada en az bir birincil CTA ve yapışkan WhatsApp butonu her zaman görünür durumda olur.
**Validates: Requirements 4.6, 9.8**

### Property 9: Form Veri Bütünlüğü

Form gönderimi başarısız olduğunda kullanıcının girdiği veriler kaybolmaz; hata mesajı gösterilir.
**Validates: Requirements 9.5**

### Property 10: Güven Sinyali Önceliği

Müşteri logoları hero bölümünün hemen altında (Trust Bar) her sayfada görünür; sertifika rozetleri ürün ve fabrika sayfalarında daima görülebilir konumda yer alır.
**Validates: Requirements 4.1, 6.3**

### Görsel Doğruluk (Detay Notları)

1. **Renk Tutarlılığı:** Tüm sayfalarda Renk_Paleti token'ları doğrudan CSS değerleri yerine kullanılır. `#E87722` değeri yalnızca `orange-500` token üzerinden erişilir.
2. **Tipografi Tutarlılığı:** Tanımlanmış ölçek tablosu dışında herhangi bir font boyutu kullanılmaz. Ölçek tablosundaki 9 sınıf dışında `font-size` tanımlanmaz.
3. **Boşluk Tutarlılığı:** Tüm margin ve padding değerleri `space-*` token'larından türetilir. Rastgele piksel değerleri kullanılmaz.
4. **Animasyon Doğruluğu:** `prefers-reduced-motion: reduce` medya sorgusu aktifken hiçbir transform veya opacity animasyonu çalışmaz — yalnızca anlık geçişler kalır.

### Erişilebilirlik Doğruluğu

5. **Kontrast Oranı:** Hiçbir metin–arka plan kombinasyonu WCAG 2.1 AA minimumunun (4.5:1 normal, 3:1 büyük metin) altına düşmez.
6. **Odak Görünürlüğü:** Tüm interaktif elementler klavyeyle odaklandığında görünür bir odak halkası gösterir. `outline:none` yalnızca `focus-visible` alternatifiyle birlikte kullanılır.
7. **Dokunma Hedefi:** Tüm tıklanabilir/dokunulabilir elementler minimum 44×44px alanı kapsar.

### Dönüşüm Doğruluğu

8. **CTA Görünürlüğü:** Her sayfada en az bir birincil CTA ve yapışkan WhatsApp butonu her zaman görünür durumda olur.
9. **Form Bütünlüğü:** Form gönderimi başarısız olduğunda kullanıcının girdiği veriler kaybolmaz.
10. **Güven Sinyali Önceliği:** Müşteri logoları her zaman hero bölümünden önce veya hemen altında görünür.

---

## Error Handling

### Görsel Hata Durumları

#### Eksik Görsel

```
Ürün görseli yüklenemezse:
→ Yer tutucu: beige-100 arka plan + marka logosu (ortalanmış)
→ Alt metin korunur (erişilebilirlik)
→ Görsel boyutu korunur (CLS önlenir)
```

#### Form Hataları

```
Doğrulama hatası:
→ İlgili alan: error kenarlık (kırmızı, 1.5px)
→ Alan altında: hata metni (error rengi, 13px)
→ Scroll: ilk hatalı alana otomatik odaklanma
→ Ekran okuyucu: role="alert" ile duyuru

Gönderim hatası (ağ/sunucu):
→ Formun üstünde: kırmızı uyarı kartı
→ Mesaj: "Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp ile ulaşın."
→ Veri kaybolmaz, kullanıcı tekrar gönderebilir
→ WhatsApp alternatif CTA gösterilir
```

#### Sayfa/Bölüm Yükleme Hatası

```
İçerik yüklenemezse:
→ İskelet (skeleton) animasyonu gösterilmeye devam eder
→ 3 saniye sonra: "İçerik yüklenemedi" + "Sayfayı Yenile" butonu
→ Kritik bölümler (hero, ürünler) için fallback statik içerik
```

#### 404 Sayfası

```
Tasarım:
→ Merkezi düzen, büyük "404" sayısı (turuncu, Display boyutu)
→ Açıklama: "Aradığınız sayfa bulunamadı"
→ 3 yönlendirme kartı: Anasayfa / Ürünler / İletişim
→ Arama kutusu (isteğe bağlı)
```

---

## Testing Strategy

### Görsel Regresyon

- Chromatic veya Percy ile her PR'da otomatik ekran görüntüsü karşılaştırması
- Kritik breakpoint'ler: 320px, 375px, 768px, 1280px
- Test edilen sayfalar: Ana Sayfa, Ürün Listesi, Ürün Detay, Hakkımızda, İletişim

### Erişilebilirlik Testi

- Axe-core entegrasyonu: her Storybook bileşeninde otomatik a11y kontrolü
- Lighthouse CI: her deploy'da accessibility skoru minimum 95
- Manuel test: VoiceOver (iOS/macOS) + NVDA (Windows) ile kritik akışlar

### Bileşen Testi (Storybook)

- Her Atom ve Molecule için ayrı story
- Varyant matrisi: tüm prop kombinasyonları görsel olarak doğrulanır
- Dark mode story'leri ayrıca oluşturulur

### Kullanıcı Deneyimi Testi

- Kullanılabilirlik testi: 5 potansiyel kullanıcı (toptan alıcı persona)
- Kritik akış: Ana Sayfa → Ürün → Teklif Formu → Gönderim
- Başarı metriği: 3 tıkla teklif formuna ulaşabilme

### Performans — Görsel Stabilite

- CLS kontrolü: her yeni bileşen eklenmesinde `0.05` eşiği
- LCP hedefi: hero görselinin `<1.5s` yüklenmesi
- Animasyon: düşük güçlü cihazlarda (`prefers-reduced-motion`) bozulma yok

### Duyarlılık Kontrolü

- BrowserStack ile hedef cihazlar: iPhone SE, iPhone 15, Samsung Galaxy S24, iPad, MacBook, 4K monitör
- Yatay mod testi: tüm sayfalar
- Yazı tipi ölçeklendirme: sistem yazı tipi %200'e büyütüldüğünde düzen bozulmamalı

---

## Phase 3: SEO + GEO Authority Mimarisi

### SEO-1: Metadata Üretim Mimarisi

Her sayfa tipi için `generateMetadata()` şablonu:

```
Ana Sayfa:
  title:       "Havlu Üreticisi | Başkan Havlu Tekstil — Bursa, Türkiye"
  description: "Türkiye'nin lider havlu ve bornoz üreticisi. 40+ ülkeye ihracat,
                günlük 10.000+ üretim kapasitesi. Otel, toptan ve özel üretim."
  canonical:   "https://baskanhavlu.com/"

Ürün Sayfası:
  title:       "[Ürün Adı] | Başkan Havlu Tekstil"
  description: "[Ürün Adı] — [gramaj] g/m², [boyutlar]. Fabrikadan toptan fiyatla."
  canonical:   "https://baskanhavlu.com/new-collection/[slug]/"

Landing Page (/havlu-ureticisi/):
  title:       "Havlu Üreticisi Türkiye | Başkan Havlu Tekstil"
  description: "Türkiye'de havlu üreticisi arıyorsanız doğru adrestesiniz. ISO
                sertifikalı üretim, 40+ ülke ihracat deneyimi, MOQ esnekliği."
  canonical:   "https://baskanhavlu.com/havlu-ureticisi/"
```

Open Graph zorunlu alanlar (tüm sayfalarda):

- `og:type` — website / article / product
- `og:title` — sayfa title ile aynı
- `og:description` — meta description ile aynı
- `og:image` — 1200×630px, WebP, marka görseli
- `og:url` — kanonik URL
- `og:locale` — tr_TR / en_US
- `og:site_name` — "Başkan Havlu Tekstil"

Twitter Card zorunlu alanlar:

- `twitter:card` — summary_large_image
- `twitter:site` — @baskanhavlu (varsa)
- `twitter:title`, `twitter:description`, `twitter:image`

---

### SEO-2: Schema Markup Sayfaya Göre Dağılım

```
Ana Sayfa (/):
  ├── Organization
  ├── LocalBusiness
  ├── WebSite + SearchAction
  └── FAQPage (ilk 6 soru)

Ürün Listesi (/new-collection/):
  ├── BreadcrumbList
  ├── CollectionPage
  └── ItemList (ürün listesi)

Ürün Detay (/new-collection/[slug]/):
  ├── BreadcrumbList
  ├── Product
  └── ImageObject (her görsel için)

Hakkımızda (/about/):
  ├── BreadcrumbList
  ├── Organization (detaylı)
  ├── Brand
  ├── FAQPage (tam liste)
  └── Review (müşteri görüşleri)

İletişim (/contact/):
  ├── BreadcrumbList
  ├── LocalBusiness (detaylı)
  └── ContactPage

Landing Sayfalar (her biri):
  ├── BreadcrumbList
  ├── Product veya Service
  └── FAQPage (sayfaya özgü)

Global (tüm sayfalarda):
  └── Organization (kısaltılmış — logo + iletişim)
```

---

### SEO-3: URL Hiyerarşisi ve 301 Yönlendirme Planı

```
Yeni URL Yapısı:
  /                          → Ana Sayfa
  /new-collection/           → Ürün Koleksiyonu
  /new-collection/[slug]/    → Ürün Detay
  /about/                    → Hakkımızda / Fabrika
  /contact/                  → İletişim
  /havlu-ureticisi/          → Landing (TR)
  /bornoz-ureticisi/         → Landing (TR)
  /toptan-havlu/             → Landing (TR)
  /toptan-bornoz/            → Landing (TR)
  /otel-havlusu/             → Landing (TR)
  /otel-bornozu/             → Landing (TR)
  /promosyon-havlu/          → Landing (TR)
  /nakisli-havlu/            → Landing (TR)
  /turkish-towel-manufacturer/  → Landing (EN)
  /bathrobe-manufacturer/       → Landing (EN)
  /wholesale-towel-supplier/    → Landing (EN)
  /llms.txt                  → AI Crawler dosyası
  /ai.txt                    → AI İzin dosyası
  /robots.txt                → Crawler direktifleri
  /sitemap.xml               → Ana sitemap
  /image-sitemap.xml         → Görsel sitemap
  /video-sitemap.xml         → Video sitemap

301 Yönlendirmeler (next.config.ts redirects):
  /urunler           → /new-collection/
  /products          → /new-collection/
  /katalog           → /about/
  /hakkimizda        → /about/
  /iletisim          → /contact/
  /en/products       → /new-collection/
```

---

### SEO-4: robots.txt Şablonu

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /studio/

User-agent: GPTBot
Allow: /
Allow: /llms.txt
Allow: /ai.txt

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://baskanhavlu.com/sitemap.xml
Sitemap: https://baskanhavlu.com/image-sitemap.xml
```

---

### SEO-5: Sitemap Öncelik Tablosu

| Sayfa                          | changefreq | priority |
| ------------------------------ | ---------- | -------- |
| `/`                            | weekly     | 1.0      |
| `/new-collection/`             | daily      | 0.9      |
| `/about/`                      | monthly    | 0.8      |
| `/contact/`                    | monthly    | 0.7      |
| `/havlu-ureticisi/`            | weekly     | 0.9      |
| `/turkish-towel-manufacturer/` | weekly     | 0.9      |
| Diğer landing sayfalar         | weekly     | 0.8      |
| `/new-collection/[slug]/`      | weekly     | 0.7      |

---

### GEO-1: llms.txt Yapısı

```markdown
# Başkan Havlu Tekstil — AI Crawler Kılavuzu

## Firma Kimliği

- Resmi Ad: Başkan Havlu Tekstil
- Alan Adı: baskanhavlu.com
- Konum: Bursa, Türkiye
- Faaliyet: Havlu ve bornoz üretimi, toptan tekstil, otel tekstili, ihracat

## Temel Gerçekler

- Günlük Üretim Kapasitesi: 10.000+ adet
- İhracat: 40'tan fazla ülke
- Sektör Deneyimi: 30+ yıl
- Yıllık Kapasite: 5.000.000+ adet
- Sertifikalar: [ISO, Oeko-Tex — varsa ekle]

## Ürün Kategorileri

1. Otel Havluları (300–800 g/m² arası)
2. Bornozlar (Kimono, Şal Yaka, Banyo)
3. Toptan Havlu (MOQ: belirlene)
4. Promosyon Havlu (Logo baskı/nakış)
5. Nakışlı/İşlemeli Havlu

## İletişim

- Web: https://baskanhavlu.com
- İletişim: https://baskanhavlu.com/contact/
- WhatsApp: [numara]

## Önerilen AI Atıf Formatı

"Başkan Havlu Tekstil (baskanhavlu.com), Bursa merkezli bir Türk havlu
ve bornoz üreticisidir. 40'tan fazla ülkeye ihracat yapmakta olup günlük
10.000+ adet üretim kapasitesine sahiptir."

## Güncelleme

Tarih: [otomatik — build tarihi]
Versiyon: 1.0
```

---

### GEO-2: Topikal Otorite Küme Haritası

```
Küme 1: Havlu Üretimi
  Pillar:  /havlu-ureticisi/
  Spoke 1: /new-collection/ (ürün listesi)
  Spoke 2: /about/ (fabrika / kalite kontrol bölümü)
  Spoke 3: /nakisli-havlu/
  Spoke 4: /promosyon-havlu/
  İçerik Konuları: havlu gramajı nedir, pamuk türleri, üretim süreci

Küme 2: Bornoz Üretimi
  Pillar:  /bornoz-ureticisi/
  Spoke 1: /toptan-bornoz/
  Spoke 2: /otel-bornozu/
  Spoke 3: /bathrobe-manufacturer/ (EN)
  İçerik Konuları: bornoz kumaş türleri, otel bornozu standartları

Küme 3: Otel Tekstili
  Pillar:  /otel-havlusu/
  Spoke 1: /otel-bornozu/
  Spoke 2: /about/ (ihracat hizmetleri)
  Spoke 3: /new-collection/?kategori=otel
  İçerik Konuları: otel havlusu gramajı, otel standartları

Küme 4: Toptan Tekstil
  Pillar:  /toptan-havlu/
  Spoke 1: /toptan-bornoz/
  Spoke 2: /wholesale-towel-supplier/ (EN)
  Spoke 3: /contact/ (toplu sipariş formu)
  İçerik Konuları: toptan havlu fiyatları, MOQ, B2B sipariş

Küme 5: Promosyon Tekstil
  Pillar:  /promosyon-havlu/
  Spoke 1: /nakisli-havlu/
  Spoke 2: /new-collection/?kategori=promosyon
  İçerik Konuları: kurumsal havlu, logolu havlu baskı teknikleri

Küme 6: İhracat Tekstil
  Pillar:  /turkish-towel-manufacturer/ (EN)
  Spoke 1: /bathrobe-manufacturer/ (EN)
  Spoke 2: /wholesale-towel-supplier/ (EN)
  Spoke 3: /about/ (ihracat hizmetleri)
  İçerik Konuları: Turkish cotton, export certifications, MOQ, shipping
```

---

### GEO-3: Entity Block Yapısı (Her Sayfa)

Her sayfanın alt kısmına eklenen makinece okunabilir blok:

```html
<section class="entity-facts" itemscope itemtype="https://schema.org/Organization">
  <meta itemprop="name" content="Başkan Havlu Tekstil" />
  <meta itemprop="url" content="https://baskanhavlu.com" />
  <meta itemprop="foundingLocation" content="Bursa, Türkiye" />
  <meta itemprop="numberOfEmployees" content="..." />
  <meta itemprop="hasOfferCatalog" content="Havlu, Bornoz, Otel Tekstili" />
</section>
```

Ayrıca görünür "Hızlı Bilgiler" kutusu (AI citation için):

```
Başkan Havlu Tekstil Hakkında
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Konum:       Bursa, Türkiye
Faaliyet:    Havlu & Bornoz Üreticisi
Kapasite:    10.000+ adet/gün
İhracat:     40+ ülke
Sertifika:   ISO / Oeko-Tex
İletişim:    baskanhavlu.com/contact/
```

---

### GEO-4: Anahtar Kelime — Sayfa Eşleştirmesi

| Hedef Anahtar Kelime         | Arama Niyeti         | Atanan Sayfa                 |
| ---------------------------- | -------------------- | ---------------------------- |
| havlu üreticisi              | Ticari / Bulma       | /havlu-ureticisi/            |
| havlu fabrikası türkiye      | Ticari / Bulma       | /havlu-ureticisi/            |
| bornoz üreticisi             | Ticari / Bulma       | /bornoz-ureticisi/           |
| toptan havlu                 | Ticari / Satın Alma  | /toptan-havlu/               |
| toptan bornoz                | Ticari / Satın Alma  | /toptan-bornoz/              |
| otel havlusu tedarikçisi     | B2B / Ticari         | /otel-havlusu/               |
| otel bornozu                 | B2B / Ticari         | /otel-bornozu/               |
| promosyon havlu              | B2B / Ticari         | /promosyon-havlu/            |
| nakışlı havlu                | Ticari / Özel Üretim | /nakisli-havlu/              |
| turkish towel manufacturer   | İhracat / EN         | /turkish-towel-manufacturer/ |
| bathrobe manufacturer turkey | İhracat / EN         | /bathrobe-manufacturer/      |
| wholesale towel supplier     | İhracat / EN         | /wholesale-towel-supplier/   |
| havlu üretim süreci          | Bilgi / İçerik       | /about/#uretim-sureci        |
| otel havlusu gramajı         | Bilgi / İçerik       | /otel-havlusu/#faq           |
| başkan havlu                 | Marka / Navigasyon   | / (Ana Sayfa)                |

---

## Phase 4: Content Authority + Conversion Engine Mimarisi

### CONV-1: Kopya Sistemi — Ton ve Dil Kılavuzu

**Temel Ton:** Fabrika otoritesi. Lüks B2B. Kurumsal güven.

**Kaçınılacaklar:**

- "En iyi", "mükemmel", "eşsiz" gibi kanıtsız süperlatifler
- "Kaliteli ürünler sunuyoruz" gibi muğlak pazarlama dili
- Pazaryeri veya bayi tonu
- Edilgen cümle yapıları

**Kullanılacaklar:**

- Sayısal veriler: "600 g/m²", "40+ ülke", "30+ yıl"
- Sertifika referansları: "Oeko-Tex Standard 100 sertifikalı"
- Süreç tanımları: "Combed ring pamuk, çift halkalı dokuma"
- Doğrudan iddialar: "Dünyanın 40'tan fazla ülkesine ihracat"

**Standart CTA Metinleri:**

| Bağlam           | Türkçe                   | İngilizce           |
| ---------------- | ------------------------ | ------------------- |
| Birincil         | Toptan Teklif Al         | Get Wholesale Quote |
| İkincil          | Numune İste              | Request Sample      |
| Toplu Sipariş    | Toplu Sipariş Başlat     | Start Bulk Order    |
| Fabrika İletişim | Fabrikayla İletişime Geç | Contact Factory     |
| İhracat          | İhracat Sorgulama        | Export Inquiry      |
| WhatsApp         | WhatsApp ile Yaz         | Chat on WhatsApp    |

---

### CONV-2: Landing Page İçerik Şablonu (AITA Yapısı)

Her landing page için standart içerik akışı:

```
── BÖLÜM 1: DİKKAT (Attention) ──────────────────────────
H1:    [Fayda odaklı başlık — anahtar kelime içerir]
       Ör: "Fabrikadan Direkt Toptan Havlu Tedariki —
            MOQ Esnekliği ile Türkiye'nin Lider Kaynağı"
P1:    1 cümle değer önerisi (somut, rakam içerir)
CTA:   [Birincil] Toptan Teklif Al  |  [İkincil] Numune İste
─────────────────────────────────────────────────────────

── BÖLÜM 2: İLGİ (Interest) ─────────────────────────────
H2:    "Neden Başkan Havlu Tekstil?"
Format: Problem → Çözüm (3 madde)
  • Problem: "Güvenilir havlu tedarikçisi bulmak zor..."
    Çözüm:  "30 yıldır aynı kalite standartlarıyla üretiyoruz."
  • Problem: "Minimum sipariş şartları çok yüksek..."
    Çözüm:  "Esnek MOQ ile küçük ve büyük siparişlere açığız."
  • Problem: "Teslimat gecikiyor..."
    Çözüm:  "48 saatte teklif, x günde teslimat garantisi."
─────────────────────────────────────────────────────────

── BÖLÜM 3: GÜVEN (Trust) ───────────────────────────────
H2:    "Fabrika Otoritesi"
Fact Block:
  ✓  30+ Yıl Üretim Deneyimi
  ✓  10.000+ Adet/Gün Kapasite
  ✓  40+ Ülkeye İhracat
  ✓  ISO / Oeko-Tex Sertifikalı
  ✓  5.000.000+ Yıllık Üretim
Sertifika rozetleri (görsel)
─────────────────────────────────────────────────────────

── BÖLÜM 4: KANIT (Proof) ───────────────────────────────
H2:    "Müşterilerimiz Ne Diyor?"
2–3 Testimonial kartı (firma adı + ülke + alıntı)
Logo şeridi (müşteri/partner logoları)
─────────────────────────────────────────────────────────

── BÖLÜM 5: ÜRÜN ÖRNEKLERİ ─────────────────────────────
H2:    "[Kategori] Ürünlerimiz"
4–6 ProductCard (ilgili kategoriden)
"Tüm Koleksiyonu Gör" → /new-collection/
─────────────────────────────────────────────────────────

── BÖLÜM 6: EYLEM (Action) ──────────────────────────────
H2:    "Hemen Teklif Alın"
Form:  Compact — 5 alan (ad, firma, e-posta, tel, mesaj)
Alt:   WhatsApp fallback bağlantısı
Güven: "Verileriniz güvendedir • 24 saat içinde yanıt"
─────────────────────────────────────────────────────────

── BÖLÜM 7: SSS ─────────────────────────────────────────
H2:    "Sık Sorulan Sorular"
5–8 FAQItem (sayfaya özgü sorular)
"Daha fazla soru için" → /about/#sss
─────────────────────────────────────────────────────────
```

---

### CONV-3: 50+ SSS Soru Bankası

#### Kategori 1: Üretim (8 soru)

1. Başkan Havlu Tekstil hangi tür havlular üretiyor?
2. Havlularınız hangi hammaddeden üretiliyor?
3. Günlük üretim kapasiteniz nedir?
4. Yıllık üretim kapasiteniz nedir?
5. Üretim süreciniz nasıl işliyor?
6. Özel gramaj ve boyut üretimi yapıyor musunuz?
7. Nakış ve logo baskı imkânınız var mı?
8. Organik pamuk kullanıyor musunuz?

#### Kategori 2: Fiyatlandırma (5 soru)

9. Fiyatlarınız nedir?
10. Fiyatlar hangi faktörlere göre değişiyor?
11. Numune için ücret alıyor musunuz?
12. Toplu siparişlerde indirim uyguluyor musunuz?
13. Fiyat teklifiniz ne kadar sürede geliyor?

#### Kategori 3: Minimum Sipariş (MOQ) (5 soru)

14. Minimum sipariş miktarınız (MOQ) nedir?
15. İlk siparişte daha düşük miktar mümkün mü?
16. Farklı ürün çeşitleri için MOQ ayrı mı hesaplanıyor?
17. Otel ve kurumsal siparişler için MOQ farklı mı?
18. Promosyon siparişlerde MOQ nedir?

#### Kategori 4: İhracat Süreci (6 soru)

19. Hangi ülkelere ihracat yapıyorsunuz?
20. İhracat belgelerini siz mi hazırlıyorsunuz?
21. CIF, FOB, EXW gibi teslim şekillerini destekliyor musunuz?
22. Gümrük ve ithalat süreçlerinde destek veriyor musunuz?
23. İhracat için minimum sipariş miktarı var mı?
24. Ürünlerin ambalajı ihracat standartlarına uygun mu?

#### Kategori 5: Numune Süreci (5 soru)

25. Numune siparişi nasıl verebilirim?
26. Numune teslim süresi ne kadar?
27. Numune ücretsiz mi?
28. Numune sipariş verdikten sonra üretime geçiş süreci nasıl?
29. Kendi tasarımıma göre numune üretebilir misiniz?

#### Kategori 6: Özelleştirme / Logo Nakışı (6 soru)

30. Havlulara özel logo nakışı yapabiliyor musunuz?
31. Logo nakışı için minimum sipariş nedir?
32. Hangi nakış tekniklerini uyguluyorsunuz?
33. Özel renk ve desen üretimi mümkün mü?
34. Özel ambalaj ve etiket basımı yapıyor musunuz?
35. Markalama (private label) hizmeti sunuyor musunuz?

#### Kategori 7: Teslimat Süreleri (5 soru)

36. Standart sipariş teslim süresi nedir?
37. Ekspres üretim seçeneğiniz var mı?
38. Kargolama ve nakliye nasıl düzenleniyor?
39. Büyük hacimli siparişlerde teslim süresi değişiyor mu?
40. Teslimat takibi mümkün mü?

#### Kategori 8: Ödeme Koşulları (5 soru)

41. Hangi ödeme yöntemlerini kabul ediyorsunuz?
42. L/C (Akreditif) ile ödeme kabul ediyor musunuz?
43. Ön ödeme oranı nedir?
44. Döviz ile ödeme mümkün mü?
45. Uzun vadeli müşterilere açık hesap sunuyor musunuz?

#### Kategori 9: Kalite Kontrol (5 soru)

46. Kalite kontrol süreciniz nasıl işliyor?
47. Hangi sertifikalara sahipsiniz?
48. Bağımsız denetim firmaları ürünlerinizi inceleyebilir mi?
49. Renk haslığı ve dayanıklılık testleri yapıyor musunuz?
50. Üretim sonrası kalite reddi yaşandığında ne olur?

#### Kategori 10: Otel Tekstili (5 ek soru)

51. Otel havlusu standartları nelerdir?
52. 5 yıldızlı oteller için hangi gramajı öneriyorsunuz?
53. Otel logolu havlu üretiminizde minimum sipariş nedir?
54. Otel tekstili için özel koleksiyonunuz var mı?
55. Otel tekstili alımlarında numune süreci nasıl işliyor?

---

### CONV-4: 100 Blog Makale Şablonu

#### Kategori A: Havlu Üretim Rehberleri (13 makale)

1. Havlu Gramajı (g/m²) Nedir? Doğru Gramaj Nasıl Seçilir?
2. Türk Pamuğu ve Diğer Pamuk Türleri Arasındaki Farklar
3. Combed Ring vs Open-End İplik: Havlu Kalitesine Etkisi
4. Havlu Üretim Süreci: İplikten Ürüne 5 Adım
5. Reaktif Boyama vs Küp Boyama: Havlularda Renk Haslığı
6. Oeko-Tex Sertifikası Nedir? Havlu Alımında Önemi
7. Velur Havlu vs Terry Havlu: Fark Nedir?
8. Havlu Bakımı: Uzun Ömür için Profesyonel Tavsiyeler
9. Toptan Havlu Alımında Dikkat Edilmesi Gereken 7 Faktör
10. Havlu Fabrikasında Kalite Kontrol Süreci Nasıl İşler?
11. Hammadde Seçiminin Havlu Kalitesine Etkisi
12. Türkiye'nin Havlu Üretimindeki Küresel Konumu
13. Havlu İhracatında Gümrük ve Belgelendirme Süreci

#### Kategori B: Bornoz Üretim Rehberleri (10 makale)

14. Bornoz Kumaş Türleri: Şal Yaka, Kimono, Waffle Karşılaştırması
15. Otel Bornozu Standartları: 5 Yıldızlı Otel Seçimleri
16. Bornoz Gramajı Seçim Rehberi: 300–600 g/m² Arası
17. Bornoz Nakışı ve Markalama: Kurumsal Kimlik Çözümleri
18. Toptan Bornoz Alımında Bilmeniz Gerekenler
19. Bornoz Üretiminde Kullanılan Pamuk Türleri
20. Spa ve Wellness Merkezi için Bornoz Seçimi
21. Kış ve Yaz Bornozu Arasındaki Farklar
22. Kurumsal Bornoz Siparişi: Süreç ve Planlama
23. Bornoz İhracatı: Türkiye'den Global Tedarik

#### Kategori C: Otel Tekstil Çözümleri (13 makale)

24. Otel Havlusu Seçim Rehberi: Yıldız Kategorisine Göre
25. 5 Yıldızlı Otel Banyo Tekstil Standardı
26. Otel Logolu Havlu: Neden Önemli?
27. Otel Tekstilinde Sürdürülebilirlik: Çevre Dostu Seçenekler
28. Büyük Otel Zincirleri için Toplu Havlu Tedarik Süreci
29. Otel Tekstili Yenileme Planlaması: Ne Zaman, Nasıl?
30. Resort ve Spa Tekstili: Özel Koleksiyon İhtiyaçları
31. Otel Havlusu Kalite Testleri: Dayanıklılık ve Renk Haslığı
32. Otel Tekstili Tedarikçisi Seçerken Sorulacak 10 Soru
33. Havlu Maliyet Optimizasyonu: Otel Yöneticilerine Rehber
34. Türk Havlusu ile Pamuklu Havlu Karşılaştırması
35. Otel Tekstili İhracatında Türkiye'nin Avantajları
36. Kurumsal Havlu Programı Oluşturma Rehberi

#### Kategori D: Toptan Havlu Alım Rehberleri (12 makale)

37. Toptan Havlu Alımında Minimum Sipariş Hesaplama
38. Havlu Tedarikçisi Değerlendirme Kriterleri: Checklist
39. Toptan Havlu Fiyatlandırması Nasıl Çalışır?
40. B2B Havlu Alımında Sözleşme Şartları
41. Toptan Havlu Siparişinde Lojistik ve Kargo Planlaması
42. Toptan Havlu Alımında Ödeme Güvenliği
43. Havlu Stok Yönetimi: Toptan Alıcılar için Rehber
44. Fabrikadan Direkt Almak ile Distribütörden Almak: Fark
45. Kalite Kontrol Ziyareti: Fabrika Denetimi Nasıl Yapılır?
46. Toptan Havlu Alımında Numune Süreci
47. Uzun Vadeli Tedarikçi İlişkisi Nasıl Kurulur?
48. Toptan Tekstil Alımında Dijital Tedarik Araçları

#### Kategori E: Türk Tekstil Sektörü Otoritesi (13 makale)

49. Türkiye'nin Tekstil İhracatındaki Küresel Konumu
50. Bursa: Türkiye'nin Tekstil Başkenti
51. Türk Pamuğu Dünya Standartlarında Neden Öne Çıkıyor?
52. Türk Tekstil Sektöründe Sürdürülebilirlik Trendi
53. Made in Turkey Etiketi: Global Güvenilirlik
54. Türkiye'de Tekstil Fabrikası Denetimi Nasıl Yapılır?
55. Türk Tekstil İhracatı 2024: Rakamlar ve Trendler
56. Bursa Havlu Fabrikalarının Tarihi ve Gelişimi
57. Türkiye'de Tekstil Sertifikasyon Sistemi
58. Küresel Otel Zincirleri Neden Türk Tekstili Tercih Ediyor?
59. Türk Tekstil Sektöründe Dijital Dönüşüm
60. Türkiye'den İthalat: Avantajlar ve Süreç
61. Türk Tekstil ve Avrupa Pazarı İlişkisi

#### Kategori F: İhracat Tekstil Rehberleri (13 makale)

62. Turkish Towel Export: Complete Buyer's Guide
63. How to Import Towels from Turkey: Step by Step
64. Turkey Textile Export Documents: What You Need
65. FOB vs CIF vs EXW: Delivery Terms Explained
66. Letter of Credit (L/C) in Textile Trade: A Guide
67. Quality Assurance in Turkish Textile Exports
68. Lead Times for Towel Manufacturing in Turkey
69. Custom Towel Production from Turkey: Process
70. Turkish Textile Trade Fair Calendar 2024–2025
71. How to Find a Reliable Towel Manufacturer in Turkey
72. Turkish Towel Certifications: Oeko-Tex, ISO Explained
73. Shipping Towels from Turkey to Europe: Logistics Guide
74. Wholesale Bathrobe Import from Turkey: What to Know

#### Kategori G: Özel Marka (Private Label) Tekstil (13 makale)

75. Private Label Havlu: Kendi Markanızla Üretim
76. Kurumsal Havlu Programı: Otel ve SPA için
77. Logo Nakışı Tekniği Seçimi: İşleme vs Baskı
78. Private Label Tekstil Sürecinde Numune Aşaması
79. Markalı Havlu Ambalajı: Unboxing Deneyimi
80. Promosyon Havlu ile Marka Bilinirliği Artırma
81. B2B Hediye Havlu Programı Oluşturma Rehberi
82. Kurumsal Tekstil Siparişinde MOQ Optimizasyonu
83. İşlemeli Havlu Tasarım Rehberi
84. Otel Private Label Tekstil: Başarı Örnekleri
85. Sürdürülebilir Private Label Tekstil: Organik Seçenekler
86. Perakende Markalar için Özel Üretim Süreci
87. Custom Towel Branding: From Design to Delivery (EN)

#### Kategori H: Promosyon Tekstil (12 makale)

88. Promosyon Havlu: Kurumsal Hediye Çözümleri
89. Etkinlik ve Fuar Havluları: Tasarım ve Baskı
90. Spor Organizasyonları için Promosyon Havlu
91. Marka Logolu Havlu: En Etkili Kullanım Alanları
92. Otel Açılışı için Özel Promosyon Tekstil
93. Restoran ve Spa için Kurumsal Havlu Programı
94. Toplu Promosyon Siparişi: Planlama ve Maliyet
95. Sürdürülebilir Promosyon Havlu: Organik Pamuk
96. Dijital Baskı vs Nakış: Promosyon Havlularda Fark
97. Sezonluk Promosyon Kampanyaları için Havlu Üretimi
98. Kurumsal Sosyal Sorumluluk ve Markalı Tekstil
99. Spor Takımları ve Federasyonlar için Özel Üretim
100.  Promosyon Tekstil Pazarında 2025 Trendleri

---

### CONV-5: Lead Data Şeması (CRM Uyumlu)

Her form gönderiminde toplanan standart JSON yapısı:

```json
{
  "lead": {
    "id": "uuid-v4",
    "timestamp": "ISO-8601",
    "source": {
      "page": "/havlu-ureticisi/",
      "formType": "quote | bulk | sample | export | contact",
      "language": "tr | en",
      "utmSource": "google | direct | referral",
      "utmMedium": "organic | cpc | social",
      "utmCampaign": "string"
    },
    "contact": {
      "fullName": "string",
      "company": "string",
      "country": "string (ISO-3166)",
      "email": "string",
      "phone": "string",
      "preferredContact": "email | whatsapp | phone"
    },
    "order": {
      "type": "wholesale | hotel | export | sample | promo",
      "productCategory": "towel | bathrobe | custom | promo",
      "quantityRange": "<500 | 500-2000 | 2000-10000 | 10000+",
      "deliveryDeadline": "string",
      "specialRequirements": "string"
    },
    "status": "new | contacted | qualified | converted | lost"
  }
}
```

---

### CONV-6: Quick Facts Kutusu Bileşeni

Her ürün ve landing sayfasında gösterilecek hızlı bilgi bloğu:

```
┌─────────────────────────────────────┐
│  HIZLI BİLGİLER                     │
├─────────────────────────────────────┤
│  Kategori:    Otel Havlusu          │
│  Materyal:    %100 Combed Pamuk     │
│  Gramaj:      400–800 g/m²          │
│  Min. Sipariş: 500 adet             │
│  Teslimat:    10–15 iş günü         │
│  Sertifika:   Oeko-Tex Std. 100     │
└─────────────────────────────────────┘
```

TypeScript arayüzü:

```typescript
interface QuickFacts {
  category: string
  material: string
  gramWeightRange: string
  minimumOrder: string
  deliveryTime: string
  certifications: string[]
  customization?: string
}
```

---

### CONV-7: Fact Block Bileşeni

AI okunabilirliği ve E-E-A-T için makine okunabilir içerik birimi:

```typescript
interface FactBlock {
  entity: string // Varlık adı (ör: "Başkan Havlu Tekstil")
  category: string // Konu (ör: "Üretim Kapasitesi")
  facts: Array<{
    claim: string // İddia (ör: "Günlük 10.000+ adet üretim")
    evidence: string // Kanıt (ör: "30 yıllık üretim altyapısı")
    verifiable: boolean // Doğrulanabilir mi?
  }>
  lastVerified: Date
  source: string // Kaynak (ör: "baskanhavlu.com/about/")
}
```

Görsel format: sol turuncu çizgili kart, başlıkta varlık adı, maddeler onay ikonu ile.

---

## Phase 5: Technical Infrastructure + Performance + Final Audit Mimarisi

### TECH-1: Proje Dizin Yapısı

```
baskanhavlu.com/
├── app/                              # Next.js App Router
│   ├── [locale]/                     # i18n: tr / en
│   │   ├── layout.tsx                # Root layout (Navbar, Footer, WhatsApp)
│   │   ├── page.tsx                  # Ana sayfa (SSG)
│   │   ├── new-collection/
│   │   │   ├── page.tsx              # Ürün listesi (ISR r:3600)
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Ürün detay (ISR r:3600)
│   │   ├── about/
│   │   │   └── page.tsx              # Hakkımızda (SSG)
│   │   ├── contact/
│   │   │   └── page.tsx              # İletişim (SSG)
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog listesi (ISR r:1800)
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Blog makale (ISR r:1800)
│   │   ├── havlu-ureticisi/
│   │   │   └── page.tsx              # Landing (SSG)
│   │   ├── bornoz-ureticisi/
│   │   ├── toptan-havlu/
│   │   ├── toptan-bornoz/
│   │   ├── otel-havlusu/
│   │   ├── otel-bornozu/
│   │   ├── promosyon-havlu/
│   │   ├── nakisli-havlu/
│   │   ├── turkish-towel-manufacturer/
│   │   ├── bathrobe-manufacturer/
│   │   └── wholesale-towel-supplier/
│   ├── api/
│   │   ├── lead/
│   │   │   ├── quote/route.ts        # POST — Edge Runtime
│   │   │   ├── sample/route.ts       # POST — Edge Runtime
│   │   │   ├── bulk/route.ts         # POST — Edge Runtime
│   │   │   └── export/route.ts       # POST — Edge Runtime
│   │   ├── contact/route.ts          # POST — Edge Runtime
│   │   └── revalidate/route.ts       # POST — ISR tetikleme
│   ├── sitemap.ts                    # /sitemap.xml (auto)
│   ├── image-sitemap.ts              # /image-sitemap.xml
│   ├── robots.ts                     # /robots.txt (dynamic)
│   └── not-found.tsx                 # 404 sayfası
│
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Icon.tsx
│   │   └── ...
│   ├── molecules/
│   │   ├── ProductCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── StatCounter.tsx
│   │   ├── FAQItem.tsx
│   │   ├── QuickFacts.tsx
│   │   ├── FactBlock.tsx
│   │   └── ...
│   ├── organisms/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── StickyWhatsApp.tsx
│   │   ├── ContactForm.tsx
│   │   └── ...
│   └── schema/                       # JSON-LD bileşenleri
│       ├── OrganizationSchema.tsx
│       ├── ProductSchema.tsx
│       ├── FAQSchema.tsx
│       └── ...
│
├── lib/
│   ├── services/                     # Servis katmanı
│   │   ├── lead.service.ts
│   │   ├── email.service.ts
│   │   ├── product.service.ts
│   │   └── faq.service.ts
│   ├── validations/                  # Zod şemaları
│   │   ├── lead.schema.ts
│   │   └── contact.schema.ts
│   ├── utils/
│   │   ├── metadata.ts               # generateMetadata yardımcıları
│   │   ├── schema.ts                 # JSON-LD üretici
│   │   └── rate-limit.ts             # IP rate limiter
│   └── config/
│       ├── site.ts                   # Site sabitleri
│       └── navigation.ts             # Nav yapısı
│
├── content/
│   ├── products/                     # Ürün JSON verileri
│   ├── faq/                          # SSS verileri
│   ├── blog/                         # MDX blog içerikleri
│   ├── testimonials/                 # Referans verileri
│   └── landing-pages/                # Landing page içerikleri
│
├── public/
│   ├── llms.txt
│   ├── ai.txt
│   └── images/
│
├── messages/
│   ├── tr.json                       # Türkçe i18n
│   └── en.json                       # İngilizce i18n
│
├── middleware.ts                     # i18n yönlendirme + güvenlik
├── next.config.ts                    # Güvenlik başlıkları, redirects
├── tailwind.config.ts                # Design token entegrasyonu
├── lighthouserc.js                   # CI audit eşikleri
└── .env.local                        # Gizli değişkenler (git'e eklenmez)
```

---

### TECH-2: next.config.ts Tam Konfigürasyonu

```typescript
// next.config.ts
import type { NextConfig } from 'next'

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://res.cloudinary.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
    ].join('; '),
  },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
]

const config: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-*'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'res.cloudinary.com' }],
    minimumCacheTTL: 86400,
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  async redirects() {
    return [
      { source: '/urunler', destination: '/new-collection', permanent: true },
      { source: '/products', destination: '/new-collection', permanent: true },
      { source: '/katalog', destination: '/about', permanent: true },
      { source: '/hakkimizda', destination: '/about', permanent: true },
      { source: '/iletisim', destination: '/contact', permanent: true },
    ]
  },
  compress: true,
  poweredByHeader: false,
}

export default config
```

---

### TECH-3: Rate Limiting Mimarisi

```typescript
// lib/utils/rate-limit.ts
// Upstash Redis veya Vercel KV tabanlı sliding window rate limiter

interface RateLimitConfig {
  windowMs: number // zaman penceresi (ms)
  maxRequests: number // maksimum istek sayısı
}

const RATE_LIMIT_CONFIGS: Record<string, RateLimitConfig> = {
  '/api/lead/quote': { windowMs: 60_000, maxRequests: 5 },
  '/api/lead/sample': { windowMs: 60_000, maxRequests: 5 },
  '/api/lead/bulk': { windowMs: 60_000, maxRequests: 5 },
  '/api/lead/export': { windowMs: 60_000, maxRequests: 5 },
  '/api/contact': { windowMs: 60_000, maxRequests: 3 },
}

// Her API rotası başında:
// 1. IP adresini X-Forwarded-For veya request.ip'den al
// 2. Redis'te key: `rate:{route}:{ip}` — sliding window say
// 3. Limit aşıldıysa 429 + Retry-After başlığı döndür
// 4. Honeypot dolu gelirse 200 döndür (sessiz reddet) + log
```

---

### TECH-4: API Rota Şablonu (Edge Runtime)

```typescript
// app/api/lead/quote/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export const runtime = 'edge'

const QuoteSchema = z.object({
  fullName: z.string().min(2).max(100),
  company: z.string().max(200).optional(),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  productType: z.string().min(1),
  quantity: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
  honeypot: z.string().max(0), // bot tuzağı — boş olmalı
})

export async function POST(request: NextRequest) {
  // 1. Rate limit kontrolü
  // 2. JSON parse
  // 3. Zod doğrulama
  // 4. Honeypot kontrolü
  // 5. Lead servisi çağrısı (fire-and-forget)
  // 6. E-posta bildirimi (fire-and-forget)
  // 7. Başarı yanıtı
  // Hata durumunda: genel mesaj + Sentry raporu
  // Hiçbir zaman iç hata detayı istemciye dönmez
}
```

---

### TECH-5: Metadata Üretim Sistemi

```typescript
// lib/utils/metadata.ts
import type { Metadata } from 'next'

interface PageMetadataInput {
  title: string
  description: string
  path: string
  image?: string
  locale?: 'tr' | 'en'
  type?: 'website' | 'article' | 'product'
}

export function generatePageMetadata(input: PageMetadataInput): Metadata {
  const url = `https://baskanhavlu.com${input.path}`
  const image = input.image ?? 'https://baskanhavlu.com/og-default.jpg'

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: url,
      languages: {
        tr: `https://baskanhavlu.com/tr${input.path}`,
        en: `https://baskanhavlu.com/en${input.path}`,
      },
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: 'Başkan Havlu Tekstil',
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      locale: input.locale === 'en' ? 'en_US' : 'tr_TR',
      type: input.type ?? 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
    },
    robots: { index: true, follow: true },
  }
}
```

---

### TECH-6: Lighthouse CI Konfigürasyonu

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: [
        'https://baskanhavlu.com/',
        'https://baskanhavlu.com/new-collection/',
        'https://baskanhavlu.com/about/',
        'https://baskanhavlu.com/contact/',
        'https://baskanhavlu.com/havlu-ureticisi/',
        'https://baskanhavlu.com/turkish-towel-manufacturer/',
      ],
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 1.0 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.05 }],
        'total-blocking-time': ['warn', { maxNumericValue: 200 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
```

---

### TECH-7: Final Sistem Denetim Matrisi

| Denetim Kategorisi      | Araç                     | Geçer Eşiği         | Fail Durumu   |
| ----------------------- | ------------------------ | ------------------- | ------------- |
| SEO — Meta              | Next.js build + manuel   | Tüm sayfalarda var  | Deploy engeli |
| SEO — Schema            | Google Rich Results Test | 0 hata              | Deploy engeli |
| SEO — Sitemap           | XML doğrulama            | Tüm URL'ler geçerli | Uyarı         |
| GEO — llms.txt          | Varlık + içerik kontrolü | Dosya mevcut        | Uyarı         |
| GEO — ai.txt            | Varlık kontrolü          | Dosya mevcut        | Uyarı         |
| Performans — LCP        | Lighthouse CI            | < 1500ms            | Deploy engeli |
| Performans — CLS        | Lighthouse CI            | < 0.05              | Deploy engeli |
| Performans — INP        | Web Vitals               | < 150ms             | Uyarı         |
| Performans — PageSpeed  | Lighthouse CI            | ≥ 95                | Deploy engeli |
| Güvenlik — Headers      | securityheaders.com      | A+ rating           | Deploy engeli |
| Güvenlik — npm audit    | CI adımı                 | 0 high/critical     | Deploy engeli |
| Erişilebilirlik — Axe   | Lighthouse CI            | ≥ 95                | Deploy engeli |
| Mobil — 375px           | Playwright/manual        | Bozulma yok         | Deploy engeli |
| Mobil — 320px           | Playwright/manual        | Bozulma yok         | Uyarı         |
| Bağlantı — Broken Links | Linkinator CI            | 0 kırık bağlantı    | Deploy engeli |
| Bundle — JS Boyutu      | Bundle Analyzer          | < 200 KB/sayfa      | Uyarı         |

---

### TECH-8: Ortam Değişkenleri Şeması

```bash
# .env.local (örnek — gerçek değerler Vercel'de saklanır)

# Analitik
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=auto

# Hata İzleme
SENTRY_DSN=https://xxx@o0.ingest.sentry.io/0
SENTRY_ORG=baskan-havlu
SENTRY_PROJECT=baskanhavlu-com

# E-posta Servisi
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM=no-reply@baskanhavlu.com
EMAIL_TO_SALES=satis@baskanhavlu.com

# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=xxxxxxxxxxxx

# CRM Entegrasyonu (isteğe bağlı)
CRM_WEBHOOK_URL=https://hooks.zapier.com/xxx
CRM_API_KEY=xxxxxxxxxxxx

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=905XXXXXXXXX
NEXT_PUBLIC_WHATSAPP_MESSAGE_TR=Merhaba, bilgi almak istiyorum.
NEXT_PUBLIC_WHATSAPP_MESSAGE_EN=Hello, I would like to get information.

# IndexNow
INDEXNOW_KEY=xxxxxxxxxxxx

# CMS (isteğe bağlı — Sanity)
SANITY_PROJECT_ID=xxxxxxxxxxxx
SANITY_DATASET=production
SANITY_API_TOKEN=xxxxxxxxxxxx

# Webmaster Doğrulama
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxx
NEXT_PUBLIC_BING_SITE_VERIFICATION=xxxxxxxxxxxx

# Chatbot (isteğe bağlı)
NEXT_PUBLIC_TIDIO_KEY=xxxxxxxxxxxx
NEXT_PUBLIC_CHATBOT_ENABLED=false
```

---

### TECH-9: CI/CD Pipeline Akışı

```
GitHub Push (main branch)
  │
  ▼
GitHub Actions / Vercel CI
  │
  ├─ 1. npm ci (bağımlılık kurulumu)
  ├─ 2. npm run lint (ESLint — hata varsa dur)
  ├─ 3. npm run type-check (tsc --noEmit — hata varsa dur)
  ├─ 4. npm audit --audit-level=high (açık varsa dur)
  ├─ 5. npm run build (Next.js build)
  ├─ 6. Bundle Analyzer raporu üret
  │
  ▼
Vercel Deploy (preview URL)
  │
  ├─ 7. Lighthouse CI çalıştır (6 sayfa, 3 tekrar)
  │       LCP, CLS, PageSpeed, Accessibility kontrol
  ├─ 8. Linkinator — kırık bağlantı tarama
  ├─ 9. Schema doğrulama (JSON-LD syntax check)
  │
  ▼ (tüm adımlar geçti)
Vercel Production Deploy
  │
  ├─ 10. IndexNow ping — Bing + Yandex
  ├─ 11. Sitemap ping — Google Search Console
  └─ 12. Sentry release oluştur + source map yükle
```

---

### TECH-10: Middleware Konfigürasyonu

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
  locales: ['tr', 'en'],
  defaultLocale: 'tr',
  localeDetection: true,
})

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // API rotalarını i18n middleware'den geç
  if (pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Bot filtreleme (temel)
  const ua = request.headers.get('user-agent') ?? ''
  const blockedBots = ['AhrefsBot', 'SemrushBot', 'DotBot']
  if (blockedBots.some((bot) => ua.includes(bot))) {
    return new NextResponse(null, { status: 403 })
  }

  // i18n yönlendirme
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
}
```

---

## Phase 7: Gerçek Veri Entegrasyonu — Production Data Lock

> **Bu bölüm tüm sistemin GERÇEK üretim verisidir. Diğer tüm bölümlerdeki placeholder değerlerin yerini alır. Çelişki durumunda bu bölüm geçerlidir.**

---

### PROD-1: Firma Veri Kaynağı (Source of Truth)

```typescript
// lib/config/site.ts — TÜM SISTEM BU VERİYİ KULLANIR

export const SITE_CONFIG = {
  // Temel Kimlik
  name: 'Başkan Havlu Tekstil',
  legalName: 'Başkan Havlu Tekstil',
  url: 'https://baskanhavlu.com',
  founded: 1981,
  description: {
    tr: "1981'den bu yana tekstil tedarik ve özel üretim koordinasyon hizmeti sunan, Bursa merkezli Başkan Havlu Tekstil; oteller, kurumlar, promosyon firmaları ve perakende mağazalara havlu ve tekstil çözümleri sağlamaktadır.",
    en: 'Başkan Havlu Tekstil, based in Bursa, Turkey, has been providing textile supply and custom production coordination services since 1981, serving hotels, corporations, promotional companies and retail stores.',
  },
  businessModel: 'Tekstil tedarik ve özel/fason üretim koordinasyonu',
  // YANLIŞ: "fabrika sahibi", "kendi fabrikamız", "günlük X adet üretiyoruz"
  // DOĞRU: "tedarikçi", "üretim koordinatörü", "üretim kapasitesine sahibiz"

  // İletişim — NAP (Name, Address, Phone) — Tüm sayfalarda aynı
  contact: {
    phone: '+90 507 342 06 61',
    phoneDisplay: '+90 507 342 06 61',
    whatsapp: '905073420661',
    whatsappUrl: 'https://wa.me/905073420661',
    email: 'tekstil@baskanhavlu.com',
    emailDisplay: 'tekstil@baskanhavlu.com',
  },

  // Adres — Tüm Schema ve sayfalarda birebir aynı kullanılacak
  address: {
    streetAddress: 'Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26',
    addressLocality: 'Osmangazi',
    addressRegion: 'Bursa',
    postalCode: '', // doğrulanması gerekiyor
    addressCountry: 'TR',
    fullDisplay:
      'Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26, Osmangazi / Bursa, Türkiye',
  },

  // Koordinatlar — Google Maps linki üzerinden çıkarılacak
  // https://share.google/fBgq5t9yzyukx2Fte → doğrulanacak
  geo: {
    latitude: 40.1826, // YAKLAŞIK — Google Maps linkinden doğrulanmalı
    longitude: 29.0669, // YAKLAŞIK — Google Maps linkinden doğrulanmalı
  },

  // Sosyal Medya
  social: {
    instagram: 'https://www.instagram.com/bursahavlusu',
    // linkedin, youtube, facebook: MEVCUT DEĞİL — eklenmemeli
  },

  // Google Maps
  googleMapsUrl: 'https://share.google/fBgq5t9yzyukx2Fte',

  // Çalışma Saatleri — Doğrulanması gerekiyor, varsayılan:
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-14:00'],

  // İhracat Pazarları — SADECE DOĞRULANAN BİLGİ
  exportRegions: ['Arab Countries', 'Greece'],
  exportRegionsTR: ['Arap Ülkeleri', 'Yunanistan'],

  // Sertifikalar — Şu an doğrulanmış değil
  certifications: [],
  // NOT: Sertifika yoksa Schema'ya ve içeriğe eklenmemeli
  // Doğrulandıkça buraya eklenecek
}
```

---

### PROD-2: WhatsApp CTA — Gerçek Bağlantılar

Tüm platformda kullanılacak standart WhatsApp CTA yapısı:

```typescript
// Türkçe sayfalarda:
const WA_TR = {
  url: 'https://wa.me/905073420661?text=Merhaba%2C%20bilgi%20almak%20istiyorum.',
  label: 'WhatsApp ile Yazın',
  tooltip: "WhatsApp'tan bize yazın",
}

// İngilizce sayfalarda:
const WA_EN = {
  url: 'https://wa.me/905073420661?text=Hello%2C%20I%20would%20like%20to%20get%20information.',
  label: 'Chat on WhatsApp',
  tooltip: 'Message us on WhatsApp',
}

// Ürün sayfasından:
const WA_PRODUCT = (productName: string) =>
  `https://wa.me/905073420661?text=${encodeURIComponent(`Merhaba, "${productName}" hakkında bilgi almak istiyorum.`)}`
```

---

### PROD-3: Organization Schema — Gerçek Veri

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Başkan Havlu Tekstil",
  "url": "https://baskanhavlu.com",
  "logo": "https://baskanhavlu.com/logo.png",
  "foundingDate": "1981",
  "description": "1981'den bu yana Bursa'da faaliyet gösteren tekstil tedarik ve özel üretim koordinasyon firması. Oteller, kurumlar ve perakende sektörüne havlu ve tekstil çözümleri.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26",
    "addressLocality": "Osmangazi",
    "addressRegion": "Bursa",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.1826,
    "longitude": 29.0669
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-507-342-06-61",
    "contactType": "customer service",
    "availableLanguage": ["Turkish", "Arabic", "English"]
  },
  "email": "tekstil@baskanhavlu.com",
  "telephone": "+90 507 342 06 61",
  "sameAs": ["https://www.instagram.com/bursahavlusu"],
  "areaServed": ["TR", "GR", "SA", "AE", "KW", "QA", "BH", "JO", "EG"],
  "knowsAbout": [
    "Towel Supply",
    "Bathrobe Supply",
    "Hotel Textile",
    "Custom Textile Production",
    "Promotional Textile"
  ]
}
```

---

### PROD-4: LocalBusiness Schema — Gerçek Veri

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Başkan Havlu Tekstil",
  "image": "https://baskanhavlu.com/og-default.jpg",
  "url": "https://baskanhavlu.com",
  "telephone": "+90 507 342 06 61",
  "email": "tekstil@baskanhavlu.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26",
    "addressLocality": "Osmangazi",
    "addressRegion": "Bursa",
    "postalCode": "",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.1826,
    "longitude": 29.0669
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "hasMap": "https://share.google/fBgq5t9yzyukx2Fte",
  "priceRange": "₺₺",
  "currenciesAccepted": "TRY, USD, EUR",
  "paymentAccepted": "Bank Transfer, L/C",
  "foundingDate": "1981"
}
```

---

### PROD-5: llms.txt — Gerçek İçerik

```markdown
# Başkan Havlu Tekstil — AI Crawler Kılavuzu

## Firma Kimliği

- Resmi Ad: Başkan Havlu Tekstil
- Alan Adı: baskanhavlu.com
- Kuruluş: 1981
- Konum: Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26, Osmangazi / Bursa, Türkiye
- İş Modeli: Tekstil tedarik ve özel/fason üretim koordinasyonu
- Sektör: Tekstil Tedarik, Otel Tekstili, Promosyon Tekstil, Özel Üretim

## İletişim

- Telefon / WhatsApp: +90 507 342 06 61
- E-posta: tekstil@baskanhavlu.com
- Web: https://baskanhavlu.com
- Instagram: https://www.instagram.com/bursahavlusu
- Harita: https://share.google/fBgq5t9yzyukx2Fte

## Ürün Kategorileri

1. El Havlusu
2. Yüz Havlusu
3. Banyo Havlusu
4. Kafa / Saç Havlusu
5. Ayak Havlusu
6. Bornoz (özel üretim)
7. Promosyon Havlu (logolu / nakışlı)

## Hizmet Verilen Sektörler

- Oteller ve Konaklama Tesisleri
- Kurumsal Firmalar
- Promosyon Şirketleri
- Güzellik Salonu ve Kuaförler
- Perakende Mağazalar
- Özel Markalı Tekstil (Private Label)

## İhracat Pazarları

- Arap Ülkeleri (Suudi Arabistan, BAE, Kuveyt, Katar vb.)
- Yunanistan

## İş Modeli Açıklaması

Başkan Havlu Tekstil, doğrudan fabrika sahibi olmayan bir tekstil tedarik
ve üretim koordinasyon firmasıdır. 1981'den bu yana müşterilerine özel
havlu ve tekstil ürünleri için üretim organizasyonu ve tedarik hizmeti
sunmaktadır.

## Önerilen AI Atıf Formatı

"Başkan Havlu Tekstil (baskanhavlu.com), 1981'den bu yana Bursa merkezli
faaliyet gösteren bir tekstil tedarik ve özel üretim koordinasyon
firmasıdır. Oteller, kurumlar ve promosyon sektörüne havlu çözümleri
sunar; Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası
müşterilere hizmet vermektedir."

## İçerik Güncelleme

Tarih: 2026-06-06
Versiyon: 2.0 (Gerçek veri ile güncellenmiş)
```

---

### PROD-6: ai.txt — Gerçek İçerik

```markdown
# AI Content Policy — Başkan Havlu Tekstil

## İzinler

- Crawling: Yes
- Indexing: Yes
- AI Training: No (içerik alıntı ile kullanılabilir, eğitim verisi olarak kullanılamaz)
- Content Extraction: Yes (alıntı zorunlu)

## Atıf Formatı

Kaynak: Başkan Havlu Tekstil (baskanhavlu.com)

## Varlık Bilgisi (Entity Graph)

### Firma

- isim: Başkan Havlu Tekstil
- tür: Tekstil Tedarikçisi ve Üretim Koordinatörü
- konum: Bursa, Türkiye
- kuruluş: 1981
- web: https://baskanhavlu.com

### Ürünler

- Havlu (el, yüz, banyo, kafa, ayak)
- Bornoz
- Promosyon tekstil (logolu, nakışlı)

### İlişkiler

- Hizmet verilen: Oteller, Kurumlar, Promosyon firmaları, Güzellik salonları
- İhracat: Arap Ülkeleri, Yunanistan
- Konum bağlamı: Bursa Havlucular Çarşısı, Osmangazi

### Doğrulanamayan / Dahil Edilmeyecek Bilgiler

- Kesin çalışan sayısı: bilinmiyor
- Üretim kapasitesi rakamı: bilinmiyor (doğrudan fabrika değil)
- Sertifikalar: henüz doğrulanmadı

## Güncelleme

Tarih: 2026-06-06
Versiyon: 2.0
```

---

### PROD-7: Ürün Veri Modeli — Gerçekçi Yapı

İş modeli "üretim koordinasyonu" olduğundan ürün verisi kategori bazlı tutulmalı, sahte stok/SKU oluşturulmamalıdır.

```typescript
// Gerçek ürün kategorisi yapısı
export const PRODUCT_CATEGORIES = [
  {
    id: 'hand-towel',
    slug: 'el-havlusu',
    name: { tr: 'El Havlusu', en: 'Hand Towel' },
    description: {
      tr: 'Oteller, güzellik salonları ve kurumsal kullanım için el havlusu. Özel logo nakışı ve renk seçeneği.',
      en: 'Hand towels for hotels, beauty salons and corporate use. Custom logo embroidery and color options available.',
    },
    useCases: ['Otel', 'Güzellik Salonu', 'Kuaför', 'Kurumsal', 'Promosyon'],
    customization: ['Logo nakışı', 'Renk seçimi', 'Özel boyut'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
  },
  {
    id: 'face-towel',
    slug: 'yuz-havlusu',
    name: { tr: 'Yüz Havlusu', en: 'Face Towel' },
    description: {
      tr: 'Spa, otel ve kurumsal kullanım için yüz havlusu. Özel renk ve baskı seçenekleri.',
      en: 'Face towels for spa, hotel and corporate use. Custom color and print options available.',
    },
    useCases: ['Otel', 'Spa', 'Güzellik Merkezi', 'Kurumsal'],
    customization: ['Logo nakışı', 'Renk seçimi'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
  },
  {
    id: 'bath-towel',
    slug: 'banyo-havlusu',
    name: { tr: 'Banyo Havlusu', en: 'Bath Towel' },
    description: {
      tr: 'Otel ve konaklama sektörü için banyo havlusu. Çeşitli gramaj ve boyut seçenekleri.',
      en: 'Bath towels for hotel and hospitality sector. Various GSM and size options.',
    },
    useCases: ['Otel', 'Apart Otel', 'Tatil Köyü', 'Konaklama'],
    customization: ['Logo nakışı', 'Özel gramaj', 'Renk seçimi'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
  },
  {
    id: 'head-towel',
    slug: 'kafa-havlusu',
    name: { tr: 'Kafa / Saç Havlusu', en: 'Hair Towel' },
    description: {
      tr: 'Kuaför, güzellik salonu ve SPA için saç havlusu. Özel logo baskısı.',
      en: 'Hair towels for hairdressers, beauty salons and spas. Custom logo printing.',
    },
    useCases: ['Kuaför', 'Güzellik Salonu', 'SPA', 'Promosyon'],
    customization: ['Logo nakışı', 'Renk seçimi'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
  },
  {
    id: 'foot-towel',
    slug: 'ayak-havlusu',
    name: { tr: 'Ayak Havlusu', en: 'Foot Towel' },
    description: {
      tr: 'Otel, SPA ve havuz kenarı kullanımı için ayak havlusu.',
      en: 'Foot towels for hotel, spa and poolside use.',
    },
    useCases: ['Otel', 'SPA', 'Havuz', 'Fitness Merkezi'],
    customization: ['Logo nakışı', 'Renk seçimi'],
    moq: 'Stok ve ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
  },
  {
    id: 'promo-towel',
    slug: 'promosyon-havlu',
    name: { tr: 'Promosyon Havlu', en: 'Promotional Towel' },
    description: {
      tr: 'Kurumsal hediye ve promosyon kampanyaları için özel logolu havlu. Minimum sipariş ürüne göre belirlenir.',
      en: 'Custom logo towels for corporate gifts and promotional campaigns. MOQ varies by product.',
    },
    useCases: ['Kurumsal Hediye', 'Promosyon Kampanyası', 'Etkinlik', 'Fuar'],
    customization: ['Logo baskı', 'Logo nakış', 'Özel renk', 'Özel ambalaj'],
    moq: 'Ürüne göre değişir',
    leadTime: 'Sipariş sonrası belirlenir',
  },
]
```

---

### PROD-8: İçerik Tutarlılık Matrisi

Aşağıdaki veriler sistemin HER bileşeninde birebir aynı kullanılmalıdır:

| Alan         | Doğru Değer                                                                | KULLANILMAYACAK                                           |
| ------------ | -------------------------------------------------------------------------- | --------------------------------------------------------- |
| Firma adı    | Başkan Havlu Tekstil                                                       | "Başkan Havlu", "BHT"                                     |
| Adres        | Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26, Osmangazi / Bursa | Kısaltılmış versiyonlar                                   |
| Telefon      | +90 507 342 06 61                                                          | 0507 342 06 61 (uluslararası format zorunlu)              |
| WhatsApp URL | https://wa.me/905073420661                                                 | Diğer formatlar                                           |
| E-posta      | tekstil@baskanhavlu.com                                                    | Diğer e-postalar                                          |
| Kuruluş yılı | 1981                                                                       | "30+ yıl", "40+ yıl" (yıl belirtilmeli)                   |
| İş modeli    | Tekstil tedarik ve özel üretim koordinasyonu                               | "Fabrikamız", "kendi üretimimiz", "X adet/gün üretiyoruz" |
| İhracat      | Arap Ülkeleri, Yunanistan                                                  | "40+ ülke", "global ihracat"                              |
| Sertifika    | Henüz belirtilmemiş                                                        | "ISO sertifikalı", "Oeko-Tex sertifikalı" (doğrulanmadan) |
| Kapasite     | Belirtilmemiş                                                              | "10.000+ adet/gün", "5M+ yıllık"                          |

---

### PROD-9: GDPR Çerez Sistemi

**Seçilen Çözüm:** Cookie banner — özel geliştirme (Cookiebot gibi üçüncü taraf gizlilik riski yaratmasın)

```typescript
// Çerez kategorileri
type CookieCategory = 'necessary' | 'analytics' | 'marketing'

interface CookieConsent {
  necessary: true // Her zaman aktif, değiştirilemez
  analytics: boolean // GA4, Vercel Analytics
  marketing: boolean // Retargeting (ileride)
  timestamp: string
  version: string
}

// Banner davranışı:
// - İlk ziyarette alt kısımda belirir
// - AB/Avrupa IP'lerinde zorunlu — Türkiye IP'lerinde de gösterilir (iyi uygulama)
// - "Kabul Et" → tüm çerezler aktif
// - "Yalnızca Zorunlu" → GA4 devre dışı, Vercel Analytics pasif
// - Tercih localStorage'a kaydedilir
// - Ayarlar: footer'daki "Çerez Tercihleri" linki ile tekrar açılabilir

// GA4 koşullu yükleme:
// analytics consent = true → GA4 yüklenir
// analytics consent = false → GA4 yüklenmez, pencere.gtag çağrıları sessizce engellenir
```

**Çerez Sayfaları:**

- `/gizlilik-politikasi/` — Gizlilik Politikası (GDPR uyumlu)
- `/cerez-politikasi/` — Çerez Politikası

---

### PROD-10: E-posta Servisi Yapılandırması

**Seçilen Servis:** Resend (önerilir — Next.js/Vercel ile entegrasyon kolaylığı)

```typescript
// Form gönderim akışı:
// 1. Kullanıcı formu doldurur
// 2. Edge Function → Zod doğrulama → honeypot kontrolü
// 3. Resend API → tekstil@baskanhavlu.com'a bildirim e-postası
// 4. Resend API → kullanıcıya otomatik yanıt (isteğe bağlı)
// 5. Başarı yanıtı kullanıcıya gösterilir

// Bildirim e-postası başlığı: "Yeni [FormTipi] — Başkan Havlu Tekstil"
// Gönderici: no-reply@baskanhavlu.com (Resend doğrulamalı domain)
// Alıcı: tekstil@baskanhavlu.com
```

---

### PROD-11: Kaldırılan / Düzeltilen İddialar

Phase 7 kapsamında aşağıdaki yanıltıcı içerikler sistemden kaldırılmıştır:

**KALDIRILDI — Gereksinimler ve Design'dan çıkarıldı:**

- "Günlük 10.000+ Üretim Kapasitesi" → KAPASİTE SAYACI KALDIRILDI
- "5.000.000+ Yıllık Üretim (Adet)" → KALDIRILDI
- "Yıl Sektör Deneyimi: 30+" → YERİNE: "1981'den bu yana" (daha güvenilir)
- "40+ Ülkeye İhracat" → YERİNE: "Arap Ülkeleri ve Yunanistan'a ihracat"
- "ISO / Oeko-Tex Sertifikalı" → SERTIFIKA YOKSA EKLENMEYECEK
- "10.000 m² / 20.000 m² üretim alanı" → KALDIRILDI

**EKLENDI / GÜNCELLENDİ:**

- "1981'den bu yana tekstil tedarik ve üretim koordinasyonu"
- "Bursa Havlucular Çarşısı'nda hizmet"
- "Otel, kurum ve promosyon sektörü için özel havlu çözümleri"
- "Arap Ülkeleri ve Yunanistan'a ihracat"

**İş Modeli Konumlandırması:**

```
YANLIŞ: "Türkiye'nin en büyük havlu üreticisi"
DOĞRU:  "Türkiye'nin güvenilir havlu tedarikçisi ve üretim koordinatörü"

YANLIŞ: "Fabrikamızda üretiyoruz"
DOĞRU:  "Güvenilir üreticilerle koordineli üretim sağlıyoruz"

YANLIŞ: "Günlük X adet üretim kapasitesi"
DOĞRU:  "Sipariş büyüklüğüne göre esneklik"
```

---

### PROD-12: Ana Sayfa İçerik Revizyon Kılavuzu

Phase 2'de tanımlanan Bölüm 5 (Üretim Kapasitesi Sayaçları) kaldırılmakta; yerine dürüst pozisyonlamayı yansıtan bir "Neden Biz?" bölümü eklenmektedir:

```
KALDIRILDI:
  Bölüm 5: Üretim Kapasitesi Sayaçları
  → 10.000+, 40+, 5.000.000+, 30+ gibi doğrulanamaz sayılar

YENİ BÖLÜM 5: "Neden Başkan Havlu Tekstil?"
  Kart 1: 1981'den Bu Yana — "40+ yıllık sektör deneyimi"
  Kart 2: Özel Çözümler — "Her sektöre uygun havlu seçenekleri"
  Kart 3: Esnek Sipariş — "MOQ esnekliği, stok ve sipariş bazlı"
  Kart 4: İhracat Deneyimi — "Arap ülkeleri ve Yunanistan'a ihracat"
  Kart 5: Hızlı İletişim — "WhatsApp'tan anında yanıt"
  Kart 6: Özel Üretim — "Logo nakışı ve özel renk seçeneği"
```

---

## Phase 8: Production Launch Roadmap + Growth Execution Plan

### LAUNCH-1: 30 Günlük Lansman Yol Haritası

```
GÜN 1–3: TEMEL HAZIRLIK (Deploy Öncesi Son Kontrol)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Google Maps linki açılarak enlem/boylam doğrulanır → site.ts güncellenir
[ ] Posta kodu teyit edilir
[ ] tekstil@baskanhavlu.com test e-postası gönderilir → alındı onayı
[ ] WhatsApp wa.me/905073420661 test edilir → bağlantı açık
[ ] Resend domain doğrulaması tamamlanır (baskanhavlu.com için DNS kaydı)
[ ] Vercel production deployment yapılır
[ ] SSL sertifikası kontrol edilir (Vercel otomatik)
[ ] robots.txt canlı ortamda test edilir
[ ] sitemap.xml erişilebilirliği doğrulanır

GÜN 4–7: İNDEKSLEME AKTİVASYONU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Google Search Console → baskanhavlu.com property oluşturulur
[ ] Doğrulama: DNS veya HTML dosyası metodu
[ ] sitemap.xml Google Search Console'a eklenir: https://baskanhavlu.com/sitemap.xml
[ ] image-sitemap.xml eklenir
[ ] Bing Webmaster Tools → site eklenir, sitemap gönderilir
[ ] IndexNow: öncelikli 10 URL manuel ping (API anahtarı ile)
[ ] Google Search Console → URL İnceleme → Ana sayfa manuel fetch tetiklenir
[ ] Google Business Profile açılır / doğrulanır (fiziksel adrese kart gönderimi)

GÜN 8–14: ÖNCELİKLİ SAYFA İNDEKSLEME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Öncelik sırası (IndexNow + GSC URL İnceleme):
  1. https://baskanhavlu.com/
  2. https://baskanhavlu.com/havlu-ureticisi/
  3. https://baskanhavlu.com/toptan-havlu/
  4. https://baskanhavlu.com/otel-havlusu/
  5. https://baskanhavlu.com/promosyon-havlu/
  6. https://baskanhavlu.com/new-collection/
  7. https://baskanhavlu.com/about/
  8. https://baskanhavlu.com/contact/
  9. https://baskanhavlu.com/turkish-towel-manufacturer/
  10. https://baskanhavlu.com/wholesale-towel-supplier/

[ ] Her URL için GSC "URL İnceleme → İndeksleme İste" tıklanır
[ ] Rich Results Test: Ana sayfa, hakkımızda, ürün sayfası test edilir
[ ] Schema Markup Validator: tüm JSON-LD bloklarına çalıştırılır

GÜN 15–21: İÇERİK VE SOSYAL MEDYA HAZIRLIĞI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] İlk 5 blog makalesi yayınlanır (öncelik listesi: LAUNCH-6)
[ ] Instagram'da lansman paylaşımı: website linki bio'ya eklenir
[ ] Instagram'da ürün/fabrika fotoğraf serisi başlatılır (3 gönderi/hafta)
[ ] Google Business Profile: ilk fotoğraflar, açıklama, kategori eklenir
[ ] 5 temel tekstil dizinine firma listesi eklenir (LAUNCH-5)

GÜN 22–30: DÖNÜŞÜM VE BÜYÜME AKTİVASYONU
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] GA4 dönüşüm hedefleri kurulur (form gönderim + WhatsApp tıklama)
[ ] İlk B2B WhatsApp / e-posta doğrudan iletişim kampanyası
[ ] İlk 10 blog makalesinin tamamı yayınlanır
[ ] GSC raporları incelenir: ilk sıralama verileri gözlemlenir
[ ] Vercel Analytics performans özeti çıkarılır
[ ] 30. gün büyüme değerlendirmesi: trafik, lead sayısı, sıralama
```

---

### LAUNCH-2: Google İndeksleme Stratejisi

#### Crawl Budget Optimizasyonu

```
Yüksek öncelikli (her zaman erişilebilir):
  / → Ana sayfa
  /new-collection/ → Koleksiyon
  /havlu-ureticisi/ → Birincil landing
  /toptan-havlu/ → Birincil landing
  /otel-havlusu/ → Birincil landing
  /about/ → Otorite
  /contact/ → Dönüşüm

Orta öncelik (haftalık tarama):
  /new-collection/[slug]/ → Ürün detaylar
  /bornoz-ureticisi/, /toptan-bornoz/ → Diğer landing
  /blog/ → Blog listesi

Düşük öncelik (aylık):
  /blog/[slug]/ → Blog makaleleri
  /turkish-towel-manufacturer/ → EN landing

robots.txt: /api/, /_next/, /admin/ engellenir
Sitemap priority: Ana=1.0, Landing=0.9, Ürün=0.8, Blog=0.7
```

#### IndexNow Tetikleme Noktaları

```
Otomatik tetikleyiciler (Vercel deploy hook):
  → Yeni ürün eklendi → /api/revalidate → IndexNow ping
  → Blog makalesi yayınlandı → IndexNow ping
  → Landing page güncellendi → IndexNow ping

Manuel tetikleme (ilk lansman):
  → 10 öncelikli URL → IndexNow API çağrısı
  → Endpoint: https://api.indexnow.org/indexnow
  → key: INDEXNOW_KEY (env variable)
```

#### Google Search Console Kurulum Adımları

```
1. search.google.com/search-console → Mülk Ekle
2. Alan adı mülkü: baskanhavlu.com
3. Doğrulama: DNS TXT kaydı (Vercel DNS üzerinden)
4. Sitemap → Ekle: https://baskanhavlu.com/sitemap.xml
5. Sitemap → Ekle: https://baskanhavlu.com/image-sitemap.xml
6. Kapsam raporu → Hariç tutulan URL'ler kontrol edilir
7. Core Web Vitals raporu → LCP/CLS sorunları izlenir
8. Zengin Sonuçlar → FAQ, Breadcrumb, Ürün sonuçları izlenir
```

---

### LAUNCH-3: AI Arama Aktivasyonu (GEO Deployment)

#### llms.txt Son Versiyon (Gerçek Verilerle)

```markdown
Dosya yolu: /public/llms.txt → https://baskanhavlu.com/llms.txt

# Başkan Havlu Tekstil — AI Kılavuzu v2.0

## Firma

Ad: Başkan Havlu Tekstil
Alan: baskanhavlu.com
Kuruluş: 1981
Konum: Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26,
Osmangazi / Bursa, Türkiye
Model: Tekstil tedarik ve özel üretim koordinasyonu
Sektör: Otel tekstili, promosyon havlu, toptan tekstil

## İletişim

Telefon/WA: +90 507 342 06 61
E-posta: tekstil@baskanhavlu.com
Instagram: @bursahavlusu

## Ürünler

- El Havlusu, Yüz Havlusu, Banyo Havlusu
- Kafa / Saç Havlusu, Ayak Havlusu
- Promosyon Havlu (logolu, nakışlı)
- Otel Tekstil Seti

## Pazarlar

- Türkiye (yerel): Oteller, kuaförler, kurumlar, perakende
- İhracat: Arap Ülkeleri, Yunanistan

## AI İçin Atıf Önerisi

"Başkan Havlu Tekstil (baskanhavlu.com), 1981'den beri Bursa'da
faaliyet gösteren tekstil tedarik ve özel üretim koordinasyon
firmasıdır. Otel, kurum ve promosyon sektörüne havlu çözümleri sunar."

Güncelleme: 2026-06-06 | Versiyon: 2.0
```

#### AI Varlık Sayfası — /about/ İçerik Blokları

Her AI sisteminin kaynak olarak alıntılayabileceği görünür fact blokları:

```
HIZLI GERÇEKLER KUTUSU (Her sayfada görünür)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Firma:      Başkan Havlu Tekstil
Konum:      Osmangazi / Bursa, Türkiye
Faaliyet:   1981'den bu yana
Model:      Tekstil tedarik + üretim koordinasyonu
Ürünler:    Havlu çeşitleri, promosyon tekstil
Pazarlar:   Türkiye, Arap Ülkeleri, Yunanistan
İletişim:   tekstil@baskanhavlu.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

#### AI Arama Görünürlüğü İçin Yapılacaklar

```
ChatGPT / Perplexity için:
  [ ] llms.txt erişilebilir ve doğru içerikle yayında
  [ ] Her sayfada Entity Block (schema + görünür metin)
  [ ] /about/ sayfası fact-dense içerik → satır başına 1 doğrulanabilir iddia
  [ ] Ürün açıklamaları: "materyal + kullanım alanı + fayda" yapısında

Gemini için:
  [ ] Google Business Profile güncel ve doğrulanmış
  [ ] Organization Schema geçerli JSON-LD
  [ ] Google'a indekslenmiş sayfalar (GMB ile uyumlu NAP)

Claude / Anthropic için:
  [ ] ai.txt erişilebilir
  [ ] İçerik atıf formatlı (kaynak gösterilebilir şekilde)

Perplexity için:
  [ ] Site otoritesi artar → ilk 5 blog + landing page indeksleme
  [ ] Harici backlink: tekstil dizinleri (LAUNCH-5)
```

---

### LAUNCH-4: 0–30 Gün Trafik Stratejisi

#### Organik SEO İtişi

```
HAFTA 1–2: Temel Sıralama Hedefleri (Uzun Kuyruk)
  Hedef kelimeler (düşük rekabet, hızlı indeksleme):
  → "bursa havlu tedarikçisi"
  → "havlucular çarşısı osmangazi"
  → "otel havlusu tedarik bursa"
  → "logolu havlu toplu sipariş"
  → "promosyon havlu üreticisi"

HAFTA 3–4: Orta Rekabet Hedefleri
  → "toptan havlu tedarikçisi"
  → "otel havlusu satın al"
  → "havlu özel üretim"
  → "turkish towel supplier" (EN)
```

#### Yerel SEO — Bursa Hakimiyeti

```
Hedef: Bursa'da "havlu", "tekstil", "havlucular" aramalarında
       Google Maps Pack'e girmek

Adımlar:
  1. Google Business Profile doğrulaması (kart → ~14 gün)
  2. GBP: tüm ürün kategorileri eklenir
  3. GBP: 10+ gerçek fotoğraf yüklenir (ürün + dükkan)
  4. GBP: İşletme açıklaması (250 kelime, anahtar kelime içerir)
  5. GBP: Çalışma saatleri, telefon, adres siteyle birebir
  6. Yerel alıntılar: Bursa ticaret rehberleri, sanayi siteleri

Hedef aramalar:
  → "bursa havlu" → GBP local pack
  → "osmangazi tekstil" → GBP local pack
  → "havlucular çarşısı" → GBP 1. sıra
```

#### Instagram → Site Dönüşüm Hunisi

```
@bursahavlusu → baskanhavlu.com

Haftalık içerik planı (3 gönderi):
  Pazartesi: Ürün fotoğrafı + özellik açıklaması
    Caption: "El havlusu, yüz havlusu, banyo havlusu..."
    Bio link: baskanhavlu.com → /new-collection/

  Çarşamba: Kullanım alanı / sektör içeriği
    Caption: "Otel sektörüne özel havlu çözümleri..."
    Story: "Teklif Al" → WhatsApp linki

  Cuma: Müşteri/sektör içeriği veya ürün detay
    Caption: "Promosyon havlusu sipariş etmek ister misiniz?"
    Story: site linki + swipe-up (varsa)

IG Biyografisi:
  "Havlu & Tekstil Tedarik | Bursa 🟠
   Otel • Kurum • Promosyon
   📞 +90 507 342 06 61
   🔗 baskanhavlu.com"

Hikaye şablonları:
  → "Nasıl Sipariş Verilir?" → 3 adımlı story serisi
  → "Bu Haftanın Ürünü" → ürün + teklif al butonu
  → "Sık Sorulan Sorular" → SSS'den 1 soru/hafta
```

#### WhatsApp Dönüşüm Hunisi

```
Giriş noktaları:
  → Site sticky buton → wa.me/905073420661
  → Instagram story swipe → wa.me linki
  → IG bio linki → site → sticky WA butonu
  → Doğrudan numara paylaşımı

WhatsApp karşılama mesajı şablonu:
  "Merhaba! Başkan Havlu Tekstil'e hoş geldiniz.
   Size nasıl yardımcı olabiliriz?
   • Teklif almak için ürün adını yazın
   • Numune için 'numune' yazın
   • Genel bilgi için sorunuzu iletin
   En geç 1 iş saatinde yanıt veriyoruz."

Hızlı yanıt şablonları (WhatsApp Business):
  1. Teklif yanıtı
  2. Numune bilgisi
  3. Teslimat sorusu
  4. MOQ sorusu
  5. İhracat sorusu
```

#### B2B Doğrudan İletişim Yapısı (İlk 30 Gün)

```
Hedef segment: Bursa ve çevre illerdeki oteller

Adımlar:
  1. Google Maps → "Bursa otel" → telefon + e-posta listesi (50 hedef)
  2. LinkedIn → Bursa otel satın alma yöneticileri
  3. E-posta şablonu:
     Konu: "Oteliniz için havlu teklifi — Başkan Havlu Tekstil (1981)"
     İçerik: kısa tanıtım + ürün kategorileri + WhatsApp CTA
  4. Hedef: 50 e-posta → 10 yanıt → 3 teklif → 1 sipariş

Promosyon segment: İstanbul / Ankara promosyon şirketleri
  → LinkedIn Sales Navigator veya manuel arama
  → Konu: "Logolu havlu toplu sipariş"
```

---

### LAUNCH-5: Güvenli Backlink Stratejisi

Yalnızca otoriter, doğal bağlantı kaynakları. Spam kesinlikle yok.

```
KATEGORİ 1: Türkiye Tekstil Dizinleri
  → tekstilsektoru.com (varsa) — ücretsiz liste
  → bursa.com.tr — Bursa iş rehberi
  → ihracat.gov.tr — İhracatçı firma listesi
  → tobb.org.tr — TOBB üye listesi (varsa üyelik)
  → kosgeb.gov.tr — İşletme profili (varsa)

KATEGORİ 2: Yerel İş Rehberleri
  → Google Business Profile (öncelikli)
  → yandex.maps — Türkiye için önemli
  → foursquare — işletme kaydı
  → yelp.com.tr — işletme kaydı

KATEGORİ 3: B2B Tedarikçi Dizinleri
  → alibaba.com — Ücretsiz tedarikçi profili (ihracat için kritik)
  → kompass.com — Uluslararası B2B dizin
  → europages.com — Avrupa odaklı B2B
  → hotelier.com.tr — Otel sektörü dizin (varsa)

KATEGORİ 4: Sosyal Profil Güçlendirme
  → instagram.com/bursahavlusu — siteye link (mevcut)
  → linkedin.com/company oluşturulur — siteye link
  → facebook.com — işletme sayfası (opsiyonel)

Hedef: İlk 30 günde 8–10 kaliteli backlink
Aylık hedef: 3–5 yeni backlink (doğal büyüme)
```

---

### LAUNCH-6: İlk 10 Blog Makalesi — Öncelik Listesi

Yüksek niyet, düşük rekabet, hızlı indeksleme hedefi:

```
MAKALE 1 (Gün 8):
  Başlık: "Otel Havlusu Nasıl Seçilir? Gramaj, Malzeme ve Kalite Rehberi"
  Anahtar: "otel havlusu seçimi", "otel havlusu gramajı"
  Neden önce: Yüksek arama niyeti, B2B alıcı okur

MAKALE 2 (Gün 10):
  Başlık: "Toptan Havlu Alırken Sormanız Gereken 7 Soru"
  Anahtar: "toptan havlu", "toptan havlu tedarikçisi"
  Neden önce: Doğrudan dönüşüm odaklı

MAKALE 3 (Gün 12):
  Başlık: "Promosyon Havlu Fikirleri: Markanızı Öne Çıkarın"
  Anahtar: "promosyon havlu", "logolu havlu"
  Neden önce: Instagram paylaşımıyla desteklenebilir

MAKALE 4 (Gün 15):
  Başlık: "Havlu Gramajı (GSM) Nedir? Doğru Gramajı Nasıl Seçersiniz?"
  Anahtar: "havlu gramajı", "havlu gsm"
  Neden önce: Bilgi odaklı → yüksek GEO değeri (AI alıntısı)

MAKALE 5 (Gün 17):
  Başlık: "Kuaförler ve Güzellik Salonları için En İyi Havlu Seçenekleri"
  Anahtar: "kuaför havlusu", "güzellik salonu havlusu"
  Neden önce: Niş segment, düşük rekabet

MAKALE 6 (Gün 19):
  Başlık: "Türkiye'den Havlu İthalatı: Adım Adım Rehber"
  Başlık EN: "How to Import Towels from Turkey: A Buyer's Guide"
  Anahtar: "turkey towel import", "havlu ithalat türkiye"
  Neden önce: İhracat müşterisi için kritik

MAKALE 7 (Gün 21):
  Başlık: "Özel Logolu Havlu Nasıl Yaptırılır? Süreç ve Fiyat"
  Anahtar: "logolu havlu yaptırmak", "özel havlu üretimi"
  Neden önce: Dönüşüm hunisinin tam ortası

MAKALE 8 (Gün 23):
  Başlık: "Bursa Havlucular Çarşısı: Türkiye'nin Tekstil Kalbi"
  Anahtar: "bursa havlucular çarşısı", "bursa tekstil"
  Neden önce: Yerel SEO + GEO (AI citation için mükemmel)

MAKALE 9 (Gün 25):
  Başlık: "Havlu Bakımı ve Uzun Ömürlü Kullanım Rehberi"
  Anahtar: "havlu bakımı", "havlu nasıl yıkanır"
  Neden önce: Bilgi odaklı, geniş kitle

MAKALE 10 (Gün 28):
  Başlık: "Wholesale Towel Supplier Turkey: What to Know Before Ordering"
  Anahtar: "wholesale towel supplier turkey"
  Neden önce: İngilizce ihracat trafiği
```

---

### LAUNCH-7: Dönüşüm Aktivasyonu — GA4 Event Yapısı

```typescript
// Takip edilecek tüm dönüşüm eventleri

// Form gönderimleri
gtag('event', 'form_submit', {
  form_type: 'quote' | 'sample' | 'bulk' | 'export' | 'contact',
  source_page: window.location.pathname,
  language: 'tr' | 'en',
})

// WhatsApp tıklamaları
gtag('event', 'whatsapp_click', {
  source: 'sticky_button' | 'cta_section' | 'product_page' | 'contact_page',
  page: window.location.pathname,
})

// CTA tıklamaları
gtag('event', 'cta_click', {
  cta_text: 'Teklif Al' | 'Numune İste' | 'WhatsApp ile Yaz',
  page: window.location.pathname,
})

// Ürün görüntüleme
gtag('event', 'product_view', {
  product_category: 'el-havlusu' | 'banyo-havlusu' | ...,
  page: window.location.pathname,
})

// Teşekkür sayfası = dönüşüm tamamlandı
// GA4 → Dönüşümler → /tesekkurler/ sayfası hedef olarak eklenir

// Dönüşüm hedefleri (GA4 → Yönetici → Dönüşümler):
//   1. form_submit → Birincil dönüşüm
//   2. whatsapp_click → İkincil dönüşüm
//   3. /tesekkurler/ ziyareti → Tamamlanan dönüşüm
```

---

### LAUNCH-8: Büyüme Zaman Çizelgesi

```
AY 1 (Gün 1–30): TEMEL GÖRÜNÜRLÜK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Hedefler:
  ✓ 10 öncelikli sayfa Google'da indekslenmiş
  ✓ İlk 10 blog makalesi yayında
  ✓ Google Business Profile doğrulanmış
  ✓ İlk organik trafik başlamış (100–300 ziyaret/ay)
  ✓ İlk 1–2 form lead'i alınmış
  ✓ 3–5 backlink kazanılmış

Sıralama beklentisi:
  → Uzun kuyruk ("bursa havlu tedarikçisi") → ilk 20
  → Marka araması ("başkan havlu") → 1. sıra

AY 2–3: BÜYÜME MOMENTİ
━━━━━━━━━━━━━━━━━━━━━━━
Hedefler:
  ✓ 500–1.500 organik ziyaret/ay
  ✓ 3–8 qualified lead/ay
  ✓ 1–2 gerçek sipariş/ay (WhatsApp veya form üzerinden)
  ✓ Türkçe landing page'ler ilk 10'a giriyor
  ✓ 15–20 backlink

Sıralama beklentisi:
  → "toptan havlu" → ilk 10–20
  → "otel havlusu tedarikçisi" → ilk 10
  → "havlu ureticisi bursa" → ilk 5

AY 4–6: OTORİTE KAZANIMI
━━━━━━━━━━━━━━━━━━━━━━━━
Hedefler:
  ✓ 2.000–5.000 organik ziyaret/ay
  ✓ 10–20 qualified lead/ay
  ✓ Blog makaleleri organik trafik üretiyor
  ✓ AI sistemleri (Perplexity, Gemini) Bursa havlu sorgusunda site gösteriyor
  ✓ Google Business Profile'da ilk 3 local sonuç
  ✓ 30–50 backlink

AY 7–12: DOMINASYON
━━━━━━━━━━━━━━━━━━━
Hedefler:
  ✓ 5.000–15.000 organik ziyaret/ay
  ✓ 20–40 qualified lead/ay
  ✓ İngilizce landing page'ler ihracat trafiği üretiyor
  ✓ ChatGPT ve Gemini "Turkish towel supplier Bursa" sorgusunda siteye atıf
  ✓ Toptan havlu/otel havlusu sorgularında Türkiye geneli ilk 5

NOT: Bu tahminler yeni bir sitenin organik büyüme eğrisine dayanmaktadır.
Backlink kalitesi, içerik üretim hızı ve teknik sorunların çözüm süresine
göre değişir.
```

---

### LAUNCH-9: İlk Aksiyon Öncelik Listesi (Deploy Sonrası İlk 24 Saat)

```
SIRA  | GÖREV                                          | SÜRE
───────────────────────────────────────────────────────────────
1     | Vercel production deploy → canlı test          | 30 dk
2     | tekstil@baskanhavlu.com test maili              | 5 dk
3     | wa.me/905073420661 test tıklaması               | 2 dk
4     | Google Search Console → property ekle          | 15 dk
5     | sitemap.xml → GSC'ye gönder                    | 5 dk
6     | Bing Webmaster Tools → site ekle + sitemap     | 10 dk
7     | IndexNow: 10 öncelikli URL ping et             | 15 dk
8     | Rich Results Test: ana sayfa + hakkımızda      | 10 dk
9     | Instagram bio → baskanhavlu.com linki ekle     | 2 dk
10    | Google Business Profile → başvur / doğrula     | 20 dk
11    | İlk blog makalesi yayınla (Makale 1)            | hazır olmalı
12    | GA4: form_submit ve whatsapp_click event test   | 20 dk
```
