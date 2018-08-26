import * as classNames from 'classnames'
import * as React from 'react'

import { JobPhase } from '../../components/JobPhase'
import { Paragraph } from '../../components/Paragraph'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import styles from './ProfessionalExperience.css'

interface ProfessionalExperienceProps {
  className?: string
}

export const ProfessionalExperience: React.SFC<ProfessionalExperienceProps> = ({
  className
}) => (
  <section className={classNames(styles.borrame, className)}>
    <UnderlinedTitle>Professional Experience</UnderlinedTitle>
    <JobPhase
      jobName="Frontend developer"
      companyName="Lean Mind"
      startDate={new Date('07/03/2018')}
    >
      <Paragraph>
        I started at Lean Mind in search of better progmming habits and to
        enforce myself to use best practices. By the brief time I have been
        here, I learned many things, specially about <b>Code Quality</b>,{' '}
        <b>Test Driven Developent</b>, enterprise architectures and agile
        methodologies.
      </Paragraph>
    </JobPhase>
    <JobPhase
      jobName="Full-stack developer"
      companyName="Open Canarias"
      startDate={new Date('05/30/2017')}
      endDate={new Date('07/03/2018')}
    >
      <Paragraph>
        I joined Open Canarias at the investigation and development department
        when I finished my Degree at Computer Engineering. I started developing
        an iOS app but my main job has been as full-stack developer using React
        at the frontend and Node.js at the backend. Also, I have developed some
        POCs using innovative technolgies like <b>Blockchain</b> or{' '}
        <b>Deep Neural Networks</b>, Here are some remarkable projects:
      </Paragraph>
      <ul>
        <li>
          <b>Yogabot</b>: A smart Yoga trainer using AI (specifically,
          Facebook's Detectron) to analize your body and recommend specific Yoga
          exercises
        </li>
        <li>
          <b>Blockchain POC</b>: A system for uploading litications that are
          hashed and persisted in Ethereum Blockchain
        </li>
        <li>
          <b>AI Document Classification POC</b>: An Artificial Intelligence
          system that retrieves several documents from the clients database, and
          sorts them into serveral categories using Tensorflow's Deep Neural
          Networks.
        </li>
      </ul>
      <Paragraph>
        At Open Canarias I was also introduced into{' '}
        <b>Functional Reactive Programing</b> using RxJS for React and Akka
        Streams at the backend.
      </Paragraph>
    </JobPhase>
  </section>
)
