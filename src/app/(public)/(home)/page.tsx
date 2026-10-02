import ArenaSimulator from '@/components/public/home/arena-simulator/area-simulator'
import HeroHome from '@/components/public/home/hero/hero-home'
import PillarsSection from '@/components/public/home/pillars/pillars-section'

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-24 pb-20 sm:space-y-32">
      {/* HERO SECTION */}
      <HeroHome />

      {/* PILLARS SECTION */}
      <PillarsSection />

      {/* INTERACTIVE ENGINE SANDBOX DEMO */}
      <ArenaSimulator />
    </div>
  )
}
