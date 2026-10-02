import { ChevronRight, Compass } from 'lucide-react'
import Link from 'next/link'
import type { ContextStudioItem } from './types'

interface ContextStudioCardProps {
  data: ContextStudioItem
}

export function ContextStudioCard({ data }: ContextStudioCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-indigo-900/40 bg-linear-to-b from-[#0B0F1D] to-[#05080E] p-6 text-white shadow-xl transition-all duration-300 hover:border-indigo-700/60">
      <div>
        {/* Ícone */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
          <Compass className="h-5 w-5" />
        </div>

        {/* Título */}
        <h3 className="mt-4 font-bold text-white text-xl">{data.title}</h3>

        {/* Descrição */}
        <p className="mt-3 text-xs text-zinc-300 leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Botão de Ação */}
      <div className="mt-8">
        <Link
          className="inline-flex items-center gap-1.5 font-bold text-indigo-400 text-xs transition-colors group-hover:text-indigo-300"
          href={data.href || '#'}
        >
          {data.actionText}
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
