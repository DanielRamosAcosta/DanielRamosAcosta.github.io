import React from 'react'

export const isSpanishContextDefaultValue = navigator.language === 'es-ES'

const IsSpanish = React.createContext(isSpanishContextDefaultValue)

export const IsSpanishProvider = IsSpanish.Provider
export const IsSpanishConsumer = IsSpanish.Consumer
