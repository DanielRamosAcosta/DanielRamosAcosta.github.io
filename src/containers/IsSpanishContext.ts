import React from 'react'

export const isSpanishContextDefaultValue = navigator.language === 'es-ES'

const IsSpanish = React.createContext(isSpanishContextDefaultValue)

export const LanguageProvider = IsSpanish.Provider
export const LanguageConsumer = IsSpanish.Consumer
