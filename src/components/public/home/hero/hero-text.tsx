import { Brain } from 'lucide-react'

export default function HeroText() {
  return (
    <>
      {/* Subtle methodology lead-in */}
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-semibold text-emerald-400 text-xs">
        <Brain className="h-4 w-4 text-emerald-400" />
        <span>Neurociência Cognitiva & Comprehensible Input (i+1)</span>
      </div>

      {/* Main Headline */}
      <h1 className="mx-auto max-w-4xl text-balance font-black text-4xl text-white leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
        Fluência real através da{' '}
        <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
          produção ativa diária
        </span>
      </h1>

      {/* Value Proposition */}
      <p className="mx-auto w-full max-w-2xl font-normal text-base text-zinc-300/90 leading-relaxed sm:text-xl">
        Abandone listas passivas de vocabulário e exercícios de múltipla
        escolha. O <strong>UAIFlow</strong> treina seu cérebro com blocos
        lexicais de alta frequência e avaliação gramatical em tempo real com IA
        até o nível <strong>CEFR B2+</strong>.
      </p>
    </>
  )
}
