import { Document } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import fetch from 'isomorphic-unfetch'
import { Language } from '../../context/IsSpanishContext'
import { config } from '../../config'
import { PersonalData } from '../../models/PersonalData'

enum Locale {
  ES = 'es',
  EN = 'en-US',
}

type Item = {
  fields: {
    description: string
    professionalSkills: string[]
    profile: Document
    technicalSkills: string[]
  }
}

const localeMap = {
  [Language.Spanish]: Locale.ES,
  [Language.English]: Locale.EN,
}

const request = (locale: Locale): Promise<Item> =>
  fetch(
    `https://cdn.contentful.com/spaces/bb6p44xss7nk/environments/master/entries/5ri9nHBpF2KdQVS1NbT0tr?locale=${locale}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${config.contentfulApiToken}`,
      },
    },
  ).then((response) => response.json())

export const CreateFetchPersonalData = () => async (language: Language): Promise<PersonalData> => {
  const localeMapElement = localeMap[language]
  if (!localeMapElement) {
    throw new Error('Missing mandatory arguemtn')
  }

  const rootObjectPromise = await request(localeMapElement)

  return {
    description: rootObjectPromise.fields.description,
    professionalSkills: rootObjectPromise.fields.professionalSkills,
    profile: documentToHtmlString(rootObjectPromise.fields.profile),
    technicalSkills: rootObjectPromise.fields.technicalSkills,
  }
}
