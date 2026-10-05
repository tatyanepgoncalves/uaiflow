import { ChevronLeft, ChevronRight, CircleCheck, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TopicButton } from '../topic-button'

interface HobbiesInteressesProps {
  addCustomHobby: () => void
  allHobbies: string[]
  customHobby: string
  favoriteHobbies: string[]
  handleBackTab: () => void
  handleCustomHobbyChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyDownHobby: (e: React.KeyboardEvent<HTMLInputElement>) => void
  handleNextTab: () => void
  isLastTab: boolean
  isNextDisabled: boolean
  toggleHobby: (hobby: string) => void
}

export default function HobbiesInteresses({
  addCustomHobby,
  allHobbies,
  customHobby,
  handleCustomHobbyChange,
  handleKeyDownHobby,
  toggleHobby,
  isLastTab,
  isNextDisabled,
  favoriteHobbies,
  handleBackTab,
  handleNextTab,
}: HobbiesInteressesProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1.25">
        <div className="flex items-center gap-3">
          <Heart className="h-6 w-6 text-red-500" />
          <h2 className="font-bold text-lg text-white">
            Quais são seus hobbies e paixões pessoais?
          </h2>
        </div>

        <p className="text-xs text-zinc-400">
          Conectar a língua a coisas que você ama ativa dopamina e acelera a
          plasticidade neural.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {allHobbies.map((hobby) => (
          <TopicButton
            background="bg-red-500/20"
            border="border-red-500"
            color="text-red-400"
            Icon={CircleCheck}
            isSelected={favoriteHobbies.includes(hobby)}
            key={hobby}
            onToggle={toggleHobby}
            text="text-red-300"
            topic={hobby}
          />
        ))}
      </div>

      {/* Input de Novo Hobby */}
      <div className="flex gap-2 pt-3">
        <input
          className="flex-1 rounded-xl border border-slate-700/80 bg-slate-950 px-4 py-2.5 text-white text-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm"
          onChange={handleCustomHobbyChange}
          onKeyDown={handleKeyDownHobby}
          placeholder="Adicionar outro hobby específico (ex: Leitura, Esportes, Música...)"
          type="text"
          value={customHobby}
        />
        <button
          className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 font-bold text-slate-200 text-xs hover:bg-slate-700"
          onClick={addCustomHobby}
          type="button"
        >
          Adicionar
        </button>
      </div>

      <Separator />

      <div className="flex justify-between">
        <Button
          className="h-10 rounded-2xl border border-slate-700 bg-slate-800 px-6 font-bold text-slate-200 text-xs hover:bg-slate-700"
          onClick={handleBackTab}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Voltar</span>
        </Button>
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
