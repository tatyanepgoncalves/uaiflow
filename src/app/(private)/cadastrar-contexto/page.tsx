'use client'

import { Brain } from 'lucide-react'
import HobbiesInteresses from '@/components/private/contexto/hobbies-interesses/hobbies-interesses'
import NivelCefr from '@/components/private/contexto/nivel-cefr/nivel-cefr'
import TemasConteudos from '@/components/private/contexto/temas-conteudos/temas-conteudos'
import useUserContextFlow from '@/components/private/contexto/use-user-context-flow'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function CadastrarContexto() {
  const flow = useUserContextFlow()

  return (
    <section className="flex h-screen items-center justify-center px-4">
      <Card className="w-full max-w-3xl border border-zinc-800 shadow-2xl shadow-zinc-800">
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-emerald-500 via-teal-500 to-indigo-500">
            <Brain className="h-6 w-6 animate-pulse text-white" />
          </div>

          <div className="w-full">
            <CardTitle className="bg-linear-to-r from-white via-emerald-200 to-teal-400 bg-clip-text font-black text-transparent text-xl sm:text-2xl">
              Configuração do Seu Contexto de Aprendizagem
            </CardTitle>
            <CardDescription className="text-xs text-zinc-400 sm:text-sm">
              Seu banco de chunks começa zerado. Personalize seus interesses
              para o Gemini 3.8 gerar seu primeiro lote sob medida.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs
            className="space-y-8 truncate"
            // biome-ignore lint/performance/noJsxPropsBind: it's necessary
            // biome-ignore lint/suspicious/noExplicitAny: it's necessary
            onValueChange={(val) => flow.setActiveTab(val as any)}
            value={flow.activeTab}
          >
            <TabsList className="gap-3 shadow-2xl shadow-zinc-800">
              <TabsTrigger
                className="max-w-30 truncate"
                value="temas-conteudos"
              >
                Temas & Conteúdos
              </TabsTrigger>
              <TabsTrigger
                className="truncate"
                disabled={!flow.isStepValid}
                value="hobbies-interesses"
              >
                Hobbies & Interesses
              </TabsTrigger>
              <TabsTrigger
                className="truncate"
                disabled={!flow.isStepValid}
                value="nivel-cefr"
              >
                Nível CEFR
              </TabsTrigger>
              <TabsTrigger
                className="truncate"
                disabled={!flow.isStepValid}
                value="sotaque-foco"
              >
                Sotaque & Foco
              </TabsTrigger>
              <TabsTrigger
                className="truncate"
                disabled={!flow.isStepValid}
                value="neuroaprendizagem"
              >
                Neuroaprendizagem
              </TabsTrigger>
            </TabsList>

            <TabsContent className="px-2" value="temas-conteudos">
              <TemasConteudos
                addCustomTopic={flow.addCustomTopic}
                allTopics={flow.allTopics}
                customTopic={flow.customTopic}
                favoriteTopics={flow.favoriteTopics}
                handleCustomTopicChange={flow.handleCustomTopicChange}
                handleKeyDown={flow.handleKeyDown}
                handleNextTab={flow.handleNextTab}
                isLastTab={flow.isLastTab}
                isNextDisabled={flow.isNextDisabled}
                toggleTopic={flow.toggleTopic}
              />
            </TabsContent>
            <TabsContent className="px-2" value="hobbies-interesses">
              <HobbiesInteresses
                addCustomHobby={flow.addCustomHobby}
                allHobbies={flow.allHobbies}
                customHobby={flow.customHobby}
                favoriteHobbies={flow.favoriteHobbies}
                handleBackTab={flow.handleBackTab}
                handleCustomHobbyChange={flow.handleCustomHobbyChange}
                handleKeyDownHobby={flow.handleKeyDownHobby}
                handleNextTab={flow.handleNextTab}
                isLastTab={flow.isLastTab}
                isNextDisabled={flow.isNextDisabled}
                toggleHobby={flow.toggleHobby}
              />
            </TabsContent>
            <TabsContent className="px-2" value="nivel-cefr">
              <NivelCefr
                currentLevel={flow.currentLevel}
                handleBackTab={flow.handleBackTab}
                handleNextTab={flow.handleNextTab}
                isLastTab={flow.isLastTab}
                isNextDisabled={flow.isNextDisabled}
                setCurrentLevel={flow.setCurrentLevel}
                setTargetLevel={flow.setTargetLevel}
                targetLevel={flow.targetLevel}
              />
            </TabsContent>
            <TabsContent className="px-2" value="sotaque-foco">
              <p className="text-muted-foreground text-sm">
                Escolha o sotaque e o foco desejados para aprimorar sua
                fluência.
              </p>
            </TabsContent>
            <TabsContent className="px-2" value="neuroaprendizagem">
              <p className="text-muted-foreground text-sm">
                Entenda como seu cérebro aprende melhor e adapte sua estratégia
                de estudo.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
