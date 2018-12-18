import classNames from 'classnames'
import React, { SFC } from 'react'

import { EducationPhase } from '../../components/EducationPhase'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'

interface EducationProps {
  className?: string
}

export const Education: SFC<EducationProps> = ({ className }) => (
  <section className={className}>
    <UnderlinedTitle>Education</UnderlinedTitle>
    <EducationPhase
      educationName="Degree in Computer Engineering"
      universityName="University of La Laguna"
      startDate={new Date('09/05/2013')}
      endDate={new Date('07/30/2017')}
    />
  </section>
)
