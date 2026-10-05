import { BookOpen, ChevronRight, CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TopicButton } from '../topic-button'

interface TemasConteudosProps {
  addCustomTopic: () => void
  allTopics: string[]
  customTopic: string
  favoriteTopics: string[]
  handleCustomTopicChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleNextTab: () => void
  isLastTab: boolean
  isNextDisabled: boolean
  toggleTopic: (topic: string) => void
}

export default function TemasConteudos({
  addCustomTopic,
  allTopics,
  customTopic,
  favoriteTopics,
  toggleTopic,
  handleKeyDown,
  handleCustomTopicChange,
  handleNextTab,
  isNextDisabled,
  isLastTab,
}: TemasConteudosProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1.25">
        <div className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-emerald-400" />
          <h2 className="font-bold text-lg text-white">
            Quais temas você mais consome, estuda ou precisa no dia a dia?
          </h2>
        </div>
        <p className="text-xs text-zinc-400">
          Selecione os tópicos para que os blocos lexicais e exemplos sejam
          relevantes para sua rotina.
        </p>
      </div>

      {/* Lista de Botões (Predefinidos + Customizados) */}
      <div className="flex flex-wrap gap-2">
        {allTopics.map((topic) => (
          <TopicButton
            background="bg-emerald-500/20"
            border="border-emerald-500"
            color="text-emerald-400"
            Icon={CircleCheck}
            isSelected={favoriteTopics.includes(topic)}
            key={topic}
            onToggle={toggleTopic}
            text="text-emerald-300"
            topic={topic}
          />
        ))}
      </div>

      {/* Input de Novo Tema */}
      <div className="flex gap-2 pt-3">
        <input
          className="flex-1 rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-2.5 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:text-sm"
          onChange={handleCustomTopicChange}
          onKeyDown={handleKeyDown}
          placeholder="Adicionar outro tema específico (ex: Odontologia, Logística, Aviação...)"
          type="text"
          value={customTopic}
        />
        <button
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 font-bold text-slate-200 text-xs hover:bg-slate-700"
          onClick={addCustomTopic}
          type="button"
        >
          Adicionar
        </button>
      </div>

      <Separator />

      <div className="flex justify-end">
        <Button
          className="h-10 rounded-xl bg-emerald-400 px-6 shadow-2xl shadow-emerald-500 hover:scale-105"
          disabled={isNextDisabled}
          onClick={handleNextTab}
        >
          <span>{isLastTab ? 'Concluir & Criar Chunks' : 'Avançar'}</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
