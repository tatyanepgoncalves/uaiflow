import { useCallback, useState } from 'react'
import { PRESET_TOPICS } from '../data'

export default function useTemaConteudos() {
  const [favoriteTopics, setFavoriteTopics] = useState<string[]>([])
  const [customTopics, setCustomTopics] = useState<string[]>([]) // Estado para armazenar os novos temas
  const [customTopic, setCustomTopic] = useState('')

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

  // Validação de navegação
  const isStepValidTheme = favoriteTopics.length > 0

  return {
    addCustomTopic,
    allTopics,
    customTopic,
    customTopics,
    favoriteTopics,
    handleCustomTopicChange,
    handleKeyDown,

    isStepValidTheme,
    setCustomTopic,
    setCustomTopics,
    setFavoriteTopics,
    toggleTopic,
  }
}
