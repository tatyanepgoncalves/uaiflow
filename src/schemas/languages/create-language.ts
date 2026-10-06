import { z } from 'zod'

export const createLanguageSchema = z.object({
  code: z.string().min(2).optional(),
  name: z.string().min(2).max(100),
})

export type CreateLanguageFormData = z.infer<typeof createLanguageSchema>
