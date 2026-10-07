import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import { toast } from '@/components/ui/toast'
import {
  type AccentItem,
  createAccent,
  getAccentsByLanguage,
} from '@/services/accent-service'

export default function useLanguageAccent(selectedLanguageId: string) {
  const queryClient = useQueryClient()
  const [customAccentName, setCustomAccentName] = useState('')
  const [selectedAccent, setSelectedAccent] = useState('')

  // Busca sotaques filtrados pelo ID do idioma selecionado
  const {
    data: apiAccents = [],
    isError: isErrorAccents,
    isLoading: isLoadingAccents,
  } = useQuery<AccentItem[]>({
    enabled: Boolean(selectedLanguageId),
    queryFn: () => getAccentsByLanguage(selectedLanguageId),
    queryKey: ['accents', selectedLanguageId],
  })

  // Mutation para criar sotaque vinculado ao idioma selecionado
  const createAccentMutation = useMutation({
    mutationFn: ({
      name,
      description,
    }: {
      name: string
      description?: string
    }) => createAccent({ description, languageId: selectedLanguageId, name }),
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    onError: (error: any) => {
      toast.add({
        description: error?.message || 'Erro ao criar sotaque.',
        title: 'Erro ao adicionar sotaque',
        type: 'error',
      })
    },
    onSuccess: (newAccent) => {
      queryClient.invalidateQueries({
        queryKey: ['accents', selectedLanguageId],
      })
      setSelectedAccent(newAccent.name)
      setCustomAccentName('')
      toast.add({
        title: 'Sotaque adicionado com sucesso!',
        type: 'success',
      })
    },
  })

  const handleCustomAccentChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomAccentName(e.target.value)
    },
    []
  )

  const addCustomAccent = useCallback(() => {
    const name = customAccentName.trim()
    if (!(name && selectedLanguageId)) {
      return
    }

    createAccentMutation.mutate({ name })
  }, [customAccentName, selectedLanguageId, createAccentMutation])

  const handleKeyDownAccent = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        addCustomAccent()
      }
    },
    [addCustomAccent]
  )

  const toggleAccent = (accent: string) => {
    setSelectedAccent((prev) => (prev === accent ? '' : accent))
  }

  const availableAccents = apiAccents.map((item) => item.name)

  return {
    addCustomAccent,
    availableAccents,
    customAccentName,
    handleCustomAccentChange,
    handleKeyDownAccent,
    isCreatingAccent: createAccentMutation.isPending,
    isErrorAccents,
    isLoadingAccents,
    selectedAccent,
    setSelectedAccent,
    toggleAccent,
  }
}
