'use client'

import { BookOpen, ChevronRight, CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { LanguageItem } from '@/services/languages-service'
import { TopicButton } from '../topic-button'

interface LanguagesProps {
  addCustomLanguage: () => void
  customLanguageCode: string
  customLanguageName: string
  handleBackTab: () => void
  handleCustomCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCustomNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDownLanguage: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleNextTab: () => void
  isNextDisabled: boolean
  languages: LanguageItem[]
  selectedLanguageCode: string
  toggleLanguage: (code: string) => void
}

export default function Languages({
  addCustomLanguage,
  customLanguageCode,
  customLanguageName,
  handleCustomCodeChange,
  handleCustomNameChange,
  handleKeyDownLanguage,
  handleNextTab,
  isNextDisabled,
  languages,
  selectedLanguageCode,
  toggleLanguage,
}: LanguagesProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1.25">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-emerald-400" />
          <h2 className="font-bold text-lg text-white">
            Qual idioma você quer aprender?
          </h2>
        </div>
        <p className="text-xs text-zinc-400">
          Selecione o idioma para calibrar o seu contexto e os exercícios.
        </p>
      </div>

      {/* Lista de Idiomas Dinâmicos */}
      <div className="flex flex-wrap gap-2">
        {languages.map((lang) => (
          <TopicButton
            background="bg-emerald-500/20"
            border="border-emerald-500"
            color="text-emerald-400"
            Icon={CircleCheck}
            isSelected={selectedLanguageCode === lang.code}
            key={lang.code || lang.id}
            // biome-ignore lint/performance/noJsxPropsBind: it's necessary
            onToggle={() => toggleLanguage(lang.code)}
            text="text-emerald-300"
            topic={lang.name}
          />
        ))}
      </div>

      {/* Inputs de Criação de Idioma (Nome + Código) */}
      <div className="flex flex-col gap-2 pt-3 sm:flex-row">
        <input
          className="flex-2 rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-2.5 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:text-sm"
          onChange={handleCustomNameChange}
          onKeyDown={handleKeyDownLanguage}
          placeholder="Nome (ex: Italiano)"
          type="text"
          value={customLanguageName}
        />
        <input
          className="flex-1 rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-2.5 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:text-sm"
          onChange={handleCustomCodeChange}
          onKeyDown={handleKeyDownLanguage}
          placeholder="Código (ex: it)"
          type="text"
          value={customLanguageCode}
        />
        <button
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 font-bold text-slate-200 text-xs hover:bg-slate-700"
          onClick={addCustomLanguage}
          type="button"
        >
          Adicionar
        </button>
      </div>

      <Separator />

      {/* Rodapé de Navegação */}
      <div className="flex items-center justify-end pt-2">
        <Button
          className="h-10 rounded-xl bg-emerald-400 px-6 font-bold text-zinc-950 shadow-2xl shadow-emerald-500 hover:scale-105"
          disabled={isNextDisabled}
          onClick={handleNextTab}
          type="button"
        >
          <span>Avançar</span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
