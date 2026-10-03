import { Accordion } from '@/components/ui/accordion'
import FaqHeader from './faq-header'
import { FAQ_DATA } from './data'
import { FAQItem } from './faq-item'

export default function FaqSection() {
  return (
    <section className="flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="flex w-full max-w-7xl flex-col gap-8">
        <FaqHeader />

        <Accordion typeof="single"  className="space-y-4">
          {FAQ_DATA.map((item) => (
            <FAQItem key={item.question} item={item} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}
