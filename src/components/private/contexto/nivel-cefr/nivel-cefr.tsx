import { ChevronLeft, ChevronRight, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import type { CEFRLevel } from '@/types/uaiFlow'
import { CEFR_LEVELS } from '../data'

interface NivelCefrProps {
  currentLevel: string
  handleBackTab: () => void
  handleNextTab: () => void
  isLastTab: boolean
  isNextDisabled: boolean
  setCurrentLevel: (level: CEFRLevel) => void
  setTargetLevel: (level: CEFRLevel) => void
  targetLevel: string
}

export default function NivelCefr({
  currentLevel,
  setCurrentLevel,
  targetLevel,
  setTargetLevel,
  handleBackTab,
  handleNextTab,
  isLastTab,
  isNextDisabled,
}: NivelCefrProps) {
  return (
    <section className="space-y-4">
      {/* HEADER */}
      <div className="w-full space-y-1.25">
        <div className="flex items-center gap-3">
          <Target className="shrink-0 text-indigo-500 md:h-6 md:w-6" />
          <h2 className="font-bold text-base text-white md:text-lg">
            Seu Nível CEFR Atual vs. Meta que Quer Atingir
          </h2>
        </div>
        <p className="truncate text-xs text-zinc-400">
          A escala europeia CEFR (A1 a C2) calibra a complexidade dos blocos e a
          exigência de precisão gramatical.
        </p>
      </div>

      {/* CURRENT LEVEL */}
      <div className="space-y-2">
        <Label className="font-semibold text-sm text-zinc-300">
          Onde você está hoje no idioma
        </Label>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {CEFR_LEVELS.map((item) => {
            const isSelected = currentLevel === item.level
            return (
              <button
                className={cn(
                  'relative rounded-2xl border p-3.5 text-left transition-all duration-200',
                  isSelected
                    ? 'border-indigo-500 bg-indigo-950/60 text-white shadow-indigo-500/10 shadow-md ring-1 ring-indigo-500'
                    : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800/80 hover:text-zinc-200'
                )}
                key={item.level}
                // biome-ignore lint/performance/noJsxPropsBind: it's necessary
                onClick={() => setCurrentLevel(item.level as CEFRLevel)}
                type="button"
              >
                <div className="flex items-center justify-between">
                  <h2
                    className={cn(
                      'font-black text-sm truncate',
                      isSelected ? 'text-indigo-300' : 'text-zinc-200'
                    )}
                  >
                    {item.title}
                  </h2>
                </div>
                <p
                  className={cn(
                    'mt-1.5 text-wrap text-[11px] leading-tight lg:sr-only',
                    isSelected ? 'text-zinc-300' : 'text-zinc-400'
                  )}
                >
                  {item.desc}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {/* TARGET LEVEL */}
      <div className="space-y-2 pt-2">
        <Label className="font-semibold text-sm text-zinc-300">
          Qual o seu objetivo CEFR alvo
        </Label>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {CEFR_LEVELS.map((item) => {
            const isSelected = targetLevel === item.level
            return (
              <button
                className={cn(
                  'relative rounded-2xl border p-3.5 text-left transition-all duration-200',
                  isSelected
                    ? 'border-emerald-500 bg-emerald-950/60 text-white shadow-emerald-500/10 shadow-md ring-1 ring-emerald-500'
                    : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800/80 hover:text-zinc-200'
                )}
                key={item.level}
                // biome-ignore lint/performance/noJsxPropsBind: it's necessary
                onClick={() => setTargetLevel(item.level as CEFRLevel)}
                type="button"
              >
                <div className="flex items-center justify-between">
                  <h2
                    className={cn(
                      'font-black text-sm truncate',
                      isSelected ? 'text-emerald-300' : 'text-zinc-200'
                    )}
                  >
                    {item.title}
                  </h2>
                </div>
                <p
                  className={cn(
                    'mt-1.5 text-wrap text-[11px] leading-tight lg:sr-only',
                    isSelected ? 'text-zinc-300' : 'text-zinc-400'
                  )}
                >
                  {item.desc}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      <Separator className="my-4 bg-zinc-800" />

      {/* NAVEGAÇÃO DA ABA */}
      <div className="flex items-center justify-between pt-2">
        <Button
          className="h-10 rounded-xl border border-zinc-700 bg-zinc-800 px-5 text-zinc-300 hover:bg-zinc-700"
          onClick={handleBackTab}
          type="button"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          <span>Voltar</span>
        </Button>

        <Button
          className="h-10 rounded-xl bg-emerald-400 px-6 font-bold text-zinc-950 shadow-2xl shadow-emerald-500 hover:scale-105"
          disabled={isNextDisabled}
          onClick={handleNextTab}
          type="button"
        >
          <span>{isLastTab ? 'Concluir & Criar Chunks' : 'Avançar'}</span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
