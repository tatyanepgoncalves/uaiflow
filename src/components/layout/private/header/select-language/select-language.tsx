'use client'

import { ChevronsUpDown, Globe } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import useContexts from '@/hooks/contexts/use-contexts'
import useListContexts from '@/hooks/contexts/use-list-contexts'
import FooterSelect from './footer-select'
import InputSearch from './input-search'
import ListLanguage from './list-language'
import LoadingUserContexts from './loading-user-contexts'

interface SelectLanguageProps {
  userId: string
}

export default function SelectLanguage({ userId }: SelectLanguageProps) {
  const { userContexts, isLoadingUserContexts } = useContexts(userId)
  const { listContexts } = useListContexts({ contexts: userContexts })

  const [open, setOpen] = useState(false)
  const [selectedContextId, setSelectedContextId] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState('')

  // Contexto selecionado (ou o primeiro como padrão)
  const currentContext =
    listContexts.find((item) => item.id === selectedContextId) ||
    listContexts[0]

  // Filtro de idiomas
  const filteredContexts = listContexts.filter((item) =>
    item.language.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isLoadingUserContexts) {
    return <LoadingUserContexts />
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        render={
          <Button
            aria-expanded={open}
            className="h-10 w-42.5 justify-between border-zinc-800 bg-zinc-900 px-3 text-white transition-colors hover:bg-zinc-800 hover:text-white"
            role="combobox"
            variant="outline"
          />
        }
      >
        <div className="flex items-center gap-2 truncate font-medium text-xs">
          {currentContext?.language?.code ? (
            <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-bold text-[10px] text-emerald-400 uppercase">
              {currentContext.language.code}
            </span>
          ) : (
            <Globe className="h-4 w-4 shrink-0 text-zinc-400" />
          )}
          <span className="truncate">
            {currentContext?.language?.name || 'Selecione'}
          </span>
        </div>
        <ChevronsUpDown className="ml-2 h-3.5 w-3.5 shrink-0 opacity-50" />
      </PopoverTrigger>

      <PopoverContent align="end" className="w-60 space-y-2">
        <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Separator className="bg-zinc-700/40" />

        <ListLanguage
          currentContext={currentContext}
          filteredContexts={filteredContexts}
          selectedContextId={selectedContextId}
          setOpen={setOpen}
          setSelectedContextId={setSelectedContextId}
        />

        <Separator className="bg-zinc-700/40" />

        <FooterSelect setOpen={setOpen} />
      </PopoverContent>
    </Popover>
  )
}
