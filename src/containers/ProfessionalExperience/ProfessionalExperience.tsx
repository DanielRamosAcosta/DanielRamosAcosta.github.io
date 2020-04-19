import React, { FC, useEffect, useState } from 'react'
import { JobPhase, JobPhasesRepositoryHttp } from '../../repository/http/JobPhasesRepositoryHttp'
import { JobPhase as JobPhaseComponent } from '../../components/JobPhase/JobPhase'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { Formatted } from '../../components/Formatted/Formatted'
import { useTranslation } from '../../hooks/useTranslation'

type ProfessionalExperienceProps = {
  className?: string
}

export const ProfessionalExperience: FC<ProfessionalExperienceProps> = ({ className }) => {
  const [jobPhases, setJobPhases] = useState<JobPhase[]>([])
  const { t, locale } = useTranslation()

  useEffect(() => {
    new JobPhasesRepositoryHttp().getAll(locale).then(setJobPhases)
  }, [locale])

  return (
    <section className={className}>
      <UnderlinedTitle>{t.professionalExperience}</UnderlinedTitle>
      {jobPhases.map((jobPhase) => (
        <JobPhaseComponent
          key={jobPhase.getCompanyName()}
          jobName={jobPhase.getJobName()}
          companyName={jobPhase.getCompanyName()}
          startDate={jobPhase.getStartDate()}
          endDate={jobPhase.getEndDate()}
        >
          <Formatted html={jobPhase.getDescriptionHTML()} />
        </JobPhaseComponent>
      ))}
    </section>
  )
}
