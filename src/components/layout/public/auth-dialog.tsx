'use client'

import { Brain, User, X } from 'lucide-react'
import { useState } from 'react'
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

export default function AuthDialog() {
  const [mode, setMode] = useState<'entrar' | 'cadastrar'>('entrar')

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            className="flex items-center space-x-1.5 px-3.5 py-1.5 font-bold text-xs shadow-emerald-500/20 shadow-md transition sm:text-sm"
            variant="default"
          />
        }
      >
        <User className="h-3.5 w-3.5" /> Entrar / Cadastrar
      </DialogTrigger>

      <DialogOverlay className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm">
        <DialogContent
          className="relative w-full rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-white shadow-2xl shadow-emerald-500/20 sm:max-w-xl sm:p-8"
          showCloseButton={false}
        >
          {/* Close Button */}
          <DialogClose className="absolute top-5 right-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
            <X className="h-5 w-5" />
          </DialogClose>
          <DialogHeader className="flex-row items-center gap-3">
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

          <Tabs
            className="w-full"
            defaultValue="entrar"
            onValueChange={(value) => setMode(value)}
            value={mode}
          >
            <TabsList className="w-full">
              <TabsTrigger className="font-bold tracking-wider" value="entrar">
                Entrar
              </TabsTrigger>
              <TabsTrigger className="font-bold" value="cadastrar">
                Cadastrar
              </TabsTrigger>
            </TabsList>
            <TabsContent value="entrar">Entrar</TabsContent>
            <TabsContent value="cadastrar">Cadastrar</TabsContent>
          </Tabs>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  )
}
