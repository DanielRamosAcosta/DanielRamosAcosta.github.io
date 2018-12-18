import classNames from 'classnames'
import React, { SFC } from 'react'

import { ContactListItem } from '../../components/ContactListItem'
import { EmailIcon } from '../../components/icons/Email'
import { GithubIcon } from '../../components/icons/Github'
import { LinkedInIcon } from '../../components/icons/LinkedIn'
import { LocationIcon } from '../../components/icons/Location'
import { MediumIcon } from '../../components/icons/Medium'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import styles from './Contact.module.css'

interface ContactProps {
  className?: string
}

export const Contact: SFC<ContactProps> = ({ className }) => (
  <section className={classNames(styles.borrame, className)}>
    <UnderlinedTitle>Contact</UnderlinedTitle>
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
        text="Tenerife, Canary Islands"
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
