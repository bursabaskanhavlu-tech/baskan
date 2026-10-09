import { exportSchema } from '@/lib/validations/lead.schema'
import { createLeadHandler } from '@/lib/services/lead-handler'

export const POST = createLeadHandler({
  name: 'lead/export',
  formType: 'export',
  schema: exportSchema,
  rateLimit: 'lead',
  subject: (d) => `İhracat Sorgulama — ${d.fullName} / ${d.country}`,
})
