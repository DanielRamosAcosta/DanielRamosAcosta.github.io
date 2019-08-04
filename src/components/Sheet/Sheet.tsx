import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './Sheet.module.css'

type SheetProps = {
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
    <main className={classNames(classes.container, containerClass)}>
      <div className={classes.topSpcer}>
        <TopContainerChildren />
      </div>
      <div className={classNames(classes.content, className)}>{children}</div>
    </main>
  )
