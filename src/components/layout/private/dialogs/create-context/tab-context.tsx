'use client'

import DificuldadesTab from '@/components/private/contexto/dificuldades/dificuldades-tab'
import HobbiesInteresses from '@/components/private/contexto/hobbies-interesses/hobbies-interesses'
import Languages from '@/components/private/contexto/idioma/languages'
import SotaqueFoco from '@/components/private/contexto/idioma-sotaque/idioma-sotaque'
import MetasAprendizagem from '@/components/private/contexto/metas-aprendizagem/metas-aprendizagem'
import NivelCefr from '@/components/private/contexto/nivel-cefr/nivel-cefr'
import TemasConteudos from '@/components/private/contexto/temas-conteudos/temas-conteudos'
import useUserContext from '@/components/private/contexto/use-user-context'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabContext() {
  const flow = useUserContext()

  return (
    <Tabs
      className="space-y-8"
      // biome-ignore lint/performance/noJsxPropsBind: it's necessary
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
      onValueChange={(val) => flow.setActiveTab(val as any)}
      value={flow.activeTab}
    >
      <TabsList className="gap-3 shadow-2xl shadow-zinc-800">
        <TabsTrigger value="idiomas">Idiomas</TabsTrigger>
        <TabsTrigger disabled={!flow.handleNextTab} value="sotaque-foco">
          Sotaque & Foco
        </TabsTrigger>
        <TabsTrigger disabled={!flow.handleNextTab} value="dificuldades">
          Dificuldades
        </TabsTrigger>
        <TabsTrigger disabled={!flow.handleNextTab} value="temas-conteudos">
          Temas & Conteúdos
        </TabsTrigger>
        <TabsTrigger disabled={!flow.handleNextTab} value="hobbies-interesses">
          Hobbies & Interesses
        </TabsTrigger>
        <TabsTrigger disabled={!flow.handleNextTab} value="nivel-cefr">
          Nível CEFR
        </TabsTrigger>
        <TabsTrigger disabled={!flow.handleNextTab} value="metas-aprendizagem">
          Metas de Aprendizagem
        </TabsTrigger>
      </TabsList>

      <TabsContent className="px-2" value="idiomas">
        <Languages
          addCustomLanguage={flow.languageFlow.addCustomLanguage}
          customLanguageCode={flow.languageFlow.customLanguageCode}
          customLanguageName={flow.languageFlow.customLanguageName}
          handleBackTab={flow.handleBackTab}
          handleCustomCodeChange={flow.languageFlow.handleCustomCodeChange}
          handleCustomNameChange={flow.languageFlow.handleCustomNameChange}
          handleKeyDownLanguage={flow.languageFlow.handleKeyDownLanguage}
          handleNextTab={flow.handleNextTab}
          isNextDisabled={flow.isNextDisabled}
          languages={flow.languageFlow.languages}
          selectedLanguageCode={flow.languageFlow.selectedLanguageCode}
          toggleLanguage={flow.languageFlow.toggleLanguage}
        />
      </TabsContent>

      <TabsContent className="px-2" value="sotaque-foco">
        <SotaqueFoco
          addCustomAccent={flow.accentFlow.addCustomAccent}
          availableAccents={flow.accentFlow.availableAccents}
          customAccentName={flow.accentFlow.customAccentName}
          handleBackTab={flow.handleBackTab}
          handleCustomAccentChange={flow.accentFlow.handleCustomAccentChange}
          handleKeyDownAccent={flow.accentFlow.handleKeyDownAccent}
          handleNextTab={flow.handleNextTab}
          isFirstTab={flow.isFirstTab}
          isLastTab={flow.isLastTab}
          isNextDisabled={flow.isNextDisabled}
          selectedAccent={flow.accentFlow.selectedAccent}
          selectedLanguageName={
            flow.languageFlow.selectedLanguage?.name || 'Idioma selecionado'
          }
          toggleAccent={flow.accentFlow.toggleAccent}
        />
      </TabsContent>

      <TabsContent className="px-2" value="dificuldades">
        <DificuldadesTab
          addCustomDifficulty={flow.difficultiesFlow.addCustomDifficulty}
          allDifficulties={flow.difficultiesFlow.allDifficulties}
          customDifficulty={flow.difficultiesFlow.customDifficulty}
          handleBackTab={flow.handleBackTab}
          handleCustomDifficultyChange={
            flow.difficultiesFlow.handleCustomDifficultyChange
          }
          handleKeyDownDifficulty={
            flow.difficultiesFlow.handleKeyDownDifficulty
          }
          handleNextTab={flow.handleNextTab}
          isFirstTab={flow.isFirstTab}
          isLastTab={flow.isLastTab}
          isNextDisabled={flow.isNextDisabled}
          selectedDifficulties={flow.difficultiesFlow.selectedDifficulties}
          toggleDifficulty={flow.difficultiesFlow.toggleDifficulty}
        />
      </TabsContent>

      <TabsContent className="px-2" value="temas-conteudos">
        <TemasConteudos
          addCustomTopic={flow.topicsFlow.addCustomTopic}
          allTopics={flow.topicsFlow.allTopics}
          customTopic={flow.topicsFlow.customTopic}
          favoriteTopics={flow.topicsFlow.favoriteTopics}
          handleBackTab={flow.handleBackTab}
          handleCustomTopicChange={flow.topicsFlow.handleCustomTopicChange}
          handleKeyDown={flow.topicsFlow.handleKeyDown}
          handleNextTab={flow.handleNextTab}
          isFirstTab={flow.isFirstTab}
          isLastTab={flow.isLastTab}
          isNextDisabled={flow.isNextDisabled}
          toggleTopic={flow.topicsFlow.toggleTopic}
        />
      </TabsContent>

      <TabsContent className="px-2" value="hobbies-interesses">
        <HobbiesInteresses
          addCustomHobby={flow.hobbiesFlow.addCustomHobby}
          allHobbies={flow.hobbiesFlow.allHobbies}
          customHobby={flow.hobbiesFlow.customHobby}
          favoriteHobbies={flow.hobbiesFlow.favoriteHobbies}
          handleBackTab={flow.handleBackTab}
          handleCustomHobbyChange={flow.hobbiesFlow.handleCustomHobbyChange}
          handleKeyDownHobby={flow.hobbiesFlow.handleKeyDownHobby}
          handleNextTab={flow.handleNextTab}
          isLastTab={flow.isLastTab}
          isNextDisabled={flow.isNextDisabled}
          toggleHobby={flow.hobbiesFlow.toggleHobby}
        />
      </TabsContent>

      <TabsContent className="px-2" value="nivel-cefr">
        <NivelCefr
          currentLevel={flow.levelCefrFlow.currentLevel}
          handleBackTab={flow.handleBackTab}
          handleNextTab={flow.handleNextTab}
          isLastTab={flow.isLastTab}
          isNextDisabled={flow.isNextDisabled}
          setCurrentLevel={flow.levelCefrFlow.setCurrentLevel}
          setTargetLevel={flow.levelCefrFlow.setTargetLevel}
          targetLevel={flow.levelCefrFlow.targetLevel}
        />
      </TabsContent>

      <TabsContent className="px-2" value="metas-aprendizagem">
        <MetasAprendizagem
          customGoal={flow.goalsFlow.customGoal}
          dailyGoalChunks={flow.goalsFlow.dailyGoalChunks}
          handleAddCustomGoal={flow.goalsFlow.handleAddCustomGoal}
          handleBackTab={flow.handleBackTab}
          handleDecreaseGoal={flow.goalsFlow.handleDecreaseGoal}
          handleIncreaseGoal={flow.goalsFlow.handleIncreaseGoal}
          handleKeyDownGoal={flow.goalsFlow.handleKeyDownGoal}
          handleNextTab={flow.handleNextTab}
          handleRemoveGoal={flow.goalsFlow.handleRemoveGoal}
          handleSelectPresetGoal={flow.goalsFlow.handleSelectPresetGoal}
          isFirstTab={flow.isFirstTab}
          isLastTab={flow.isLastTab}
          isNextDisabled={flow.isNextDisabled}
          isSubmitting={flow.isSubmitting}
          presetGoals={flow.goalsFlow.presetGoals}
          selectedGoals={flow.goalsFlow.selectedGoals}
          setCustomGoal={flow.goalsFlow.setCustomGoal}
          toggleGoal={flow.goalsFlow.toggleGoal}
        />
      </TabsContent>
    </Tabs>
  )
}
