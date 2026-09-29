interface PublicLayoutProps {
  children: React.ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <section>
      <main>{children}</main>
    </section>
  )
}
