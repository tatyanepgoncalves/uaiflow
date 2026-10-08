'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useContexts from '@/hooks/contexts/use-contexts'
import useListContexts from '@/hooks/contexts/use-list-contexts'

interface SelectLanguageProps {
  userId: string
}

export default function SelectLanguage({ userId }: SelectLanguageProps) {
  const { userContexts } = useContexts(userId)
  const { listContexts } = useListContexts({ contexts: userContexts })

  return (
    <Select defaultValue={listContexts[0]?.language.name}>
      <SelectTrigger className="h-10 w-full max-w-80">
        <SelectValue placeholder={listContexts[0]?.language.name} />
      </SelectTrigger>
      <SelectContent>
        {listContexts.map((context) => (
          <SelectItem key={context.id} value={context.language.name}>
            <p className="text-xs text-zinc-500">{context.language.code}</p>
            <p>{context.language.name}</p>
            <p>{context.language.flag}</p>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
