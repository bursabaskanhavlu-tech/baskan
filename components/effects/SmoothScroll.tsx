'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

/**
 * Akıcı (ataletli) kaydırma. Hareket azaltma tercihi açıkken ve dokunmatik
 * cihazlarda devre dışıdır — yerel kaydırma korunur. Sayfa değişince başa döner.
 */
export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!matchMedia('(pointer: fine)').matches) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -96 } })
    ;(window as Window & { __lenis?: Lenis }).__lenis = lenis
    return () => {
      lenis.destroy()
      delete (window as Window & { __lenis?: Lenis }).__lenis
    }
  }, [])

  useEffect(() => {
    ;(window as Window & { __lenis?: Lenis }).__lenis?.scrollTo(0, { immediate: true })
  }, [pathname])

  return null
}
