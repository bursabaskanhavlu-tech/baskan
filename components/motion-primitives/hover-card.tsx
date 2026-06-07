'use client'

// Görev 21.3: Kart hover efektleri
// translateY(-4px) + gölge artışı + prefers-reduced-motion desteği

import { motion, useReducedMotion } from 'framer-motion'

interface HoverCardProps {
  children: React.ReactNode
  className?: string
}

/**
 * Kart hover animasyonu.
 * Görev 21.3: translateY(-4px) + shadow artışı, 200ms ease-out
 * Görev 21.4: prefers-reduced-motion desteği
 */
export function HoverCard({ children, className }: HoverCardProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}
