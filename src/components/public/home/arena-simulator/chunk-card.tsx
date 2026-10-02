import { Volume2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface ChunkCardProps {
  cefr: string
  chunk: string
  translation: string
}

export function ChunkCard({ chunk, translation, cefr }: ChunkCardProps) {
  return (
    <div className="mt-6 flex flex-col justify-between gap-4 rounded-xl border border-zinc-800/60 bg-[#05080E] p-5 sm:flex-row sm:items-center">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-white text-xl">{chunk}</h3>
          <button
            className="text-zinc-400 transition hover:text-white"
            title="Ouvir pronúncia"
            type="button"
          >
            <Volume2 className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-1 text-xs text-zinc-400">
          <span className="font-semibold text-zinc-500">BR</span> {translation}
        </p>
      </div>

      <Badge
        className="w-fit border-indigo-500/30 bg-indigo-950/40 px-3 py-1 text-indigo-300 text-xs"
        variant="outline"
      >
        {cefr}
      </Badge>
    </div>
  )
}
