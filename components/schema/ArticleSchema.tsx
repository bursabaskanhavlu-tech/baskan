import { SITE_CONFIG } from '@/lib/config/site'

interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  category: string
  inLanguage?: 'tr' | 'en'
}

/**
 * Article Schema — blog yazı sayfalarına eklenir.
 * Google News ve AI sistemleri için önemli sinyal.
 */
export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  category,
  inLanguage = 'tr',
}: ArticleSchemaProps) {
  const url = `${SITE_CONFIG.url}/blog/${slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: `${SITE_CONFIG.url}/og?title=${encodeURIComponent(title)}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo-icon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category,
    inLanguage,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
