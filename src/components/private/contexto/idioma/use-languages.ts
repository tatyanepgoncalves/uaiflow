import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import type React from 'react'
import { useCallback, useState } from 'react'
import { toast } from '@/components/ui/toast'
import { generateCode } from '@/lib/generates-slug'
import {
  createLanguage,
  getLanguage,
  type LanguageItem,
} from '@/services/languages-service'

export default function useLanguages() {
  const queryClient = useQueryClient()

  // Guarda o código do idioma selecionado (ex: "en")
  const [selectedLanguageCode, setSelectedLanguageCode] = useState<string>('')

  // Estados para o formulário de adição customizada
  const [customLanguageName, setCustomLanguageName] = useState('')
  const [customLanguageCode, setCustomLanguageCode] = useState('')
  const [favoriteLanguages, setFavoriteLanguages] = useState<string[]>([])

  // GET /languages
  const {
    data: languages = [],
    isError: isErrorLanguage,
    isLoading: isLoadingLanguages,
  } = useQuery<LanguageItem[]>({
    queryFn: getLanguage,
    queryKey: ['languages'],
  })

  // POST /languages
  const createLanguageMutation = useMutation({
    mutationFn: createLanguage,
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    onError: (error: any) => {
      toast.add({
        description: error?.message || 'Tente novamente.',
        title: 'Erro ao criar idioma',
        type: 'error',
      })
    },
    onSuccess: (newLang) => {
      queryClient.invalidateQueries({ queryKey: ['languages'] })

      // Seleciona automaticamente o código do novo idioma
      setSelectedLanguageCode(newLang.code)

      setCustomLanguageName('')
      setCustomLanguageCode('')

      toast.add({
        title: 'Idioma cadastrado com sucesso!',
        type: 'success',
      })
    },
  })

  const handleCustomNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const name = e.target.value
      setCustomLanguageName(name)
      // Auto-gera o código/slug enquanto o usuário digita o nome
      setCustomLanguageCode(generateCode(name))
    },
    []
  )

  const handleCustomCodeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomLanguageCode(e.target.value.toUpperCase().trim())
    },
    []
  )

  const addCustomLanguage = useCallback(() => {
    const name = customLanguageName.trim()
    const code = customLanguageCode.trim() || generateCode(name)

    if (!(name && code)) {
      return
    }

    createLanguageMutation.mutate({ code, name })
  }, [customLanguageName, customLanguageCode, createLanguageMutation])

  const toggleLanguage = (code: string) => {
    setSelectedLanguageCode((prev) => (prev === code ? '' : code))
  }

  const handleKeyDownLanguage = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        addCustomLanguage()
      }
    },
    [addCustomLanguage]
  )

  const selectedLanguage = languages.find(
    (lang) => lang.code === selectedLanguageCode
  )

  return {
    addCustomLanguage,
    customLanguageCode,
    customLanguageName,
    favoriteLanguages,
    handleCustomCodeChange,
    handleCustomNameChange,
    handleKeyDownLanguage,
    isCreatingLanguage: createLanguageMutation.isPending,
    isErrorLanguage,
    isLoadingLanguages,
    languages,
    selectedLanguage,
    selectedLanguageCode,
    setFavoriteLanguages,
    setSelectedLanguageCode,
    toggleLanguage,
  }
}
