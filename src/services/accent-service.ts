import { api } from '@/lib/axios'
import type { CreateAccentsBody } from '@/schemas/accents-schema'
import { getToken } from './auth-service'

export interface AccentItem {
  code?: string
  id?: string
  languageCode?: string
  name: string
}

// GET /accents (ou por idioma: /accents?languageCode=en)
export async function getAccentsByLanguage(id: string) {
  const token = await getToken()

  if (!token) {
    throw new Error('Token não encontrado ou inválido.')
  }

  const response = await api.get(`/accents/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data?.accents || response.data
}

// POST /accents (Caso o utilizador crie um sotaque customizado)
export async function createAccent(data: CreateAccentsBody) {
  const token = await getToken()

  if (!token) {
    throw new Error('Token não encontrado ou inválido.')
  }

  const response = await api.post('/accents', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      languageId: data.languageId,
    },
  })

  return response.data?.accent || response.data
}
