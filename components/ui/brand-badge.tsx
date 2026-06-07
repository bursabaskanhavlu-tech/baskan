import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'premium' | 'new' | 'export' | 'hotel' | 'certificate'

interface BrandBadgeProps {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-[#f5f0ea] text-[#404040]',
  premium: 'bg-[#fff7f0] text-[#cc6419]',
  new: 'bg-[#1a1a1a] text-white',
  export: 'bg-[#2d2d2d] text-white',
  hotel: 'bg-[#c4a882] text-white',
  certificate: 'bg-emerald-50 text-emerald-700',
}

export function BrandBadge({ variant = 'default', className, children }: BrandBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex h-[22px] items-center rounded-full px-2 text-[11px] font-semibold uppercase tracking-[0.06em]',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
