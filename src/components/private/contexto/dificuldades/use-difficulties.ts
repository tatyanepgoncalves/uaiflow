import type React from 'react'
import { useCallback, useState } from 'react'

export const PRESET_DIFFICULTIES = [
  'Pronúncia e sotaque',
  'Entendimento de áudios rápidos',
  'Gramática e conjugação',
  'Vocabulário técnico / negócios',
  'Bloqueio para falar (timidez)',
  'Manter consistência diária',
]

export default function useDifficulties() {
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])
  const [customDifficulties, setCustomDifficulties] = useState<string[]>([])
  const [customDifficulty, setCustomDifficulty] = useState<string>('')

  const handleCustomDifficultyChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomDifficulty(e.target.value)
    },
    []
  )

  const addCustomDifficulty = useCallback(() => {
    setCustomDifficulty((currentValue) => {
      const trimmed = currentValue.trim()
      if (!trimmed) {
        return currentValue
      }

      setCustomDifficulties((prev) =>
        prev.includes(trimmed) || PRESET_DIFFICULTIES.includes(trimmed)
          ? prev
          : [...prev, trimmed]
      )

      setSelectedDifficulties((prev) =>
        prev.includes(trimmed) ? prev : [...prev, trimmed]
      )

      return '' // Limpa o input
    })
  }, [])

  const toggleDifficulty = useCallback((difficulty: string) => {
    setSelectedDifficulties((prev) =>
      prev.includes(difficulty)
        ? prev.filter((d) => d !== difficulty)
        : [...prev, difficulty]
    )
  }, [])

  const handleKeyDownDifficulty = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        addCustomDifficulty()
      }
    },
    [addCustomDifficulty]
  )

  const handleRemoveDifficulty = useCallback((difficulty: string) => {
    setSelectedDifficulties((prev) => prev.filter((d) => d !== difficulty))
  }, [])

  // Lista combinada de predefinidas e customizadas
  const allDifficulties = [...PRESET_DIFFICULTIES, ...customDifficulties]

  // Validação
  const isStepValidDifficulty = selectedDifficulties.length > 0

  return {
    addCustomDifficulty,
    allDifficulties,
    customDifficulties,
    customDifficulty,
    handleCustomDifficultyChange,
    handleKeyDownDifficulty,
    handleRemoveDifficulty,
    isStepValidDifficulty,
    selectedDifficulties,
    setCustomDifficulty,
    setSelectedDifficulties,
    toggleDifficulty,
  }
}
