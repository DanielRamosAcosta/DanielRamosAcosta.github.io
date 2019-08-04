import classNames from 'classnames'
import React, { FC } from 'react'

import classes from './Link.module.css'

type LinkProps = {
  className?: string
  href?: string
  openInNewTab?: boolean
}

export const Link: FC<LinkProps> = ({ className, openInNewTab, ...props }) => (
  <a
    className={classNames(classes.link, className)}
    target={openInNewTab ? '_blank' : undefined}
    rel={openInNewTab ? 'noopener' : undefined}
    {...props}
  />
)
