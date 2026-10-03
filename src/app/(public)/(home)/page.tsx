import ArenaSimulator from '@/components/public/home/arena-simulator/area-simulator'
import HeroHome from '@/components/public/home/hero/hero-home'
import LanguagesSection from '@/components/public/home/languages/language-section'
import PillarsSection from '@/components/public/home/pillars/pillars-section'
import RoutineSection from '@/components/public/home/routine/routine-section'
import TestimonialsSection from '@/components/public/home/testimonials/testimonials-section'

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-24 pb-20 sm:space-y-32">
      {/* HERO SECTION */}
      <HeroHome />

      {/* PILLARS SECTION */}
      <PillarsSection />

      {/* INTERACTIVE ENGINE SANDBOX DEMO */}
      <ArenaSimulator />

      {/* LANGUAGES SECTION */}
      <LanguagesSection />

      {/* ROUTINE SECTION */}
      <RoutineSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />
    </div>
  )
}
