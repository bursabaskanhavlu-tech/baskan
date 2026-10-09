import { z } from 'zod'

// Boş string → undefined: opsiyonel alanlar formdan "" olarak gelebilir.
const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .transform((v) => (v ? v : undefined))

const baseFields = {
  fullName: z.string().trim().min(2, 'Ad soyad en az 2 karakter olmalıdır').max(100),
  // Formlar WhatsApp'a yönlendirdiği için e-posta zorunlu değildir; verilirse doğrulanır.
  email: z
    .union([z.literal(''), z.email('Geçerli bir e-posta adresi giriniz')])
    .optional()
    .transform((v) => (v ? v : undefined)),
  phone: z
    .string()
    .trim()
    .min(7, 'Geçerli bir telefon numarası giriniz')
    .max(25)
    .regex(/^[+()\d\s.-]+$/, 'Geçerli bir telefon numarası giriniz'),
  honeypot: z.string().max(0, 'Bot tespit edildi').optional(),
}

export const quoteSchema = z.object({
  ...baseFields,
  company: optionalText(200),
  productType: optionalText(100),
  quantity: optionalText(100),
  message: optionalText(2000),
})

export const sampleSchema = z.object({
  ...baseFields,
  product: z.string().trim().min(1, 'Lütfen ürün belirtiniz').max(200),
  address: optionalText(500),
  notes: optionalText(1000),
})

export const exportSchema = z.object({
  ...baseFields,
  company: optionalText(200),
  country: z.string().trim().min(1, 'Lütfen ülke belirtiniz').max(100),
  capacity: optionalText(200),
  paymentPreference: optionalText(200),
  message: optionalText(2000),
})

export const contactSchema = z.object({
  ...baseFields,
  subject: optionalText(200),
  message: z.string().trim().min(5, 'Mesaj en az 5 karakter olmalıdır').max(2000),
})

export type QuoteInput = z.infer<typeof quoteSchema>
export type SampleInput = z.infer<typeof sampleSchema>
export type ExportInput = z.infer<typeof exportSchema>
export type ContactInput = z.infer<typeof contactSchema>
