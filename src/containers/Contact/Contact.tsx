import classNames from 'classnames'
import React, { FC } from 'react'

import { ContactListItem } from '../../components/ContactListItem'
import { EmailIcon } from '../../components/icons/Email'
import { GithubIcon } from '../../components/icons/Github'
import { LinkedInIcon } from '../../components/icons/LinkedIn'
import { LocationIcon } from '../../components/icons/Location'
import { MediumIcon } from '../../components/icons/Medium'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import { LanguageConsumer } from '../IsSpanishContext'
import { i18n } from '../../i18n'

interface ContactProps {
  className?: string
}

const englishLang = {
  contact: 'Contact',
  tenerife_canary_islands: 'Tenerife, Canary Islands',
}

const spanishLang: typeof englishLang = {
  contact: 'Contacto',
  tenerife_canary_islands: 'Tenerife, Islas Canarias',
}

export const Contact: FC<ContactProps> = ({ className }) => (
  <LanguageConsumer>
    {lang => {
      const getLabel = i18n(lang, { englishLang, spanishLang })

      return (
        <section className={className}>
          <UnderlinedTitle>{getLabel('contact')}</UnderlinedTitle>
          <ul>
            <ContactListItem
              icon={EmailIcon}
              link="mailto:daniel.ramos@leanmind.es"
              text="daniel.ramos@leanmind.es"
            />
            <div style={{ width: 10, height: 10 }} />
            <ContactListItem
              icon={LocationIcon}
              link="https://www.google.es/maps/place/Tenerife"
              text={getLabel('tenerife_canary_islands')}
            />
            <div style={{ width: 10, height: 10 }} />
            <ContactListItem
              icon={GithubIcon}
              link="https://github.com/DanielRamosAcosta"
              text="@DanielRamosAcosta"
            />
            <div style={{ width: 10, height: 10 }} />
            <ContactListItem
              icon={LinkedInIcon}
              link="https://linkedin.com/in/danielramosacosta/"
              text="/in/DanielRamosAcosta"
            />
            <div style={{ width: 10, height: 10 }} />
            <ContactListItem
              icon={MediumIcon}
              link="https://medium.com/@danielramosacosta"
              text="@danielramosacosta"
            />
          </ul>
        </section>
      )
    }}
  </LanguageConsumer>
)
