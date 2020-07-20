import React, { FC, useEffect, useState } from 'react'
import { CreateFetchJobPhases } from '../../repository/http/CreateFetchJobPhases'
import { JobPhase as JobPhaseComponent } from '../../components/JobPhase/JobPhase'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { Formatted } from '../../components/Formatted/Formatted'
import { useTranslation } from '../../hooks/useTranslation'
import { JobPhase } from '../../models/JobPhase'

type ProfessionalExperienceProps = {
  className?: string
  initialJobPhases: JobPhase[]
}

export const ProfessionalExperience: FC<ProfessionalExperienceProps> = ({
  className,
  initialJobPhases,
}) => {
  const fetchJobPhases = CreateFetchJobPhases()
  const [jobPhases, setJobPhases] = useState<JobPhase[]>(initialJobPhases)
  const { t, locale } = useTranslation()

  useEffect(() => {
    fetchJobPhases(locale).then(setJobPhases)
  }, [locale])

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
