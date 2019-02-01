import React, { FC } from 'react'

import classes from './SkillListItem.module.css'

export const SkillListItem: FC<{}> = ({ children }) => (
  <li className={classes.container}>{children}</li>
)
