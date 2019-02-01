import React, { FC } from 'react'

import classes from './CircleIconHOC.module.css'

export const CircleIconHOC = <T extends object>(WrappedComponent: FC<T>) => {
  const EnhancedComponent: FC<T> = (props: T) => (
    <div className={classes.circleIcon}>
      <WrappedComponent {...props} />
    </div>
  )

  return EnhancedComponent
}
