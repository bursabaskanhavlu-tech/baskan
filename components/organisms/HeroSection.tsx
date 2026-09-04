'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { SITE_CONFIG } from '@/lib/config/site'
import { FadeIn } from '@/components/motion-primitives/fade-in'
import { TextReveal } from '@/components/motion-primitives/text-reveal'
import { CountUp } from '@/components/motion-primitives/count-up'
import { MagneticButton } from '@/components/motion-primitives/magnetic-button'
import { ArrowRight } from 'lucide-react'

const stats = [
  { value: 1996, suffix: '', label: 'Kuruluş Yılı', isYear: true },
  { value: SITE_CONFIG.exportRegions.tr.length, suffix: '+', label: 'İhracat Pazarı' },
  { value: SITE_CONFIG.productCategories.tr.length, suffix: '+', label: 'Ürün Kategorisi' },
  { value: 24, suffix: 'sa', label: 'Teklif Yanıt Süresi' },
]

export function HeroSection() {
  const waUrl = `${SITE_CONFIG.contact.whatsappUrl}?text=${SITE_CONFIG.contact.whatsappMessageTr}`
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-beige-50">
      {/* Yüzen dekoratif blob'lar — sürekli, çok hafif hareket. reduceMotion
          açıkken animasyon süresi/genliği sıfırlanır ama element her zaman
          render edilir (bkz. FadeIn'in SSR-güvenlik kuralı, aynı prensip). */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl"
        animate={reduceMotion ? {} : { x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl"
        animate={reduceMotion ? {} : { x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-beige-300/40 blur-3xl"
        animate={reduceMotion ? {} : { x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold uppercase leading-[1.02] tracking-tight text-charcoal-900 sm:text-6xl lg:text-8xl">
          <TextReveal text="Havlu ve Bornoz" as="span" className="block" />
          <TextReveal
            text="İmalatçınız"
            as="span"
            className="block text-orange-500"
            startDelay={0.35}
          />
        </h1>

        <FadeIn delay={0.55}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-600 sm:text-xl">
            1996&apos;dan bu yana Bursa&apos;da kendi tesisimizde havlu ve bornoz üretiyoruz.
            Oteller, kurumlar, kuaförler ve promosyon firmalarına toptan satış yapıyoruz.
          </p>
        </FadeIn>

        <FadeIn delay={0.68}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <MagneticButton>
              <Link
                href="/contact"
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-orange-500 px-9 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-orange-600"
              >
                Teklif Al
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center gap-2 rounded-full border-2 bg-white px-9 text-sm font-semibold shadow-sm transition-colors hover:bg-[#25d366]/5"
                style={{ borderColor: '#25d366', color: '#25d366' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </MagneticButton>
          </div>
        </FadeIn>

        {/* İstatistik kartları — sayaç animasyonlu */}
        <FadeIn delay={0.85}>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: 0.9 + i * 0.08 }}
                whileHover={reduceMotion ? {} : { y: -4 }}
                className="rounded-2xl border border-beige-300 bg-white/80 px-4 py-5 shadow-sm backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-orange-500 sm:text-3xl">
                  {s.isYear ? s.value : <CountUp value={s.value} suffix={s.suffix} />}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-beige-700">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
