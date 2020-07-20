import React, { FC } from 'react'

import { EducationPhase } from '../../components/EducationPhase/EducationPhase'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { useTranslation } from '../../hooks/useTranslation'

type EducationProps = {
  className?: string
}

export const Education: FC<EducationProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <section className={className}>
      <UnderlinedTitle>{t.education.title}</UnderlinedTitle>
      <EducationPhase
        educationName={t.education.degreeInComputerEngineering}
        universityName={t.education.universityOfLaLaguna}
        startDate={new Date('09/05/2013')}
        endDate={new Date('07/30/2017')}
      />
    </section>
  )
}
