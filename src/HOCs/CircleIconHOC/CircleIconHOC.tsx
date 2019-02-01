import React, { FC } from 'react'

import styles from './CircleIconHOC.module.css'

export const CircleIconHOC = <T extends object>(WrappedComponent: FC<T>) => {
  const EnhancedComponent: FC<T> = (props: T) => (
    <div className={styles.circleIcon}>
      <WrappedComponent {...props} />
    </div>
  )

  return EnhancedComponent
}
