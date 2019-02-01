import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './Header.module.css'

import logo from './leanmind-logo.svg'

interface HeaderProps {
  personName: string
  role: string
  className?: string
}

export const Header: FC<HeaderProps> = ({ className, personName, role }) => (
  <header className={classNames(classes.container, className)}>
    <h1 className={classes.personName}>{personName}</h1>
    <p className={classes.role}>{role}</p>
    <img className={classes.logo} src={logo} alt="Lean Mind" />
  </header>
)
