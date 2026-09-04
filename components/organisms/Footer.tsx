import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/config/site'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { EntityBlock } from '@/components/schema/EntityBlock'
import { FadeIn } from '@/components/motion-primitives/fade-in'

const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Koleksiyon', href: '/new-collection' },
  { label: 'Hakkımızda', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/contact' },
]

// 11 landing page'in tamamı — daha önce yalnızca 4'ü footer'da linkliydi
// (bkz. V2-ROADMAP-LOG.md FAZ 2 Görev 5 bulgusu).
const productLinks = [
  { label: 'Havlu Üreticisi', href: '/havlu-ureticisi' },
  { label: 'Toptan Havlu', href: '/toptan-havlu' },
  { label: 'Otel Havlusu', href: '/otel-havlusu' },
  { label: 'Promosyon Havlu', href: '/promosyon-havlu' },
  { label: 'Nakışlı Havlu', href: '/nakisli-havlu' },
  { label: 'Bornoz Üreticisi', href: '/bornoz-ureticisi' },
  { label: 'Toptan Bornoz', href: '/toptan-bornoz' },
  { label: 'Otel Bornozu', href: '/otel-bornozu' },
]

const exportLinks = [
  { label: 'Turkish Towel Manufacturer', href: '/en/turkish-towel-manufacturer' },
  { label: 'Wholesale Towel Manufacturer', href: '/en/wholesale-towel-supplier' },
  { label: 'Bathrobe Manufacturer', href: '/en/bathrobe-manufacturer' },
]

export function Footer() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <>
      <EntityBlock />
      <footer style={{ backgroundColor: '#1a1a1a', color: '#e0d4c0' }}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Kolon 1: Logo + açıklama */}
            <FadeIn>
              <Link href="/">
                <div style={{ width: '160px', height: '85px' }}>
                  <Image
                    src="/images/logo-text-cropped.png"
                    alt="Başkan Havlu Tekstil"
                    width={766}
                    height={407}
                    className="h-full w-full brightness-0 invert"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'left center',
                    }}
                    quality={100}
                  />
                </div>
              </Link>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: '#b3b3b3' }}>
                {SITE_CONFIG.description.tr}
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition-colors hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </FadeIn>

            {/* Kolon 2: Hızlı linkler */}
            <FadeIn delay={0.05}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Hızlı Bağlantılar
              </h3>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#b3b3b3' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Kolon 3: Ürün Kategorileri (11 landing page'in TR olanları) */}
            <FadeIn delay={0.1}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Ürün Kategorileri
              </h3>
              <ul className="flex flex-col gap-2">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#b3b3b3' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Kolon 4: Export / İngilizce sayfalar */}
            <FadeIn delay={0.15}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Export
              </h3>
              <ul className="flex flex-col gap-2">
                {exportLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#b3b3b3' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Kolon 5: İletişim */}
            <FadeIn delay={0.2}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                İletişim
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#e87722' }} />
                  <span className="text-sm" style={{ color: '#b3b3b3' }}>
                    {SITE_CONFIG.address.fullDisplay}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" style={{ color: '#e87722' }} />
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#b3b3b3' }}
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" style={{ color: '#e87722' }} />
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#b3b3b3' }}
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0" style={{ color: '#e87722' }} />
                  <span className="text-sm" style={{ color: '#b3b3b3' }}>
                    {SITE_CONFIG.openingHours[0]?.replace('Mo-Fr', 'Pzt–Cum').replace('-', '–')}
                    <br />
                    {SITE_CONFIG.openingHours[1]?.replace('Sa', 'Cmt').replace('-', '–')}
                  </span>
                </li>
                <li className="mt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#25d366' }}
                  >
                    WhatsApp ile Yaz
                  </a>
                </li>
              </ul>
            </FadeIn>
          </div>

          {/* Alt çubuk */}
          <div
            className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs sm:flex-row"
            style={{ borderColor: '#2d2d2d', color: '#5c5c5c' }}
          >
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4">
              <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/cerez-politikasi" className="hover:text-white transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs" style={{ color: '#5c5c5c' }}>
            <a
              href="https://hayb.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              HAYB DİJİTAL SİSTEMLER
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
