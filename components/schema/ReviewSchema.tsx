import { SITE_CONFIG } from '@/lib/config/site'

interface ReviewItem {
  reviewBody: string
  authorName: string
  /** Yalnızca gerçek puan biliniyorsa verilir; bilinmiyorsa uydurulmaz (AGENTS.md §14.2). */
  ratingValue?: number
}

interface ReviewSchemaProps {
  reviews: ReviewItem[]
}

/**
 * Yorumlar, sitenin tek Organization varlığına (`/#organization`) bağlanır —
 * ayrı, @id'siz ikinci bir Organization beyanı üretilmez. Yorum metinleri
 * sayfada görünür olarak da yer alır (components/organisms/ReviewsSection.tsx).
 */
export function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    review: reviews.map((r) => ({
      '@type': 'Review',
      reviewBody: r.reviewBody,
      author: { '@type': 'Person', name: r.authorName },
      ...(r.ratingValue !== undefined && {
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.ratingValue,
          bestRating: 5,
        },
      }),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
