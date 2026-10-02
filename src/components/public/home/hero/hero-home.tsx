import Buttons from './buttons'
import HeroText from './hero-text'
import Indicators from './indicators'
import VisualShowcase from './visual-showcase'

export default function HeroHome() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-6 sm:px-6 sm:pt-12 lg:px-8">
      <div className="w-full max-w-7xl space-y-6 px-4 text-center sm:space-y-8 sm:px-6 lg:px-8">
        <HeroText />

        {/* CTAs */}
        <Buttons />

        {/* Indicators */}
        <Indicators />
      </div>

      <VisualShowcase />
    </section>
  )
}
