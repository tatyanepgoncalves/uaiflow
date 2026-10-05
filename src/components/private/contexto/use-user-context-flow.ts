'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from '@/components/ui/toast'
import type { CreateUserContextBodyData } from '@/schemas/user-contexto/create-user-context'
import { createUserContext } from '@/services/user-context-service'
import useHobbiesInteresses from './hobbies-interesses/use-hobbies-interests'
import useNivelCefr from './nivel-cefr/use-nivel-cefr'
import useTemaConteudos from './temas-conteudos/use-tema-conteudos'

export const TABS = [
  'temas-conteudos',
  'hobbies-interesses',
  'nivel-cefr',
  'sotaque-foco',
  'neuroaprendizagem',
] as const

export type TabValue = (typeof TABS)[number]

export default function useUserContextFlow(languageSlug = 'ingles') {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabValue>('temas-conteudos')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    addCustomTopic,
    allTopics,
    customTopic,
    customTopics,
    favoriteTopics,
    handleCustomTopicChange,
    handleKeyDown,
    setCustomTopic,
    setCustomTopics,
    setFavoriteTopics,
    toggleTopic,
  } = useTemaConteudos()
  const {
    addCustomHobby,
    allHobbies,
    customHobbies,
    customHobby,
    favoriteHobbies,
    handleCustomHobbyChange,
    handleKeyDownHobby,
    hobbies,
    setCustomHobbies,
    setCustomHobby,
    setFavoriteHobbies,
    setHobbies,
    toggleHobby,
  } = useHobbiesInteresses()

  const { currentLevel, setCurrentLevel, setTargetLevel, targetLevel } =
    useNivelCefr()

  // Estados dos dados capturados ao longo do fluxo

  const [learningGoals, setLearningGoals] = useState<string[]>([])
  const [difficulties, setDifficulties] = useState<string[]>([])

  // Validações de navegação
  const isFirstTab = activeTab === TABS[0]
  const isStepValid = favoriteTopics.length > 0
  const isLastTab = activeTab === TABS.at(-1)

  const handleNextTab = useCallback(async () => {
    const currentIndex = TABS.indexOf(activeTab)

    // Se estiver na última aba, faz a submissão final ao backend
    if (isLastTab) {
      setIsSubmitting(true)

      const payload: CreateUserContextBodyData = {
        currentLevel,
        dailyGoalChunks: 3,
        difficultyNotes: difficulties,
        interests: [...favoriteTopics, ...hobbies], // Combina temas e hobbies
        isActive: true,
        learningGoals,
      }

      const response = await createUserContext({ languageSlug }, payload)

      setIsSubmitting(false)

      if (!response.success) {
        toast.add({
          description: response.error,
          title: 'Erro ao guardar perfil',
          type: 'error',
        })
        return
      }

      toast.add({
        description: 'Seu primeiro lote de chunks foi gerado.',
        title: 'Contexto criado com sucesso!',
        type: 'success',
      })

      router.push('/central-de-chunks')
      return
    }

    // Caso contrário, avança para a próxima aba
    setActiveTab(TABS[currentIndex + 1])
  }, [
    activeTab,
    isLastTab,
    currentLevel,
    favoriteTopics,
    hobbies,
    learningGoals,
    difficulties,
    languageSlug,
    router,
  ])

  const handleBackTab = useCallback(() => {
    const currentIndex = TABS.indexOf(activeTab)

    if (currentIndex > 0) {
      setActiveTab(TABS[currentIndex - 1])
    }
  }, [activeTab])

  return {
    activeTab,
    addCustomHobby,
    addCustomTopic,
    allHobbies,
    allTopics,

    currentLevel,
    customHobbies,
    customHobby,
    customTopic,
    customTopics,
    favoriteHobbies,
    favoriteTopics,
    handleBackTab,
    handleCustomHobbyChange,
    handleCustomTopicChange,
    handleKeyDown,
    handleKeyDownHobby,
    handleNextTab,
    hobbies,
    isFirstTab,
    isLastTab,
    isNextDisabled: !isStepValid,
    isStepValid,
    isSubmitting,
    setActiveTab,
    setCurrentLevel,
    setCustomHobbies,
    setCustomHobby,
    setCustomTopic,
    setCustomTopics,
    setDifficulties,
    setFavoriteHobbies,
    setFavoriteTopics,
    setHobbies,
    setLearningGoals,
    setTargetLevel,
    targetLevel,
    toggleHobby,
    toggleTopic,
  }
}
