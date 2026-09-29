import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Buttons() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
      <Button className="w-full sm:w-fit" size="xl" variant="hero">
        Começar prática <ArrowRight className="h-4 w-4" />
      </Button>

      <Button className="w-full sm:w-fit" size="xl" variant="outline">
        Entrar / Criar conta
      </Button>
    </div>
  )
}
