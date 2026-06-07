'use client'

// Görev 21.1: Sayfa geçiş animasyonları
// Framer Motion AnimatePresence + prefers-reduced-motion desteği

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
}

/**
 * Sayfa geçiş animasyonu sarmalayıcı.
 * App Router'da layout.tsx'te children'ı sarmalamak için kullanılır.
 * Görev 21.1: AnimatePresence + layout animasyonu
 * Görev 21.4: prefers-reduced-motion desteği
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  // prefers-reduced-motion aktifse geçiş animasyonlarını devre dışı bırak
  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.25,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
