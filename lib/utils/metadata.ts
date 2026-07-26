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

  return {
    title: input.title,
    description,
    ...(input.keywords && { keywords: input.keywords }),
    alternates: {
      canonical: url,
      languages: {
        tr: locale === 'tr' ? url : `${SITE_CONFIG.url}${input.path}`,
        en: locale === 'en' ? url : `${SITE_CONFIG.url}/en${input.path}`,
        'x-default': url,
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
    robots: {
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
