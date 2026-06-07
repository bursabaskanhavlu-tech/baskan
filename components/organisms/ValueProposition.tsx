import { Check, Clock, Globe, Package, Pencil, Star } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '1981\'den Bu Yana',
    desc: '40+ yıllık sektör deneyimi ve güvenilir tedarik ağı.',
  },
  {
    icon: Package,
    title: 'Esnek Sipariş',
    desc: 'Küçük veya büyük her sipariş büyüklüğüne uyum sağlıyoruz.',
  },
  {
    icon: Pencil,
    title: 'Özel Üretim',
    desc: 'Logo nakışı, özel renk ve ambalajla kişiselleştirilmiş üretim.',
  },
  {
    icon: Globe,
    title: 'İhracat Deneyimi',
    desc: 'Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası tedarik.',
  },
  {
    icon: Star,
    title: 'Otel & Kurum',
    desc: 'Otel, kuaför, klinik ve kurumsal sektöre özel çözümler.',
  },
  {
    icon: Check,
    title: 'Hızlı Yanıt',
    desc: 'WhatsApp üzerinden anında iletişim ve hızlı teklif süreci.',
  },
]

export function ValueProposition() {
  return (
    <section className="py-24" style={{ backgroundColor: '#faf8f5' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-12 text-center">
          <span
            className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest"
            style={{ color: '#e87722' }}
          >
            Neden Başkan Havlu?
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
            Neden Başkan Havlu Tekstil?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: '#5c5c5c' }}>
            1981&apos;den beri Bursa&apos;da havlu ve bornoz üretimi — otel, kurum ve promosyon sektörüne özel çözümler.
          </p>
        </div>

        {/* Özellik kartları */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-xl p-7 transition-shadow hover:shadow-md"
                style={{ backgroundColor: 'white', border: '1px solid #e0d4c0' }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#fff7f0' }}
                >
                  <Icon className="h-5 w-5" style={{ color: '#e87722' }} aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-base font-semibold" style={{ color: '#1a1a1a' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
