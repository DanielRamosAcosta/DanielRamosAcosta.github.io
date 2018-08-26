import * as classNames from 'classnames'
import * as React from 'react'

import { EducationPhase } from '../../components/EducationPhase'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import styles from './Education.css'

interface EducationProps {
  className?: string
}

export const Education: React.SFC<EducationProps> = ({ className }) => (
  <section className={classNames(styles.borrame, className)}>
    <UnderlinedTitle>Education</UnderlinedTitle>
    <EducationPhase
      educationName="Degree in Computer Engineering"
      universityName="University of La Laguna"
      startDate={new Date('09/05/2013')}
      endDate={new Date('07/30/2017')}
    />
  </section>
)
