import { SITE_CONFIG } from '@/lib/config/site'

/**
 * WebSite Schema — ana sayfaya eklenir.
 * SearchAction kaldırıldı: site içi arama bileşeni olmadığından
 * Google Search Console uyarısı önlemek için dahil edilmedi.
 */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.seo.defaultDescription,
    inLanguage: ['tr', 'en'],
    publisher: {
      '@type': 'Organization',
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
