'use client'

import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useLogout from '@/hooks/public/use-logout'

export default function LogoutButton() {
  const { handleLogout, isLoggingOut } = useLogout()

  return (
    <Button
      className="w-full justify-start gap-2"
      disabled={isLoggingOut}
      onClick={handleLogout}
      type="button"
      variant="destructive"
    >
      <LogOut />
      <span className="group-data-[collapsible=icon]:sr-only">Sair</span>
    </Button>
  )
}
