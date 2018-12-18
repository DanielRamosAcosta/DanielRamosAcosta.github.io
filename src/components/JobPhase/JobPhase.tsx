import React, { SFC } from 'react'

import styles from './JobPhase.module.css'

interface JobPhaseProps {
  jobName: string
  companyName: string
  startDate: Date
  endDate?: Date
}

export const JobPhase: SFC<JobPhaseProps> = ({
  jobName,
  companyName,
  startDate,
  endDate,
  children,
}) => (
  <div className={styles.container}>
    <p className={styles.jobName}>{jobName}</p>
    <p className={styles.companyAndDates}>
      <span>{companyName}</span>
      <span className={styles.spacer}>|</span>
      <span>
        {startDate.getFullYear()} - {endDate ? endDate.getFullYear() : 'today'}
      </span>
    </p>
    <div className={styles.content}>{children}</div>
  </div>
)
