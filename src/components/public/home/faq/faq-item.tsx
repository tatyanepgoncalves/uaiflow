import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { FAQItemData } from './types'

interface FAQItemProps {
  item: FAQItemData
}

export function FAQItem({ item }: FAQItemProps) {
  return (
    <AccordionItem
      className="rounded-2xl border border-zinc-800/80 bg-zinc-900 px-6 transition-colors data-[state=open]:border-emerald-500/50"
      value={item.question}
    >
      <AccordionTrigger className="py-5 text-left font-semibold text-white transition-colors hover:text-emerald-400 hover:no-underline">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="pb-5 text-sm text-zinc-400 leading-relaxed">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  )
}
