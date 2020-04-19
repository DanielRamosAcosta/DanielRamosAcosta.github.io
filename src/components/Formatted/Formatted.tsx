import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './Formatted.module.css'

type FormattedProps = {
  className?: string
  html: string
}

export const Formatted: FC<FormattedProps> = ({ html, className }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} className={classes.container} />
)
