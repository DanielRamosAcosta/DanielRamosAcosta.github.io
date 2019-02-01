import React, { FC } from 'react'

import classes from './SkillList.module.css'

interface SkillListProps {
  title: string
}

export const SkillList: FC<SkillListProps> = ({ title, children }) => (
  <div className={classes.container}>
    <p className={classes.title}>// {title}</p>
    <ul>{children}</ul>
  </div>
)
