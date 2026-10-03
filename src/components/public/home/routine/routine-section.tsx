import Image from 'next/image'
import Methodology from '@/assets/images/methodology_active_recall.jpg'
import RoutineHeader from './routine-header'
import RoutineTopics from './routine-topics'

export default function RoutineSection() {
  return (
    <div className="w-full max-w-7xl p-4 sm:p-6 lg:p-8">
      <section className="mx-auto w-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-12">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <RoutineHeader />

            <RoutineTopics />
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-zinc-800">
            <Image
              alt="Área de trabalho minimalista com estudos e neurociência linguística"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
              src={Methodology}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
