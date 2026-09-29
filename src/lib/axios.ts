import axios, { type AxiosError } from 'axios'
import { getCookie } from 'cookies-next'

export const COOKIE_NAME = 'uaiflow.token'
export const COOKIE_STATUS = 'uaiflow.status'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor de Requisição (Token)
api.interceptors.request.use(async (config) => {
  try {
    let token: string | undefined

    if (typeof window === 'undefined') {
      const { cookies } = await import('next/headers')
      const cookieStore = await cookies()
      token = cookieStore.get(COOKIE_NAME)?.value
    } else {
      token = getCookie(COOKIE_NAME) as string | undefined
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Erro desconhecido'

    return Promise.reject(new Error(`Erro no interceptor: ${message}`))
  }
})

// Interceptor de Resposta (Apenas padronização da mensagem de erro)
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    const serverMessage = error.response?.data?.message

    // Repassa o erro com a mensagem exata retornada pelo Fastify
    return Promise.reject(
      new Error(serverMessage || error.message || 'Erro no processamento.')
    )
  }
)
