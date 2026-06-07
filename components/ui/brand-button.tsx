'use client'

import { cn } from '@/lib/utils'

interface BrandButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'whatsapp' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  href?: string
  asChild?: boolean
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-[#e87722] text-white border border-[#e87722] hover:bg-[#cc6419] hover:border-[#cc6419] focus-visible:ring-[#e87722]/50',
  secondary:
    'bg-white text-[#e87722] border border-[#e87722] hover:bg-[#fff7f0] focus-visible:ring-[#e87722]/50',
  ghost:
    'bg-transparent text-[#1a1a1a] border border-transparent hover:bg-[#f5f0ea] focus-visible:ring-[#1a1a1a]/20',
  whatsapp:
    'bg-[#25d366] text-white border border-[#25d366] hover:bg-[#1fb956] focus-visible:ring-[#25d366]/50',
  destructive:
    'bg-red-600 text-white border border-red-600 hover:bg-red-700 focus-visible:ring-red-500/50',
}

const sizeClasses: Record<string, string> = {
  sm: 'h-9 px-4 text-sm rounded-md',
  md: 'h-11 px-5 text-sm rounded-md',
  lg: 'h-13 px-7 text-base rounded-md',
}

export function BrandButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}: BrandButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-40',
        'min-h-[44px] min-w-[44px]',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
