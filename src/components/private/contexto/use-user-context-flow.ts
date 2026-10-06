'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from '@/components/ui/toast'
import type { CreateUserContextBodyData } from '@/schemas/user-contexto/create-user-context'
import { createUserContext } from '@/services/user-context-service'
import useHobbiesInteresses from './hobbies-interesses/use-hobbies-interests'
import useLanguages from './idioma/use-languages'
import useNivelCefr from './nivel-cefr/use-nivel-cefr'
import useTemaConteudos from './temas-conteudos/use-tema-conteudos'

export const TABS = [
  'idiomas',
  'temas-conteudos',
  'hobbies-interesses',
  'nivel-cefr',
  'sotaque-foco',
  'neuroaprendizagem',
] as const

export type TabValue = (typeof TABS)[number]

export default function useUserContextFlow(languageSlug = 'ingles') {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabValue>('idiomas')
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
    isStepValidTheme,
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

  const {
    addCustomLanguage,
    customLanguageCode,
    customLanguageName,
    handleCustomCodeChange,
    handleCustomNameChange,
    handleKeyDownLanguage,
    isCreatingLanguage,
    isErrorLanguage,
    isLoadingLanguages,
    languages,
    selectedLanguageCode,
    setSelectedLanguageCode,
    toggleLanguage,
    favoriteLanguages,
  } = useLanguages()

  // Estados dos dados capturados ao longo do fluxo

  const [learningGoals, setLearningGoals] = useState<string[]>([])
  const [difficulties, setDifficulties] = useState<string[]>([])

  // Validações de navegação
  const isFirstTab = activeTab === TABS[0]
  const isLastTab = activeTab === TABS.at(-1)

  // Validação individuais
  const isTopicsValid = favoriteTopics.length > 0
  const isLanguageValid = Boolean(selectedLanguageCode)
  const isHobbiesValid = favoriteHobbies.length > 0
  const isLanguagesValid = favoriteLanguages.length > 0


  // Define a validade dinamicamente com base na aba em que o usuário está
  const isCurrentStepValid = (() => {
    switch (activeTab) {
      case 'idiomas':
        return isLanguageValid
      case 'temas-conteudos':
        return isTopicsValid
      case 'hobbies-interesses':
        return isHobbiesValid
      case 'nivel-cefr':
      case 'sotaque-foco':
      case 'neuroaprendizagem':
        return true
      default:
        return false
    }
  })()

  // Validação por etapa

  const isStepValidLanguage =
    activeTab === 'idiomas' ? isLanguageValid : isLanguagesValid

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
    addCustomLanguage,
    addCustomTopic,
    allHobbies,
    allTopics,

    currentLevel,

    customHobbies,
    customHobby,

    customLanguageCode,
    customLanguageName,
    customTopic,
    customTopics,
    favoriteHobbies,
    favoriteTopics,
    handleBackTab,
    handleCustomCodeChange,
    handleCustomHobbyChange,
    handleCustomNameChange,
    handleCustomTopicChange,
    handleKeyDown,
    handleKeyDownHobby,
    handleKeyDownLanguage,
    handleNextTab,
    hobbies,
    isCreatingLanguage,
    isErrorLanguage,
    isFirstTab,
    isLanguagesValid,
    isLanguageValid,
    isLastTab,
    isLoadingLanguages,
    isNextDisabled: !isCurrentStepValid,
    isStepValid: isLanguageValid,
    isStepValidLanguage,

    isStepValidTheme,
    isSubmitting,
    languages,
    selectedLanguageCode,
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
    setSelectedLanguageCode,
    setTargetLevel,
    targetLevel,
    toggleHobby,
    toggleLanguage,
    toggleTopic,
  }
}
