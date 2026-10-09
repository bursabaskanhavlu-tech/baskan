import { SITE_CONFIG } from '@/lib/config/site'
import { CUSTOMER_REVIEWS } from '@/content/reviews'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { GoogleReviewsWidget } from '@/components/organisms/GoogleReviewsWidget'
import { ArrowUpRightIcon } from '@/components/atoms/Icons'

/** Google'daki gerçek müşteri yorumları — mobilde kaydırmalı ray, masaüstünde ızgara. */
export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28">
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

        <ul className="rail mt-14 lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-3 lg:overflow-visible">
          {CUSTOMER_REVIEWS.map((review, i) => (
            <li
              key={review.authorName}
              className={`reveal flex flex-col justify-between border border-line bg-white p-7 sm:p-8 ${i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
            >
              <blockquote>
                <p
                  className={
                    i === 0
                      ? 'text-[1.0625rem] leading-relaxed text-charcoal-700 lg:font-display lg:text-[2rem] lg:leading-snug lg:text-ink'
                      : 'text-[1.0625rem] leading-relaxed text-charcoal-700'
                  }
                >
                  “{review.reviewBody}”
                </p>
              </blockquote>
              <p className="mt-8 flex items-center justify-between border-t border-line pt-5 text-sm">
                <span className="font-semibold">{review.authorName}</span>
                <span className="text-charcoal-600">Google</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <GoogleReviewsWidget />
        </div>
      </div>
    </section>
  )
}
