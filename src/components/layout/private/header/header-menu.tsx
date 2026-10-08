'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { menuLink } from '@/types/menu'

export default function HeaderMenu() {
  const pathaname = usePathname()

  return (
    <nav className="flex flex-row items-center gap-4">
      {menuLink.map((link) => {
        const isActive = pathaname === link.href

        return (
          <Link
            className={cn(
              'w-fit rounded-lg px-4 py-2 text-center text-sm transition-all duration-300 hover:bg-zinc-800 hover:text-zinc-300',
              isActive ? 'bg-emerald-500 text-zinc-100' : 'text-zinc-400'
            )}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
