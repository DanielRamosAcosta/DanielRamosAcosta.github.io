import React, { FC } from 'react'
import { JobPhase as JobPhaseComponent } from '../../components/JobPhase/JobPhase'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { Formatted } from '../../components/Formatted/Formatted'
import { useTranslation } from '../../hooks/useTranslation'
import { JobPhase } from '../../models/JobPhase'
import { useJobPhases } from '../../hooks/queries/useJobPhases'

type ProfessionalExperienceProps = {
  className?: string
  initialJobPhases: JobPhase[]
}

export const ProfessionalExperience: FC<ProfessionalExperienceProps> = ({
  className,
  initialJobPhases,
}) => {
  const { t, language } = useTranslation()
  const { jobPhases } = useJobPhases(initialJobPhases, language)

  return (
    <section className={className}>
      <UnderlinedTitle>{t.professionalExperience}</UnderlinedTitle>
      {jobPhases.map((jobPhase) => (
        <JobPhaseComponent
          key={jobPhase.companyName}
          jobName={jobPhase.jobName}
          companyName={jobPhase.companyName}
          startDate={jobPhase.startDate}
          endDate={jobPhase.endDate}
        >
          <Formatted html={jobPhase.descriptionHTML} />
        </JobPhaseComponent>
      ))}
    </section>
  )
}
