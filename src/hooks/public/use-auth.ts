import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function useAuth() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const authParam = searchParams.get('auth')
  const isOpen = authParam === 'entrar' || authParam === 'cadastrar'
  const mode = authParam === 'cadastrar' ? 'cadastrar' : 'entrar'

  const handleOpenChange = (open: boolean) => {
    if (open) {
      router.push(`${pathname}?auth=entrar`, { scroll: false })
    } else {
      router.push(pathname, { scroll: false })
    }
  }

  const handleTabChange = (value: string) => {
    router.push(`${pathname}?auth=${value}`, { scroll: false })
  }

  return {
    authParam,
    handleOpenChange,
    handleTabChange,
    isOpen,
    mode,
  }
}
