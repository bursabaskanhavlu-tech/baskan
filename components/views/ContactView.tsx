import { SITE_CONFIG } from '@/lib/config/site'
import { PageHero } from '@/components/molecules/PageHero'
import { ContactForm } from '@/components/organisms/ContactForm'
import { MediaFrame } from '@/components/atoms/MediaFrame'
import { ArrowUpRightIcon, InstagramIcon, WhatsAppIcon } from '@/components/atoms/Icons'
import { getDictionary, homeHref, whatsappHref, type Locale } from '@/lib/i18n'

const copy = {
  tr: {
    crumb: 'İletişim',
    kicker: 'Teklif · Numune · Mağaza',
    title: 'İletişime Geçin',
    lead: 'En geç 24 saatte yanıt veriyoruz. Formu doldurun, bilgileriniz WhatsApp’ta hazır mesaj olarak açılsın; ya da doğrudan arayın.',
    formTitle: 'Teklif veya bilgi alın',
    direct: 'Doğrudan iletişim',
    waTitle: 'WhatsApp ile yazın',
    waText: 'Anında iletişim ve hızlı yanıt',
    phone: 'Telefon',
    email: 'E-posta',
    store: 'Mağaza',
    hours: 'Çalışma saatleri',
  },
  en: {
    crumb: 'Contact',
    kicker: 'Quote · Samples · Store',
    title: 'Get in Touch',
    lead: 'We respond within 24 hours. Fill in the form and your details open as a ready message in WhatsApp, or call us directly.',
    formTitle: 'Request a Quote',
    direct: 'Direct contact',
    waTitle: 'Message us on WhatsApp',
    waText: 'Instant contact and quick reply',
    phone: 'Phone',
    email: 'Email',
    store: 'Store',
    hours: 'Opening hours',
  },
} as const

export function ContactView({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const dict = getDictionary(locale)

  return (
    <>
      <PageHero
        art={{ variant: 'hanging', tone: 'clay' }}
        breadcrumbs={[{ label: dict.common.home, href: homeHref(locale) }, { label: t.crumb }]}
        kicker={t.kicker}
        title={t.title}
        lead={t.lead}
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="reveal lg:col-span-7">
            <h2 className="display-sm">{t.formTitle}</h2>
            <div className="mt-10">
              <ContactForm locale={locale} />
            </div>
          </div>

          <aside className="reveal flex flex-col gap-3 lg:col-span-5" aria-label={t.direct}>
            <a
              href={whatsappHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-whatsapp p-6 text-ink transition-colors hover:bg-[#1fbd59] sm:p-7"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/35">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-lg font-semibold">{t.waTitle}</span>
                  <span className="block text-sm text-ink/75">{t.waText}</span>
                </span>
              </span>
              <ArrowUpRightIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="border border-line bg-white p-6 sm:p-8">
              <dl className="grid gap-6 text-[0.9375rem]">
                <div>
                  <dt className="text-caption font-semibold">{t.phone}</dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                      className="link-line font-display text-[1.75rem] leading-tight"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-caption font-semibold">{t.email}</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="link-line-static">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-caption font-semibold">{t.store}</dt>
                  <dd className="mt-1 leading-relaxed text-charcoal-600">
                    {SITE_CONFIG.address.fullDisplay}
                  </dd>
                </div>
                <div>
                  <dt className="text-caption font-semibold">{t.hours}</dt>
                  {dict.footer.hours.map((h) => (
                    <dd key={h} className="mt-1 text-charcoal-600">
                      {h}
                    </dd>
                  ))}
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  {dict.common.viewMap}
                  <ArrowUpRightIcon />
                </a>
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <InstagramIcon />
                  @bursahavlusu
                </a>
              </div>
            </div>

            <MediaFrame
              art="hanging"
              artTone="cream"
              slot="store"
              tone="sand"
              ratio="16 / 9"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </aside>
        </div>
      </section>
    </>
  )
}
