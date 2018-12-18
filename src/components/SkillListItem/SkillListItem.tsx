import React, { SFC } from 'react'

import styles from './SkillListItem.module.css'

export const SkillListItem: SFC<{}> = ({ children }) => (
  <li className={styles.container}>{children}</li>
)
