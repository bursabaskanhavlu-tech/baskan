import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config/site'
import { ArrowIcon } from '@/components/atoms/Icons'
import type { Locale } from '@/lib/i18n'

/** Güven şeridi — yalnızca SITE_CONFIG'deki doğrulanmış verilerle (AGENTS.md §14.2). */
export function TrustRow({ locale }: { locale: Locale }) {
  const en = locale === 'en'
  const facts = [
    { value: String(SITE_CONFIG.founded), label: en ? 'Founded' : 'Kuruluş' },
    {
      value: `${SITE_CONFIG.exportRegions.tr.length}+`,
      label: en ? 'Export markets' : 'İhracat pazarı',
    },
    {
      value: `${SITE_CONFIG.productCategories.tr.length}+`,
      label: en ? 'Product groups' : 'Ürün grubu',
    },
    { value: en ? 'Retail' : 'Perakende', label: en ? 'and wholesale' : 've toptan satış' },
  ]

  return (
    <section className="bg-beige-100 py-16 sm:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="reveal lg:col-span-3">
          <p className="kicker">{en ? 'Trusted partner' : 'Güvenen iş ortaklığı'}</p>
          <h2 className="display-md mt-4">
            {en ? (
              <>Since {SITE_CONFIG.founded}.</>
            ) : (
              <>
                {SITE_CONFIG.founded}’dan
                <br />
                bugüne.
              </>
            )}
          </h2>
        </div>
        <div className="reveal lg:col-span-4">
          <p className="leading-relaxed text-charcoal-600">
            {en
              ? 'Long-standing experience in Bursa’s Havlucular Çarşısı: reliable, consistent and quality textile solutions for businesses and our store customers.'
              : 'Bursa Havlucular Çarşısı’ndaki köklü deneyimimizle işletmelere ve mağaza müşterilerimize güvenilir, sürdürülebilir ve kaliteli tekstil çözümleri sunuyoruz.'}
          </p>
          <Link
            href={en ? '/en/about' : '/about'}
            className="group mt-5 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-semibold text-orange-600"
          >
            {en ? 'About us' : 'Hakkımızda'}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <dl className="reveal grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-5 lg:grid-cols-2 xl:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse justify-end gap-1.5">
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-charcoal-600">
                {f.label}
              </dt>
              <dd className="text-[1.75rem] font-medium leading-none tracking-tight text-orange-500 sm:text-[2rem]">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
