'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface HorizontalGalleryProps {
  children: React.ReactNode
  className?: string
  /** İlerleme çubuğu rengi için koyu zemin mi? */
  dark?: boolean
}

/**
 * Geniş ekranda (fare + hareket izinli) bölüm sabitlenir ve aşağı kaydırma
 * kartları yatay olarak akıtır. Diğer durumlarda (telefon, tablet, hareket
 * azaltma, JS kapalı) aynı içerik yerel yatay kaydırmalı bir şerittir.
 * Sunucu ve istemci aynı DOM'u üretir; mod yalnızca bir sınıfla değişir.
 */
export function HorizontalGallery({ children, className, dark = false }: HorizontalGalleryProps) {
  const section = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const s = section.current
    const tr = track.current
    if (!s || !tr) return
    const mq = matchMedia(
      '(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)'
    )
    let distance = 0
    let raf = 0

    const measure = () => {
      if (!mq.matches) {
        s.classList.remove('is-pinned')
        s.style.height = ''
        tr.style.transform = ''
        return
      }
      s.classList.add('is-pinned')
      distance = Math.max(0, tr.scrollWidth - window.innerWidth)
      s.style.height = `${window.innerHeight + distance}px`
      update()
    }
    const update = () => {
      raf = 0
      if (!mq.matches) return
      const top = s.getBoundingClientRect().top
      const progress = Math.min(1, Math.max(0, -top / Math.max(1, distance)))
      tr.style.transform = `translate3d(${-progress * distance}px, 0, 0)`
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(tr)
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', onScroll, { passive: true })
    mq.addEventListener('change', measure)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', onScroll)
      mq.removeEventListener('change', measure)
    }
  }, [])

  return (
    <div ref={section} className={cn('hgallery', className)}>
      <div className="hgallery-sticky">
        <div ref={track} className="hgallery-track">
          {children}
        </div>
        <span className={cn('hgallery-progress', dark && 'bg-line-dark')} aria-hidden="true">
          <span ref={bar} className="hgallery-bar" />
        </span>
      </div>
    </div>
  )
}
