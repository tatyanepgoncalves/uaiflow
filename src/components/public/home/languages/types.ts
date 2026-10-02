export interface LanguageItem {
  actionText: string
  cefr: string
  code: string
  description: string
  focusTitle: string
  href?: string
  id: string
  isHighlighted?: boolean
  name: string
  nativeName: string
  topics: string[]
}

export interface ContextStudioItem {
  actionText: string
  description: string
  href?: string
  title: string
}
