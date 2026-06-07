'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  /** y ekseni kayma miktarı (px). prefers-reduced-motion aktifse 0 olur. */
  yOffset?: number
}

/**
 * Scroll-triggered fade-in animasyonu.
 * Görev 21.2: useInView ile scroll-triggered
 * Görev 21.4: prefers-reduced-motion desteği
 */
export function FadeIn({ children, className, delay = 0, yOffset = 24 }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })
  const shouldReduceMotion = useReducedMotion()

  // prefers-reduced-motion aktifse animasyonu devre dışı bırak
  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: yOffset }

  const animate = isInView
    ? shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0 }
    : initial

  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: 'easeOut' as const, delay }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  )
}
