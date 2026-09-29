import type { Metadata } from 'next'
import { Geist, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  description: 'UAIFlow',
  title: 'Neurociência & Produção Ativa Multilíngue',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500 selection:text-zinc-50',
          inter.variable,
          geistSans.variable
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
