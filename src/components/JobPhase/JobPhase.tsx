import React, { FC } from 'react'

import classes from './JobPhase.module.css'
import { LanguageConsumer } from '../../containers/IsSpanishContext'
import { i18n } from '../../i18n'

type JobPhaseProps = {
  jobName: string
  companyName: string
  startDate: Date
  endDate?: Date
}

const englishLang = {
  today: 'today',
}

const spanishLang: typeof englishLang = {
  today: 'actualidad',
}

export const JobPhase: FC<JobPhaseProps> = ({
  jobName,
  companyName,
  startDate,
  endDate,
  children,
}) => (
    <LanguageConsumer>
      {language => {
        const getLabel = i18n(language, { englishLang, spanishLang })

        return (
          <div>
            <p className={classes.jobName}>{jobName}</p>
            <p className={classes.companyAndDates}>
              <span>{companyName}</span>
              <span className={classes.spacer}>|</span>
              <span>
                {startDate.getFullYear()} -{' '}
                {endDate ? endDate.getFullYear() : getLabel('today')}
              </span>
            </p>
            <div className={classes.content}>{children}</div>
          </div>
        )
      }}
    </LanguageConsumer>
  )
