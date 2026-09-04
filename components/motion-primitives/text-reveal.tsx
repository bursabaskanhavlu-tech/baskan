'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  /** Her kelime arası gecikme çarpanı (saniye). */
  wordDelay?: number
  /** İlk kelimenin başlama gecikmesi (saniye). */
  startDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

/**
 * Kelime kelime yukarıdan beliren başlık animasyonu. FadeIn ile aynı
 * SSR-güvenlik kuralına uyar: initial/animate hedefleri (opacity/y) sabittir,
 * yalnızca transition.duration reduceMotion'a göre değişir — DOM yapısı asla
 * dallanmaz (bkz. components/motion-primitives/fade-in.tsx).
 */
export function TextReveal({
  text,
  className,
  wordDelay = 0.06,
  startDelay = 0,
  as = 'span',
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = useReducedMotion()
  const words = text.split(' ')
  const Tag = as as 'span'

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: '100%' }}
            animate={inView ? { opacity: 1, y: '0%' } : { opacity: 0, y: '100%' }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.6,
              delay: reduceMotion ? 0 : startDelay + i * wordDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
