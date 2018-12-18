import classNames from 'classnames'
import * as React from 'react'

import styles from './Header.module.css'

import logo from './leanmind-logo.svg'

interface HeaderProps {
  personName: string
  role: string
  className?: string
}

export const Header: React.SFC<HeaderProps> = ({
  className,
  personName,
  role
}) => (
  <header className={classNames(styles.container, className)}>
    <h1 className={styles.personName}>{personName}</h1>
    <p className={styles.role}>{role}</p>
    <img className={styles.logo} src={logo} alt="Lean Mind" />
  </header>
)
