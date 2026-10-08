import HeaderPrivate from '@/components/layout/private/header/header-private'

interface PrivateLayoutProps {
  children: React.ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <section>
      <HeaderPrivate />
      <section>{children}</section>
    </section>
  )
}
