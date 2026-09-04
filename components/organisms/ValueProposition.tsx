'use client'

import { Check, Clock, Globe, Package, Pencil, Star } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { FadeIn } from '@/components/motion-primitives/fade-in'

const features = [
  {
    icon: Clock,
    title: "1996'dan Bu Yana",
    desc: '25+ yıllık üretim deneyimi ve kendi imalat tesisimiz.',
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
    desc: 'Arap ülkeleri ve Yunanistan başta olmak üzere uluslararası ihracat.',
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
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-beige-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <FadeIn className="mb-14 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-orange-500">
            Neden Başkan Havlu?
          </span>
          <h2 className="text-3xl font-bold text-charcoal-900 sm:text-4xl">
            Havlu ve Bornoz İmalatçınız
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-600">
            1996&apos;dan bu yana Bursa&apos;dan Türkiye&apos;ye ve dünyaya kendi ürettiğimiz havlu
            ve tekstil çözümlerini sunuyoruz.
          </p>
        </FadeIn>

        {/* Özellik kartları — hover'da hafif kalkma + ikon döndürme */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <FadeIn key={feature.title} delay={i * 0.06}>
                <motion.div
                  whileHover={reduceMotion ? {} : { y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-beige-300 bg-white p-7 shadow-sm transition-shadow hover:shadow-xl"
                >
                  <motion.div
                    whileHover={reduceMotion ? {} : { rotate: 8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-200 bg-linear-to-br from-orange-50 to-orange-100"
                  >
                    <Icon className="h-6 w-6 text-orange-500" aria-hidden="true" />
                  </motion.div>
                  <h3 className="mb-2 text-base font-semibold text-charcoal-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-charcoal-600">{feature.desc}</p>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
