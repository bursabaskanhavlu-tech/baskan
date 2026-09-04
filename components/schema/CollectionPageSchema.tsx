interface CollectionItem {
  name: string
  url: string
}

interface CollectionPageSchemaProps {
  name: string
  description: string
  url: string
  items: CollectionItem[]
}

/**
 * CollectionPage + ItemList Schema — ürün koleksiyon/listeleme sayfalarına eklenir.
 * requirements.md Requirement 19.5 ile uyumlu.
 */
export function CollectionPageSchema({ name, description, url, items }: CollectionPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: item.url,
      })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
