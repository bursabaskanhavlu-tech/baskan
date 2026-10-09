import Image from 'next/image'
import { MEDIA, type MediaSlot } from '@/content/media'
import { cn } from '@/lib/utils'

export type SwatchTone = 'cream' | 'sand' | 'stone' | 'clay' | 'charcoal' | 'white'

interface MediaFrameProps {
  /** content/media.ts içindeki fotoğraf yuvası; boşsa kumaş dokusu gösterilir. */
  slot?: MediaSlot | null
  tone?: SwatchTone
  /** CSS aspect-ratio değeri, ör. '4 / 5'. Verilmezse kapsayıcının yüksekliğini doldurur. */
  ratio?: string
  /** Paspartu çerçeve: ince kenarlı açık zemin üzerinde içe alınmış görsel. */
  framed?: boolean
  /** Dokuma bordür bandını gizler (küçük küçük kartlar için). */
  plain?: boolean
  /** Kaydırınca maske açılımı animasyonu. */
  animate?: boolean
  sizes?: string
  priority?: boolean
  className?: string
  children?: React.ReactNode
}

/**
 * Sitedeki tüm görsel alanları için tek bileşen. Gerçek fotoğraf eklendiğinde
 * yalnızca content/media.ts güncellenir; sayfa kodlarına dokunulmaz.
 */
export function MediaFrame({
  slot,
  tone = 'sand',
  ratio,
  framed = false,
  plain = false,
  animate = true,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  className,
  children,
}: MediaFrameProps) {
  const asset = slot ? MEDIA[slot] : null

  const inner = asset ? (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
    />
  ) : (
    <div
      className={cn('swatch absolute inset-0', `swatch-${tone}`, plain && 'swatch-plain')}
      aria-hidden="true"
    />
  )

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        framed && 'border border-line bg-white p-2.5 sm:p-3',
        className
      )}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <div className={cn('relative h-full w-full overflow-hidden', animate && 'reveal-media')}>
        {inner}
        {children}
      </div>
    </div>
  )
}
