import { getUser } from '@/services/auth-service'
import Logo from '../../logo'
import SelectLanguage from './select-language'
import UserAvatar from './user-avatar'

export default async function HeaderPrivate() {
  const user = await getUser()

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-center border-zinc-700 border-b bg-zinc-900 p-4 text-white sm:p-6 lg:p-8">
      <div className="flex w-full items-center justify-between max-[1800px]:max-w-7xl">
        {/* LOGO */}
        <Logo />

        <div className="flex w-full max-w-100 items-center justify-between gap-3 border border-zinc-700/60">
          <SelectLanguage userId={user?.id ?? ''} />

          <UserAvatar />
        </div>
      </div>
    </header>
  )
}
