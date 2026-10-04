import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { LanguageKey } from './types'

interface HeaderProps {
  currentLang: LanguageKey
  onLanguageChange: (lang: LanguageKey) => void
}

export function ArenaHeader({ currentLang, onLanguageChange }: HeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="font-bold text-[11px] text-emerald-500 uppercase tracking-widest">
          Experimente o motor em tempo real
        </span>
        <h2 className="mt-1 font-extrabold text-2xl text-white tracking-tight sm:text-3xl">
          Simulador da Arena de Produção Ativa
        </h2>
      </div>

      <Tabs
        // biome-ignore lint/performance/noJsxPropsBind: it's necessary
        onValueChange={(val) => onLanguageChange(val as LanguageKey)}
        value={currentLang}
      >
        <TabsList className="h-auto rounded-full border border-zinc-800 bg-[#070A0F] p-1">
          <TabsTrigger
            className="rounded-full px-3 py-1.5 font-medium text-xs text-zinc-400 transition-all data-[state=active]:bg-emerald-500 data-[state=active]:font-bold data-[state=active]:text-zinc-950"
            value="en"
          >
            <span className="mr-1.5 text-[10px] opacity-70">GB</span> Inglês
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full px-3 py-1.5 font-medium text-xs text-zinc-400 transition-all data-[state=active]:bg-emerald-500 data-[state=active]:font-bold data-[state=active]:text-zinc-950"
            value="es"
          >
            <span className="mr-1.5 text-[10px] opacity-70">ES</span> Espanhol
          </TabsTrigger>
          <TabsTrigger
            className="rounded-full px-3 py-1.5 font-medium text-xs text-zinc-400 transition-all data-[state=active]:bg-emerald-500 data-[state=active]:font-bold data-[state=active]:text-zinc-950"
            value="fr"
          >
            <span className="mr-1.5 text-[10px] opacity-70">FR</span> Francês
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
