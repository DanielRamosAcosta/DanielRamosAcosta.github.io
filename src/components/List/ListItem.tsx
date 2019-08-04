import classNames from 'classnames'
import React, { FC } from 'react'

import { Text } from '../Text/Text'

import classes from './ListItem.module.css'

type ListItemProps = {
  className?: string
  title: string
}

export const ListItem: FC<ListItemProps> = ({ children, className, title }) => (
  <li className={classNames(classes.listItem, className)}>
    <Text>
      <b>
        <i>{title}</i>
      </b>
      : {children}
    </Text>
  </li>
)
