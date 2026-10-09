import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/config/site'

interface PageMetadataInput {
  title: string
  description?: string
  path: string
  image?: string
  locale?: 'tr' | 'en'
  type?: 'website' | 'article'
  keywords?: string[]
  datePublished?: string
  /**
   * Bu sayfanın gerçek karşı-dil eşleniğinin path'i (ör. TR '/havlu-ureticisi'
   * için '/en/turkish-towel-manufacturer'). Eşleşmeler lib/config/locale-routes.ts
   * ile tutarlı tutulur. Verilmezse o dil için hreflang eklenmez (var olmayan
   * bir sayfaya link vermektense).
   */
  alternatePath?: string
  /**
   * true ise sayfa arama motorlarından hariç tutulur (`noindex, nofollow`).
   * Yalnızca doğrudan link/QR ile paylaşılan, SEO değeri olmayan yardımcı
   * sayfalar için kullanılır (ör. /yorum) — varsayılan davranış (index: true)
   * tüm sayfalar için korunur.
   */
  noIndex?: boolean
}

/**
 * Tüm sayfalar için standart metadata üretir.
 * Open Graph, Twitter Card, canonical ve hreflang dahildir.
 */
export function generatePageMetadata(input: PageMetadataInput): Metadata {
  const url = `${SITE_CONFIG.url}${input.path}`
  const description = input.description ?? SITE_CONFIG.seo.defaultDescription
  // Açık bir görsel verilmemişse, sayfa başlığını içeren markalı bir OG görseli
  // dinamik olarak üretilir (bkz. app/og/route.tsx). Statik logo (SITE_CONFIG.seo.ogImage)
  // kaldırılmadı; `image` parametresiyle açıkça istenirse hâlâ kullanılabilir.
  const image = input.image ?? `${SITE_CONFIG.url}/og?title=${encodeURIComponent(input.title)}`
  const locale = input.locale ?? 'tr'
  const alternateUrl = input.alternatePath ? `${SITE_CONFIG.url}${input.alternatePath}` : undefined

  // Başlık marka adını zaten içeriyorsa layout'taki `%s | Marka` şablonu
  // uygulanmaz (aksi halde "… | Başkan Havlu Tekstil | Başkan Havlu Tekstil"
  // oluşuyordu). Marka içermeyen başlıklar (ör. blog yazıları) şablonla
  // tamamlanmaya devam eder.
  const title = input.title.includes(SITE_CONFIG.name) ? { absolute: input.title } : input.title

  return {
    title,
    description,
    ...(input.keywords && { keywords: input.keywords }),
    alternates: {
      canonical: url,
      languages: {
        [locale]: url,
        ...(alternateUrl && { [locale === 'tr' ? 'en' : 'tr']: alternateUrl }),
        'x-default': locale === 'tr' ? url : (alternateUrl ?? url),
      },
    },
    openGraph: {
      title: input.title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: input.title,
          type: 'image/png',
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'tr_TR',
      type: input.type ?? 'website',
      ...(input.type === 'article' &&
        input.datePublished && {
          publishedTime: input.datePublished,
          authors: [SITE_CONFIG.url],
          section: 'Tekstil',
        }),
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description,
      images: [image],
      site: '@bursahavlusu',
    },
    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  }
}

/**
 * Kök layout metadata'sı — TR ve EN kök layout'ları tarafından paylaşılır.
 * Favicon / apple-touch-icon dosya kuralıyla (app/icon.png, app/apple-icon.png)
 * sağlanır.
 */
export function rootMetadata(locale: 'tr' | 'en'): Metadata {
  const en = locale === 'en'
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: en
        ? `${SITE_CONFIG.name} | Towel and Bathrobe Manufacturer, Bursa`
        : `${SITE_CONFIG.name} | Havlu ve Bornoz İmalatçısı, Bursa`,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: en ? SITE_CONFIG.description.en : SITE_CONFIG.seo.defaultDescription,
    keywords: [
      'havlu imalatçısı',
      'toptan havlu',
      'otel havlusu',
      'bornoz imalatçısı',
      'promosyon havlu',
      'havlu üreticisi',
      'Bursa havlu',
      'Turkish towel manufacturer',
      'wholesale towel Turkey',
    ],
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    formatDetection: { telephone: true, email: true, address: true },
    openGraph: {
      type: 'website',
      locale: en ? 'en_US' : 'tr_TR',
      siteName: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@bursahavlusu',
    },
    ...(process.env['NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION'] && {
      verification: {
        google: process.env['NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION'],
      },
    }),
    // Bing Webmaster doğrulaması
    ...(process.env['NEXT_PUBLIC_BING_SITE_VERIFICATION'] && {
      other: { 'msvalidate.01': process.env['NEXT_PUBLIC_BING_SITE_VERIFICATION'] },
    }),
  }
}
