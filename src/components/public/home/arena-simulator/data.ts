import type { LanguageContent, LanguageKey } from './types'

export const LANGUAGE_DATA: Record<LanguageKey, LanguageContent> = {
  en: {
    cefr: 'Meta CEFR B2',
    chunk: 'get the hang of',
    defaultSentence:
      'I finally got the hang of active practice and my fluency improved.',
    label: 'Inglês',
    result: {
      feedback:
        'Excelente aplicação! O verbo foi flexionado com perfeição no Simple Past e a estrutura é fluida e idiomática.',
      grammar: '95%',
      level: 'Nível Demonstrado: B2',
      naturalness: '92%',
      score: 94,
      title: 'Excelente Produção!',
    },
    translation: 'Pegar o jeito / dominar uma prática',
  },
  es: {
    cefr: 'Meta CEFR B2',
    chunk: 'darse cuenta de',
    defaultSentence:
      'Me di cuenta de que la práctica activa acelera la fluidez mucho más que la lectura pasiva.',
    label: 'Espanhol',
    result: {
      feedback:
        'Excelente aplicação! O verbo foi flexionado com perfeição no Pretérito Indefinido e a estrutura é fluida e idiomática.',
      grammar: '98%',
      level: 'Nível Demonstrado: B2',
      naturalness: '94%',
      score: 96,
      title: 'Excelente Produção!',
    },
    translation: 'Perceber / dar-se conta de algo',
  },
  fr: {
    cefr: 'Meta CEFR B2',
    chunk: 'se rendre compte',
    defaultSentence:
      'Je me suis rendu compte que la pratique active accélère la fluidité bien plus que la lecture passive.',
    label: 'Francês',
    result: {
      feedback:
        'Excelente aplicação! O verbo pronominal foi conjugado corretamente no Passé Composé.',
      grammar: '92%',
      level: 'Nível Demonstrado: B2',
      naturalness: '90%',
      score: 91,
      title: 'Excelente Produção!',
    },
    translation: 'Perceber / dar-se conta de algo',
  },
}
