import React, { FC } from 'react'

import { LanguageConsumer, Language } from '../IsSpanishContext'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { Paragraph } from '../../components/Paragraph/Paragraph'

import { i18n, languageIs } from '../../i18n'
import { List } from '../../components/List/List'
import { ListItem } from '../../components/List/ListItem'
import { Link } from '../../components/Link/Link'

type ProfileProps = {
  className?: string
}

const englishLang = {
  profile: 'Profile',
  '2017_03_at_open_canarias': '2017-03 at Open Canarias',
  javascript_css_react_and_redux: 'Javascript, CSS, React and Redux',
  '2018_07_at_open_canarias': '2018-07 at Open Canarias',
  javascript_in_2018_and_react_best_practices: 'Javascript in 2018 and React best practices',
  '2018_08_at_kairos': '2018-08 at Kairos',
  javascript_oop_fp: 'Javascript, OOP, FP',
}

const spanishLang: typeof englishLang = {
  profile: 'Perfil',
  '2017_03_at_open_canarias': '2017-03 en Open Canarias',
  javascript_css_react_and_redux: 'Javascript, CSS, React y Redux',
  '2018_07_at_open_canarias': '2018-07 en Open Canarias',
  javascript_in_2018_and_react_best_practices: 'Javascript en 2018 y Mejores Prácticas en React',
  '2018_08_at_kairos': '2018-08 en Kairos',
  javascript_oop_fp: 'Javascript, OOP, FP',
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
                Mi nombre es <b>Daniel Ramos</b>, soy un desarrollador full-stack y entusiasta de la
                tecnología. Estoy enamorado de Javascript y la programación funcional. Disfruto
                compartiendo mi conocimiento con otros y aprendiendo de ellos.
              </>
            ) : (
              <>
                My name is <b>Daniel Ramos</b>, I'm a full-stack developer and technology
                enthusiast. I'm in love with Javascript and functional programming. I enjoy sharing
                my knowledge with others and learning from them.
              </>
            )}
          </Paragraph>
          <Paragraph>
            {isSpanish ? (
              <>
                En la parte de backend, he trabajado principalmente con <b>Node.js</b> y Swagger,
                usándolos para crear APIs REST. Alguna vez he desarrollado también microservicios
                con <b>Scala y Akka Streams</b>. También he aprendido Elixir y Go para crear
                servicios de backend, pero nunca los he llegado a usar en proyectos reales.
              </>
            ) : (
              <>
                At the backend, I have worked mainly with <b>Node.js</b> and Swagger, using it to
                create RESTful APIs. Occasionally I have developed some microservices using{' '}
                <b>Scala and Akka Streams</b>. I have learned Elixir an Go to create backend
                services, but I still haven't used them in real-world projects.
              </>
            )}
          </Paragraph>
          <Paragraph>
            {isSpanish ? (
              <>
                En el frontend, he usado principalmente <b>React y Redux</b> para crear tanto
                aplicaciones web como aplicaciones nativas, aunque también he tenido que usar otros
                frameworks como Angular y Vue.
              </>
            ) : (
              <>
                At the frontend, I use <b>React {'&'} Redux</b> to create web apps and native apps,
                but I would like to learn Angular and Vue in the future.
              </>
            )}
          </Paragraph>
          <Paragraph>
            {isSpanish ? (
              <>
                En el mundo de la administración de sistemas, tengo conocimientos avanzados de
                Docker y Kubernetes. En el último año, he desplegado contenedores en{' '}
                <b>Amazon Web Services</b> aunque también he usado otros servicios en la nube, como
                el <b>Google Kubernetes Engine</b>.
              </>
            ) : (
              <>
                In the sysadmin world, I have advanced knowledge of Docker and Kubernetes. In the
                last year, I have deployed containers in <b>Amazon Web Services</b> but I have also
                used other cloud proviers and services, specially <b>Google Kubernetes Engine</b>.
              </>
            )}
          </Paragraph>
          <Paragraph>
            {isSpanish ? (
              <>A parte de estos aspectos técnicos, en ocasiones he impartido formaciones:</>
            ) : (
              <>Apart from these technical aspects, I do formations from time to time:</>
            )}
          </Paragraph>
          <List>
            <ListItem title={getLabel('2017_03_at_open_canarias')}>
              {getLabel('javascript_css_react_and_redux')}
            </ListItem>
            <ListItem title={getLabel('2018_07_at_open_canarias')}>
              {getLabel('javascript_in_2018_and_react_best_practices')}
            </ListItem>
            <ListItem title={getLabel('2018_08_at_kairos')}>
              {getLabel('javascript_oop_fp')}
            </ListItem>
          </List>
          <Paragraph>
            {isSpanish ? (
              <>
                Para mi desarrollo personal disfroto dando charlas sobre tecnólogías que he usado o
                sobre mi experiencia:
              </>
            ) : (
              <>Apart from these technical aspects, I do formations from time to time:</>
            )}
          </Paragraph>
          <List>
            <ListItem title={'Human Readable E2E Testing'}>
              <Link href="https://www.youtube.com/watch?v=J4FuWp9oVvI">Enlace al vídeo</Link>. Se ha
              visto cómo crear tests E2E legibles por personas con Cucumber interactuando con el
              navegador con Puppeteer
            </ListItem>
            <ListItem title={'El futuro es ahora, WebAssembly'}>
              <Link href="https://www.youtube.com/watch?v=7XOT84Dj3is&list=PLKxa4AIfm4pXIvLsqKB0fAkcMqib0DYQj">
                Enlace al vídeo
              </Link>
              . Vimos la evolución de la Web y el rol que desempeña WebAssembly en ella, viendo un
              ejemplo práctico con una implementación del{' '}
              <Link href="https://es.wikipedia.org/wiki/Conjunto_de_Mandelbrot">
                Conjunto de Mandelbrot
              </Link>{' '}
              donde se consigue una velocidad 11 veces superior a la implementación equivalente en
              Javascript
            </ListItem>
            <ListItem title={'Al timón de Kubernetes'}>
              <Link href="https://www.youtube.com/watch?v=ZnmxP2paSXo">Enlace al vídeo</Link>. Vimos
              los conceptos básicos de Kubernetes mediante un caso práctico para realizar un buen
              despliegue.
            </ListItem>
            <ListItem title={'¿Por qué no me enseñaron esto antes?'}>
              En esta charla hablé sobre el aprendizaje que he adquirido durante estos últimos años,
              y que me hubiese gustado que me enseñasen en la universidad.
            </ListItem>
          </List>
          <Paragraph>
            {isSpanish ? (
              <>
                También me gusta realizar actividades de divulgación tecnológica/científica, ya sea
                dando charlas o por otros medios como{' '}
                <Link href="https://www.youtube.com/channel/UCiLWrFqdr20VGV9ZISqaJeg" openInNewTab>
                  Youtube
                </Link>
                .
              </>
            ) : (
              <>
                I like to carry out technological/scientific divulgation activities, either giving
                talks or by other means such as{' '}
                <Link href="https://www.youtube.com/channel/UCiLWrFqdr20VGV9ZISqaJeg" openInNewTab>
                  Youtube
                </Link>
                .
              </>
            )}
          </Paragraph>
        </section>
      )
    }}
  </LanguageConsumer>
)
