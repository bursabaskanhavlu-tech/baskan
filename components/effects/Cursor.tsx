'use client'

import { useEffect, useRef } from 'react'

/**
 * Masaüstü özel imleci: küçük nokta + gecikmeli halka. `data-cursor="Gör"`
 * taşıyan öğelerin üzerinde halka büyür ve etiketi gösterir; bağlantı ve
 * butonlarda hafifçe büyür. Dokunmatik cihazlarda ve hareket azaltma
 * tercihinde hiç çalışmaz (sistem imleci kullanılır).
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const d = dot.current
    const r = ring.current
    const l = label.current
    if (!d || !r || !l) return

    document.documentElement.classList.add('has-cursor')
    let x = -100
    let y = -100
    let rx = -100
    let ry = -100
    let raf = 0

    const loop = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      d.style.transform = `translate3d(${x}px, ${y}px, 0)`
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const target = e.target instanceof Element ? e.target : null
      const labeled = target?.closest<HTMLElement>('[data-cursor]')
      const interactive = target?.closest('a, button, summary, label, select, input, textarea')
      r.dataset.state = labeled ? 'label' : interactive ? 'hover' : ''
      l.textContent = labeled?.dataset.cursor ?? ''
    }
    const onDown = () => (r.dataset.press = 'true')
    const onUp = () => (r.dataset.press = '')
    const onLeave = () => {
      x = -100
      y = -100
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true">
        <span ref={label} className="cursor-label" />
      </div>
    </>
  )
}
