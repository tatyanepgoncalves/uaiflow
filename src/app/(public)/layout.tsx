import FooterPublic from '@/components/layout/public/footer-public'
import HeaderPublic from '@/components/layout/public/header-public'

interface PublicLayoutProps {
  children: React.ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <section>
      <HeaderPublic />
      <main>{children}</main>
      <FooterPublic />
    </section>
  )
}
