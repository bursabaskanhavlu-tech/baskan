'use client'

import { useRef, useEffect } from 'react'
import { useInView, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'

interface CountUpProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}

/**
 * Görünüme girince 0'dan hedef değere sayan istatistik. reduceMotion açıkken
 * spring anında hedefe oturur (element/DOM dallanması yok, sadece süre 0).
 */
export function CountUp({ value, suffix = '', prefix = '', className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduceMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, {
    duration: reduceMotion ? 0 : 1600,
    bounce: 0,
  })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
    })
  }, [spring, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
