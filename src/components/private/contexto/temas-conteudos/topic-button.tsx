import { CheckCircle2 } from 'lucide-react'
import { memo, useCallback } from 'react'
import { cn } from '@/lib/utils'

// Subcomponente isolado e memorizado com React.memo
interface TopicButtonProps {
  isSelected: boolean
  onToggle: (topic: string) => void
  topic: string
}

export const TopicButton = memo(function TopicButton({
  topic,
  isSelected,
  onToggle,
}: TopicButtonProps) {
  const handleClick = useCallback(() => {
    onToggle(topic)
  }, [topic, onToggle])

  return (
    <button
      className={cn(
        'flex items-center space-x-2 rounded-xl border px-3.5 py-2 font-medium text-xs transition sm:text-sm',
        isSelected
          ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300 shadow-sm'
          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
      )}
      onClick={handleClick}
      type="button"
    >
      <span>{topic}</span>
      {isSelected ? (
        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
      ) : null}
    </button>
  )
})
