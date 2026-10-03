import type { Testimonial } from './types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <p className="font-normal text-sm text-zinc-200 italic leading-relaxed">
        "{testimonial.comments}"
      </p>

      <div className="border-zinc-800 border-t pt-4">
        <h3 className="font-bold text-sm text-white">{testimonial.name}</h3>
        <p className="text-xs text-zinc-400">
          {testimonial.profession} • Foco {testimonial.goal}
        </p>
      </div>
    </div>
  )
}
