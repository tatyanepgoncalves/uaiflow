import { useState } from 'react'
import { LANGUAGE_DATA } from '@/components/public/home/arena-simulator/data'

export default function useDemoArena() {
  const [lang, setLang] = useState<'en' | 'es' | 'fr'>('en')
  const [sentence, setSentence] = useState(LANGUAGE_DATA.en.defaultSentence)
  const [showResult, setShowResult] = useState(false)
  const [isEvaluating, setIsEvaluating] = useState(false)

  const handleLanguageChange = (value: string) => {
    const selectedLang = value as 'en' | 'es' | 'fr'
    setLang(selectedLang)
    setSentence(LANGUAGE_DATA[selectedLang].defaultSentence)
    setShowResult(false)
  }

  const handleEvaluate = () => {
    setIsEvaluating(true)
    // Simula o tempo de processamento da IA
    setTimeout(() => {
      setIsEvaluating(false)
      setShowResult(true)
    }, 400)
  }

  const currentData = LANGUAGE_DATA[lang]

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSentence(e.target.value)
    setShowResult(false)
  }

  return {
    currentData,
    handleEvaluate,
    handleLanguageChange,
    isEvaluating,
    lang,
    onChangeInput,
    sentence,
    showResult,
  }
}
