import type { TargetLanguage } from '@/types/uaiFlow'

export const ACCENTS_BY_LANG: Record<TargetLanguage, string[]> = {
  de: [
    'Hochdeutsch (Alemanha Padrão)',
    'Alemão Austríaco (Wien)',
    'Alemão Suíço (Schweizerdeutsch)',
  ],
  en: [
    'Americano (US - Standard General American)',
    'Britânico (UK - Received Pronunciation / London)',
    'Australiano (AU)',
    'Canadense (CA)',
    'Neutro Global / Internacional',
  ],
  es: [
    'Castelhano (Espanha / Madrid)',
    'Latino-americano (México / Neutro)',
    'Rioplatense (Argentina / Uruguai)',
    'Colombiano (Bogotá)',
  ],
  fr: [
    'Francês Metropolitano (França / Paris)',
    'Francês Canadense (Québécois)',
    'Francês Belga / Suíço',
  ],
  it: [
    'Italiano Padrão (Standard)',
    'Italiano Setentrional (Milão / Turim)',
    'Italiano Meridional (Roma / Nápoles)',
  ],
}
