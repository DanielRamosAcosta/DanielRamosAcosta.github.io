import React, { FC } from 'react'

import classes from './ContactListItem.module.css'

interface ContactListItemProps {
  icon: FC
  text: string
  link: string
  openInNewTab?: boolean
}

export const ContactListItem: FC<ContactListItemProps> = ({
  icon: Icon,
  text,
  link,
  openInNewTab,
}) => (
  <li className={classes.innerList}>
    <a
      href={link}
      className={classes.link}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener' : undefined}
    >
      <Icon />
      <span>{text}</span>
    </a>
  </li>
)
