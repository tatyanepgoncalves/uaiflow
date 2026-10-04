'use client'

import { ArrowRight, Eye, EyeOff, LockIcon, Mail } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useLogin from '@/hooks/public/use-login'

export default function FormLogin() {
  const { form, onSubmit } = useLogin()
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = useCallback(() => {
    setShowPassword((current) => !current)
  }, [])

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      {/* EMAIL */}
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <div className="group relative">
          <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
          <Input
            className="pr-4 pl-9"
            id="email"
            placeholder="seuemail@exemplo.com"
            type="email"
            {...form.register('email')}
          />
        </div>

        {form.formState.errors.email ? (
          <p className="text-red-500 text-sm">
            {form.formState.errors.email.message}
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
            placeholder="************"
            type={showPassword ? 'text' : 'password'}
            {...form.register('password')}
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
      </div>

      <Button className="w-full" type="submit" variant="auth">
        Entrar na plataforma
        <ArrowRight className="h-4 w-4" />
      </Button>
    </form>
  )
}
