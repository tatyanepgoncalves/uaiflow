import Image from 'next/image'
import HeroNeural from '@/assets/images/hero_neural_language.jpg'
import TextSuperior from './text-superior'

export default function VisualShowcase() {
  return (
    <section className="mt-12 flex max-w-6xl items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 shadow-2xl sm:mt-16">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          alt="Ambiente cognitivo de neuroaprendizagem linguística UAIFlow"
          className="h-full w-full object-cover brightness-90 transition-transform duration-700 hover:scale-[1.01]"
          referrerPolicy="no-referrer"
          src={HeroNeural}
        />

        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        <TextSuperior />
      </div>
    </section>
  )
}
