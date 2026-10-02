import { cn } from '@/lib/utils'
import { pillars } from '@/types/pillars'

export default function PillarsSection() {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center justify-center space-y-12 px-4 sm:px-6 lg:px-8">
      <div className="flex max-w-3xl flex-col items-center justify-center space-y-3 text-center">
        <span className="font-bold text-indigo-400 text-xs uppercase tracking-wider">
          Fundamentos de Neuroaprendizagem
        </span>
        <h2 className="font-extrabold text-3xl text-white tracking-tight sm:text-4xl">
          Por que 10 minutos de produção ativa superam horas de estudo passivo
        </h2>
        <p className="text-sm text-zinc-400 leading-relaxed sm:text-base">
          A mente humana não retém regras gramaticais abstratas isoladas. A
          fluência real decorre da automação sináptica de blocos completos.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {pillars.map((pilar) => {
          const Icon = pilar.icon

          return (
            <div
              className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-slate-700"
              key={pilar.id}
            >
              <div
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-2xl border',
                  pilar.colors.background,
                  pilar.colors.text,
                  pilar.colors.border
                )}
              >
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <span className="font-bold text-xs text-zinc-500 uppercase">
                  {pilar.id}
                </span>
                <h3 className="mt-1 font-bold text-white text-xl">
                  {pilar.title}
                </h3>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {pilar.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
