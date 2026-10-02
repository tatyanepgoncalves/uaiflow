export type LanguageKey = 'en' | 'es' | 'fr'

export interface EvaluationResultData {
  feedback: string
  grammar: string
  level: string
  naturalness: string
  score: number
  title: string
}

export interface LanguageContent {
  cefr: string
  chunk: string
  defaultSentence: string
  label: string
  result: EvaluationResultData
  translation: string
}
