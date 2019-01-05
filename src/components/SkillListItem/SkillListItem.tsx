import React, { FC } from 'react'

import styles from './SkillListItem.module.css'

export const SkillListItem: FC<{}> = ({ children }) => (
  <li className={styles.container}>{children}</li>
)
