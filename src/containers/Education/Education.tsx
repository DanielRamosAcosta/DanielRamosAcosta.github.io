import classNames from 'classnames'
import React, { FC } from 'react'

import { EducationPhase } from '../../components/EducationPhase'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import { IsSpanishConsumer } from '../IsSpanishContext'

interface EducationProps {
  className?: string
}

const englishLang = {
  degree_in_computer_engineering: 'Degree in Computer Engineering',
  university_of_la_laguna: 'University of La Laguna',
  education: 'Education',
}

type EnglishBase = typeof englishLang

const spanishLang: EnglishBase = {
  degree_in_computer_engineering: 'Grado en Ingeniería Informática',
  university_of_la_laguna: 'Universidad de la Laguna',
  education: 'Formación',
}

function i18n(isSpanish: boolean) {
  return function(key: keyof EnglishBase) {
    return isSpanish ? spanishLang[key] : englishLang[key]
  }
}

export const Education: FC<EducationProps> = ({ className }) => (
  <IsSpanishConsumer>
    {isSpanish => {
      const getLabel = i18n(isSpanish)
      return (
        <section className={className}>
          <UnderlinedTitle>{getLabel('education')}</UnderlinedTitle>
          <EducationPhase
            educationName={getLabel('degree_in_computer_engineering')}
            universityName={getLabel('university_of_la_laguna')}
            startDate={new Date('09/05/2013')}
            endDate={new Date('07/30/2017')}
          />
        </section>
      )
    }}
  </IsSpanishConsumer>
)
