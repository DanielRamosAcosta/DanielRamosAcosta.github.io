import classNames from 'classnames'
import * as React from 'react'

import styles from './Sheet.module.css'

interface SheetProps {
  containerClass?: string
  className?: string
}

export const Sheet: React.SFC<SheetProps> = ({
  className,
  containerClass,
  children
}) => (
  <main className={classNames(styles.container, containerClass)}>
    <div className={styles.topSpcer} />
    <div className={classNames(styles.content, className)}>{children}</div>
  </main>
)
