import Image from 'next/image'
import { MEDIA, type MediaSlot } from '@/content/media'
import { cn } from '@/lib/utils'
import { TowelArt, type ArtTone, type TowelVariant } from '@/components/atoms/TowelArt'

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
  /** Fotoğraf yokken gösterilecek havlu illüstrasyonu (verilmezse düz kumaş dokusu). */
  art?: TowelVariant
  artTone?: ArtTone
  artAccent?: ArtTone
  /** İllüstrasyon zemini koyu mu? */
  dark?: boolean
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
  art,
  artTone = 'cream',
  artAccent,
  dark = false,
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
  ) : art ? (
    <div
      className={cn(
        'absolute inset-0 grid place-items-center',
        dark ? 'bg-charcoal-800' : 'bg-beige-100'
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          'absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl',
          dark ? 'bg-orange-500/15' : 'bg-white/70'
        )}
      />
      <TowelArt
        variant={art}
        tone={artTone}
        accent={artAccent}
        className="relative h-[78%] w-[78%] transition-transform duration-700 ease-out-soft group-hover:scale-105 group-hover:-rotate-3"
      />
    </div>
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
