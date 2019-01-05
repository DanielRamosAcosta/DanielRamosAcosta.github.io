import React, { FC } from 'react'

import styles from './UnderlinedTitle.module.css'

export const UnderlinedTitle: FC<{}> = ({ children }) => (
  <div className={styles.realContainer}>
    <h3 className={styles.container}>{children}</h3>
    <hr className={styles.line} />
  </div>
)
