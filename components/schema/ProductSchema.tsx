import { SITE_CONFIG } from '@/lib/config/site'

interface ProductSchemaProps {
  name: string
  description: string
  image: string
  url: string
  category?: string
}

export function ProductSchema({ name, description, image, url, category }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    url,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    category: category ?? 'Tekstil / Havlu',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
      description: 'Fiyat için iletişime geçin — toplu sipariş fiyatlandırması',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
