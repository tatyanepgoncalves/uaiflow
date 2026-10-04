'use server'

import { isAxiosError } from 'axios'
import { cookies } from 'next/headers'
import { api, COOKIE_NAME } from '@/lib/axios'
import type { LoginFormData } from '@/schemas/auth/login-schema'
import type { RegisterFormData } from '@/schemas/auth/register-schema'
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

// Cadastra o usuário
export async function registerUser(data: RegisterFormData) {
  const { confirmPassword, ...payload } = data
  const response = await api.post('/users', payload)
  const { user, token, message } = response.data

  if (!user) {
    return {
      error: 'Servidor não retornou dados do usuário.',
      success: false,
    }
  }

  if (token) {
    await setToken(token)
  }

  return { message, success: true, token: token || null, user }
}

// Loga usuário
export async function loginUser(data: LoginFormData) {
  try {
    const response = await api.post('/session', data)
    const { user, token, message } = response.data

    if (!(user && token)) {
      throw new Error('Resposta ou token inválido do servidor.')
    }

    await setToken(token)

    return { message, success: true, token, user }
  } catch (error) {
    if (isAxiosError(error)) {
      const apiMessage =
        error.response?.data?.message || 'Erro na comunicação com o servidor.'
      // biome-ignore lint/style/useErrorCause: it's necessary
      throw new Error(apiMessage)
    }

    // biome-ignore lint/style/useErrorCause: it's necessary
    throw new Error('Ocorreu um erro inesperado ao realizar o login.')
  }
}

export async function handleSignOut() {
  const cookieStore = await cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value

  // Se token existir, faz a chamada HTTP para invalidar o token e sair do sistema
  if (token) {
    await api.post('/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }

  // Agora que o servidor foi avisado, remove o cookie do navegador com segurança
  await removeToken()
}
