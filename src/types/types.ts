export interface Language {
  id: string
  name: string
}

export interface UserContext {
  createdAt: string
  dailyGoalChunks: number
  difficultyNotes: string | null
  id: string
  interests: string[]
  isActive: boolean
  language: Language
  learningGoals: string | null
  name: string

  professionArea: string[]
  updatedAt: string | null
}
