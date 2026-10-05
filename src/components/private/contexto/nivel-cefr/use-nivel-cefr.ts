import { useState } from 'react'
import type { CEFRLevel } from '@/types/uaiFlow'

export default function useNivelCefr() {
  const [currentLevel, setCurrentLevel] = useState<CEFRLevel>('A2')
  const [targetLevel, setTargetLevel] = useState<CEFRLevel>('B2')

  return {
    currentLevel,
    setCurrentLevel,
    setTargetLevel,
    targetLevel,
  }
}
