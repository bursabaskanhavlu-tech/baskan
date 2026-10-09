import { quoteSchema } from '@/lib/validations/lead.schema'
import { createLeadHandler } from '@/lib/services/lead-handler'

export const POST = createLeadHandler({
  name: 'lead/quote',
  formType: 'quote',
  schema: quoteSchema,
  rateLimit: 'lead',
  subject: (d) => `Yeni Teklif Talebi — ${d.fullName}`,
})
