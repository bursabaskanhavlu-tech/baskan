import { SITE_CONFIG } from '@/lib/config/site'
import { CUSTOMER_REVIEWS, type CustomerReview } from '@/content/reviews'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { GoogleReviewsWidget } from '@/components/organisms/GoogleReviewsWidget'
import { ArrowUpRightIcon } from '@/components/atoms/Icons'

function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col justify-between rounded-[1.75rem] border border-line bg-white p-7 sm:w-[26rem] sm:p-8">
      <blockquote>
        <p className="text-[1.0625rem] leading-relaxed text-charcoal-700">“{review.reviewBody}”</p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5 text-sm">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-display text-lg text-ink">
          {review.authorName.charAt(0)}
        </span>
        <span className="font-semibold">{review.authorName}</span>
        <span className="ml-auto text-charcoal-600">Google</span>
      </figcaption>
    </figure>
  )
}

/**
 * Google'daki gerçek müşteri yorumları — zıt yönlerde süzülen iki şerit
 * (saf CSS, üzerine gelince durur). Tüm yorumlar HTML'de bir kez yer alır;
 * döngü için kopyalanan ikinci set ekran okuyuculardan gizlidir.
 */
export function ReviewsSection() {
  const rowA = CUSTOMER_REVIEWS
  const rowB = [...CUSTOMER_REVIEWS].reverse()

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="container-x">
        <SectionHeader
          kicker="Müşteri Yorumları"
          title="Google'daki yorumlarımız"
          text="Mağazamızdan alışveriş yapan ve toplu sipariş veren müşterilerimizin Google İşletme Profilimizdeki değerlendirmeleri."
          action={
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                Google&apos;da görüntüle
                <ArrowUpRightIcon />
              </a>
              <a
                href={SITE_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-sm"
              >
                Yorum yazın
              </a>
            </div>
          }
        />
      </div>

      <div className="mt-14 flex flex-col gap-4 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <div className="drift flex w-max gap-4">
          {rowA.map((r) => (
            <ReviewCard key={`a-${r.authorName}`} review={r} />
          ))}
          <div className="flex gap-4" aria-hidden="true">
            {rowA.map((r) => (
              <ReviewCard key={`a2-${r.authorName}`} review={r} />
            ))}
          </div>
        </div>
        <div className="drift flex w-max gap-4 [animation-direction:reverse]" aria-hidden="true">
          {[...rowB, ...rowB].map((r, i) => (
            <ReviewCard key={`b-${r.authorName}-${i}`} review={r} />
          ))}
        </div>
      </div>

      <div className="container-x mt-10">
        <GoogleReviewsWidget />
      </div>
    </section>
  )
}
