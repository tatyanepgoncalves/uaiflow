import Logo from '../logo'
import AuthDialog from './auth-dialog'

export default function HeaderPublic() {
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-center border-zinc-800 border-b bg-zinc-900/90 backdrop-blur-md">
      <div className="flex w-full max-w-7xl items-center justify-between p-4 sm:p-6 lg:p-8">
        {/* LOGO */}
        <Logo />

        <AuthDialog />
      </div>
    </header>
  )
}
