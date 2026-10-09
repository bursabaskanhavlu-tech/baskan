'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

const finePointer = () =>
  typeof window !== 'undefined' &&
  matchMedia('(pointer: fine)').matches &&
  !matchMedia('(prefers-reduced-motion: reduce)').matches

interface WrapperProps {
  children: React.ReactNode
  className?: string
}

/** İmlece doğru hafifçe çekilen sarmalayıcı (butonlar için). */
export function Magnetic({
  children,
  className,
  strength = 0.28,
}: WrapperProps & { strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className={cn('magnetic inline-flex', className)}
      onPointerMove={(e) => {
        if (!finePointer() || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        const x = (e.clientX - r.left - r.width / 2) * strength
        const y = (e.clientY - r.top - r.height / 2) * strength
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = ''
      }}
    >
      {children}
    </div>
  )
}

/** İmlece göre 3B eğilen kart; içindeki `.tilt-glare` parlaması imleci izler. */
export function Tilt({ children, className, max = 7 }: WrapperProps & { max?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className={cn('tilt', className)}
      onPointerMove={(e) => {
        if (!finePointer() || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        ref.current.style.setProperty('--rx', `${(0.5 - py) * max}deg`)
        ref.current.style.setProperty('--ry', `${(px - 0.5) * max}deg`)
        ref.current.style.setProperty('--gx', `${px * 100}%`)
        ref.current.style.setProperty('--gy', `${py * 100}%`)
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty('--rx', '0deg')
        ref.current?.style.setProperty('--ry', '0deg')
      }}
    >
      {children}
    </div>
  )
}

/** İmleci takip eden yumuşak turuncu ışık (koyu yüzeyler için). */
export function Spotlight({ children, className }: WrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div
      ref={ref}
      className={cn('spotlight', className)}
      onPointerMove={(e) => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--sx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--sy', `${e.clientY - r.top}px`)
      }}
    >
      {children}
    </div>
  )
}
