import classNames from 'classnames'
import React, { FC } from 'react'

import styles from './Sheet.module.css'

interface SheetProps {
  containerClass?: string
  className?: string
  topContainerChildren: FC
}

export const Sheet: FC<SheetProps> = ({
  className,
  containerClass,
  children,
  topContainerChildren: TopContainerChildren,
}) => (
  <main className={classNames(styles.container, containerClass)}>
    <div className={styles.topSpcer}>
      <TopContainerChildren />
    </div>
    <div className={classNames(styles.content, className)}>{children}</div>
  </main>
)
