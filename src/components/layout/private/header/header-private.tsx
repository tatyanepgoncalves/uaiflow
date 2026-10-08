import { getUser } from '@/services/auth-service'
import Logo from '../../logo'
import HeaderMenu from './header-menu'
import SelectLanguage from './select-language/select-language'
import UserAvatar from './user-avatar'

export default async function HeaderPrivate() {
  const user = await getUser()

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center border-zinc-700/60 border-b bg-zinc-900">
      <div className="flex w-full max-w-[1800px] flex-col items-center justify-between p-4 sm:px-6 md:px-8">
        <div className="flex w-full items-center justify-between gap-4">
          <Logo />

          <div className="flex w-full max-w-fit items-center gap-3">
            <SelectLanguage userId={user?.id ?? ''} />
            <UserAvatar />
          </div>
        </div>
        <HeaderMenu />
      </div>
    </header>
  )
}
