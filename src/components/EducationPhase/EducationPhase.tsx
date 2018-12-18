import React, { SFC } from 'react'

import styles from './EducationPhase.module.css'

interface EducationPhaseProps {
  startDate: Date
  endDate: Date
  educationName: string
  universityName: string
}

export const EducationPhase: SFC<EducationPhaseProps> = ({
  startDate,
  endDate,
  educationName,
  universityName,
}) => (
  <div>
    <p className={styles.educationName}>{educationName}</p>
    <p className={styles.universityName}>{universityName}</p>
    <p className={styles.dateRange}>
      {startDate.getFullYear()} - {endDate.getFullYear()}
    </p>
  </div>
)
