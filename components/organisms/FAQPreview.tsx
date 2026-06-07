'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqs = [
  {
    q: 'Minimum sipariş miktarı (MOQ) nedir?',
    a: 'Minimum sipariş miktarı ürüne ve stok durumuna göre değişmektedir. Teklif almak için bizimle iletişime geçin.',
  },
  {
    q: 'Ürünlerinize özel logo nakışı yapabiliyor musunuz?',
    a: 'Evet, logo nakışı ve özel renk seçenekleriyle kişiselleştirilmiş üretim sağlıyoruz.',
  },
  {
    q: 'Numune sipariş edebilir miyim?',
    a: 'Numune talebinizi iletişim formu veya WhatsApp üzerinden iletebilirsiniz. Numune süreç ve ücretleri teklif aşamasında netleştirilir.',
  },
  {
    q: 'Yurt dışına ihracat yapıyor musunuz?',
    a: 'Evet. Başta Arap ülkeleri ve Yunanistan olmak üzere uluslararası müşterilerimize ihracat hizmeti sunuyoruz.',
  },
  {
    q: 'Teslimat süresi ne kadar?',
    a: 'Sipariş büyüklüğüne ve ürün tipine göre değişmektedir. Kesin teslimat süresi teklif aşamasında belirtilir.',
  },
  {
    q: 'Oteller için özel koleksiyonunuz var mı?',
    a: 'Evet. Otel sektörüne özel yüksek gramajlı, dayanıklı ve logo nakışlı havlu koleksiyonumuz mevcuttur.',
  },
]

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24" style={{ backgroundColor: '#faf8f5' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="mb-12 text-center">
          <span
            className="mb-2 block text-xs font-semibold uppercase tracking-widest"
            style={{ color: '#e87722' }}
          >
            Sık Sorulan Sorular
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: '#1a1a1a' }}>
            Aklınızdaki Sorular
          </h2>
        </div>

        {/* SSS listesi */}
        <div className="flex flex-col divide-y" style={{ borderColor: '#e0d4c0' }}>
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-base font-medium" style={{ color: '#1a1a1a' }}>
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <X className="h-5 w-5 shrink-0" style={{ color: '#e87722' }} aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0" style={{ color: '#e87722' }} aria-hidden="true" />
                )}
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: '#5c5c5c' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tüm SSS linki */}
        <div className="mt-10 text-center">
          <Link
            href="/about#sss"
            className="text-sm font-medium underline underline-offset-4 transition-colors hover:opacity-70"
            style={{ color: '#e87722' }}
          >
            Tüm soruları görüntüle →
          </Link>
        </div>
      </div>
    </section>
  )
}
