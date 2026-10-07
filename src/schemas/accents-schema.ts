import { z } from 'zod'

export const accentFilterSchema = z.object({
  idLanguage: z.string().optional(),
  name: z.string().optional(),
  slugLanguage: z.string().optional(),
})

export type AccentFilters = z.infer<typeof accentFilterSchema>

// Body da requisição
export const createAccentsBodySchema = z.object({
  description: z.string().optional().nullable(),
  languageId: z.string().uuid(),
  name: z.string().min(2),
})

export type CreateAccentsBody = z.infer<typeof createAccentsBodySchema>
