import { contactSchema } from '@/lib/validations/lead.schema'
import { createLeadHandler } from '@/lib/services/lead-handler'

export const POST = createLeadHandler({
  name: 'contact',
  formType: 'contact',
  schema: contactSchema,
  rateLimit: 'contact',
  subject: (d) => `İletişim Formu — ${d.fullName}`,
})
