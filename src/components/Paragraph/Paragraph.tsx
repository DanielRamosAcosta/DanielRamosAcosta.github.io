import classNames from 'classnames'
import React, { FC } from 'react'

import styles from './Paragraph.module.css'

interface ParagraphProps {
  className?: string
}

export const Paragraph: FC<ParagraphProps> = ({ children, className }) => (
  <p className={classNames(styles.container, className)}>{children}</p>
)
