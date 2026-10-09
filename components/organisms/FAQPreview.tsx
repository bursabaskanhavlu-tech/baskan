import Link from 'next/link'
import { FAQAccordion } from '@/components/molecules/FAQAccordion'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { ArrowIcon } from '@/components/atoms/Icons'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  kicker?: string
  title?: string
  contactText?: string
  contactHref?: string
  /** Şema ayrıca sayfada üretiliyorsa false verilir (çift FAQPage olmaması için). */
  withSchema?: boolean
  className?: string
}

/**
 * SSS bölümü. Görünür içerik ve FAQSchema aynı diziden beslenir —
 * şema/içerik uyuşmazlığı oluşamaz.
 */
export function FAQSection({
  items,
  kicker = 'Sık Sorulan Sorular',
  title = 'Aklınızdaki sorular',
  contactText = 'Başka bir sorunuz mu var? İletişime geçin',
  contactHref = '/contact',
  withSchema = true,
  className = '',
}: FAQSectionProps) {
  return (
    <section className={`py-20 sm:py-28 ${className}`}>
      {withSchema && <FAQSchema items={items} />}
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="reveal lg:col-span-4">
          <p className="kicker">{kicker}</p>
          <h2 className="display-md mt-6">{title}</h2>
          <Link
            href={contactHref}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium"
          >
            <span className="link-line-static">{contactText}</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className="reveal lg:col-span-8">
          <FAQAccordion items={items} />
        </div>
      </div>
    </section>
  )
}

const homeFaqs: FAQItem[] = [
  {
    question: 'Minimum sipariş miktarı (MOQ) nedir?',
    answer:
      'Minimum sipariş miktarı ürüne ve stok durumuna göre değişmektedir. Teklif almak için bizimle iletişime geçin.',
  },
  {
    question: 'Ürünlerinize özel logo nakışı yapabiliyor musunuz?',
    answer: 'Evet, logo nakışı ve özel renk seçenekleriyle kişiselleştirilmiş üretim sağlıyoruz.',
  },
  {
    question: 'Numune sipariş edebilir miyim?',
    answer:
      'Numune talebinizi iletişim formu veya WhatsApp üzerinden iletebilirsiniz. Numune süreç ve ücretleri teklif aşamasında netleştirilir.',
  },
  {
    question: 'Yurt dışına ihracat yapıyor musunuz?',
    answer:
      'Evet. Başta Arap ülkeleri ve Yunanistan olmak üzere uluslararası müşterilerimize ihracat hizmeti sunuyoruz.',
  },
  {
    question: 'Teslimat süresi ne kadar?',
    answer:
      'Sipariş büyüklüğüne ve ürün tipine göre değişmektedir. Kesin teslimat süresi teklif aşamasında belirtilir.',
  },
  {
    question: 'Oteller için özel koleksiyonunuz var mı?',
    answer:
      'Evet. Otel sektörüne özel yüksek gramajlı, dayanıklı ve logo nakışlı havlu koleksiyonumuz mevcuttur.',
  },
]

/** Ana sayfa SSS'si — içerik değişmeden korunmuştur. */
export function FAQPreview() {
  return <FAQSection items={homeFaqs} />
}
