import React, { FC } from 'react'

import { ContactListItem } from '../../components/ContactListItem'
import { EmailIcon } from '../../components/icons/Email'
import { GithubIcon } from '../../components/icons/Github'
import { LinkedInIcon } from '../../components/icons/LinkedIn'
import { LocationIcon } from '../../components/icons/Location'
import { MediumIcon } from '../../components/icons/Medium'
import { CircleIconHOC } from '../../HOCs/CircleIconHOC/CircleIconHOC'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import { LanguageConsumer } from '../IsSpanishContext'
import { i18n } from '../../i18n'

const CircleEmailIcon = CircleIconHOC(EmailIcon)
const CircleGithubIcon = CircleIconHOC(GithubIcon)
const CircleLinkedInIcon = CircleIconHOC(LinkedInIcon)
const CircleLocationIcon = CircleIconHOC(LocationIcon)
const CircleMediumIcon = CircleIconHOC(MediumIcon)

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
              icon={CircleEmailIcon}
              link="mailto:daniel.ramos@leanmind.es"
              text="daniel.ramos@leanmind.es"
            />
            <div style={{ width: 10, height: 10 }} />
            <ContactListItem
              icon={CircleLocationIcon}
              link="https://www.google.es/maps/place/Tenerife"
              text={getLabel('tenerife_canary_islands')}
            />
            <div style={{ width: 10, height: 10 }} />
            <ContactListItem
              icon={CircleGithubIcon}
              link="https://github.com/DanielRamosAcosta"
              text="@DanielRamosAcosta"
            />
            <div style={{ width: 10, height: 10 }} />
            <ContactListItem
              icon={CircleLinkedInIcon}
              link="https://linkedin.com/in/danielramosacosta/"
              text="/in/DanielRamosAcosta"
            />
            <div style={{ width: 10, height: 10 }} />
            <ContactListItem
              icon={CircleMediumIcon}
              link="https://medium.com/@danielramosacosta"
              text="@danielramosacosta"
            />
          </ul>
        </section>
      )
    }}
  </LanguageConsumer>
)
