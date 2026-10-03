import { Brain } from 'lucide-react'
import Link from 'next/link'
import AuthDialog from './auth-dialog'
import { Suspense } from 'react'

export default function HeaderPublic() {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-center border-zinc-800 border-b bg-zinc-900/90 backdrop-blur-md">
      <div className="flex w-full max-w-7xl items-center justify-between p-4 sm:p-6 lg:p-8">
        {/* LOGO */}
        <Link className="flex items-center gap-3" href="/">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-emerald-500 via-teal-500 to-indigo-500">
            <Brain className="h-6 w-6 animate-pulse text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="bg-linear-to-r from-white via-emerald-200 to-teal-400 bg-clip-text font-black text-transparent text-xl tracking-tight sm:text-2xl">
                UAIFlow
              </span>
              <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-bold text-[10px] text-emerald-400 uppercase tracking-wider">
                B2 Engine
              </span>
            </div>
            <p className="hidden text-[11px] text-slate-400 sm:block">
              Neurociência & Produção Ativa de Frases
            </p>
          </div>
        </Link>

        <Suspense fallback={<div>Carregando...</div>}>

        <AuthDialog />
        </Suspense>
      </div>
    </header>
  )
}
