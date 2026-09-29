interface PrivateLayoutProps {
  children: React.ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <section>
      <main>{children}</main>
    </section>
  )
}
