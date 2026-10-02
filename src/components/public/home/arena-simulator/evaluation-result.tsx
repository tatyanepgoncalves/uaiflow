import { Lightbulb } from 'lucide-react'
import type { EvaluationResultData } from './types'

interface EvaluationResultProps {
  data: EvaluationResultData
}

export function EvaluationResult({ data }: EvaluationResultProps) {
  return (
    <div className="fade-in-50 slide-in-from-top-2 mt-6 animate-in space-y-4 rounded-xl border border-zinc-800/80 bg-[#05080E] p-5 duration-300">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 font-black text-emerald-400 text-xl">
            {data.score}
          </div>
          <div>
            <h4 className="font-bold text-lg text-white">{data.title}</h4>
            <p className="text-xs text-zinc-400">{data.level}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-lg border border-zinc-800 bg-[#070A0F] px-3 py-1.5 text-xs">
            <span className="text-zinc-400">Gramática: </span>
            <span className="font-bold text-emerald-400">{data.grammar}</span>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-[#070A0F] px-3 py-1.5 text-xs">
            <span className="text-zinc-400">Naturalidade: </span>
            <span className="font-bold text-sky-400">{data.naturalness}</span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 border-zinc-800/60 border-t pt-4">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
        <p className="text-xs text-zinc-300 leading-relaxed">{data.feedback}</p>
      </div>
    </div>
  )
}
