'use client'

import { useRouter } from 'next/navigation'
import { destroyCookie, setCookie } from 'nookies'
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { COOKIE_NAME, COOKIE_STATUS } from '@/lib/axios'
import { getToken, getUser, handleSignOut } from '@/services/auth-service'
import type { User } from '@/types/user'

/**
 * Contrato de dados e métodos expostos pelo AuthContext
 */
interface AuthContextType {
  loading: boolean
  login: (userData: User, token: string) => void
  logout: () => Promise<void>
  user: User | null
}

// Inicialização do contexto React
const AuthContext = createContext<AuthContextType | undefined>(undefined)

/**
 * Provider responsável por gerenciar a sessão do usuário,
 * controle de cookies do JWT e a comunicação com as APIs de auth.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  // Verifica se o ambiente atual é de produção para aplicar a flag de segurança no Cookie
  const isProd = process.env.NODE_ENV === 'production'

  /**
   * Sincronização inicial da sessão.
   * Executa no mount do componente para validar o token gravado e carregar o perfil do usuário.
   */
  useEffect(() => {
    let isMounted = true

    // Manipulador de sucesso: atualiza estado e renova cookies do status do leitor/usuário
    function handleUserLoaded(serverUser: User) {
      setUser(serverUser)
    }

    // Manipulador de falha: reseta o estado e limpa os cookies residuais de autenticação
    function handleAuthFailure() {
      setUser(null)
      destroyCookie(null, COOKIE_NAME, { path: '/' })
      destroyCookie(null, COOKIE_STATUS, { path: '/' })
    }

    function setLoadingIfMounted(value: boolean) {
      if (isMounted) {
        setLoading(value)
      }
    }

    async function syncSession() {
      try {
        const token = await getToken()

        // Se não houver token no storage/cookie, encerra o ciclo de carregamento
        if (!token) {
          setUser(null)
          setLoadingIfMounted(false)
          return
        }

        // Valida o token e busca os dados atualizados do usuário na API
        const serverUser = await getUser()

        if (!isMounted) {
          return
        }

        if (serverUser) {
          handleUserLoaded(serverUser)
        } else {
          handleAuthFailure()
        }
      } catch {
        if (isMounted) {
          setUser(null)
        }
      } finally {
        if (isMounted) {
          setLoadingIfMounted(false)
        }
      }
    }

    syncSession()

    // Cleanup function para evitar vazamento de memória e chamadas em componentes desmontados
    return () => {
      isMounted = false
    }
  }, [])

  /**
   * Registra o login, grava os cookies de autenticação (JWT)
   * e atualiza o estado global de usuário.
   */
  const login = useCallback(
    (userData: User, token: string) => {
      // Define o cookie do token no lado do cliente
      setCookie(null, COOKIE_NAME, token, {
        maxAge: 60 * 60 * 24 * 7, // 7 dias
        path: '/',
        sameSite: 'lax',
        secure: isProd,
      })

      setUser(userData)
    },
    [isProd]
  )

  /**
   * Finaliza a sessão do usuário, invalidando a sessão no servidor (Redis/Fastify)
   * e removendo as credenciais locais.
   */
  const logout = useCallback(async () => {
    setLoading(true)
    try {
      // Requisita o endpoint de revogação/signout no servidor
      await handleSignOut()
    } catch (error) {
      throw new Error('Erro ao efetuar logout no servidor.')
    } finally {
      // Garante a remoção dos cookies locais em qualquer cenário
      destroyCookie(null, COOKIE_NAME, { path: '/' })
      destroyCookie(null, COOKIE_STATUS, { path: '/' })
      setUser(null)
      setLoading(false)

      // Redireciona o leitor/usuário para a tela de login
      router.push('/entrar')
    }
  }, [router])

  /**
   * Prevenção contra a gravação acidental de formulários por atalho (Ctrl+S / Cmd+S)
   * para mitigar re-renders ou comportamentos inconsistentes em modo de desenvolvimento.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCtrlS = (event.ctrlKey || event.metaKey) && event.key === 's'
      if (isCtrlS) {
        event.preventDefault()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <AuthContext.Provider value={{ loading, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Hook customizado para acessar as informações de autenticação do Folhear.
 */
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      'useAuth deve ser utilizado obrigatoriamente dentro de um AuthProvider.'
    )
  }

  return context
}
