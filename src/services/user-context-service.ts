import { api } from '@/lib/axios'
import type {
  CreateUserContextBodyData,
  CreateUserContextQueryData,
} from '@/schemas/user-contexto/create-user-context'
import { getToken } from './auth-service'

export async function createUserContext(
  query: CreateUserContextQueryData,
  data: CreateUserContextBodyData
) {
  try {
    const token = await getToken()

    if (!token) {
      throw new Error('Token não encontrado ou inválido.')
    }

    const response = await api.post('/contexts', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        ...(query.languageId && { languageId: query.languageId }),
        ...(query.languageSlug && { languageSlug: query.languageSlug }),
      },
    })

    console.log(response.data)

    return response.data
  } catch (error: any) {
    const message =
      error.response?.data?.message || 'Erro ao guardar o contexto de estudo.'

    console.log(message)

    return message
  }
}
