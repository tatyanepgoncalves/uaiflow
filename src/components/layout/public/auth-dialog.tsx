'use client'

import { Brain, User, X } from 'lucide-react'
import FormLogin from '@/components/public/auth/form-login'
import FormRegister from '@/components/public/auth/form-register'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import useAuthDialog from '@/hooks/public/use-auth-dialog'

export default function AuthDialog() {
  const { isOpen, mode, handleOpenChange, handleTabChange } = useAuthDialog()

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      <DialogTrigger
        render={
          <Button
            className="flex h-10 items-center space-x-1.5 px-3.5 py-1.5 font-bold text-xs shadow-emerald-500/20 shadow-md transition sm:text-sm"
            variant="default"
          />
        }
      >
        <User className="h-3.5 w-3.5" />
        <span>Entrar / Cadastrar</span>
      </DialogTrigger>

      <DialogOverlay className="fixed inset-0 z-50 animate-fade-in bg-zinc-950/80 backdrop-blur-sm" />

      <DialogContent
        className="fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-white shadow-2xl shadow-emerald-500/20 sm:max-w-md sm:p-8"
        showCloseButton={false}
      >
        <DialogClose className="absolute top-5 right-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <X className="h-5 w-5" />
        </DialogClose>

        <DialogHeader className="mb-4 flex-row items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-emerald-500 to-indigo-600 shadow-emerald-500/20 shadow-lg">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="bg-linear-to-r from-white via-emerald-200 to-teal-400 bg-clip-text font-black text-transparent text-xl">
              UAIFlow
            </h2>
            <DialogDescription className="text-slate-400 text-xs">
              {mode === 'entrar'
                ? 'Acesse seu banco pessoal de chunks'
                : 'Crie sua conta e isole seu progresso'}
            </DialogDescription>
          </div>
        </DialogHeader>

        <Tabs className="w-full" onValueChange={handleTabChange} value={mode}>
          <TabsList>
            <TabsTrigger className="font-bold tracking-wider" value="entrar">
              Entrar
            </TabsTrigger>
            <TabsTrigger className="font-bold tracking-wider" value="cadastrar">
              Cadastrar
            </TabsTrigger>
          </TabsList>

          <TabsContent className="mt-4" value="entrar">
            <FormLogin />
          </TabsContent>
          <TabsContent className="mt-4" value="cadastrar">
            <FormRegister />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
