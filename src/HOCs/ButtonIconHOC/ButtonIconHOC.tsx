import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './ButtonIconHOC.module.css'

interface ButtonIconHOCProps {
  className?: string
  label: string
  onClick: () => void
}

export const ButtonIconHOC = <T extends object>(WrappedComponent: FC<T>) => {
  const EnhancedComponent: FC<T & ButtonIconHOCProps> = (
    props: T & ButtonIconHOCProps,
  ) => (
    <button
      onClick={props.onClick}
      aria-label={props.label}
      className={classNames(classes.container, props.className)}
    >
      <WrappedComponent {...props} />
    </button>
  )

  return EnhancedComponent
}
