import classNames from 'classnames'
import React, { FC } from 'react'

import { LanguageConsumer, Language } from '../IsSpanishContext'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import { Paragraph } from '../../components/Paragraph'

import styles from './Profile.module.css'
import { i18n, languageIs } from '../../i18n'

interface ProfileProps {
  className?: string
}

const englishLang = {
  profile: 'Profile',
}

const spanishLang: typeof englishLang = {
  profile: 'Perfil',
}

export const Profile: FC<ProfileProps> = ({ className }) => (
  <LanguageConsumer>
    {language => {
      const getLabel = i18n(language, { englishLang, spanishLang })
      const isSpanish = languageIs(language, Language.Spanish)

      return (
        <section className={className}>
          <UnderlinedTitle>{getLabel('profile')}</UnderlinedTitle>
          <Paragraph>
            {isSpanish ? (
              <>
                Mi nombre es <b>Daniel Ramos</b>, soy un desarrollador
                full-stack y entusiasta de la tecnología. Estoy enamorado de
                Javascript y la programación funcional. Disfruto compartiendo mi
                conocimiento con otros y aprendiendo de ellos.
              </>
            ) : (
              <>
                My name is <b>Daniel Ramos</b>, I'm a full-stack developer and
                technology enthusiast. I'm in love with Javascript and
                functional programming. I enjoy sharing my knowledge with others
                and learning from them.
              </>
            )}
          </Paragraph>
          <Paragraph>
            {isSpanish ? (
              <>
                En la parte de backend, he trabajado principalmente con{' '}
                <b>Node.js</b> y Swagger, usándolos para crear APIs REST. Alguna
                vez he desarrollado también microservicios con{' '}
                <b>Scala y Akka Streams</b>. También he aprendido Elixir y Go
                para crear servicios de backend, pero nunca los he llegado a
                usar en proyectos reales.
              </>
            ) : (
              <>
                At the backend, I have worked mainly with <b>Node.js</b> and
                Swagger, using it to create RESTful APIs. Occasionally I have
                developed some microservices using <b>Scala and Akka Streams</b>
                . I have learned Elixir an Go to create backend services, but I
                still haven't used them in real-world projects.
              </>
            )}
          </Paragraph>
          <Paragraph>
            {isSpanish ? (
              <>
                En el frontend, he usado principalmente <b>React y Redux</b>{' '}
                para crear tanto aplicaciones web como aplicaciones nativas,
                pero también me gustaría aprender Angular y Vue en un futuro
                próximo.
              </>
            ) : (
              <>
                At the frontend, I use <b>React {'&'} Redux</b> to create web
                apps and native apps, but I would like to learn Angular and Vue
                in the future.
              </>
            )}
          </Paragraph>
          <Paragraph>
            {isSpanish ? (
              <>
                En el mundo de la administración de sistemas, tengo
                conocimientos avanzados de Docker y Kubernetes. En el último
                año, he desplegado contenedores en <b>Amazon Web Services</b>{' '}
                aunque también he usado otros servicios en la nube, como el{' '}
                <b>Google Kubernetes Engine</b>.
              </>
            ) : (
              <>
                In the sysadmin world, I have advanced knowledge of Docker and
                Kubernetes. In the last year, I have deployed containers in{' '}
                <b>Amazon Web Services</b> but I have also used other cloud
                proviers and services, specially <b>Google Kubernetes Engine</b>
                .
              </>
            )}
          </Paragraph>
          <Paragraph className={styles.list}>
            {isSpanish ? (
              <>
                A parte de estos aspectos técnicos, imparto formaciones de vez
                en cuando:
                <ul>
                  <li>
                    <b>
                      <i>2017-03 en Open Canarias</i>
                    </b>
                    : Javascript, CSS, React y Redux
                  </li>
                  <li>
                    <b>
                      <i>2018-07 en Open Canarias</i>
                    </b>
                    : Javascript en 2018 y Mejores Prácticas en React
                  </li>
                  <li>
                    <b>
                      <i>2018-08 en Kairos</i>
                    </b>
                    : Javascript, OOP, FP
                  </li>
                </ul>
              </>
            ) : (
              <>
                Apart from these technical aspects, I do formations from time to
                time:
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
              </>
            )}
          </Paragraph>
        </section>
      )
    }}
  </LanguageConsumer>
)
