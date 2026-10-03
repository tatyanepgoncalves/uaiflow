'use client'

import useDemoArena from '@/hooks/home/use-demo-arena'
import { ChunkCard } from './chunk-card'
import { EvaluationResult } from './evaluation-result'
import { ArenaHeader } from './header'
import { SentenceInput } from './setence-input'

export default function ArenaSimulator() {
  const {
    currentData,
    handleEvaluate,
    handleLanguageChange,
    isEvaluating,
    lang,
    onChangeInput,
    sentence,
    showResult,
  } = useDemoArena()

  return (
    <div
      className="w-full max-w-7xl rounded-2xl border border-zinc-800/80 bg-zinc-950 p-6 shadow-2xl md:p-8"
      id="simulator"
    >
      <ArenaHeader currentLang={lang} onLanguageChange={handleLanguageChange} />

      <ChunkCard
        cefr={currentData.cefr}
        chunk={currentData.chunk}
        translation={currentData.translation}
      />

      <SentenceInput
        isEvaluating={isEvaluating}
        languageLabel={currentData.label}
        onChange={onChangeInput}
        onEvaluate={handleEvaluate}
        value={sentence}
      />

      {showResult ? <EvaluationResult data={currentData.result} /> : null}
    </div>
  )
}
