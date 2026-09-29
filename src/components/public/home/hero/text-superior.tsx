export default function TextSuperior() {
  return (
    <section className="absolute right-6 bottom-6 left-6 flex flex-col items-start justify-between gap-4 sm:right-10 sm:bottom-10 sm:left-10 md:flex-row md:items-end">
      <div className="w-full max-w-xl rounded-2xl border border-zinc-800/80 bg-zinc-900/85 p-5 text-left shadow-2xl backdrop-blur-md sm:p-6">
        <span className="mb-1 block font-bold text-[11px] text-emerald-400 uppercase tracking-wider">
          Motor UAIFlow Server v2.0
        </span>
        <h3 className="mb-2 font-bold text-lg text-white sm:text-xl">
          Feedback Imediato de Gramática & Naturalidade Idiomática
        </h3>
        <p className="text-xs text-zinc-300 leading-relaxed sm:text-sm">
          Ao escrever sua frase, o modelo Gemini 3.8 Flash analisa a sintaxe,
          detecta transferências do português e sugere alternativas de nível B2
          e C1 em tempo real.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-slate-800 bg-zinc-900/90 px-4 py-3 backdrop-blur-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/20 font-black text-emerald-400 text-sm">
          B2
        </div>
        <div className="text-left text-xs">
          <span className="block font-bold text-white">Objetivo CEFR B2</span>
          <span className="text-zinc-400">Fluência Independente</span>
        </div>
      </div>
    </section>
  )
}
