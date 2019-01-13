import classNames from 'classnames'
import React, { FC } from 'react'

import { Paragraph } from '../../components/Paragraph'
import { UnderlinedTitle } from '../../components/UnderlinedTitle'
import styles from './Profile.module.css'

interface ProfileProps {
  className?: string
}

export const Profile: FC<ProfileProps> = ({ className }) => (
  <section className={className}>
    <UnderlinedTitle>Perfil</UnderlinedTitle>
    <Paragraph>
      Mi nombre es <b>Daniel Ramos</b>, soy un desarrollador Full-Stack y
      entusiasta de la tecnología. Estoy enamorado de Javascript y la
      programación funcional. Disfruto compartiendo mi conocimiento con otros y
      aprendiendo de ellos.
    </Paragraph>
    <Paragraph>
      En la parte de backend, he trabajado principalmente con <b>Node.js</b> y
      Swagger, usándolos para crear APIs REST. Alguna vez he desarrollado
      también microservicios con <b>Scala y Akka Streams</b>. También he
      aprendido Elixir y Go para crear servicios de backend, pero nunca los he
      llegado a usar en proyectos reales.
    </Paragraph>
    <Paragraph>
      En el frontend, he usado principalmente <b>React y Redux</b> para crear
      tanto aplicaciones web como aplicaciones nativas, pero también me gustaría
      aprender Angular y Vue en un futuro próximo.
    </Paragraph>
    <Paragraph>
      En el mundo de la administración de sistemas, tengo conocimientos
      avanzados de Docker y Kubernetes. En el último año, he desplegado
      contenedores en <b>Amazon Web Services</b> aunque también he usado otros
      servicios en la nube, como el <b>Google Kubernetes Engine</b>.
    </Paragraph>
    <Paragraph className={styles.list}>
      A parte de estos aspectos técnicos, imparto formaciones de vez en cuando:
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
    </Paragraph>
  </section>
)
