'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/context/auth-context'
import LogoutButton from '../../buttons/logout-button'

export default function UserAvatar() {
  const { user } = useAuth()

  // Correção segura para pegar a primeira letra do Nome e do Sobrenome
  const initials =
    user?.name
      ?.split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'U'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            className="flex h-10 items-center space-x-2 rounded-xl border border-zinc-500 bg-zinc-800 px-3 transition hover:bg-zinc-700"
            type="button"
          />
        }
      >
        <span className="hidden max-w-25 truncate font-semibold text-slate-200 text-xs sm:inline">
          {user?.name}
        </span>
        <Avatar>
          <AvatarImage
            alt={`Imagem de ${user?.name}`}
            src={user?.avatarUrl ?? ''}
          />
          <AvatarFallback className="flex items-center justify-center bg-linear-to-tr from-indigo-500 to-emerald-500 font-bold text-white text-xs uppercase">
            {initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-full max-w-80 space-y-3 border border-zinc-800 bg-zinc-900 px-4 py-3"
        side="bottom"
      >
        <div>
          <p className="font-bold text-sm text-white">{user?.name}</p>
          <p className="text-[11px] text-zinc-400">{user?.email}</p>

          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Banco de chunks individual</span>
          </div>
        </div>

        <DropdownMenuSeparator />

        <LogoutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
