import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from '@/components/ui/toast'
import type { CreateUserContextBodyData } from '@/schemas/user-contexto/create-user-context'
import { createUserContext } from '@/services/user-context-service'
import useHobbiesInteresses from './hobbies-interesses/use-hobbies-interests'
// Sub-hooks de cada aba
import useLanguages from './idioma/use-languages'
import useLanguageAccent from './idioma-sotaque/use-language-accent'
import useNivelCefr from './nivel-cefr/use-nivel-cefr'
import useTemaConteudos from './temas-conteudos/use-tema-conteudos'
import useDifficulties from './dificuldades/use-difficulties'
import useGoals from './metas-aprendizagem/use-goals'

export const TABS = [
  'idiomas',
  'sotaque-foco',
  'dificuldades',
  'temas-conteudos',
  'hobbies-interesses',
  'nivel-cefr',
  'metas-aprendizagem',
] as const

export default function useUserContext(initialLanguageSlug = 'ingles') {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('idiomas')
  const [currentLevel, setCurrentLevel] = useState<
    'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  >('A1')

  // Instâncias dos sub-hooks
  const languageFlow = useLanguages()
  const topicsFlow = useTemaConteudos()
  const hobbiesFlow = useHobbiesInteresses()
  const accentFlow = useLanguageAccent(languageFlow.selectedLanguage?.id || '')
  const difficultiesFlow = useDifficulties()
  const goalsFlow = useGoals()
  const levelCefrFlow = useNivelCefr()

  // Mutação final para submeter o contexto consolidado
  const submitContextMutation = useMutation({
    mutationFn: (body: CreateUserContextBodyData) =>
      createUserContext(
        languageFlow.selectedLanguage?.id|| initialLanguageSlug,
        body
      ),
    onError: (error: any) => {
      toast.add({
        description: error?.message || 'Tente novamente em instantes.',
        title: 'Erro ao salvar contexto',
        type: 'error',
      })
    },
    onSuccess: () => {
      toast.add({
        title: 'Contexto de aprendizado criado com sucesso!',
        type: 'success',
      })
      router.push('/central-de-aprendizado') // redireciona após a criação
    },
  })

  // Função para compilar e disparar todos os dados
  const handleSubmitAll = useCallback(() => {
    // Agrupa interesses (Temas + Hobbies)
    const combinedInterests = [
      ...topicsFlow.favoriteTopics,
      ...hobbiesFlow.favoriteHobbies,
    ]

    // Agrupa metas de aprendizado (Sotaque + Metas específicas)
    const learningGoals = [
      ...(accentFlow.selectedAccent
        ? [`Sotaque/Foco: ${accentFlow.selectedAccent}`]
        : []),
    ]

    const payload: CreateUserContextBodyData = {
      currentLevel, // 'A1' | 'A2' | 'B1' | ...
      dailyGoalChunks: goalsFlow.dailyGoalChunks, // número de chunks diários[cite: 41]
      difficultyNotes: difficultiesFlow.allDifficulties, // array com os obstáculos[cite: 41]
      interests: combinedInterests, // array de strings ou nulo
      isActive: true,
      languageId: languageFlow.selectedLanguage?.id || initialLanguageSlug,
      learningGoals: learningGoals.length > 0 ? learningGoals : null,
    }

    submitContextMutation.mutate(payload)
  }, [
    topicsFlow.favoriteTopics,
    hobbiesFlow.favoriteHobbies,
    accentFlow.selectedAccent,
    currentLevel,
    goalsFlow.dailyGoalChunks,
    difficultiesFlow.allDifficulties,
    submitContextMutation,
  ])

  // Validações de navegação
  const isFirstTab = activeTab === TABS[0]
  const isLastTab = activeTab === TABS.at(-1)

  // Lógica para avançar abas ou finalizar no último passo
  const handleNextTab = useCallback(() => {
    if (activeTab === 'metas-aprendizagem') {
      handleSubmitAll()
    } else {
      // transição simples de abas
      const tabs = [
        'idiomas',
        'sotaque-foco',
        'dificuldades',
        'temas-conteudos',
        'hobbies-interesses',
        'nivel-cefr',
        'metas-aprendizagem',
      ]
      const currentIndex = tabs.indexOf(activeTab)
      if (currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1])
      }
    }
  }, [activeTab, handleSubmitAll])

  const handleBackTab = useCallback(() => {
    // transição simples de abas
    const tabs = [
      'idiomas',
      'temas-conteudos',
      'hobbies-interesses',
      'nivel-cefr',
      'sotaque-foco',
      'dificuldades-chunks',
    ]
    const currentIndex = tabs.indexOf(activeTab)

    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1])
    }
  }, [activeTab])

  return {
    accentFlow,
    activeTab,
    currentLevel,
    difficultiesFlow,
    handleBackTab,
    handleNextTab,
    handleSubmitAll,
    hobbiesFlow,
    isFirstTab,
    isLastTab,
    isNextDisabled: !handleNextTab,
    isSubmitting: submitContextMutation.isPending,

    // Repassa os estados dos sub-hooks para as abas
    languageFlow,
    levelCefrFlow,
    setActiveTab,
    setCurrentLevel,
    topicsFlow,
    goalsFlow
  }
}
