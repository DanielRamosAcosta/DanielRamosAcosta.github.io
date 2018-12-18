import React, { SFC } from 'react'

import styles from './SkillList.module.css'

interface SkillListProps {
  title: string
}

export const SkillList: SFC<SkillListProps> = ({ title, children }) => (
  <div className={styles.container}>
    <p className={styles.title}>// {title}</p>
    <ul>{children}</ul>
  </div>
)
