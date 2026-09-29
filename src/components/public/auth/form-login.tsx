import { ArrowRight, LockIcon, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function FormLogin() {
  return (
    <form className="space-y-4">
      {/* EMAIL */}
      <div className="space-y-2">
        <Label>E-mail</Label>
        <div className="group relative">
          <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
          <Input
            className="pr-4 pl-9"
            placeholder="seuemail@exemplo.com"
            type="email"
          />
        </div>
      </div>

      {/* SENHA */}
      <div className="space-y-2">
        <Label>Senha</Label>
        <div className="group relative">
          <LockIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500" />
          <Input
            className="pr-4 pl-9"
            placeholder="************"
            type="password"
          />
        </div>
      </div>

      <Button type="submit" variant="auth">
        Entrar na plataforma
        <ArrowRight className='w-4 h-4' />
      </Button>
    </form>
  )
}
