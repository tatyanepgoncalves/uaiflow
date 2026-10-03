export default function FooterPublic() {
  return (
    <footer className="flex w-full items-center justify-center border-zinc-800/80 border-t bg-zinc-950 py-8 text-xs text-zinc-500">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-bold text-zinc-300">UAIFlow</span>
          <span className="text-zinc-600">·</span>
          <span>Neurociência, Comprehensible Input & Produção Ativa</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <p className="transition hover:text-white">Início</p>
          <p className="transition hover:text-white">Prática Ativa</p>
          <p className="transition hover:text-white">Contextos</p>
          <p className="transition hover:text-white">Cofre de Chunks</p>
        </div>

        <p className="text-[11px] text-zinc-600">
          CEFR A1 – C2 • 5 Idiomas • Motor Gemini 3.8 Flash
        </p>
      </div>
    </footer>
  )
}
