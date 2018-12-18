import * as React from 'react'

import styles from './EducationPhase.module.css'

interface EducationPhaseProps {
  startDate: Date
  endDate: Date
  educationName: string
  universityName: string
}

export const EducationPhase: React.SFC<EducationPhaseProps> = ({
  startDate,
  endDate,
  educationName,
  universityName,
}) => (
  <div className={styles.container}>
    <p className={styles.educationName}>{educationName}</p>
    <p className={styles.universityName}>{universityName}</p>
    <p className={styles.dateRange}>
      {startDate.getFullYear()} - {endDate.getFullYear()}
    </p>
  </div>
)
