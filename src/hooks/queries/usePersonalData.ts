import { CreateFetchPersonalData } from '../../repository/http/CreateFetchPersonalData'
import useSWR from 'swr'
import { Language } from '../../context/IsSpanishContext'
import { PersonalData } from '../../models/PersonalData'

export function usePersonalData(initialPersonalData: PersonalData, language: Language) {
  const fetchPersonalData = CreateFetchPersonalData()

  const { data: personalData } = useSWR(
    ['personal-data', language],
    (key: string, language: Language) => fetchPersonalData(language),
    {
      initialData: initialPersonalData,
      revalidateOnMount: true,
    },
  )

  return { personalData }
}
