import type { TargetLanguage } from '@/types/uaiFlow'

export interface LanguageConfig {
  b2Milestones: string[]
  code: TargetLanguage
  description: string
  flag: string
  name: string
  nativeName: string
  voiceLang: string
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  {
    b2Milestones: [
      'Phrasal verbs idiomáticos (come up with, figure out)',
      'Collocations executivas (meet a deadline, reach a consensus)',
      'Conectivos de transição argumentativa (on the other hand, in light of)',
    ],
    code: 'en',
    description:
      'Fluência global em ambientes profissionais, reuniões ágeis e conversação avançada.',
    flag: '🇬🇧',
    name: 'Inglês',
    nativeName: 'English',
    voiceLang: 'en-US',
  },
  {
    b2Milestones: [
      'Locuções prepositivas e conectores (a pesar de que, por lo tanto)',
      'Verbos com pronomes reflexivos e idiomatismos (darse cuenta, echar de menos)',
      'Diferenciação precisa entre por/para e ser/estar no nível B2',
    ],
    code: 'es',
    description:
      'Comunicação fluida na Ibero-América, eliminando o portunhol e dominando modismos.',
    flag: '🇪🇸',
    name: 'Espanhol',
    nativeName: 'Español',
    voiceLang: 'es-ES',
  },
  {
    b2Milestones: [
      'Expressões com avoir/être fixos (se rendre compte, avoir beau)',
      'Subjuntivo em fórmulas de opinião (bien que, il faut que)',
      'Conectores de discurso analítico (d’ailleurs, en revanche)',
    ],
    code: 'fr',
    description:
      'Elegância e precisão para trabalho, viagens e intercâmbio cultural.',
    flag: '🇫🇷',
    name: 'Francês',
    nativeName: 'Français',
    voiceLang: 'fr-FR',
  },
  {
    b2Milestones: [
      'Verbos separáveis em contexto de trabalho (vorbereiten, stattfinden)',
      'Regência fixa de preposições com Dativo/Acusativo (sich freuen auf/über)',
      'Conectivos de causa e contraste (trotzdem, infolgedessen)',
    ],
    code: 'de',
    description:
      'Clareza sintática, verbos separáveis e compostos indispensáveis para o mercado DACH.',
    flag: '🇩🇪',
    name: 'Alemão',
    nativeName: 'Deutsch',
    voiceLang: 'de-DE',
  },
  {
    b2Milestones: [
      'Verbi pronominali essenziali (farcela, andarsene, prendersela)',
      'Fórmulas de cortesia e negociação (dare un’occhiata, mettere a punto)',
      'Connettivi e transizioni fluide (in fin dei conti, a quanto pare)',
    ],
    code: 'it',
    description:
      'Expressividade autêntica, ritmo melódico e modismos naturais da Itália.',
    flag: '🇮🇹',
    name: 'Italiano',
    nativeName: 'Italiano',
    voiceLang: 'it-IT',
  },
]
