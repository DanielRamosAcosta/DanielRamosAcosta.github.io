import React, { FC } from 'react'
import { ButtonIconHOC } from '../../HOCs/ButtonIconHOC/ButtonIconHOC'
import { TranslationIcon } from '../../components/icons/Translation'
import { PrintIcon } from '../../components/icons/Print'
import { ShareIcon } from '../../components/icons/Share'
import { browserSupportsWebShareAPI } from '../../utils/web-share-api'
import { Language } from '../../context/IsSpanishContext'
import { useTranslation } from '../../hooks/useTranslation'
import classes from './ButtonsHeader.module.css'

const TranslationButton = ButtonIconHOC(TranslationIcon)
const PrintButton = ButtonIconHOC(PrintIcon)
const ShareButton = ButtonIconHOC(ShareIcon)

function print() {
  window.print()
}

function share() {
  if (browserSupportsWebShareAPI(window.navigator)) {
    window.navigator.share({
      title: 'Daniel Ramos CV',
      text: 'Daniel Ramos CV',
      url: 'https://www.danielramos.me',
    })
  }
}

export const ButtonHeader: FC = () => {
  const { t, language, setLanguage } = useTranslation()

  return (
    <div className={classes.buttonsHeader}>
      <TranslationButton
        label={t.actions.switchLanguageBetweenSpanishOrEnglish}
        size={24}
        onClick={() =>
          setLanguage(language === Language.Spanish ? Language.English : Language.Spanish)
        }
        className={classes.hideWhenPrinting}
      />
      <PrintButton
        label={t.actions.printOrExportInPdf}
        size={24}
        onClick={print}
        className={classes.hideWhenPrinting}
      />
      {typeof window !== 'undefined' && browserSupportsWebShareAPI(window.navigator) && (
        <ShareButton
          label={t.actions.share}
          size={24}
          onClick={share}
          className={classes.hideWhenPrinting}
        />
      )}
    </div>
  )
}
