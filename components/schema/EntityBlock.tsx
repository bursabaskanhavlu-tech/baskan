import { SITE_CONFIG } from '@/lib/config/site'

/**
 * EntityBlock — Makine okunabilir görünür içerik bloğu.
 * AI tarayıcıları (GPT, Gemini, Claude, Perplexity) bu bloğu entity sinyali olarak kullanır.
 * aria-hidden=false — görünür içerik, SEO açısından güçlü sinyal.
 * Her sayfada footer üstünde görünür; ancak stilleme ile görsel olarak minimalize edilir.
 */
export function EntityBlock() {
  return (
    <section
      className="border-t py-8"
      style={{ borderColor: '#e0d4c0', backgroundColor: '#faf8f5' }}
      aria-label="Firma Bilgileri"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 text-xs sm:grid-cols-4" style={{ color: '#8a7050' }}>
          <div>
            <p className="font-semibold uppercase tracking-wider" style={{ color: '#5c5c5c' }}>
              Firma
            </p>
            <p className="mt-1">{SITE_CONFIG.name}</p>
            <p>Kuruluş: {SITE_CONFIG.founded}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider" style={{ color: '#5c5c5c' }}>
              Konum
            </p>
            <p className="mt-1">{SITE_CONFIG.address.addressLocality}</p>
            <p>{SITE_CONFIG.address.addressRegion}, Türkiye</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider" style={{ color: '#5c5c5c' }}>
              İletişim
            </p>
            <p className="mt-1">{SITE_CONFIG.contact.phone}</p>
            <p>{SITE_CONFIG.contact.email}</p>
          </div>
          <div>
            <p className="font-semibold uppercase tracking-wider" style={{ color: '#5c5c5c' }}>
              İhracat
            </p>
            <p className="mt-1">{SITE_CONFIG.exportRegions.tr.length} Ülkeye İhracat</p>
          </div>
        </div>
      </div>
    </section>
  )
}
