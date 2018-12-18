import React, { SFC } from 'react'

import styles from './ContactListItem.module.css'

interface ContactListItemProps {
  icon: SFC
  text: string
  link: string
}

export const ContactListItem: SFC<ContactListItemProps> = ({
  icon: Icon,
  text,
  link,
}) => (
  <li className={styles.innerList}>
    <a href={link} target="_blank" rel="noopener" className={styles.link}>
      <Icon />
      <span>{text}</span>
    </a>
  </li>
)
