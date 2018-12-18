import classNames from 'classnames'
import React, { SFC } from 'react'

import styles from './Paragraph.module.css'

interface ParagraphProps {
  className?: string
}

export const Paragraph: SFC<ParagraphProps> = ({ children, className }) => (
  <p className={classNames(styles.container, className)}>{children}</p>
)
