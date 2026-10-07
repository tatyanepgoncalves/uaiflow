// use-difficulties-chunks.ts
import type React from 'react'
import { useCallback, useState } from 'react'

export default function useGoals() {
  // Meta Diária de Chunks
  const [dailyGoalChunks, setDailyGoalChunks] = useState<number>(10)

  // Motivos / Objetivos de Aprendizado (Learning Goals)
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [customGoal, setCustomGoal] = useState<string>('')

  

  // Presets para Motivos de Aprendizado
  const presetGoals = [
    'Carreira / Oportunidades de Trabalho',
    'Viagens e Turismo',
    'Morar no exterior / Imigração',
    'Estudos / Certificações (TOEFL, IELTS, etc.)',
    'Desenvolvimento Pessoal / Hobby',
    'Consumir mídias (Filmes, Livros, Músicas)',
  ]


  // Handlers para Meta de Chunks
  const handleIncreaseGoal = useCallback(() => {
    setDailyGoalChunks((prev) => Math.min(prev + 5, 100))
  }, [])

  const handleDecreaseGoal = useCallback(() => {
    setDailyGoalChunks((prev) => Math.max(prev - 5, 1))
  }, [])

  const handleSelectPresetGoal = useCallback((goal: number) => {
    setDailyGoalChunks(goal)
  }, [])

  // Handlers para Learning Goals (Motivos)
  const toggleGoal = useCallback((goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal)
        ? prev.filter((item) => item !== goal)
        : [...prev, goal]
    )
  }, [])

  const handleAddCustomGoal = useCallback(() => {
    const trimmed = customGoal.trim()
    if (!trimmed) {
      return
    }

    if (!selectedGoals.includes(trimmed)) {
      setSelectedGoals((prev) => [...prev, trimmed])
    }
    setCustomGoal('')
  }, [customGoal, selectedGoals])

  const handleKeyDownGoal = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleAddCustomGoal()
      }
    },
    [handleAddCustomGoal]
  )

  const handleRemoveGoal = useCallback((goal: string) => {
    setSelectedGoals((prev) => prev.filter((item) => item !== goal))
  }, [])



  return {
    customGoal,
    dailyGoalChunks,
    handleAddCustomGoal,
    handleDecreaseGoal,
    handleIncreaseGoal,
    handleKeyDownGoal,
    handleRemoveGoal,
    handleSelectPresetGoal,

    presetGoals,

   
    selectedGoals,
    setCustomGoal,
    setDailyGoalChunks,
    toggleGoal,
  }
}
