'use client'

import { ChevronLeft, ChevronRight, CircleCheck, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TopicButton } from '../topic-button'

interface SotaqueFocoProps {
  addCustomAccent: () => void
  availableAccents: string[]
  customAccentName: string
  handleBackTab: () => void
  handleCustomAccentChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDownAccent: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleNextTab: () => void
  isFirstTab: boolean
  isLastTab: boolean
  isNextDisabled: boolean
  selectedAccent: string
  selectedLanguageName?: string // Nome do idioma selecionado na 1ª aba
  toggleAccent: (accent: string) => void
}

export default function SotaqueFoco({
  addCustomAccent,
  availableAccents,
  customAccentName,
  handleBackTab,
  handleCustomAccentChange,
  handleKeyDownAccent,
  handleNextTab,
  isFirstTab,
  isLastTab,
  isNextDisabled,
  selectedAccent,
  selectedLanguageName,
  toggleAccent,
}: SotaqueFocoProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1.25">
        <div className="flex items-center gap-3">
          <Globe className="h-6 w-6 text-emerald-400" />
          <h2 className="font-bold text-lg text-white">
            Qual sotaque ou variação você prefere?
          </h2>
        </div>
        <p className="text-xs text-zinc-400">
          Escolha a variação de pronúncia para alinhar a IA com o seu objetivo.
        </p>
      </div>

      {/* Lista de Sotaques do Idioma Selecionado */}
      {availableAccents.length > 0 ? (
        <div className="flex flex-wrap gap-2 pt-2">
          {availableAccents.map((accent) => (
            <TopicButton
              background="bg-emerald-500/20"
              border="border-emerald-500"
              color="text-emerald-400"
              Icon={CircleCheck}
              isSelected={selectedAccent === accent}
              key={accent}
              onToggle={toggleAccent}
              text="text-emerald-300"
              topic={accent}
            />
          ))}
        </div>
      ) : (
        <p className="py-2 text-xs text-zinc-500">
          Nenhum sotaque predefinido mapeado para este idioma. Adicione um
          personalizado abaixo.
        </p>
      )}

      {/* Input com Idioma pré-preenchido + Input para Novo Sotaque */}
      <div className="flex flex-col gap-2 pt-3 sm:flex-row">
        {/* Campo com Idioma desabilitado/read-only */}
        <input
          className="w-full cursor-not-allowed rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 font-semibold text-slate-400 text-xs sm:w-1/3 sm:text-sm"
          disabled
          readOnly
          type="text"
          value={selectedLanguageName || 'Nenhum idioma selecionado'}
        />

        {/* Input do Novo Sotaque */}
        <input
          className="flex-1 rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-2.5 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:text-sm"
          onChange={handleCustomAccentChange}
          onKeyDown={handleKeyDownAccent}
          placeholder="Adicionar outro sotaque (ex: Irlandês, Texano...)"
          type="text"
          value={customAccentName}
        />

        <button
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 font-bold text-slate-200 text-xs hover:bg-slate-700 disabled:opacity-50"
          disabled={!(customAccentName && selectedLanguageName)}
          onClick={addCustomAccent}
          type="button"
        >
          Adicionar
        </button>
      </div>

      <Separator />

      {/* Rodapé de Navegação */}
      <div className="flex items-center justify-between pt-2">
        <Button
          className="h-10 rounded-xl border border-zinc-700 bg-zinc-800 px-5 text-zinc-300 hover:bg-zinc-700"
          disabled={isFirstTab}
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
    </div>
  )
}
