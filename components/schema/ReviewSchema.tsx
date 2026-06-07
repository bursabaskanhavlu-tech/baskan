import { SITE_CONFIG } from '@/lib/config/site'

interface ReviewItem {
  reviewBody: string
  authorName: string
  ratingValue?: number
}

interface ReviewSchemaProps {
  reviews: ReviewItem[]
}

export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    review: reviews.map((r) => ({
      '@type': 'Review',
      reviewBody: r.reviewBody,
      author: { '@type': 'Person', name: r.authorName },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.ratingValue ?? 5,
        bestRating: 5,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
