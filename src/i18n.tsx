import { Language } from './context/IsSpanishContext'

export function i18n<T>(
  isSpanish: Language,
  {
    englishLang,
    spanishLang,
  }: {
    englishLang: T
    spanishLang: T
  },
) {
  return function (key: keyof T) {
    return isSpanish === Language.Spanish ? spanishLang[key] : englishLang[key]
  }
}
