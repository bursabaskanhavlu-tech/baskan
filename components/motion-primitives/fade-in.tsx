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

export function FadeIn({ children, className, delay = 0, ...rest }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' })
  const reduceMotion = useReducedMotion()

  const hiddenState = { opacity: 0, y: reduceMotion ? 0 : 24 }

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={isInView ? { opacity: 1, y: 0 } : hiddenState}
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
