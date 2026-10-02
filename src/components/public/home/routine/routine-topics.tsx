import { CheckCircle2 } from 'lucide-react'
import { routineData } from './data'

export default function RoutineTopics() {
  return (
    <div className="space-y-4 pt-2">
      {routineData.map((item) => (
        <div className="flex items-start gap-3" key={item.title}>
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="h-4 w-4" />
          </div>

          <div>
            <h4 className="font-bold text-sm text-white">{item.title}</h4>
            <p className="mt-0.5 text-xs text-zinc-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
