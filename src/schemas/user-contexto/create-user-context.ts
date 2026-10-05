import { z } from 'zod'

export const createUserContext = {
  body: z.object({
    currentLevel: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']).default('A1'),
    dailyGoalChunks: z.number().int().min(1).max(100).default(3),
    difficultyNotes: z
      .union([z.string(), z.array(z.string())])
      .nullable()
      .optional(),
    interests: z
      .union([z.string(), z.array(z.string())])
      .nullable()
      .optional(),
    isActive: z.boolean().default(true),
    learningGoals: z
      .union([z.string(), z.array(z.string())])
      .nullable()
      .optional(),
  }),
  querystring: z
    .object({
      languageId: z.string().uuid().optional(),
      languageSlug: z.string().optional(),
    })
    .refine((data) => data.languageId || data.languageSlug, {
      message: 'É necessário fornecer ao menos o ID ou o Slug do idioma.',
      path: ['languageId'],
    }),
}

export type CreateUserContextBodyData = z.infer<typeof createUserContext.body>
export type CreateUserContextQueryData = z.infer<
  typeof createUserContext.querystring
>
