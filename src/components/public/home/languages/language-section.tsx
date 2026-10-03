import { ContextStudioCard } from './context-studio-card'
import { CONTEXT_STUDIO_DATA, LANGUAGES_DATA } from './data'
import { LanguageCard } from './language-card'
import { LanguagesSectionHeader } from './section-header'

export default function LanguagesSection() {
  return (
    <section className="flex w-full max-w-7xl items-center justify-center bg-[#03060C] px-4 sm:px-6 lg:px-8">
      <div className="w-full space-y-12">
        {/* Cabeçalho */}
        <LanguagesSectionHeader />

        {/* Grid de Cards (3 colunas em telas grandes) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LANGUAGES_DATA.map((language) => (
            <LanguageCard key={language.id} language={language} />
          ))}

          {/* O 6º card é o Context Studio */}
          <ContextStudioCard data={CONTEXT_STUDIO_DATA} />
        </div>
      </div>
    </section>
  )
}
