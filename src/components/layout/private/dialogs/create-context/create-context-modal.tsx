'use client'

import { Plus } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import TabContext from './tab-context'

interface CreateContextModalProps {
  // Passamos os idiomas disponíveis para o usuário escolher qual cadastrar
  availableLanguages?: Array<{ id: string; name: string; code: string }>
  onOpenChange: (open: boolean) => void
  open: boolean
  userId: string
}

export default function CreateContextModal({
  open,
  onOpenChange,
}: CreateContextModalProps) {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="w-full border-zinc-700/60 bg-zinc-900 text-white shadow-2xl sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-bold text-lg text-white">
            <Plus className="h-5 w-5 text-emerald-400" />
            Adicionar Novo Idioma / Contexto
          </DialogTitle>
          <DialogDescription className="text-xs text-zinc-400">
            Configure um novo contexto de aprendizado para a sua conta.
          </DialogDescription>
        </DialogHeader>
        <TabContext />
      </DialogContent>
    </Dialog>
  )
}
