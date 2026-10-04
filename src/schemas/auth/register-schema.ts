import { z } from 'zod'

export const registerSchema = z
  .object({
    confirmPassword: z.string().min(1, 'Confirme sua senha'),
    email: z
      .string()
      .email('Informe um e-mail válido')
      .max(150, 'O e-mail deve ter no máximo 150 caracteres'),
    name: z
      .string()
      .min(2, 'O nome deve ter no mínimo 2 caracteres')
      .max(100, 'O nome deve ter no máximo 100 caracteres'),
    password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    professionArea: z.union([z.string().min(2), z.array(z.string().min(2))]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type RegisterFormData = z.infer<typeof registerSchema>
