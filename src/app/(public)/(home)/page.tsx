import HeroHome from '@/components/public/home/hero/hero-home'
import PillarsSection from '@/components/public/home/pillars/pillars-section'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-24 pb-20 sm:space-y-32">
      {/* HERO SECTION */}
      <HeroHome />

      {/* PILLARS SECTION */}
      <PillarsSection />
    </div>
  )
}
