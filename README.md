# Başkan Havlu Tekstil — baskanhavlu.com

Bursa Havlucular Çarşısı'nda 1996'dan bu yana havlu ve bornoz imalatı yapan Başkan Havlu
Tekstil'in kurumsal web sitesi. Toptan, özel üretim, ihracat ve mağazada perakende satış.

## Teknoloji Yığını

- **Framework:** Next.js 16.4 (App Router, statik üretim) + React 19
- **Dil:** TypeScript (strict mode)
- **Stil:** Tailwind CSS v4 (CSS-first, `app/globals.css`)
- **Animasyon:** Saf CSS + Lenis akıcı kaydırma, kumaş perdesi açılışı, sayfa geçişleri
- **Formlar:** Yalnızca WhatsApp'a hazır mesaj (sunucuya veri gönderilmez)
- **Analitik:** GA4 (çerez onayı sonrası koşullu yüklenir)
- **Deploy:** Netlify (`@netlify/plugin-nextjs`)

## Başlangıç

```bash
npm install
cp .env.example .env.local
npm run dev
```

Değişiklik sonrası zorunlu kontroller (bkz. `AGENTS.md` §19):

```bash
npm run type-check && npm run lint && npm run format:check && npm run build
```

## Proje Yapısı

```
app/(tr)/      → Türkçe sayfalar (kök layout, lang="tr")
app/(en)/en/   → İngilizce sayfalar (/en/..., kök layout, lang="en")
components/    → atoms / molecules / organisms / templates / views / layout / schema
content/       → Ürün, blog, ana sayfa, hakkımızda, yorum ve fotoğraf yuvası verileri
lib/           → SITE_CONFIG, i18n, metadata, fontlar, yardımcılar
public/        → llms.txt, ai.txt, logolar, fotoğraflar
```

## Fotoğraf Ekleme

Sitedeki tüm görsel alanları `content/media.ts` içindeki **fotoğraf yuvalarına** bağlıdır.
Yuva boşken marka renklerinde havlu dokusu gösterilir.

1. Fotoğrafı `public/images/photos/` klasörüne koyun (JPG/WebP, en az 1600 px genişlik).
2. `content/media.ts` içinde ilgili yuvayı doldurun:
   ```ts
   hero: { src: '/images/photos/hero.jpg', alt: 'Otel havlusu stoğu, Başkan Havlu mağazası' },
   ```
3. Yalnızca firmaya ait fotoğraflar kullanılır (kendi çekiminiz veya @bursahavlusu Instagram
   hesabınız). Stok veya başka firmaya ait görsel kullanılmaz.

## Proje Kuralları

Tüm geliştirme kuralları `AGENTS.md` dosyasındadır (SEO/GEO koruma, marka paleti, içerik
doğrulanabilirliği, hareket sistemi).

## İletişim

**Başkan Havlu Tekstil**
Ulucamii Batısı Köfüncüler Sk. Havlucular Çarşısı No:26, Osmangazi / Bursa
+90 507 342 06 61 | tekstil@baskanhavlu.com
