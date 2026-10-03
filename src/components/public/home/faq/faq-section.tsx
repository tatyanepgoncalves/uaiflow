import { Accordion } from '@/components/ui/accordion'
import { FAQ_DATA } from './data'
import FaqHeader from './faq-header'
import { FAQItem } from './faq-item'

export default function FaqSection() {
  return (
    <section className="flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-7xl flex-col gap-8">
        <FaqHeader />

        <Accordion className="space-y-4" typeof="single">
          {FAQ_DATA.map((item) => (
            <FAQItem item={item} key={item.question} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}
