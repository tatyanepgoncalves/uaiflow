'use client'

import {
  ArrowRight,
  Eye,
  EyeOff,
  Loader,
  LockIcon,
  Mail,
  User,
} from 'lucide-react'
import { useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useRegister from '@/hooks/public/use-register'

export default function FormRegister() {
  const { form, onSubmit } = useRegister()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleTogglePassword = useCallback(() => {
    setShowPassword((current) => !current)
  }, [])

  const handleToggleConfirmPassword = useCallback(() => {
    setShowConfirmPassword((current) => !current)
  }, [])

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      {/* NOME */}
      <div className="space-y-2">
        <Label htmlFor="name">Nome Completo</Label>
        <div className="group relative">
          <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
          <Input
            className="pr-4 pl-9"
            id="name"
            {...form.register('name')}
            placeholder="Seu nome completo"
            type="text"
          />
        </div>
        {form.formState.errors.name ? (
          <p className="text-red-500 text-sm">
            {form.formState.errors.name.message}
          </p>
        ) : null}
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <div className="group relative">
          <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
          <Input
            className="pr-4 pl-9"
            id="email"
            {...form.register('email')}
            placeholder="seuemail@exemplo.com"
            type="email"
          />
        </div>

        {form.formState.errors.email ? (
          <p className="text-destructive text-sm">
            {form.formState.errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="professionArea">Área de Atuação / Profissão</Label>
        <div className="group relative">
          <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
          <Input
            className="pr-4 pl-9"
            id="professionArea"
            {...form.register('professionArea')}
            placeholder="Ex: Tecnologia, Design, Marketing"
            type="text"
          />
        </div>
        <p className="text-xs text-zinc-500">
          Pode inserir uma profissão ou várias separadas por vírgula.
        </p>
        {form.formState.errors.professionArea ? (
          <p className="text-destructive text-sm">
            {form.formState.errors.professionArea.message}
          </p>
        ) : null}
      </div>

      {/* SENHA */}
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <div className="group relative flex items-center">
          <LockIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
          <Input
            className="pr-4 pl-9"
            id="password"
            {...form.register('password')}
            placeholder="************"
            type={showPassword ? 'text' : 'password'}
          />

          <button
            className="absolute right-3.5"
            onClick={handleTogglePassword}
            type="button"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>

        {form.formState.errors.password ? (
          <p className="text-destructive text-sm">
            {form.formState.errors.password.message}
          </p>
        ) : null}
      </div>

      {/* CONFIRMAR SENHA */}
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
        <div className="group relative flex items-center">
          <LockIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
          <Input
            className="pr-4 pl-9"
            id="confirmPassword"
            {...form.register('confirmPassword')}
            placeholder="************"
            type={showConfirmPassword ? 'text' : 'password'}
          />
          <button
            className="absolute right-3.5"
            onClick={handleToggleConfirmPassword}
            type="button"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        {form.formState.errors.confirmPassword ? (
          <p className="text-destructive text-sm">
            {form.formState.errors.confirmPassword.message}
          </p>
        ) : null}
      </div>

      <Button
        className="w-full"
        disabled={form.formState.isSubmitting}
        type="submit"
        variant="auth"
      >
        {form.formState.isSubmitting ? (
          <span className="flex items-center">
            <Loader className="h-4 w-4 animate-spin" />
            <span className="ml-2">Criando conta...</span>
          </span>
        ) : (
          <>
            Criar conta e iniciar <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
