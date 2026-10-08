import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Flame,
  Minus,
  Plus,
  Target,
  X,
} from 'lucide-react'
import type React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface MetasAprendizagemProps {
  customGoal: string
  // Chunks
  dailyGoalChunks: number
  handleAddCustomGoal: () => void

  // Navigation
  handleBackTab: () => void
  handleDecreaseGoal: () => void
  handleIncreaseGoal: () => void
  handleKeyDownGoal: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleNextTab: () => void
  handleRemoveGoal: (goal: string) => void
  handleSelectPresetGoal: (goal: number) => void
  isFirstTab: boolean
  isLastTab: boolean
  isNextDisabled: boolean
  isSubmitting?: boolean

  // Goals
  presetGoals: string[]
  selectedGoals: string[]
  setCustomGoal: (val: string) => void
  toggleGoal: (goal: string) => void
}

export default function MetasAprendizagem({
  dailyGoalChunks,
  handleDecreaseGoal,
  handleIncreaseGoal,
  handleSelectPresetGoal,
  presetGoals,
  selectedGoals,
  customGoal,
  setCustomGoal,
  toggleGoal,
  handleAddCustomGoal,
  handleKeyDownGoal,
  handleRemoveGoal,

  handleBackTab,
  handleNextTab,
  isFirstTab,
  isLastTab,
  isNextDisabled,
  isSubmitting,
}: MetasAprendizagemProps) {
  const goalPresets = [5, 10, 15, 20, 30]

  return (
    <div className="space-y-4">
      {/* SEÇÃO 1: MOTIVOS DE APRENDIZADO */}
      <div className="space-y-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Compass className="h-5 w-5 shrink-0 text-sky-400 sm:h-6 sm:w-6" />
          <h2 className="font-bold text-base text-white leading-tight sm:text-lg">
            Qual é o seu principal objetivo ou motivo para aprender?
          </h2>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Selecione ou digite as razões pelas quais você deseja dominar este
          idioma.
        </p>

        {/* Input Responsivo */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            className="w-full flex-1 rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 text-white text-xs placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm"
            onChange={(e) => setCustomGoal(e.target.value)}
            onKeyDown={handleKeyDownGoal}
            placeholder="Digite outro objetivo (ex: Fazer entrevistas internacionais)..."
            type="text"
            value={customGoal}
          />
          <button
            className="w-full shrink-0 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 font-bold text-xs text-zinc-200 transition-all hover:bg-zinc-700 active:scale-95 disabled:opacity-50 sm:w-auto"
            disabled={!customGoal.trim()}
            onClick={handleAddCustomGoal}
            type="button"
          >
            Adicionar
          </button>
        </div>

        {/* Selected Goals */}
        {selectedGoals.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2">
            {selectedGoals.map((goal) => (
              <span
                className="inline-flex max-w-full items-center gap-1.5 truncate rounded-xl border border-sky-500/40 bg-sky-500/15 px-2.5 py-1.5 font-medium text-sky-300 text-xs"
                key={goal}
              >
                <span className="truncate">{goal}</span>
                <button
                  className="shrink-0 transition-colors hover:text-white"
                  onClick={() => handleRemoveGoal(goal)}
                  type="button"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Presets Goals */}
        <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2">
          {presetGoals.map((goal) => {
            const isSelected = selectedGoals.includes(goal)
            return (
              <button
                className={`rounded-xl border px-3 py-2 text-left font-medium text-xs transition-all ${
                  isSelected
                    ? 'border-sky-500 bg-sky-500/20 text-sky-300'
                    : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
                key={goal}
                onClick={() => toggleGoal(goal)}
                type="button"
              >
                {goal}
              </button>
            )
          })}
        </div>
      </div>

      <Separator className="bg-zinc-800/80" />

      {/* SEÇÃO 2: META DIÁRIA DE CHUNKS */}
      <div className="space-y-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Target className="h-5 w-5 shrink-0 text-emerald-400 sm:h-6 sm:w-6" />
          <h2 className="font-bold text-base text-white leading-tight sm:text-lg">
            Qual é a sua meta diária de Chunks?
          </h2>
        </div>

        <div className="flex flex-col items-stretch gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3.5 sm:p-4 md:flex-row md:items-center">
          {/* Contador Responsivo */}
          <div className="flex w-full items-center justify-between gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-2 sm:justify-center md:w-auto">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition-all hover:bg-zinc-700 hover:text-white active:scale-95 disabled:opacity-40"
              disabled={dailyGoalChunks <= 1}
              onClick={handleDecreaseGoal}
              type="button"
            >
              <Minus className="h-4 w-4" />
            </button>

            <div className="flex min-w-22.5 items-center justify-center gap-1.5 px-3">
              <Flame className="h-5 w-5 shrink-0 fill-amber-500/20 text-amber-500" />
              <span className="font-black text-lg text-white sm:text-xl">
                {dailyGoalChunks}
              </span>
              <span className="text-xs text-zinc-400">/ dia</span>
            </div>

            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition-all hover:bg-zinc-700 hover:text-white active:scale-95 disabled:opacity-40"
              disabled={dailyGoalChunks >= 100}
              onClick={handleIncreaseGoal}
              type="button"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Presets Responsivos */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="mr-1 w-full text-xs text-zinc-500 sm:w-auto">
              Atalhos:
            </span>
            {goalPresets.map((preset) => (
              <button
                className={`flex-1 rounded-lg border px-3 py-1.5 text-center font-semibold text-xs transition-all sm:flex-initial ${
                  dailyGoalChunks === preset
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                    : 'border-zinc-700/60 bg-zinc-800/80 text-zinc-400 hover:border-zinc-500'
                }`}
                key={preset}
                onClick={() => handleSelectPresetGoal(preset)}
                type="button"
              >
                {preset} chunks
              </button>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-zinc-800/80" />

      {/* RODAPÉ DE NAVEGAÇÃO RESPONSIVO */}
      <div className="flex flex-col-reverse items-center justify-between gap-3 pt-2 sm:flex-row">
        <Button
          className="h-11 w-full justify-center rounded-xl border border-zinc-700 bg-zinc-800 px-5 text-zinc-300 hover:bg-zinc-700 sm:h-10 sm:w-auto"
          disabled={isFirstTab || isSubmitting}
          onClick={handleBackTab}
          type="button"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          <span>Voltar</span>
        </Button>

        <Button
          className="h-11 w-full justify-center rounded-xl bg-emerald-400 px-6 font-bold text-zinc-950 shadow-2xl shadow-emerald-500 hover:scale-105 disabled:opacity-50 sm:h-10 sm:w-auto"
          disabled={isNextDisabled || isSubmitting}
          onClick={handleNextTab}
          type="button"
        >
          <span>
            {isSubmitting
              ? 'Salvando...'
              : isLastTab
                ? 'Concluir & Criar Chunks'
                : 'Avançar'}
          </span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
