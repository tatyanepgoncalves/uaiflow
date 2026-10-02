import type { ContextStudioItem, LanguageItem } from './types'

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    actionText: 'Praticar Inglês',
    cefr: 'CEFR A1 — C2',
    code: 'GB',
    description:
      'Fluência global em ambientes profissionais, reuniões ágeis e conversação avançada.',
    focusTitle: 'FOCO DE FLUÊNCIA B2:',
    id: 'en',
    isHighlighted: true, // Borda verde em destaque
    name: 'Inglês',
    nativeName: 'English',
    topics: [
      'Phrasal verbs idiomáticos (come up with, figure out)',
      'Collocations executivas (meet a deadline, reach a consen...',
    ],
  },
  {
    actionText: 'Praticar Espanhol',
    cefr: 'CEFR A1 — C2',
    code: 'ES',
    description:
      'Comunicação fluida na Ibero-América, eliminando o portunhol e dominando modismos.',
    focusTitle: 'FOCO DE FLUÊNCIA B2:',
    id: 'es',
    name: 'Espanhol',
    nativeName: 'Español',
    topics: [
      'Locuções prepositivas e conectores (a pesar de que, por ...',
      'Verbos com pronomes reflexivos e idiotismos (darse c...',
    ],
  },
  {
    actionText: 'Praticar Francês',
    cefr: 'CEFR A1 — C2',
    code: 'FR',
    description:
      'Elegância e precisão para trabalho, viagens e intercâmbio cultural.',
    focusTitle: 'FOCO DE FLUÊNCIA B2:',
    id: 'fr',
    name: 'Francês',
    nativeName: 'Français',
    topics: [
      'Expressões com avoir/être fixos (se rendre compte, avoir...',
      'Subjuntivo em fórmulas de opinião (bien que, il faut que)',
    ],
  },
  {
    actionText: 'Praticar Alemão',
    cefr: 'CEFR A1 — C2',
    code: 'DE',
    description:
      'Clareza sintática, verbos separáveis e compostos indispensáveis para o mercado DACH.',
    focusTitle: 'FOCO DE FLUÊNCIA B2:',
    id: 'de',
    name: 'Alemão',
    nativeName: 'Deutsch',
    topics: [
      'Verbos separáveis em contexto de trabalho (vorbereiten,...',
      'Regência fixa de preposições com Dativo/Acusativo (sich...',
    ],
  },
  {
    actionText: 'Praticar Italiano',
    cefr: 'CEFR A1 — C2',
    code: 'IT',
    description:
      'Expressividade autêntica, ritmo melódico e modismos naturais da Itália.',
    focusTitle: 'FOCO DE FLUÊNCIA B2:',
    id: 'it',
    name: 'Italiano',
    nativeName: 'Italiano',
    topics: [
      'Verbi pronominali essenziali (farcela, andarsene, prender...',
      "Fórmulas de cortesia e negociação (dare un'occhiata, me...",
    ],
  },
]

export const CONTEXT_STUDIO_DATA: ContextStudioItem = {
  actionText: 'Explorar Contextos',
  description:
    'Crie missões e personas sob medida (Daily Standups, Apresentações C-Level, Entrevistas no Exterior) com cenários gerados por IA para o seu setor de trabalho.',
  title: 'Context Studio',
}
