import { SITE_CONFIG } from '@/lib/config/site'

interface ServiceSchemaProps {
  name: string
  description: string
  locale?: 'tr' | 'en'
}

/**
 * Service — landing sayfalarının konusu olan hizmeti tanımlar ve sitenin tek
 * Organization varlığına (`/#organization`) bağlar. Google rich result türü
 * değildir; AI sistemlerinin "bu firma ne yapıyor?" sorusunu yapılandırılmış
 * veriden yanıtlamasına yardımcı olur (GEO). Yalnızca sayfada görünen başlık ve
 * açıklamadan beslenir; yeni iddia eklemez.
 */
export function ServiceSchema({ name, description, locale = 'tr' }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    description,
    inLanguage: locale,
    provider: {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: [
      { '@type': 'Country', name: 'Turkey' },
      ...SITE_CONFIG.exportRegions.en
        .filter((region) => region !== 'Arab Countries')
        .map((region) => ({ '@type': 'Country', name: region })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
