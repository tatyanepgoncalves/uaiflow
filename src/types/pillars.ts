import { Clock, Layers, Zap } from 'lucide-react'

export const pillars = [
  {
    colors: {
      background: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400',
    },
    description:
      'Falantes nativos comunicam-se usando fórmulas prontas como "as far as I am concerned" e "look forward to". Aprender blocos inteiros impede que seu cérebro tente traduzir palavra por palavra do português.',
    icon: Layers,
    id: 'Pilar 01',
    title: 'Blocos Lexicais (Lexical Chunks)',
  },
  {
    colors: {
      background: 'bg-sky-500/10',
      border: 'border-sky-500/20',
      text: 'text-sky-400',
    },
    description:
      'Apenas reconhecer uma palavra numa lista ou acertar um quiz de múltipla escolha não desenvolve a capacidade de fala. O UAIFlow obriga você a construir frases originais, ativando os circuitos motores da memória.',
    icon: Zap,
    id: 'Pilar 02',
    title: 'Active Recall & Produção Ativa',
  },
  {
    colors: {
      background: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      text: 'text-indigo-400',
    },
    description:
      'Baseado na teoria de Stephen Krashen: para evoluir de forma constante, o material deve estar ligeiramente acima do seu nível atual (i+1), oferecendo desafio sem causar sobrecarga cognitiva ou frustração.',
    icon: Layers,
    id: 'Pilar 03',
    title: 'Comprehensible Input Adaptativo (i+1)',
  },
  {
    colors: {
      background: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      text: 'text-amber-400',
    },
    description:
      'Nosso algoritmo calcula intervalos dinâmicos com base na facilidade de resposta. A revisão ocorre exatamente antes do esquecimento ocorrer, fixando o vocabulário na memória de longo prazo.',
    icon: Clock,
    id: 'Pilar 04',
    title: 'Repetição Espaçada Neural (SRS)',
  },
]
