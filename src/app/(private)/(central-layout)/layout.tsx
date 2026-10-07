
interface PrivateLayoutProps {
   children: React.ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
      <section
        
      >
        <section>{children}</section>
      </section>
  )
}
