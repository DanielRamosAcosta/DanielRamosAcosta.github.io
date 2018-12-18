import * as React from 'react'

import styles from './ContactListItem.css'

interface ContactListItemProps {
  icon: React.StatelessComponent
  text: string
  link: string
}

export const ContactListItem: React.SFC<ContactListItemProps> = ({
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
