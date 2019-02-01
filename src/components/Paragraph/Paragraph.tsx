import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './Paragraph.module.css'

interface ParagraphProps {
  className?: string
}

export const Paragraph: FC<ParagraphProps> = ({ children, className }) => (
  <p className={classNames(classes.container, className)}>{children}</p>
)
