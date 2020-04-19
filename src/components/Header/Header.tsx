import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './Header.module.css'

type HeaderProps = {
  personName: string
  role: string
  className?: string
}

export const Header: FC<HeaderProps> = ({ className, personName, role }) => (
  <header className={classNames(classes.container, className)}>
    <h1 className={classes.personName}>{personName}</h1>
    <h2 className={classes.role}>{role}</h2>
    <img className={classes.logo} src="/logos/acid-tango-logo.svg" alt="Acid Tango" />
  </header>
)
