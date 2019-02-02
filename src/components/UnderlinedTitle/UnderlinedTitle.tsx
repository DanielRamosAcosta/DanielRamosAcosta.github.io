import React, { FC } from 'react'

import classes from './UnderlinedTitle.module.css'

export const UnderlinedTitle: FC<{}> = ({ children }) => (
  <div className={classes.container}>
    <h3 className={classes.title}>{children}</h3>
    <hr className={classes.line} />
  </div>
)
