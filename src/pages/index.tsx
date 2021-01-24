import React, { FC, useState } from 'react'
import Head from 'next/head'
import { App } from '../containers/App/App'
import { GetStaticProps } from 'next'
import { CreateFetchJobPhases } from '../repository/http/CreateFetchJobPhases'
import {
  isSpanishContextDefaultValue,
  Language,
  LanguageProvider,
} from '../context/IsSpanishContext'
import { deserializeJobPhase, JabPhaseSerialized, serializeJobPhase } from '../models/JobPhase'
import { CreateFetchPersonalData } from '../repository/http/CreateFetchPersonalData'
import { PersonalData } from '../models/PersonalData'

type IndexProps = {
  initialJobPhases: JabPhaseSerialized[]
  initialPersonalData: PersonalData
}

const Index: FC<IndexProps> = ({ initialJobPhases, initialPersonalData }) => {
  const [language, setLanguage] = useState(isSpanishContextDefaultValue)

  return (
    <>
      <Head>
        <title>Daniel Ramos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={initialPersonalData.description} />
      </Head>
      <LanguageProvider value={{ language: language, setLanguage }}>
        <App
          initialJobPhases={initialJobPhases.map(deserializeJobPhase)}
          initialPersonalData={initialPersonalData}
        />
      </LanguageProvider>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const fetchJobPhases = CreateFetchJobPhases()
  const fetchPersonalData = CreateFetchPersonalData()

  const initialJobPhases = await fetchJobPhases(Language.Spanish)
  const initialPersonalData = await fetchPersonalData(Language.Spanish)

  return {
    props: {
      initialJobPhases: initialJobPhases.map(serializeJobPhase),
      initialPersonalData,
    },
  }
}
