import { useState } from 'react'
import { toast } from '@/components/ui/toast'
import { useAuth } from '@/context/auth-context'
import { handleSignOut } from '@/services/auth-service'

export default function useLogout() {
  const { logout, user } = useAuth()

  const [isLoggingOut, setIsLoggingOut] = useState(false)

  // biome-ignore lint/suspicious/useAwait: it isn't AWAIT necessary
  const handleLogout = async () => {
    setIsLoggingOut(true)
    const logoutProcess = async () => {
      // Busca o usuário atual antes de apagar o token
      const nome = user?.name || user?.name.split('')[0] || 'Usuário'

      // Chama a função e remove o token (handleSignOut)
      await handleSignOut()

      return nome
    }

    toast.promise(logoutProcess(), {
      error: (_err) => {
        setIsLoggingOut(false)
        return 'Erro ao sair. Tente novamente.'
      },
      loading: 'Saindo...',
      success: (nome) => {
        setIsLoggingOut(false)
        logout()
        return `Até mais, ${nome}!`
      },
    })
  }

  return {
    handleLogout,
    isLoggingOut,
    logout,
    setIsLoggingOut,
  }
}
