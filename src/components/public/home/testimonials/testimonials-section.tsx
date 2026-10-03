import { TESTIMONIALS_DATA } from './data'
import TestimonialCard from './testimonial-card'

export default function TestimonialsSection() {
  return (
    <section className="flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-7xl flex-col items-center space-y-12">
        <div className="space-y-3 text-center">
          <span className="font-bold text-indigo-400 text-xs uppercase tracking-wider">
            Evidência Prática
          </span>
          <h2 className="font-extrabold text-3xl text-white tracking-tight md:text-4xl">
            Depoimentos de Estudantes e Profissionais
          </h2>
          <p className="text-sm text-zinc-300">
            Veja como o método de blocos lexicais e produção ativa transformou a
            segurança e a comunicação em reuniões internacionais.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 justify-between gap-8 md:grid-cols-3">
          {TESTIMONIALS_DATA.map((test) => (
            <TestimonialCard key={test.name} testimonial={test} />
          ))}
        </div>
      </div>
    </section>
  )
}
