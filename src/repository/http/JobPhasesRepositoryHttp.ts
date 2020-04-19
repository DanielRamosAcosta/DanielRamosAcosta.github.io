import { Document } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Language } from '../../context/IsSpanishContext'
import { config } from '../../config'

enum Locale {
  ES = 'es',
  EN = 'en-US',
}

export class JobPhase {
  private readonly jobName: string
  private readonly companyName: string
  private readonly startDate: Date
  private readonly endDate: Date | null
  private readonly descriptionHTML: string

  constructor({
    jobName,
    companyName,
    startDate,
    endDate,
    descriptionHTML,
  }: {
    jobName: string
    companyName: string
    startDate: Date
    endDate: Date | null
    descriptionHTML: string
  }) {
    this.jobName = jobName
    this.companyName = companyName
    this.startDate = startDate
    this.endDate = endDate
    this.descriptionHTML = descriptionHTML
  }

  getJobName(): string {
    return this.jobName
  }

  getCompanyName(): string {
    return this.companyName
  }

  getStartDate(): Date {
    return this.startDate
  }

  getEndDate(): Date | null {
    return this.endDate
  }

  getDescriptionHTML(): string {
    return this.descriptionHTML
  }
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

export class JobPhasesRepositoryHttp {
  getAll(language: Language): Promise<JobPhase[]> {
    return this.request(localeMap[language]).then(this.responseToDomain)
  }

  private request(locale: Locale) {
    return fetch(
      `https://cdn.contentful.com/spaces/bb6p44xss7nk/environments/master/entries?locale=${locale}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.contentfulApiToken}`,
        },
      },
    ).then((response) => response.json())
  }

  private responseToDomain = (data: RootObject) => data.items.map(this.itemToJobPhase)

  private itemToJobPhase = ({ fields }: Item) =>
    new JobPhase({
      jobName: fields.jobName,
      companyName: fields.companyName,
      startDate: new Date(fields.startDate),
      endDate: fields.startDate ? new Date(fields.startDate) : null,
      descriptionHTML: documentToHtmlString(fields.description),
    })
}
