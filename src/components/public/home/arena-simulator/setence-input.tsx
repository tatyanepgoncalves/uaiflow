import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface SentenceInputProps {
  isEvaluating: boolean
  languageLabel: string
  onChange: (value: string) => void
  onEvaluate: () => void
  value: string
}

export function SentenceInput({
  languageLabel,
  value,
  onChange,
  onEvaluate,
  isEvaluating,
}: SentenceInputProps) {
  return (
    <div className="mt-6 space-y-6">
      <div className="space-y-2">
        <Label
          className="font-semibold text-xs text-zinc-300"
          htmlFor="phrase-input"
        >
          Sua Frase de Teste ({languageLabel}):
        </Label>
        <Input
          className="h-16 w-full rounded-xl border-zinc-800 bg-[#05080E] px-4 text-sm text-zinc-100 placeholder-zinc-500 transition focus-visible:border-emerald-500 focus-visible:ring-1 focus-visible:ring-emerald-500"
          id="phrase-input"
          // biome-ignore lint/performance/noJsxPropsBind: it's necessary
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">
          Você pode editar a frase acima para testar qualquer variação.
        </p>

        <Button
          className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-5 font-bold text-zinc-950 transition hover:bg-emerald-400 active:scale-95 disabled:opacity-50"
          disabled={isEvaluating}
          onClick={onEvaluate}
        >
          <Send className="h-4 w-4" />
          {isEvaluating ? 'Avaliando...' : 'Avaliar Frase Agora'}
        </Button>
      </div>
    </div>
  )
}
