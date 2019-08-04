import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './List.module.css'

type ListProps = {
  className?: string
}

export const List: FC<ListProps> = ({ children, className }) => (
  <ul className={classNames(classes.list, className)}>{children}</ul>
)
