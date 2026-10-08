import { useState } from 'react'
import type { UserContext } from '@/types/types'

interface UseListContextsProps {
  contexts: UserContext[]
}

export default function useListContexts({ contexts }: UseListContextsProps) {
  const [nameLanguage, setNameLanguage] = useState<string>('')
  const [slugLanguage, setSlugLanguage] = useState<string>('')
  const [isActive, setIsActive] = useState<string | boolean | null>(null)

  const listContexts = Array.isArray(contexts) ? contexts : []

  const cleanFilter = () => {
    setNameLanguage('')
    setSlugLanguage('')
    setIsActive(null)
  }

  return {
    cleanFilter,
    isActive,
    listContexts,
    nameLanguage,
    setIsActive,
    setNameLanguage,
    setSlugLanguage,
    slugLanguage,
  }
}
