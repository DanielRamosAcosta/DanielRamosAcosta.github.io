import React, { FC } from 'react'

import classes from './ContactListItem.module.css'

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
  <li className={classes.innerList}>
    <a href={link} target="_blank" rel="noopener" className={classes.link}>
      <Icon />
      <span>{text}</span>
    </a>
  </li>
)
