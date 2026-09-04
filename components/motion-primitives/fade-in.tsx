'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  'aria-hidden'?: boolean
}

// Sabit (reduceMotion'a bağlı olmayan) initial/animate hedefleri: bu değerler
// SSR çıktısındaki inline style'a doğrudan yansır. reduceMotion sunucuda her
// zaman null, tarayıcıda ise (bu projede daha önce yaşanmış bir olayda olduğu
// gibi) senkron şekilde gerçek işletim sistemi tercihini döndürebiliyor — yani
// istemcinin İLK render'ı bile sunucudan farklı olabilir. Bu yüzden
// reduceMotion, yalnızca `transition` (süre/gecikme) değerlerini etkiler;
// `initial`/`animate` hedefleri her zaman sabittir ve hydration uyuşmazlığı
// oluşturmaz.
const HIDDEN = { opacity: 0, y: 24 }
const VISIBLE = { opacity: 1, y: 0 }

export function FadeIn({ children, className, delay = 0, ...rest }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={HIDDEN}
      animate={isInView ? VISIBLE : HIDDEN}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        ease: 'easeOut',
        delay: reduceMotion ? 0 : delay,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
