import useSWR from 'swr'
import { Language } from '../../context/IsSpanishContext'
import { JobPhase } from '../../models/JobPhase'
import { CreateFetchJobPhases } from '../../repository/http/CreateFetchJobPhases'

export function useJobPhases(initialJobPhases: JobPhase[], language: Language) {
  const fetchJobPhases = CreateFetchJobPhases()

  const { data: jobPhases } = useSWR(
    ['job-phase', language],
    (key: string, language: Language) => fetchJobPhases(language),
    {
      initialData: initialJobPhases,
      revalidateOnMount: true,
    },
  )

  return { jobPhases }
}
