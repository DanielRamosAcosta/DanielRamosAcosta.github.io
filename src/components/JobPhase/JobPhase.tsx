import React, { FC } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import classes from './JobPhase.module.css'

type JobPhaseProps = {
  jobName: string
  companyName: string
  startDate: Date
  endDate?: Date | null
}

export const JobPhase: FC<JobPhaseProps> = ({
  jobName,
  companyName,
  startDate,
  endDate,
  children,
}) => {
  const { t } = useTranslation()

  return (
    <div>
      <p className={classes.jobName}>{jobName}</p>
      <p className={classes.companyAndDates}>
        <span>{companyName}</span>
        <span className={classes.spacer}>|</span>
        <span>
          {startDate.getFullYear()} - {endDate ? endDate.getFullYear() : t.today}
        </span>
      </p>
      <div className={classes.content}>{children}</div>
    </div>
  )
}
