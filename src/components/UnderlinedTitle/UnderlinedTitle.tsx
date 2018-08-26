import * as React from 'react'

import styles from './UnderlinedTitle.css'

export const UnderlinedTitle: React.SFC<{}> = ({ children }) => (
  <div className={styles.realContainer}>
    <h3 className={styles.container}>{children}</h3>
    <hr className={styles.line} />
  </div>
)
