import React, { FC } from 'react'

import { ContactListItem } from '../../components/ContactListItem/ContactListItem'
import { EmailIcon } from '../../components/icons/Email'
import { GithubIcon } from '../../components/icons/Github'
import { LinkedInIcon } from '../../components/icons/LinkedIn'
import { LocationIcon } from '../../components/icons/Location'
import { MediumIcon } from '../../components/icons/Medium'
import { CircleIconHOC } from '../../HOCs/CircleIconHOC/CircleIconHOC'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { LanguageConsumer } from '../../context/IsSpanishContext'
import { i18n } from '../../i18n'
import { List } from '../../components/List/List'
import { useTranslation } from '../../hooks/useTranslation'

const CircleEmailIcon = CircleIconHOC(EmailIcon)
const CircleGithubIcon = CircleIconHOC(GithubIcon)
const CircleLinkedInIcon = CircleIconHOC(LinkedInIcon)
const CircleLocationIcon = CircleIconHOC(LocationIcon)
const CircleMediumIcon = CircleIconHOC(MediumIcon)

type ContactProps = {
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

export const Contact: FC<ContactProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <section className={className}>
      <UnderlinedTitle>{t.contact.title}</UnderlinedTitle>
      <List>
        <ContactListItem
          icon={CircleEmailIcon}
          link="mailto:contact@danielramos.me"
          text="contact@danielramos.me"
        />
        <ContactListItem
          openInNewTab
          icon={CircleLocationIcon}
          link="https://www.google.es/maps/place/Tenerife"
          text={t.contact.tenerifeCanaryIslands}
        />
        <ContactListItem
          openInNewTab
          icon={CircleGithubIcon}
          link="https://github.com/DanielRamosAcosta"
          text="@DanielRamosAcosta"
        />
        <ContactListItem
          openInNewTab
          icon={CircleLinkedInIcon}
          link="https://linkedin.com/in/danielramosacosta/"
          text="/in/DanielRamosAcosta"
        />
        <ContactListItem
          openInNewTab
          icon={CircleMediumIcon}
          link="https://medium.com/@danielramosacosta"
          text="@danielramosacosta"
        />
      </List>
    </section>
  )
}
