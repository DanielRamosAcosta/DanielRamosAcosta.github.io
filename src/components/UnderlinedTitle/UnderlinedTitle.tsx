import React, { FC } from 'react'

import classes from './UnderlinedTitle.module.css'

export const UnderlinedTitle: FC<{}> = ({ children }) => (
  <div className={classes.realContainer}>
    <h3 className={classes.container}>{children}</h3>
    <hr className={classes.line} />
  </div>
)
