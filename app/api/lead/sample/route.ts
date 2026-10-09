import { sampleSchema } from '@/lib/validations/lead.schema'
import { createLeadHandler } from '@/lib/services/lead-handler'

export const POST = createLeadHandler({
  name: 'lead/sample',
  formType: 'sample',
  schema: sampleSchema,
  rateLimit: 'lead',
  subject: (d) => `Yeni Numune Talebi — ${d.fullName}`,
})
