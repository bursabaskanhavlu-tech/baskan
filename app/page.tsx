import Link from 'next/link'
import { HeroSection } from '@/components/organisms/HeroSection'
import { ValueProposition } from '@/components/organisms/ValueProposition'
import { ProductCategories } from '@/components/organisms/ProductCategories'
import { FAQPreview } from '@/components/organisms/FAQPreview'
import { CTABand } from '@/components/organisms/CTABand'
import { OrganizationSchema } from '@/components/schema/OrganizationSchema'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import { WebSiteSchema } from '@/components/schema/WebSiteSchema'
import { generatePageMetadata } from '@/lib/utils/metadata'
import { SITE_CONFIG } from '@/lib/config/site'
import { ArrowRight, Building2, Gift, Globe, Hotel } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Başkan Havlu Tekstil | 1981\'den Beri Bursa\'da Havlu ve Bornoz Üretimi',
  description:
    "1981'den beri Bursa'da havlu ve bornoz üretimi. Otel, kurumsal firma, promosyon ve toptan satış çözümleri. Başkan Havlu Tekstil — Havlucular Çarşısı.",
  path: '/',
})

export default function HomePage() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <WebSiteSchema />

      {/* 1. Kurumsal Hero */}
      <HeroSection />

      {/* 2. Başkan Havlu Hakkında */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
                Firmamız
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
                1981&apos;den Beri Bursa&apos;da Havlu ve Bornoz Üreticisi
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: '#5c5c5c' }}>
                Başkan Havlu Tekstil, 1981 yılında Bursa Havlucular Çarşısı&apos;nda kurulmuş, havlu ve bornoz alanında uzmanlaşmış bir tekstil firmasıdır. Otel sektörü, kurumsal firmalar ve promosyon sektörüne özel üretim çözümleri sunuyoruz.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c5c5c' }}>
                Bursa&apos;nın köklü tekstil geleneğini yaşatarak, Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası pazarlara da hizmet veriyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                {[
                  { value: '1981', label: 'Kuruluş' },
                  { value: 'Bursa', label: 'Merkez' },
                  { value: '2 Bölge', label: 'İhracat' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold" style={{ color: '#e87722' }}>{s.value}</p>
                    <p className="text-xs uppercase tracking-wider" style={{ color: '#8a7050' }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-70"
                  style={{ color: '#e87722' }}
                >
                  Firmamız Hakkında <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            {/* Görsel / bilgi kartları */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏭', title: 'Havlu Üreticisi', desc: 'Bursa Havlucular Çarşısı\'nda 1981\'den bu yana' },
                { icon: '🏨', title: 'Otel Tekstili', desc: 'Yüksek gramajlı, dayanıklı otel havlular' },
                { icon: '🎁', title: 'Promosyon', desc: 'Logo nakışlı kurumsal havlu ve bornoz' },
                { icon: '🌍', title: 'İhracat', desc: 'Arap ülkeleri ve Yunanistan\'a tedarik' },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl p-5"
                  style={{ backgroundColor: '#faf8f5', border: '1px solid #e0d4c0' }}
                >
                  <span className="text-2xl" role="img" aria-hidden="true">{c.icon}</span>
                  <h3 className="mt-3 font-semibold text-sm" style={{ color: '#1a1a1a' }}>{c.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: '#5c5c5c' }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Ürün Kategorileri */}
      <ProductCategories />

      {/* 4. Neden Başkan Havlu */}
      <ValueProposition />

      {/* 5. Hizmet Verilen Sektörler */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
              Sektörler
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
              Hangi Sektörlere Hizmet Veriyoruz?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Hotel,
                title: 'Otel & Konaklama',
                desc: 'Yüksek gramajlı ve dayanıklı havlu ve bornozlar. Otel markanıza özel nakış.',
                href: '/otel-havlusu',
                cta: 'Otel Havlusu',
              },
              {
                icon: Gift,
                title: 'Promosyon & Kurumsal',
                desc: 'Logo nakışlı havlu ve bornozlar. Kurumsal hediye ve etkinlik kampanyaları için.',
                href: '/promosyon-havlu',
                cta: 'Promosyon Havlu',
              },
              {
                icon: Building2,
                title: 'Toptan Satış',
                desc: 'Perakende ve toptan alıcılar için esnek sipariş imkânı. Tüm kategorilerde toplu fiyat.',
                href: '/toptan-havlu',
                cta: 'Toptan Havlu',
              },
              {
                icon: Globe,
                title: 'İhracat',
                desc: 'Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası havlu tedariki.',
                href: '/turkish-towel-manufacturer',
                cta: 'İhracat Bilgisi',
              },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="flex flex-col rounded-2xl p-6"
                  style={{ backgroundColor: '#faf8f5', border: '1px solid #e0d4c0' }}
                >
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ backgroundColor: '#fff7f0' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: '#e87722' }} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-semibold" style={{ color: '#1a1a1a' }}>{s.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed flex-1" style={{ color: '#5c5c5c' }}>{s.desc}</p>
                  <Link
                    href={s.href}
                    className="flex items-center gap-1 text-sm font-medium"
                    style={{ color: '#e87722' }}
                  >
                    {s.cta} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Otel Tekstil Çözümleri */}
      <section className="py-20" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
                Otel Sektörü
              </span>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Otel Tekstil Çözümleri
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: '#b3b3b3' }}>
                Otel sektörünün ihtiyaç duyduğu tüm havlu ve bornoz çeşitlerini tedarik ediyoruz. El havlusu, yüz havlusu, banyo havlusu, ayak havlusu ve bornoz — tek çatı altında, özel marka nakışıyla.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  'Yüksek gramajlı, endüstriyel yıkamaya dayanıklı havlular',
                  'Otel logolu nakış ve özel renk seçenekleri',
                  'Toplu sipariş ve düzenli tedarik',
                  'Arap ülkeleri ve Yunanistan\'a ihracat',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: '#e87722' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: '#b3b3b3' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/otel-havlusu"
                  className="flex h-11 items-center justify-center rounded-md px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#e87722' }}
                >
                  Otel Havlusu
                </Link>
                <Link
                  href="/otel-bornozu"
                  className="flex h-11 items-center justify-center rounded-md border px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  Otel Bornozu
                </Link>
              </div>
            </div>
            <div
              className="flex h-64 items-center justify-center rounded-2xl lg:h-80"
              style={{ backgroundColor: '#2d2d2d', border: '1px solid #3a3a3a' }}
            >
              <div className="text-center">
                <span className="text-4xl" role="img" aria-label="Otel havlusu">🏨</span>
                <p className="mt-3 text-sm font-medium" style={{ color: '#8a7050' }}>
                  Otel havlusu görseli eklenecek
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Promosyon Tekstil Çözümleri */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div
              className="order-2 flex h-64 items-center justify-center rounded-2xl lg:order-1 lg:h-80"
              style={{ backgroundColor: '#ede5d8', border: '1px solid #e0d4c0' }}
            >
              <div className="text-center">
                <span className="text-4xl" role="img" aria-label="Promosyon havlu">🎁</span>
                <p className="mt-3 text-sm font-medium" style={{ color: '#a88c64' }}>
                  Promosyon havlu görseli eklenecek
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
                Promosyon & Kurumsal
              </span>
              <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
                Promosyon Tekstil Çözümleri
              </h2>
              <p className="mt-4 leading-relaxed" style={{ color: '#5c5c5c' }}>
                Kurumsal hediye kampanyaları ve promosyon faaliyetleri için özel logolu havlu ve bornoz üretiyoruz. Nakış veya baskı — tercihinize göre kişiselleştiriyoruz.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  'Logo nakışı ve dijital baskı seçenekleri',
                  'Özel renk ve boyut',
                  'Kurumsal ambalaj ve etiketleme',
                  'Etkinlik ve fuar için toplu sipariş',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: '#e87722' }}
                      aria-hidden="true"
                    />
                    <span className="text-sm" style={{ color: '#5c5c5c' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/promosyon-havlu"
                  className="flex h-11 w-fit items-center justify-center rounded-md px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#e87722' }}
                >
                  Promosyon Havlu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. İhracat & Uluslararası Tedarik */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl px-8 py-12 text-center" style={{ backgroundColor: '#1a1a1a' }}>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
              Uluslararası
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              İhracat &amp; Uluslararası Tedarik
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed" style={{ color: '#b3b3b3' }}>
              Başkan Havlu Tekstil, Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası alıcılara güvenilir havlu ve bornoz tedariki sağlamaktadır.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {SITE_CONFIG.exportRegions.tr.map((region) => (
                <span
                  key={region}
                  className="rounded-full border px-6 py-2 text-sm font-medium text-white"
                  style={{ borderColor: '#e87722' }}
                >
                  {region}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/turkish-towel-manufacturer"
                className="flex h-11 items-center justify-center rounded-md px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#e87722' }}
              >
                Turkish Towel Manufacturer
              </Link>
              <Link
                href="/wholesale-towel-supplier"
                className="flex h-11 items-center justify-center rounded-md border px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)' }}
              >
                Wholesale Supplier
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SSS */}
      <FAQPreview />

      {/* 10. İletişim CTA */}
      <section className="py-20" style={{ backgroundColor: '#faf8f5' }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest" style={{ color: '#e87722' }}>
            İletişim
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
            Teklif veya Bilgi Almak İster misiniz?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed" style={{ color: '#5c5c5c' }}>
            {SITE_CONFIG.address.fullDisplay}
          </p>
          <p className="mt-2 text-sm" style={{ color: '#5c5c5c' }}>
            <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="hover:underline">
              {SITE_CONFIG.contact.phone}
            </a>
            {' · '}
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:underline">
              {SITE_CONFIG.contact.email}
            </a>
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="flex h-12 items-center justify-center rounded-md px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#e87722' }}
            >
              Teklif Al
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 rounded-md border px-8 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ borderColor: '#25d366', color: '#25d366' }}
            >
              WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </section>

      {/* 11. Footer CTA Bandı */}
      <CTABand />
    </>
  )
}
