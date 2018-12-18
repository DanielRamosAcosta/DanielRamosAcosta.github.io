import classNames from 'classnames'
import React, { SFC } from 'react'

import { Paragraph } from '../../components/Paragraph'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import styles from './Profile.module.css'

interface ProfileProps {
  className?: string
}

export const Profile: SFC<ProfileProps> = ({ className }) => (
  <section className={classNames(styles.borrame, className)}>
    <UnderlinedTitle>Profile</UnderlinedTitle>
    <Paragraph>
      My name is <b>Daniel Ramos</b>, I'm a full-stack developer and technology
      enthusiast. I'm in love with Javascript and functional programming. I
      enjoy sharing my knowledge with others and learning from them.
    </Paragraph>
    <Paragraph>
      At the backend, I have worked mainly with <b>Node.js</b> and Swagger,
      using it to create RESTful APIs. Occasionally I have developed some
      microservices using <b>Scala and Akka Streams</b>. I have learned Elixir
      an Go to create backend services, but I still haven't used them in
      real-world projects
    </Paragraph>
    <Paragraph>
      At the frontend, I use <b>React {'&'} Redux</b> to create web apps and
      native apps, but I would like to learn Angular and Vue in the future.
    </Paragraph>
    <Paragraph>
      In the sysadmin world, I have advanced knowledge of Docker and Kubernetes.
      In the last year, I have deployed containers in <b>Amazon Web Services</b>{' '}
      but I have also used other cloud proviers and services, specially{' '}
      <b>Google Kubernetes Engine</b>.
    </Paragraph>
    <Paragraph className={styles.list}>
      Apart from these technical aspects, I do formations from time to time:
      <ul>
        <li>
          <b>
            <i>2017-03 at Open Canarias</i>
          </b>
          : Javascript, CSS, React and Redux
        </li>
        <li>
          <b>
            <i>2018-07 at Open Canarias</i>
          </b>
          : Javascript in 2018 and React best practices
        </li>
        <li>
          <b>
            <i>2018-08 at Kairos</i>
          </b>
          : Javascript, OOP, FP
        </li>
      </ul>
    </Paragraph>
  </section>
)
