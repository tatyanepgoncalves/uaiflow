import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/toast'
import { useAuth } from '@/context/auth-context'
import {
  type RegisterFormData,
  registerSchema,
} from '@/schemas/auth/register-schema'
import { registerUser } from '@/services/auth-service'

export default function useRegister() {
  const router = useRouter()
  const { login } = useAuth()

  const form = useForm<RegisterFormData>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      name: '',
      password: '',
      professionArea: '',
    },
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(data: RegisterFormData) {
    const payload = {
      ...data,
    }

    try {
      // EXECUTA O CADASTRO NA SERVER ACTION
      const response = await registerUser(payload)

      // Se a resposta for de erro ou o cadastro falhar
      // biome-ignore lint/suspicious/noUnnecessaryConditions: it's necessary
      if (!response?.success || response.error) {
        toast.add({
          description:
            // biome-ignore lint/suspicious/noUnnecessaryConditions: it's necessary
            response?.error ||
            // biome-ignore lint/suspicious/noUnnecessaryConditions: it's necessary
            response?.message ||
            'Não foi possível criar a conta.',
          title: 'Erro ao realizar cadastro',
          type: 'error',
        })
        return
      }

      const { user, token, message } = response

      // Atualiza o contexto de autenticação do cliente
      if (token && user) {
        login(user, token)
      }

      toast.add({
        title: message || 'Conta criada com sucesso!',
        type: 'success',
      })

      form.reset()
      router.push('/cadastrar-contexto')

      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      const message =
        error.data?.message || error.message || 'Tente novamente em instantes.'
      console.log(message)

      toast.add({
        description: message,
        title: 'Erro inesperado',
        type: 'error',
      })
    }
  }

  return {
    form,
    onSubmit,
  }
}
