import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/toast'
import { useAuth } from '@/context/auth-context'
import { type LoginFormData, loginSchema } from '@/schemas/auth/login-schema'
import { getUser, loginUser } from '@/services/auth-service'

export default function useLogin() {
  const router = useRouter()
  const { login } = useAuth()

  const form = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  // src/hooks/auth/use-login.ts

  async function onSubmit(data: LoginFormData) {
    await toast.promise(
      (async () => {
        const response = await loginUser(data)

        // Verifica se a Server Action retornou um erro
        // biome-ignore lint/suspicious/noUnnecessaryConditions: it's necessary
        if (!response.success || response.error) {
          throw new Error(response.error || 'Erro ao efetuar login.')
        }

        // Valida o payload de sucesso
        if (!(response.token && response.user?.id)) {
          throw new Error('Resposta inválida do servidor.')
        }

        login(response.user, response.token)

        const userData = await getUser()
        if (!userData) {
          throw new Error('Falha ao carregar os dados do perfil.')
        }

        login(userData, response.token)
        form.reset()

        router.push('/central-de-chunks')

        return response.message || `Bem-vindo(a) de volta, ${userData.name}!`
      })(),
      {
        error: (err: unknown) => {
          if (err instanceof Error) {
            return err.message
          }
          if (typeof err === 'string') {
            return err
          }
          return 'Erro ao realizar login. Tente novamente.'
        },
        loading: 'Entrando...',
        success: (msg) => msg,
      }
    )
  }

  return {
    form,
    onSubmit,
  }
}
