import { SITE_CONFIG } from '@/lib/config/site'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    foundingDate: String(SITE_CONFIG.founded),
    description: SITE_CONFIG.description.tr,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.streetAddress,
      addressLocality: SITE_CONFIG.address.addressLocality,
      addressRegion: SITE_CONFIG.address.addressRegion,
      addressCountry: SITE_CONFIG.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'Arabic', 'English'],
    },
    email: SITE_CONFIG.contact.email,
    telephone: SITE_CONFIG.contact.phone,
    sameAs: [SITE_CONFIG.social.instagram],
    areaServed: ['TR', 'GR', 'SA', 'AE', 'KW', 'QA', 'BH'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
