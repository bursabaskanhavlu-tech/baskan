'use client'

import { useEffect, useRef } from 'react'

/**
 * Hero arka planı: dokuma tezgâhındaki çözgü iplikleri gibi dalgalanan
 * çizgiler. İmleç / parmak geçtikçe iplikler yana itilir. Tamamen dekoratiftir;
 * ekran dışındayken ve sekme gizliyken çizim durur, hareket azaltma
 * tercihinde tek kare çizilir.
 */
export function ThreadField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let raf = 0
    let visible = true
    let t = 0
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, strength: 0 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const lines = width < 640 ? 34 : 56
      const gap = height / (lines + 1)
      const step = width < 640 ? 14 : 10

      pointer.x += (pointer.tx - pointer.x) * 0.08
      pointer.y += (pointer.ty - pointer.y) * 0.08
      const radius = Math.max(140, width * 0.14)

      for (let i = 0; i < lines; i++) {
        const baseY = gap * (i + 1)
        const accent = i % 7 === 3
        ctx.beginPath()
        for (let x = -step; x <= width + step; x += step) {
          const wave =
            Math.sin(x * 0.006 + t * 0.9 + i * 0.32) * 9 +
            Math.sin(x * 0.0021 - t * 0.5 + i * 0.11) * 14
          const dx = x - pointer.x
          const dy = baseY - pointer.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const push = dist < radius ? (1 - dist / radius) ** 2 * 46 * pointer.strength : 0
          const y = baseY + wave + (dy >= 0 ? push : -push)
          if (x === -step) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = accent ? 'rgba(232,119,34,0.55)' : 'rgba(224,212,192,0.13)'
        ctx.lineWidth = accent ? 1.2 : 1
        ctx.stroke()
      }
    }

    const loop = () => {
      if (!visible || document.hidden) {
        raf = 0
        return
      }
      t += 0.012
      pointer.strength += ((pointer.tx > -9000 ? 1 : 0) - pointer.strength) * 0.05
      draw()
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (!raf && !reduce) raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = e.clientX - rect.left
      pointer.ty = e.clientY - rect.top
    }
    const onLeave = () => {
      pointer.tx = -9999
      pointer.ty = -9999
    }

    resize()
    draw()
    const ro = new ResizeObserver(() => {
      resize()
      draw()
    })
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false
      if (visible) start()
    })
    io.observe(canvas)
    const host = canvas.parentElement
    host?.addEventListener('pointermove', onMove)
    host?.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', start)
    start()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      host?.removeEventListener('pointermove', onMove)
      host?.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', start)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
