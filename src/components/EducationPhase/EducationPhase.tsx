import React, { FC } from 'react'

import classes from './EducationPhase.module.css'

type EducationPhaseProps = {
  startDate: Date
  endDate: Date
  educationName: string
  universityName: string
}

export const EducationPhase: FC<EducationPhaseProps> = ({
  startDate,
  endDate,
  educationName,
  universityName,
}) => (
    <div>
      <p className={classes.educationName}>{educationName}</p>
      <p className={classes.universityName}>{universityName}</p>
      <p className={classes.dateRange}>
        {startDate.getFullYear()} - {endDate.getFullYear()}
      </p>
    </div>
  )
