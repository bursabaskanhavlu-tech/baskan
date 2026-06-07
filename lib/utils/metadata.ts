import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/config/site'

interface PageMetadataInput {
  title: string
  description?: string
  path: string
  image?: string
  locale?: 'tr' | 'en'
  type?: 'website' | 'article'
}

export function generatePageMetadata(input: PageMetadataInput): Metadata {
  const url = `${SITE_CONFIG.url}${input.path}`
  const description = input.description ?? SITE_CONFIG.seo.defaultDescription
  const image = input.image ?? SITE_CONFIG.seo.ogImage

  return {
    title: input.title,
    description,
    alternates: {
      canonical: url,
      languages: {
        tr: `${SITE_CONFIG.url}${input.path}`,
        en: `${SITE_CONFIG.url}/en${input.path}`,
      },
    },
    openGraph: {
      title: input.title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      locale: input.locale === 'en' ? 'en_US' : 'tr_TR',
      type: input.type ?? 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  }
}
