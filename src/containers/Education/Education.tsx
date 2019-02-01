import classNames from 'classnames'
import React, { FC } from 'react'

import { EducationPhase } from '../../components/EducationPhase/EducationPhase'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { LanguageConsumer } from '../IsSpanishContext'
import { i18n } from '../../i18n'

interface EducationProps {
  className?: string
}

const englishLang = {
  degree_in_computer_engineering: 'Degree in Computer Engineering',
  university_of_la_laguna: 'University of La Laguna',
  education: 'Education',
}

const spanishLang: typeof englishLang = {
  degree_in_computer_engineering: 'Grado en Ingeniería Informática',
  university_of_la_laguna: 'Universidad de la Laguna',
  education: 'Formación',
}

export const Education: FC<EducationProps> = ({ className }) => (
  <LanguageConsumer>
    {lang => {
      const getLabel = i18n(lang, { englishLang, spanishLang })

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
  </LanguageConsumer>
)
