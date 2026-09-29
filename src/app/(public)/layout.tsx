import HeaderPublic from '@/components/layout/public/header-public'

interface PublicLayoutProps {
  children: React.ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <section>
      <HeaderPublic />
      <main>{children}</main>
    </section>
  )
}
