import classNames from 'classnames'
import * as React from 'react'

import styles from './Paragraph.css'

interface ParagraphProps {
  className?: string
}

export const Paragraph: React.SFC<ParagraphProps> = ({
  children,
  className
}) => <p className={classNames(styles.container, className)}>{children}</p>
