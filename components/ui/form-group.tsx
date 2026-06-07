import { cn } from '@/lib/utils'

interface FormGroupProps {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

export function FormGroup({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: FormGroupProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-[#1a1a1a]"
      >
        {label}
        {required && <span className="ml-1 text-[#e87722]">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
