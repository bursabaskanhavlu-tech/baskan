import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { getDictionary, contactHref, whatsappHref, type Locale } from '@/lib/i18n'
import { ArrowIcon, WhatsAppIcon } from '@/components/atoms/Icons'

interface CTABandProps {
  locale?: Locale
}

/** Sayfa sonu teklif çağrısı — turuncu zemin, koyu metin (yüksek kontrast). */
export function CTABand({ locale = 'tr' }: CTABandProps) {
  const t = getDictionary(locale).cta
  const en = locale === 'en'

  return (
    <section className="bg-orange-500 text-ink">
      <div className="container-x grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
        <div className="reveal lg:col-span-7">
          <h2 className="display-lg">{t.title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">{t.text}</p>
        </div>
        <div className="reveal flex flex-col gap-6 lg:col-span-5 lg:items-end">
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href={contactHref(locale)} className="btn btn-dark">
              {t.primary}
              <ArrowIcon />
            </Link>
            <a
              href={whatsappHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.whatsapp}
            </a>
          </div>
          <a
            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
            className="inline-flex min-h-11 items-center gap-1 text-sm text-ink/75 transition-colors hover:text-ink"
          >
            {en ? 'or call' : 'ya da arayın'}{' '}
            <span className="link-line-static font-semibold text-ink">
              {SITE_CONFIG.contact.phone}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
