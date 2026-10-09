import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { getDictionary, contactHref, whatsappHref, type Locale } from '@/lib/i18n'
import { ArrowIcon, WhatsAppIcon } from '@/components/atoms/Icons'
import { TowelArt } from '@/components/atoms/TowelArt'
import { Magnetic, Spotlight } from '@/components/effects/Interactive'

interface CTABandProps {
  locale?: Locale
}

/** Sayfa sonu teklif çağrısı — koyu zemin, imleci izleyen ışık, mıknatıslı butonlar. */
export function CTABand({ locale = 'tr' }: CTABandProps) {
  const t = getDictionary(locale).cta
  const en = locale === 'en'

  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <Spotlight className="on-dark overflow-hidden rounded-[2rem] bg-ink text-paper sm:rounded-[2.5rem]">
        <div className="container-x relative z-10 grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end">
          <TowelArt
            variant="roll"
            tone="clay"
            accent="cream"
            className="pointer-events-none absolute -right-16 -top-16 hidden h-80 w-80 opacity-80 md:block"
          />
          <div className="reveal relative lg:col-span-7">
            <h2 className="display-xl text-paper">
              {t.title.split(' ').slice(0, -1).join(' ')}{' '}
              <em className="text-orange-500">{t.title.split(' ').slice(-1)}</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-300">{t.text}</p>
          </div>
          <div className="reveal relative flex flex-col gap-6 lg:col-span-5 lg:items-end">
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:justify-end">
              <Magnetic className="w-full sm:w-auto">
                <Link href={contactHref(locale)} className="btn btn-primary w-full">
                  {t.primary}
                  <ArrowIcon />
                </Link>
              </Magnetic>
              <Magnetic className="w-full sm:w-auto">
                <a
                  href={whatsappHref(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full"
                >
                  <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                  {t.whatsapp}
                </a>
              </Magnetic>
            </div>
            <a
              href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
              className="inline-flex min-h-11 items-center gap-1 text-sm text-charcoal-300 transition-colors hover:text-paper"
            >
              {en ? 'or call' : 'ya da arayın'}{' '}
              <span className="link-line-static font-semibold text-paper">
                {SITE_CONFIG.contact.phone}
              </span>
            </a>
          </div>
        </div>
      </Spotlight>
    </section>
  )
}
