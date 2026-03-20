import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { resources } from './translations'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    supportedLngs: ['pt-BR', 'pt', 'en', 'en-US'],
    defaultNS: 'translation',
    ns: ['translation'],
    returnNull: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      convertDetectedLanguage: (lng) => (lng?.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en'),
    },
    react: {
      useSuspense: false,
    },
  })

const syncDocumentLang = (language: string) => {
  document.documentElement.lang = language.startsWith('pt') ? 'pt-BR' : 'en'
}

syncDocumentLang(i18n.resolvedLanguage || i18n.language)
i18n.on('languageChanged', syncDocumentLang)

export default i18n
