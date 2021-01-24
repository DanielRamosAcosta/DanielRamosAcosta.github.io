export type JobPhase = {
  readonly jobName: string
  readonly companyName: string
  readonly startDate: Date
  readonly endDate: Date | null
  readonly descriptionHTML: string
}

export type JabPhaseSerialized = {
  readonly jobName: string
  readonly companyName: string
  readonly startDate: string
  readonly endDate: string | null
  readonly descriptionHTML: string
}

export const serializeJobPhase = (jobPhase: JobPhase): JabPhaseSerialized => {
  return {
    jobName: jobPhase.jobName,
    companyName: jobPhase.companyName,
    startDate: jobPhase.startDate.toISOString(),
    endDate: jobPhase.endDate?.toISOString() || null,
    descriptionHTML: jobPhase.descriptionHTML,
  }
}

export const deserializeJobPhase = (jobPhase: JabPhaseSerialized): JobPhase => ({
  jobName: jobPhase.jobName,
  companyName: jobPhase.companyName,
  startDate: new Date(jobPhase.startDate),
  endDate: jobPhase.endDate ? new Date(jobPhase.endDate) : null,
  descriptionHTML: jobPhase.descriptionHTML,
})
