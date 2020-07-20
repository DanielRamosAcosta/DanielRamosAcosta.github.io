import React from 'react'

export enum Language {
  Spanish = 'es-ES',
  English = 'en-US',
}

export const isSpanishContextDefaultValue = Language.Spanish

export const IsSpanishContext = React.createContext({
  language: isSpanishContextDefaultValue,
  setLanguage: (language: Language) => {},
})

export const LanguageProvider = IsSpanishContext.Provider
export const LanguageConsumer = IsSpanishContext.Consumer
