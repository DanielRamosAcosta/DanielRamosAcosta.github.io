import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './Text.module.css'

type TextProps = {
  className?: string
}

export const Text: FC<TextProps> = ({ children, className }) => (
  <span className={classNames(classes.container, className)}>{children}</span>
)
