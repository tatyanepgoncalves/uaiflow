
import { AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import type React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TopicButton } from '../topic-button'

interface DificuldadesTabProps {
  addCustomDifficulty: () => void
  allDifficulties: string[]
  customDifficulty: string
  handleBackTab: () => void
  handleCustomDifficultyChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDownDifficulty: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleNextTab: () => void
  isFirstTab: boolean
  isLastTab: boolean
  isNextDisabled: boolean
  selectedDifficulties: string[]
  toggleDifficulty: (difficulty: string) => void
}

export default function DificuldadesTab({
  addCustomDifficulty,
  allDifficulties,
  customDifficulty,
  handleBackTab,
  handleCustomDifficultyChange,
  handleKeyDownDifficulty,
  handleNextTab,
  isFirstTab,
  isLastTab,
  isNextDisabled,
  selectedDifficulties,
  toggleDifficulty,
}: DificuldadesTabProps) {
  return (
    <div className="space-y-4">
      {/* Cabeçalho */}
      <div className="space-y-1.25">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-6 w-6 shrink-0 text-amber-400" />
          <h2 className="font-bold text-lg text-white">
            Quais são as suas principais dificuldades ao aprender o idioma?
          </h2>
        </div>
        <p className="text-xs text-zinc-400">
          Selecione ou digite os seus principais desafios para adaptarmos o seu aprendizado.
        </p>
      </div>

      {/* Lista de Botões de Dificuldade (Predefinidos + Adicionados) */}
      <div className="flex flex-wrap gap-2">
        {allDifficulties.map((difficulty) => (
          <TopicButton
            background="bg-amber-500/20"
            border="border-amber-500"
            color="text-amber-400"
            Icon={AlertCircle}
            isSelected={selectedDifficulties.includes(difficulty)}
            key={difficulty}
            onToggle={toggleDifficulty}
            text="text-amber-300"
            topic={difficulty}
          />
        ))}
      </div>

      {/* Input de Nova Dificuldade Customizada */}
      <div className="flex flex-col gap-2 pt-3 sm:flex-row">
        <input
          className="w-full flex-1 rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-white text-xs placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 sm:text-sm"
          onChange={handleCustomDifficultyChange}
          onKeyDown={handleKeyDownDifficulty}
          placeholder="Digite uma dificuldade personalizada..."
          type="text"
          value={customDifficulty}
        />
        <button
          className="w-full shrink-0 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 font-bold text-xs text-zinc-200 transition-all hover:bg-slate-700 disabled:opacity-50 sm:w-auto"
          disabled={!customDifficulty.trim()}
          onClick={addCustomDifficulty}
          type="button"
        >
          Adicionar
        </button>
      </div>

      <Separator className="bg-zinc-800/80" />

      {/* Navegação */}
      <div className="flex justify-between">
        <Button
          className="h-10 rounded-2xl border border-slate-700 bg-slate-800 px-6 font-bold text-slate-200 text-xs hover:bg-slate-700"
          disabled={isFirstTab}
          onClick={handleBackTab}
          type="button"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Voltar</span>
        </Button>
        <Button
          className="h-10 rounded-xl bg-emerald-400 px-6 font-bold text-zinc-950 shadow-2xl shadow-emerald-500 hover:scale-105 disabled:opacity-50"
          disabled={isNextDisabled}
          onClick={handleNextTab}
          type="button"
        >
          <span>{isLastTab ? 'Concluir & Criar Chunks' : 'Avançar'}</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}