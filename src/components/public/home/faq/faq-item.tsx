import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { FAQItemData } from './types'


interface FAQItemProps {
  item: FAQItemData
}

export function FAQItem({ item }: FAQItemProps) {
  return (
    <AccordionItem
      value={item.question}
      className="rounded-2xl border border-zinc-800/80 bg-zinc-900 px-6 transition-colors data-[state=open]:border-emerald-500/50"
    >
      <AccordionTrigger className="py-5 text-left font-semibold text-white transition-colors hover:text-emerald-400 hover:no-underline">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="pb-5 text-sm leading-relaxed text-zinc-400">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  )
}