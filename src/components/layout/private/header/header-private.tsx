import Logo from '../../logo'
import UserAvatar from './user-avatar'

export default function HeaderPrivate() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-center border-zinc-700 border-b bg-zinc-900 p-4 text-white sm:p-6 lg:p-8">
      <div className="flex w-full items-center justify-between max-[1800px]:max-w-7xl">
        {/* LOGO */}
        <Logo />

        <UserAvatar />
      </div>
    </header>
  )
}
