import { api } from '@/lib/axios'
import type { CreateLanguageFormData } from '@/schemas/languages/create-language'
import { getToken } from './auth-service'

export interface LanguageItem {
  code: string
  id: string
  name: string
}

export async function getLanguage(): Promise<LanguageItem[]> {
  const token = await getToken()

  if (!token) {
    throw new Error('Token não encontrado ou inválido.')
  }

  const response = await api.get('/languages', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data?.languages || response.data?.language || response.data
}

export async function createLanguage(data: CreateLanguageFormData) {
  const token = await getToken()

  if (!token) {
    throw new Error('Token não encontrado ou inválido.')
  }

  const response = await api.post('/languages', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const message = response.data?.language || response.data

  console.log(message)

  return message
}
