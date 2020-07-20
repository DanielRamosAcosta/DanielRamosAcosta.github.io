import { useContext } from 'react'
import { IsSpanishContext, Language } from '../context/IsSpanishContext'
import { spanish } from '../i18n/spanish'
import { english } from '../i18n/english'
import { Translation } from '../i18n/translation'

export const useTranslation = () => {
  const { language, setLanguage } = useContext(IsSpanishContext)

  const t: Translation = language === Language.Spanish ? spanish : english

  return {
    t,
    language,
    setLanguage,
  }
}
