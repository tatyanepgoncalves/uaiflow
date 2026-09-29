'use server'

import { cookies } from 'next/headers'
import { api, COOKIE_NAME } from '@/lib/axios'

import type { User } from '@/types/user'

export async function getToken(): Promise<string | undefined> {
  const cookieStore = await cookies()
  return cookieStore.get(COOKIE_NAME)?.value
}

export async function setToken(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })
}

// Busca informações do usuário logado
export async function getUser(): Promise<User | null> {
  const token = await getToken()

  if (!token) {
    return null
  }

  const response = await api.get('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const result = response.data?.user

  return result
}

// Remove o token
export async function removeToken() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

export async function handleSignOut() {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value

  // Se token existir, faz a chamada HTTP para invalidar o token e sair do sistema
  if (token) {
    await api.post('/users/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  // Agora que o servidor foi avisado, remove o cookie do navegador com segurança
  await removeToken()
}
