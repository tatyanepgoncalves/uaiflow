import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { LanguageItem } from './types'

interface LanguageCardProps {
  language: LanguageItem
}

export function LanguageCard({ language }: LanguageCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col justify-between rounded-2xl border bg-zinc-900 p-6 text-white transition-all duration-300 hover:border-zinc-700',
        language.isHighlighted
          ? 'border-emerald-500/80 shadow-emerald-500/5 shadow-lg'
          : 'border-zinc-800/80'
      )}
    >
      <div>
        {/* Topo: Código e Nível CEFR */}
        <div className="flex items-start justify-between">
          <span className="font-normal text-xl text-zinc-200">
            {language.code}
          </span>
          <Badge
            className="rounded border-zinc-700 bg-zinc-800 font-semibold text-[11px] text-zinc-400 tracking-wider"
            variant="outline"
          >
            CEFR A1 — C2
          </Badge>
        </div>

        {/* Nome do Idioma */}
        <div className="mt-3">
          <h3 className="font-bold text-white text-xl">{language.name}</h3>
          <p className="font-medium text-[#00d492] text-xs">
            {language.nativeName}
          </p>
        </div>

        {/* Descrição */}
        <p className="mt-4 text-xs text-zinc-300 leading-relaxed">
          {language.description}
        </p>

        {/* Divisor Interno */}
        <div className="my-5 border-slate-800/60 border-t" />

        {/* Tópicos de Foco */}
        <div className="space-y-1.5 border-zinc-800/80 border-t pt-2">
          <span className="font-bold text-[10px] text-zinc-500 uppercase tracking-wider">
            {language.focusTitle}
          </span>
          <ul className="mt-2 space-y-1.5">
            {language.topics.map((topic) => (
              <li
                className="flex items-start text-xs text-zinc-400"
                key={topic}
              >
                <span className="mr-2 text-emerald-400">•</span>
                <span className="truncate">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botão de Ação no Rodapé */}
      <div className="mt-8 border-zinc-800 border-t pt-4">
        <Link
          className="inline-flex items-center gap-1.5 font-bold text-emerald-400 text-xs transition-colors group-hover:text-emerald-300"
          href={language.href || '#'}
        >
          {language.actionText}
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
