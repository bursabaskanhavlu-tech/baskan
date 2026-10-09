import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/config/site'
import { EntityBlock } from '@/components/schema/EntityBlock'
import { CookiePreferencesButton } from '@/components/organisms/CookiePreferencesButton'
import { ArrowIcon, InstagramIcon } from '@/components/atoms/Icons'
import { getDictionary, type Locale } from '@/lib/i18n'

const trProducts = [
  { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
  { label: 'Toptan Havlu', href: '/toptan-havlu' },
  { label: 'Otel Havlusu', href: '/otel-havlusu' },
  { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
  { label: 'Nakışlı Havlu', href: '/nakisli-havlu' },
  { label: 'Bornoz Üreticisi', href: '/bornoz-ureticisi' },
  { label: 'Toptan Bornoz', href: '/toptan-bornoz' },
  { label: 'Otel Bornozu', href: '/otel-bornozu' },
]

const enProducts = [
  { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Hotel Towels', href: '/en/hotel-towels' },
  { label: 'Promotional Towels', href: '/en/promotional-towels' },
  { label: 'Embroidered Towels', href: '/en/embroidered-towels' },
  { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
  { label: 'Wholesale Bathrobes', href: '/en/wholesale-bathrobes' },
  { label: 'Hotel Bathrobes', href: '/en/hotel-bathrobes' },
]

const trQuick = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Koleksiyon', href: '/new-collection' },
  { label: 'Hakkımızda', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/contact' },
]

const enQuick = [
  { label: 'Home', href: '/en' },
  { label: 'Collection', href: '/new-collection' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
  { label: 'Türkçe', href: '/' },
]

/** Sağdaki üçüncü sütun: TR'de İngilizce export sayfaları, EN'de Türkçe sayfalar. */
const trExport = [
  { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
]

const columnLink =
  'link-line inline-block py-1 text-[0.9375rem] text-charcoal-300 transition-colors hover:text-paper'

export function Footer({ locale = 'tr' }: { locale?: Locale }) {
  const t = getDictionary(locale)
  const en = locale === 'en'
  const products = en ? enProducts : trProducts
  const quick = en ? enQuick : trQuick

  return (
    <>
      <EntityBlock locale={locale} />
      <footer className="on-dark bg-ink text-paper">
        {/* Kapanış cümlesi */}
        <div className="container-x border-b border-line-dark py-16 sm:py-24">
          <p className="display-lg reveal max-w-5xl text-paper">{t.footer.statement}</p>
        </div>

        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:grid-cols-4 lg:grid-cols-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <Link href={en ? '/en' : '/'} className="inline-block" aria-label={SITE_CONFIG.name}>
              <Image
                src="/images/logo-text-cropped.png"
                alt={SITE_CONFIG.name}
                width={766}
                height={407}
                sizes="150px"
                className="h-auto w-[150px] brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-charcoal-300">
              {en ? SITE_CONFIG.description.en : SITE_CONFIG.description.tr}
            </p>
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 text-[0.9375rem] text-paper transition-colors hover:text-orange-400"
            >
              <InstagramIcon className="h-5 w-5" />
              @bursahavlusu
            </a>
          </div>

          <nav aria-label={t.footer.quickLinks} className="lg:col-span-2">
            <h2 className="text-caption font-semibold text-paper">{t.footer.quickLinks}</h2>
            <ul className="mt-5 space-y-1.5">
              {quick.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className={columnLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.products} className="lg:col-span-3">
            <h2 className="text-caption font-semibold text-paper">{t.footer.products}</h2>
            <ul className="mt-5 space-y-1.5">
              {products.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={columnLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {!en && (
              <>
                <h2 className="mt-10 text-caption font-semibold text-paper">{t.footer.export}</h2>
                <ul className="mt-5 space-y-1.5">
                  {trExport.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} hrefLang="en" className={columnLink}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </nav>

          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <h2 className="text-caption font-semibold text-paper">{t.footer.contact}</h2>
            <address className="mt-5 space-y-4 text-[0.9375rem] not-italic leading-relaxed text-charcoal-300">
              <p>{SITE_CONFIG.address.fullDisplay}</p>
              <p>
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                  className="link-line transition-colors hover:text-paper"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
                <br />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="link-line transition-colors hover:text-paper"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
              <p>
                {t.footer.hours.map((h) => (
                  <span key={h} className="block">
                    {h}
                  </span>
                ))}
              </p>
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-paper transition-colors hover:text-orange-400"
              >
                {t.common.viewMap}
                <ArrowIcon />
              </a>
            </address>
          </div>
        </div>

        <div className="container-x flex flex-col gap-4 border-t border-line-dark py-7 text-caption text-charcoal-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/gizlilik-politikasi"
              className="link-line py-1 transition-colors hover:text-paper"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href="/cerez-politikasi"
              className="link-line py-1 transition-colors hover:text-paper"
            >
              {t.footer.cookies}
            </Link>
            <CookiePreferencesButton label={t.footer.cookiePrefs} />
            <a
              href="https://hayb.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="link-line py-1 font-semibold tracking-[0.18em] transition-colors hover:text-paper"
            >
              HAYB
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
