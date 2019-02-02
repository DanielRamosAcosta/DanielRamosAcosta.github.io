import React, { FC } from 'react'

import { ButtonIconHOC } from '../../HOCs/ButtonIconHOC/ButtonIconHOC'
import { TranslationIcon } from '../../components/icons/Translation'
import { PrintIcon } from '../../components/icons/Print'
import { ShareIcon } from '../../components/icons/Share'

import { browserSupportsWebShareAPI } from '../../utils/web-share-api'

import { i18n } from '../../i18n'
import { LanguageConsumer, Language } from '../IsSpanishContext'

import classes from './ButtonsHeader.module.css'

const TranslationButton = ButtonIconHOC(TranslationIcon)
const PrintButton = ButtonIconHOC(PrintIcon)
const ShareButton = ButtonIconHOC(ShareIcon)

const englishLang = {
  switch_language_between_spanish_or_english:
    'Switch language between spanish or english',
  print_or_export_in_pdf: 'Print or export in PDF',
  share: 'Share',
}

const spanishLang: typeof englishLang = {
  switch_language_between_spanish_or_english:
    'Cambiar idioma entre inglés y español',
  print_or_export_in_pdf: 'Print or export in PDF',
  share: 'Compartir',
}

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

export const ButtonHeader: FC<{ setLanguage: Function }> = ({
  setLanguage,
}) => (
  <LanguageConsumer>
    {language => {
      const getLabel = i18n(language, { englishLang, spanishLang })

      return (
        <div className={classes.buttonsHeader}>
          <TranslationButton
            label={getLabel('switch_language_between_spanish_or_english')}
            size={24}
            onClick={() =>
              setLanguage(
                language === Language.Spanish
                  ? Language.English
                  : Language.Spanish,
              )
            }
            className={classes.hideWhenPrinting}
          />
          <PrintButton
            label={getLabel('switch_language_between_spanish_or_english')}
            size={24}
            onClick={print}
            className={classes.hideWhenPrinting}
          />
          {browserSupportsWebShareAPI(window.navigator) && (
            <ShareButton
              label={getLabel('share')}
              size={24}
              onClick={share}
              className={classes.hideWhenPrinting}
            />
          )}
        </div>
      )
    }}
  </LanguageConsumer>
)
