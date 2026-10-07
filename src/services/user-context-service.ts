import { api } from '@/lib/axios'
import type { CreateUserContextBodyData } from '@/schemas/user-contexto/create-user-context'
import { getToken } from './auth-service'

export async function createUserContext(
  languageId: string,
  data: CreateUserContextBodyData
) {
  const token = await getToken()

  if (!token) {
    throw new Error('Token não encontrado ou inválido.')
  }

  const response = await api.post('/contexts', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      languageId: languageId || data.languageId,
    },
  })

  return response.data
}
