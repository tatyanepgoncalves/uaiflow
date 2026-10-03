import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CtaFinal() {
  return (
    <section className="flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl space-y-4 rounded-3xl border border-emerald-500/40 bg-linear-to-r from-emerald-950/60 via-zinc-900 to-indigo-950/60 p-8 text-center shadow-2xl sm:p-14">
        <h2 className="font-black text-3xl text-white tracking-tight sm:text-4xl">
          Pronto para atingir fluência real com base científica?
        </h2>
        <p className="mx-auto max-w-xl text-sm text-zinc-300 leading-relaxed sm:text-base">
          Inicie sua primeira sessão de produção ativa agora mesmo. Configure
          seus temas favoritos e experimente o poder do método UAIFlow.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 px-8 py-4 font-black text-sm text-zinc-950 shadow-xl transition hover:from-emerald-400 hover:to-teal-500 sm:w-auto sm:text-base"
            href="#simulator"
          >
            <span>Iniciar Prática Ativa Agora</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            className="w-full rounded-xl border border-slate-700 bg-zinc-900 px-7 py-4 font-bold text-sm text-white transition hover:bg-zinc-800 sm:w-auto sm:text-base"
            href="?auth=cadastrar"
            scroll={false}
          >
            <span>Criar Minha Conta Gratuita</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
