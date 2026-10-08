import { Check } from 'lucide-react'
import type { UserContext } from '@/types/types'

interface ListLanguageProps {
  currentContext: UserContext
  filteredContexts: UserContext[]
  selectedContextId: string
  setOpen: (open: boolean) => void
  setSelectedContextId: (selectedContextId: string) => void
}

export default function ListLanguage({
  currentContext,
  filteredContexts,
  setSelectedContextId,
  setOpen,
}: ListLanguageProps) {
  return (
    <div className="max-h-48 overflow-y-auto px-1 py-0.5">
      {filteredContexts.length > 0 ? (
        filteredContexts.map((context) => {
          const isSelected = context.id === currentContext.id

          return (
            <button
              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs transition-colors ${
                isSelected
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-300 hover:bg-zinc-800/60 hover:text-white'
              }`}
              key={context.id}
              onClick={() => {
                setSelectedContextId(context.id)
                setOpen(false)
              }}
              type="button"
            >
              <div className="flex items-center gap-2">
                <span className="rounded bg-zinc-800/80 px-1.5 py-0.5 font-bold text-[10px] text-zinc-400 uppercase">
                  {context.language.code}
                </span>
                <span className="font-medium">{context.language.name}</span>
              </div>
              {isSelected && <Check className="h-3.5 w-3.5 text-emerald-400" />}
            </button>
          )
        })
      ) : (
        <p className="py-3 text-center text-xs text-zinc-500">
          Nenhum idioma encontrado.
        </p>
      )}
    </div>
  )
}
