import { memo, useCallback } from 'react'
import { cn } from '@/lib/utils'

// Subcomponente isolado e memorizado com React.memo
interface TopicButtonProps {
  background: string
  border: string
  color: string
  Icon: React.ComponentType<{ className?: string }>
  isSelected: boolean
  onToggle: (topic: string) => void
  text: string
  topic: string
}

export const TopicButton = memo(function TopicButton({
  topic,
  isSelected,
  onToggle,
  color,
  Icon,
  background,
  text,
  border,
}: TopicButtonProps) {
  const handleClick = useCallback(() => {
    onToggle(topic)
  }, [topic, onToggle])

  return (
    <button
      className={cn(
        'flex items-center space-x-2 rounded-xl border px-3.5 py-2 font-medium text-xs transition sm:text-sm',
        isSelected
          ? `shadow-sm ${background} ${border} ${text}`
          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
      )}
      onClick={handleClick}
      type="button"
    >
      <span>{topic}</span>
      {isSelected ? <Icon className={cn('h-4 w-4', color)} /> : null}
    </button>
  )
})
