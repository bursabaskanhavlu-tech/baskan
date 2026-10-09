import { SITE_CONFIG } from '@/lib/config/site'
import type { Locale } from '@/lib/i18n'

/**
 * EntityBlock — makine ve insan tarafından okunabilir, görünür firma bilgisi.
 * AI tarayıcıları bu bloğu entity sinyali olarak kullanır; görünür kalmalıdır
 * (aria-hidden yapılmaz — AGENTS.md §16). Değerler yalnızca SITE_CONFIG'den gelir.
 */
export function EntityBlock({ locale = 'tr' }: { locale?: Locale }) {
  const en = locale === 'en'
  const items = [
    {
      label: en ? 'Company' : 'Firma',
      lines: [SITE_CONFIG.name, `${en ? 'Founded' : 'Kuruluş'}: ${SITE_CONFIG.founded}`],
    },
    {
      label: en ? 'Location' : 'Konum',
      lines: [
        `Havlucular Çarşısı, ${SITE_CONFIG.address.addressLocality}`,
        `${SITE_CONFIG.address.addressRegion}, ${en ? 'Turkey' : 'Türkiye'}`,
      ],
    },
    {
      label: en ? 'Contact' : 'İletişim',
      lines: [SITE_CONFIG.contact.phone, SITE_CONFIG.contact.email],
    },
    {
      label: en ? 'Export' : 'İhracat',
      lines: [
        en
          ? `${SITE_CONFIG.exportRegions.en.length}+ export markets`
          : `${SITE_CONFIG.exportRegions.tr.length}+ ihracat pazarı`,
        en ? 'Wholesale and retail' : 'Toptan ve perakende',
      ],
    },
  ]

  return (
    <section
      aria-label={en ? 'Company Information' : 'Firma Bilgileri'}
      className="border-t border-line"
    >
      <div className="container-x">
        <dl className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-paper px-1 py-7 text-center sm:px-4 text-caption leading-relaxed"
            >
              <dt className="font-semibold text-ink">{item.label}</dt>
              {item.lines.map((line) => (
                <dd key={line} className="wrap-break-word text-charcoal-600">
                  {line}
                </dd>
              ))}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
