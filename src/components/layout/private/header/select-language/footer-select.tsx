import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FooterSelectProps {
  setOpen: (open: boolean) => void
}

export default function FooterSelect({ setOpen }: FooterSelectProps) {
  return (
    <div className="p-1.5">
      <Button
        className="w-full justify-start gap-2 border-none bg-transparent px-2 py-1.5 text-emerald-400 text-xs hover:bg-emerald-500/10 hover:text-emerald-300"
        onClick={() => {
          // Ação de abrir modal ou redirecionamento
          setOpen(false)
        }}
        variant="ghost"
      >
        <Plus className="h-3.5 w-3.5" />
        <span>Adicionar Novo Idioma</span>
      </Button>
    </div>
  )
}
