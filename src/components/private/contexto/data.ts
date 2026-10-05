import type { CEFRLevel } from '@/types/uaiFlow'

export const PRESET_TOPICS = [
  'Tecnologia & Inteligência Artificial',
  'Negócios, Startups & Liderança',
  'Finanças & Investimentos',
  'Cinema, Filmes & Séries',
  'Games & E-sports',
  'Ciência, Espaço & Filosofia',
  'Viagens & Culturas Globais',
  'Saúde, Biohacking & Longevidade',
  'Desenvolvimento Pessoal & Hábitos',
  'Marketing & Vendas B2B',
  'Engenharia & Arquitetura',
  'Debates e Políticas Globais',
]

export const PRESET_HOBBIES = [
  'Programação & Coding',
  'Leitura & Literatura',
  'Música & Tocar Instrumentos',
  'Culinária & Gastronomia',
  'Esportes, Corrida & Fitness',
  'Fotografia & Cinema',
  'Meditação & Mindfulness',
  'Jogos de Tabuleiro & Xadrez',
  'Viagens & Mochilão',
  'Podcasts & Aprendizagem Contínua',
]

export const CEFR_LEVELS: { level: CEFRLevel; title: string; desc: string }[] =
  [
    {
      desc: 'Frases simples e vocabulário básico isolado.',
      level: 'A1',
      title: 'A1 - Iniciante',
    },
    {
      desc: 'Comunicação elementar em rotinas cotidianas.',
      level: 'A2',
      title: 'A2 - Básico Operacional',
    },
    {
      desc: 'Compreende pontos principais e se vira em viagens.',
      level: 'B1',
      title: 'B1 - Intermediário Inicial',
    },
    {
      desc: 'Produção espontânea, reuniões de trabalho e debates.',
      level: 'B2',
      title: 'B2 - Independente / Fluência',
    },
    {
      desc: 'Domínio sofisticado, nuances e vocabulário flexível.',
      level: 'C1',
      title: 'C1 - Avançado Operacional',
    },
    {
      desc: 'Fluência equiparável a falante nativo culto.',
      level: 'C2',
      title: 'C2 - Domínio Pleno',
    },
  ]
