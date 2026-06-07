import { z } from 'zod'

const baseFields = {
  fullName: z.string().min(2, 'Ad soyad en az 2 karakter olmalıdır').max(100),
  email: z.string().email('Geçerli bir e-posta adresi giriniz'),
  phone: z.string().min(10, 'Geçerli bir telefon numarası giriniz').max(20),
  honeypot: z.string().max(0, 'Bot tespit edildi').optional(),
}

export const quoteSchema = z.object({
  ...baseFields,
  company: z.string().max(200).optional(),
  productType: z.string().min(1, 'Lütfen ürün türü seçiniz'),
  quantity: z.string().max(100).optional(),
  message: z.string().max(2000).optional(),
})

export const sampleSchema = z.object({
  ...baseFields,
  product: z.string().min(1, 'Lütfen ürün belirtiniz'),
  address: z.string().max(500).optional(),
  notes: z.string().max(1000).optional(),
})

export const exportSchema = z.object({
  ...baseFields,
  company: z.string().max(200).optional(),
  country: z.string().min(1, 'Lütfen ülke belirtiniz'),
  capacity: z.string().max(200).optional(),
  paymentPreference: z.string().max(200).optional(),
  message: z.string().max(2000).optional(),
})

export const contactSchema = z.object({
  ...baseFields,
  subject: z.string().max(200).optional(),
  message: z.string().min(5, 'Mesaj en az 5 karakter olmalıdır').max(2000),
})

export type QuoteInput = z.infer<typeof quoteSchema>
export type SampleInput = z.infer<typeof sampleSchema>
export type ExportInput = z.infer<typeof exportSchema>
export type ContactInput = z.infer<typeof contactSchema>
