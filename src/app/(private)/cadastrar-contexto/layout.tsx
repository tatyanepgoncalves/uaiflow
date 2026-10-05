interface PrivateLayoutProps {
  children: React.ReactNode
}

export default function PrivateContextoLayout({
  children,
}: PrivateLayoutProps) {
  return (
    <section>
      <main>{children}</main>
    </section>
  )
}
