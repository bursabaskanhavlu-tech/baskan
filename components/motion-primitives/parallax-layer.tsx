'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ParallaxLayerProps {
  children: ReactNode
  className?: string
  /** Piksel cinsinden maksimum kayma miktarı (varsayılan 40px). */
  strength?: number
}

/**
 * Scroll'a bağlı hafif dikey parallax.
 *
 * Hydration güvenliği: `useScroll`'un `scrollYProgress`'i client'ta ilk
 * boyanmada anında gerçek scroll konumuna göre bir değer üretir (SSR'de her
 * zaman "transform yok"), bu da React'in hydration mismatch uyarısına yol
 * açar. Çözüm FadeIn ile aynı prensip — DOM yapısı hiç dallanmaz, yalnızca
 * "mounted" olana kadar çıktı sabit 0'da tutulur (`useMotionValue(0)`),
 * gerçek scroll eşlemesi yalnızca mount sonrası bir efekt içinde devreye
 * girer (bir efekt her zaman ilk boyamadan sonra çalışır — bu, mount
 * sonrasına ertelemek için yeterlidir), böylece ilk client render'ı sunucu
 * çıktısıyla birebir eşleşir.
 */
export function ParallaxLayer({ children, className, strength = 40 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const range = reduceMotion ? 0 : strength
  const mapped = useTransform(scrollYProgress, [0, 1], [-range, range])
  const y = useMotionValue(0)

  useEffect(() => {
    y.set(mapped.get())
    return mapped.on('change', (v) => y.set(v))
  }, [mapped, y])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
