export type ChunkCategory =
  | 'chunk'
  | 'collocation'
  | 'phrasal_verb'
  | 'idiom'
  | 'connector'
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
export type RegisterType = 'formal' | 'neutral' | 'informal' | 'business'
export type SRSStatus = 'new' | 'learning' | 'review' | 'mastered'
export type TargetLanguage = 'en' | 'es' | 'fr' | 'de' | 'it'

export interface UserLearningProfile {
  accentPreference: string
  completedOnboarding: boolean
  currentLevel: CEFRLevel
  favoriteTopics: string[]
  hobbies: string[]
  neuroTechniques: string[]
  notes?: string
  targetLevel: CEFRLevel
}

export interface UserProfile {
  avatar?: string
  createdAt: string
  dailyGoal: number // e.g. 5 sentences/day
  email: string
  id: string
  learningProfile?: UserLearningProfile
  name: string
  nativeLanguage: string
  targetLanguage: TargetLanguage
}

export interface LexicalChunk {
  category: ChunkCategory
  cefrLevel: CEFRLevel
  commonMistake?: string
  contextExamples: string[]
  custom?: boolean
  definition: string
  grammarPattern: string
  id: string
  language: TargetLanguage
  ptMeaning: string
  register: RegisterType
  tags: string[]
  text: string
  userId?: string
}

export interface SentenceCorrection {
  corrected: string
  explanation: string
  original: string
}

export interface EvaluationResult {
  audioScript: string
  cefrLevel: CEFRLevel
  chunkAccuracy: number
  collocationsUsed: string[]
  contextTitle?: string
  corrections: SentenceCorrection[]
  feedbackPt: string
  grammarPoints: string[]
  grammarScore: number
  id?: string
  isCorrect: boolean
  language: TargetLanguage
  nativeAlternatives: string[]
  naturalnessScore: number
  score: number
  targetChunk: string
  timestamp: number
  userId?: string
  userSentence: string
}

export interface SRSItem {
  chunkId: string
  easeFactor: number
  history: Array<{
    date: string
    score: number
    rating: 'again' | 'hard' | 'good' | 'easy'
  }>
  intervalDays: number
  lastReviewedDate?: string
  nextReviewDate: string // ISO string
  repetitions: number
  status: SRSStatus
  userId?: string
}

export interface DailyCompetencies {
  activeOutputRate: number
  grammarPrecision: number
  idiomaticNaturalness: number
  lexicalRange: number
  retentionStability: number
}

export interface UserStats {
  competencies: DailyCompetencies
  dailyGoal: number
  lastActiveDate: string
  streakDays: number
  todayCount: number
  totalSentences: number
}

export interface LearningContext {
  createdAt: string
  description?: string
  id: string
  role: string
  situation: string
  suggestedChunkIds: string[]
  tags: string[]
  targetLanguage: TargetLanguage
  title: string
  userId: string
}
