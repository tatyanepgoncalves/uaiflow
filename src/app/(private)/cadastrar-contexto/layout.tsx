interface ContextLayoutProps {
  children: React.ReactNode
}

export default function ContextContextoLayout({
  children,
}: ContextLayoutProps) {
  return (
    <section>
      <main>{children}</main>
    </section>
  )
}
