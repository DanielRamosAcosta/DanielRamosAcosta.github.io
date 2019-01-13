import React, { FC } from 'react'

import styles from './JobPhase.module.css'
import { LanguageConsumer } from '../../containers/IsSpanishContext'
import { i18n } from '../../i18n'

interface JobPhaseProps {
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
          <p className={styles.jobName}>{jobName}</p>
          <p className={styles.companyAndDates}>
            <span>{companyName}</span>
            <span className={styles.spacer}>|</span>
            <span>
              {startDate.getFullYear()} -{' '}
              {endDate ? endDate.getFullYear() : getLabel('today')}
            </span>
          </p>
          <div className={styles.content}>{children}</div>
        </div>
      )
    }}
  </LanguageConsumer>
)
