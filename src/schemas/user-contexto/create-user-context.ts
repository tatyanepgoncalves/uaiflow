import { z } from 'zod'

export const createUserContext = z.object({
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
  languageId: z.string().uuid(),
  learningGoals: z.union([z.string(), z.array(z.string())]).nullable(),
})

export type CreateUserContextBodyData = z.infer<typeof createUserContext>
