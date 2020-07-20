import { Document } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import fetch from 'isomorphic-unfetch'
import { Language } from '../../context/IsSpanishContext'
import { config } from '../../config'
import { JobPhase } from '../../models/JobPhase'
import { sortBy } from '../../utils/sort-dates'

enum Locale {
  ES = 'es',
  EN = 'en-US',
}

type Item = {
  fields: {
    jobName: string
    companyName: string
    startDate: string
    endDate: string
    description: Document
  }
}

type RootObject = {
  items: Item[]
}

const localeMap = {
  [Language.Spanish]: Locale.ES,
  [Language.English]: Locale.EN,
}

const request = (locale: Locale): Promise<RootObject> =>
  fetch(
    `https://cdn.contentful.com/spaces/bb6p44xss7nk/environments/master/entries?content_type=professionalExperience&locale=${locale}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${config.contentfulApiToken}`,
      },
    },
  ).then((response) => response.json())

const mapContentfulResponseToJobPhase = (data: RootObject) => data.items.map(itemToJobPhase)

const itemToJobPhase = ({ fields }: Item): JobPhase => ({
  jobName: fields.jobName,
  companyName: fields.companyName,
  startDate: new Date(fields.startDate),
  endDate: fields.endDate ? new Date(fields.endDate) : null,
  descriptionHTML: documentToHtmlString(fields.description),
})

const compareDatesFn = (a: Date, b: Date) => b.getTime() - a.getTime()

const sortJobPhasesByStartDate = sortBy<JobPhase>((a, b) =>
  compareDatesFn(a.startDate, b.startDate),
)

export const CreateFetchJobPhases = () => async (language: Language): Promise<JobPhase[]> =>
  request(localeMap[language]).then(mapContentfulResponseToJobPhase).then(sortJobPhasesByStartDate)
