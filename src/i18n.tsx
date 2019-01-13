export function i18n<T>(
  isSpanish: boolean,
  {
    englishLang,
    spanishLang,
  }: {
    englishLang: T
    spanishLang: T
  },
) {
  return function(key: keyof T) {
    return isSpanish ? spanishLang[key] : englishLang[key]
  }
}
