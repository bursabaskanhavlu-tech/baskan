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
   * Bu sayfanın gerçek karşı-dil eşleniğinin path'i (ör. TR sayfası için
   * '/turkish-towel-manufacturer', EN sayfası için '/toptan-havlu').
   * Projede gerçek /en/ prefix routing yoktur (bkz. AGENTS.md §3.1, §26) —
   * bu yüzden karşı dil linki asla `/en${path}` formülüyle üretilmez, yalnızca
   * burada açıkça verilen gerçek bir sayfaya işaret eder. Verilmezse o dil
   * için hreflang eklenmez (var olmayan bir sayfaya link vermektense).
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

  return {
    title: input.title,
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
