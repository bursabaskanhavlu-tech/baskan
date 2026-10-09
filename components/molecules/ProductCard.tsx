import Link from 'next/link'
import type { Product } from '@/content/products'
import { productMediaSlot } from '@/content/media'
import { MediaFrame, type SwatchTone } from '@/components/atoms/MediaFrame'
import { ArrowUpRightIcon } from '@/components/atoms/Icons'

const TONES: Record<string, SwatchTone> = {
  'el-havlusu': 'cream',
  'yuz-havlusu': 'white',
  'banyo-havlusu': 'stone',
  'kafa-havlusu': 'sand',
  'ayak-havlusu': 'cream',
  'promosyon-havlu': 'clay',
  bornoz: 'charcoal',
}

export function productTone(slug: string): SwatchTone {
  return TONES[slug] ?? 'sand'
}

interface ProductCardProps {
  product: Product
  compact?: boolean
}

/** Tüm kart tıklanabilir; görsel, ad, açıklama, kullanım alanları ve MOQ notu. */
export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <Link href={`/new-collection/${product.slug}`} className="group flex h-full flex-col">
      <MediaFrame
        slot={productMediaSlot(product.slug)}
        tone={productTone(product.slug)}
        ratio={compact ? '4 / 3' : '4 / 5'}
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="transition-transform duration-700 ease-out-soft"
      >
        <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper/85 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRightIcon />
        </span>
      </MediaFrame>
      <div className="flex flex-1 flex-col pt-5">
        <h3 className="font-display text-[1.75rem] leading-tight transition-colors group-hover:text-orange-700">
          {product.name.tr}
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-charcoal-600">
          {product.description.tr}
        </p>
        {!compact && (
          <>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {product.useCases.slice(0, 3).map((use) => (
                <li
                  key={use}
                  className="rounded-full border border-line px-3 py-1 text-xs text-charcoal-700"
                >
                  {use}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-5 text-caption text-charcoal-600">
              Minimum sipariş: {product.moq}
            </p>
          </>
        )}
      </div>
    </Link>
  )
}
