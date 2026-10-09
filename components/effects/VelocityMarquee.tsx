'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface VelocityMarqueeProps {
  items: string[]
  className?: string
  /** Temel hız (px/kare). Negatif değer ters yöne akar. */
  speed?: number
  outline?: boolean
}

/**
 * Sürekli akan tipografik şerit; sayfa kaydırma hızıyla hızlanır, yön
 * değiştirir ve hafifçe eğilir. Hareket azaltma tercihinde sabit durur.
 * İkinci kopya yalnızca kesintisiz döngü içindir (aria-hidden).
 */
export function VelocityMarquee({
  items,
  className,
  speed = 0.6,
  outline = false,
}: VelocityMarqueeProps) {
  const wrap = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const w = wrap.current
    const el = inner.current
    if (!w || !el) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let x = 0
    let velocity = 0
    let lastY = window.scrollY
    let direction = Math.sign(speed) || 1
    let raf = 0
    let visible = true

    const loop = () => {
      const y = window.scrollY
      const delta = y - lastY
      lastY = y
      velocity += (delta - velocity) * 0.12
      if (Math.abs(delta) > 0.5) direction = Math.sign(delta) * Math.sign(speed || 1)
      const half = el.scrollWidth / 2
      x -= (Math.abs(speed) + Math.min(Math.abs(velocity) * 0.35, 18)) * direction
      if (half > 0) {
        if (x <= -half) x += half
        if (x > 0) x -= half
      }
      const skew = Math.max(-10, Math.min(10, velocity * 0.25))
      el.style.transform = `translate3d(${x}px,0,0) skewX(${-skew}deg)`
      raf = visible ? requestAnimationFrame(loop) : 0
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false
      if (visible && !raf) raf = requestAnimationFrame(loop)
    })
    io.observe(w)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [speed])

  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex shrink-0 items-center">
          <span className={cn('px-6 sm:px-10', outline && 'text-outline')}>{item}</span>
          <svg
            viewBox="0 0 24 24"
            className="h-[0.4em] w-[0.4em] text-orange-500"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z"
            />
          </svg>
        </li>
      ))}
    </ul>
  )

  return (
    <div ref={wrap} className={cn('overflow-hidden whitespace-nowrap', className)}>
      <div ref={inner} className="flex w-max will-change-transform">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
