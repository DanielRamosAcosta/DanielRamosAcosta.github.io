import * as React from 'react'

import styles from './SkillListItem.css'

export const SkillListItem: React.SFC<{}> = ({ children }) => (
  <li className={styles.container}>{children}</li>
)