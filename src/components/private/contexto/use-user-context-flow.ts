'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

import { toast } from '@/components/ui/toast'
import type { CreateUserContextBodyData } from '@/schemas/user-contexto/create-user-context'
import { createUserContext } from '@/services/user-context-service'
import { PRESET_TOPICS } from './data'

const TABS = [
  'temas-conteudos',
  'hobbies-interesses',
  'nivel-cefr',
  'sotaque-foco',
  'neuroaprendizagem',
] as const

type TabValue = (typeof TABS)[number]

export default function useUserContextFlow(languageSlug = 'ingles') {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabValue>('temas-conteudos')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Estados dos dados capturados ao longo do fluxo
  const [favoriteTopics, setFavoriteTopics] = useState<string[]>([])
  const [customTopics, setCustomTopics] = useState<string[]>([]) // Estado para armazenar os novos temas
  const [customTopic, setCustomTopic] = useState('')

  const [hobbies, setHobbies] = useState<string[]>([])
  const [level, setLevel] = useState<'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'>(
    'A1'
  )
  const [learningGoals, setLearningGoals] = useState<string[]>([])
  const [difficulties, setDifficulties] = useState<string[]>([])

  // Validação por etapa para liberar o botão "Avançar" / Abas
  const isStepValid = favoriteTopics.length > 0
  const isLastTab = activeTab === TABS.at(-1)

  const handleCustomTopicChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomTopic(e.target.value)
    },
    []
  )

  const addCustomTopic = useCallback(() => {
    setCustomTopic((currentValue) => {
      const trimmed = currentValue.trim()
      if (!trimmed) {
        return currentValue
      }

      setCustomTopics((prev) =>
        prev.includes(trimmed) || PRESET_TOPICS.includes(trimmed)
          ? prev
          : [...prev, trimmed]
      )

      setFavoriteTopics((prev) =>
        prev.includes(trimmed) ? prev : [...prev, trimmed]
      )

      return '' // Limpa o input
    })
  }, [])

  const handleNextTab = useCallback(async () => {
    const currentIndex = TABS.indexOf(activeTab)

    // Se estiver na última aba, faz a submissão final ao backend
    if (isLastTab) {
      setIsSubmitting(true)

      const payload: CreateUserContextBodyData = {
        currentLevel: level,
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
    level,
    favoriteTopics,
    hobbies,
    learningGoals,
    difficulties,
    languageSlug,
    router,
  ])

  const toggleTopic = (topic: string) => {
    setFavoriteTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )
  }

  // Handler estável para a tecla Enter
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        addCustomTopic()
      }
    },
    [addCustomTopic]
  )

  // Combina os tópicos predefinidos com os criados pelo utilizador
  const allTopics = [...PRESET_TOPICS, ...customTopics]

  return {
    activeTab,
    addCustomTopic,
    allTopics,
    customTopic,
    favoriteTopics,
    handleCustomTopicChange,
    handleKeyDown,
    handleNextTab,
    isLastTab,
    isNextDisabled: !isStepValid || isLastTab,
    isStepValid,
    isSubmitting,
    level,
    setActiveTab,
    setDifficulties,
    setFavoriteTopics,

    setHobbies,
    setLearningGoals,
    setLevel,
    toggleTopic,
  }
}
