import React from 'react'

export enum Language {
  Spanish = 'es-ES',
  English = 'en-US',
}

export const isSpanishContextDefaultValue = navigator.language as Language

const IsSpanish = React.createContext(isSpanishContextDefaultValue)

export const LanguageProvider = IsSpanish.Provider
export const LanguageConsumer = IsSpanish.Consumer
