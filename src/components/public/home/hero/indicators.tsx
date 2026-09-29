import { CheckCircle2 } from 'lucide-react'

export default function Indicators() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 pt-6 font-medium text-slate-400 text-xs sm:gap-10">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
        <span>5 Idiomas com Sotaques Nativos</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
        <span>Banco de Dados 100% Isolado por Usuário</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
        <span>Repetição Espaçada Ebbinghaus Adaptativa</span>
      </div>
    </div>
  )
}
