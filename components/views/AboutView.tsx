import { PageHero } from '@/components/molecules/PageHero'
import { SectionHeader } from '@/components/molecules/SectionHeader'
import { FAQSection } from '@/components/organisms/FAQPreview'
import { CTABand } from '@/components/organisms/CTABand'
import { MediaFrame } from '@/components/atoms/MediaFrame'
import { getDictionary, contactHref, homeHref, type Locale } from '@/lib/i18n'
import type { AboutContent } from '@/content/about'

interface AboutViewProps {
  locale: Locale
  content: AboutContent
}

export function AboutView({ locale, content }: AboutViewProps) {
  const dict = getDictionary(locale)

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: dict.common.home, href: homeHref(locale) },
          { label: content.crumb },
        ]}
        kicker={content.kicker}
        title={content.title}
        lead={content.lead}
      />

      {/* Hikâye */}
      <section className="pb-20 sm:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-6">
            <MediaFrame
              slot="production"
              tone="stone"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 45vw, 100vw"
              animate={false}
            />
          </div>
          <div className="reveal flex flex-col lg:col-span-6 lg:pt-10">
            <p className="kicker">{content.story.kicker}</p>
            <h2 className="display-md mt-6">{content.story.title}</h2>
            {content.story.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-6 text-[1.0625rem] leading-relaxed text-charcoal-600"
              >
                {p}
              </p>
            ))}
            <dl className="mt-auto grid grid-cols-3 border-t border-line pt-8 lg:mt-14">
              {content.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-caption text-charcoal-600">{fact.label}</dt>
                  <dd className="font-display text-[2.5rem] leading-none sm:text-5xl">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Üretim süreci — numarasız, iplik çizgisi üzerinde */}
      <section className="on-dark bg-ink py-20 text-paper sm:py-28">
        <div className="container-x">
          <SectionHeader dark kicker={content.process.kicker} title={content.process.title} />
          <ol className="relative mt-16 grid gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-8">
            <span
              aria-hidden="true"
              className="absolute bottom-2 left-[5px] top-2 w-px bg-orange-500/50 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[5px] lg:h-px lg:w-auto"
            />
            {content.process.steps.map((step) => (
              <li key={step.title} className="reveal relative pl-10 lg:pl-0 lg:pt-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border border-orange-500 bg-ink lg:top-0"
                />
                <h3 className="font-display text-[1.75rem] leading-tight text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-charcoal-300">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
          <div className="reveal mt-20 grid gap-6 border-t border-line-dark pt-10 lg:grid-cols-12">
            <h3 className="display-sm text-paper lg:col-span-5">{content.quality.title}</h3>
            <p className="lead text-charcoal-300 lg:col-span-7">{content.quality.text}</p>
          </div>
        </div>
      </section>

      {/* Özel üretim */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeader
            kicker={content.privateLabel.kicker}
            title={content.privateLabel.title}
            text={content.privateLabel.text}
          />
          <ul className="mt-14 grid gap-3 sm:grid-cols-3">
            {content.privateLabel.items.map((item, i) => (
              <li key={item.title} className="reveal">
                <MediaFrame
                  slot={i === 0 ? 'embroidered' : i === 1 ? 'promotional' : 'wholesale'}
                  tone={i === 0 ? 'charcoal' : i === 1 ? 'clay' : 'cream'}
                  ratio="4 / 3"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
                <h3 className="mt-5 font-display text-[1.75rem] leading-tight">{item.title}</h3>
                <p className="mt-2 text-charcoal-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* İhracat */}
      <section className="bg-beige-100 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <p className="kicker">{content.export.kicker}</p>
            <h2 className="display-md mt-6">{content.export.title}</h2>
            <p className="lead mt-6">{content.export.text}</p>
            <p className="mt-6 text-sm font-medium text-orange-700">{content.export.note}</p>
          </div>
          <ul className="reveal flex flex-wrap content-start gap-x-6 gap-y-3 lg:col-span-7 lg:pt-4">
            {content.export.regions.map((region, i) => (
              <li
                key={region}
                className="flex items-center gap-6 font-display text-[1.875rem] leading-tight sm:text-[2.5rem]"
              >
                {region}
                {i < content.export.regions.length - 1 && (
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        items={content.faq.items}
        withSchema={false}
        kicker={content.faq.kicker}
        title={content.faq.title}
        contactHref={contactHref(locale)}
        contactText={
          locale === 'en'
            ? 'Have another question? Contact us'
            : 'Başka bir sorunuz mu var? İletişime geçin'
        }
      />

      <CTABand locale={locale} />
    </>
  )
}
