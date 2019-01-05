import React, { FC } from 'react'

import styles from './ContactListItem.module.css'

interface ContactListItemProps {
  icon: FC
  text: string
  link: string
}

export const ContactListItem: FC<ContactListItemProps> = ({
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
