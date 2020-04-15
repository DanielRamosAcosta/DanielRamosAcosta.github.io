import React, { FC } from 'react'

import { JobPhase } from '../../components/JobPhase/JobPhase'
import { Paragraph } from '../../components/Paragraph/Paragraph'
import { UnderlinedTitle } from '../../components/UnderlinedTitle/UnderlinedTitle'
import { LanguageConsumer, Language } from '../IsSpanishContext'
import { languageIs, i18n } from '../../i18n'
import { ListItem } from '../../components/List/ListItem'
import { List } from '../../components/List/List'
import { Link } from '../../components/Link/Link'

type ProfessionalExperienceProps = {
  className?: string
}

const englishLang = {
  professional_experience: 'Professional Experience',
}

const spanishLang: typeof englishLang = {
  professional_experience: 'Experiencia Profesional',
}

export const ProfessionalExperience: FC<ProfessionalExperienceProps> = ({ className }) => (
  <LanguageConsumer>
    {language => {
      const getLabel = i18n(language, { englishLang, spanishLang })
      const isSpanish = languageIs(language, Language.Spanish)

      return (
        <section className={className}>
          <UnderlinedTitle>{getLabel('professional_experience')}</UnderlinedTitle>
          <JobPhase
            jobName="Canarias Office Director"
            companyName="Acid Tango"
            startDate={new Date('10/15/2019')}
          >
            <Paragraph>
              {isSpanish ? (
                <>
                  Empecé en Octubre del año pasado, con el objetivo de{' '}
                  <b>liderar una oficina en La Laguna (Tenerife)</b> de un equipo de desarrolladores
                  de alto rendimiento. Por ahora, me he encargado de toda la gestión de la oficina,
                  reclutamiento del personal y de gestionar los proyectos incipientes.
                </>
              ) : (
                <>
                  I started at Lean Mind in search of better programming habits and to enforce
                  myself to use best practices as I had the opporunity to learn from{' '}
                  <Link href="https://www.carlosble.com">Carlos Blé</Link>. In the time I was there,
                  I learned techniques for ending with <b>high code quality code</b>, use{' '}
                  <b>Test Driven Development</b> efficently, enterprise architectures for creating
                  scalable an maintanble software using <b>Domain Driven Design</b>, and agile
                  methodologies like <b>Kanban</b> and <b>XP</b>.
                </>
              )}
            </Paragraph>
            <Paragraph>
              {isSpanish ? (
                <>
                  Respecto a proyectos, he estado principalmente en un proyecto de Front-End para
                  análisis de subidas y bajadas en bolsas. Se hizo la implementación en <b>Vue</b>{' '}
                  de un diseño customizado y he aprendido sobre <b>D3.js</b> como librería de
                  visualización de datos.
                </>
              ) : (
                <>
                  I started at Lean Mind in search of better programming habits and to enforce
                  myself to use best practices as I had the opporunity to learn from{' '}
                  <Link href="https://www.carlosble.com">Carlos Blé</Link>. In the time I was there,
                  I learned techniques for ending with <b>high code quality code</b>, use{' '}
                  <b>Test Driven Development</b> efficently, enterprise architectures for creating
                  scalable an maintanble software using <b>Domain Driven Design</b>, and agile
                  methodologies like <b>Kanban</b> and <b>XP</b>.
                </>
              )}
            </Paragraph>
          </JobPhase>
          <JobPhase
            jobName="Fullstack developer"
            companyName="Lean Mind"
            startDate={new Date('07/03/2018')}
            endDate={new Date('10/15/2019')}
          >
            <Paragraph>
              {isSpanish ? (
                <>
                  Empecé en Lean Mind en busca de mejores hábitos y buenas prácticas de código, ya
                  que se me presentó la oportunidad de poder aprender de{' '}
                  <Link href="https://www.carlosble.com">Carlos Blé</Link>. En el tiempo que estuve
                  en Lean Mind, aprendí técnicas para obtener un <b>Código de Calidad</b>, hacer
                  eficientemente <b>Test Driven Development</b>, arquitecturas orientadas al mundo
                  empresarial escalables y mantenibles usando <b>Domain Driven Design</b>, y
                  metodologías ágiles como <b>Kanban</b> y <b>XP</b>. También he puesto en práctica
                  mi Inglés, ya que tuve que lidiar con clientes localizados en Texas y en Abu
                  Dhabi.
                </>
              ) : (
                <>
                  I started at Lean Mind in search of better programming habits and to enforce
                  myself to use best practices as I had the opporunity to learn from{' '}
                  <Link href="https://www.carlosble.com">Carlos Blé</Link>. In the time I was there,
                  I learned techniques for ending with <b>high code quality code</b>, use{' '}
                  <b>Test Driven Development</b> efficently, enterprise architectures for creating
                  scalable an maintanble software using <b>Domain Driven Design</b>, and agile
                  methodologies like <b>Kanban</b> and <b>XP</b>.
                </>
              )}
            </Paragraph>
          </JobPhase>
          <JobPhase
            jobName="Full-stack developer"
            companyName="Open Canarias"
            startDate={new Date('05/30/2017')}
            endDate={new Date('07/03/2018')}
          >
            <Paragraph>
              {isSpanish ? (
                <>
                  Estuve trabajando en el departamento de investigación y desarrollo de Open
                  Canarias cuando acabé el grado en Ingeniería Informática. Empecé desarrollando una
                  aplicación de iOS, pero mi trabajo principal ha sido como desarrollador full-stack
                  con React en el frontend y Node.js en el backend. También he desarrollado pruebas
                  de concepto usando tecnologías innovadoras como <b>Blockchain</b> o{' '}
                  <b>Redes Neuronales</b>. He aquí algunos proyectos destacables:
                </>
              ) : (
                <>
                  I joined Open Canarias at the investigation and development department when I
                  finished my Degree in Computer Engineering. I started developing an iOS app, but
                  my main job has been as a full-stack developer using React at the frontend and
                  Node.js at the backend. Also, I have developed some POCs using innovative
                  technologies like <b>Blockchain</b> or <b>Deep Neural Networks</b>. Here are some
                  remarkable projects:
                </>
              )}
            </Paragraph>
            <div>
              {isSpanish ? (
                <>
                  <List>
                    <ListItem title="Yogabot">
                      Un entrenador inteligente de Yoga usando IA (en concreto, Detectron de
                      Facebook) para analizar tu cuerpo y recomendarte ejercicios de Yoga que se
                      ajusten a ti.
                    </ListItem>
                    <ListItem title="Blockchain POC">
                      Un sistema para subir ofertas a licitaciones que se hashean y persisten en la
                      blockchain de Ethereum. Esto es para que el hash sea público e inmutable, pero
                      que el documento original se mantenga privado, ya que no se puede obtener el
                      documento original a partir del hash.
                    </ListItem>
                    <ListItem title="AI Document Classification POC">
                      Un sistema de inteligencia artificial que recupera documentos de la base de
                      datos del cliente, y los ordena en distintas categorías usando Redes
                      Neuronales Profundas con Tensorflow.
                    </ListItem>
                  </List>
                </>
              ) : (
                <>
                  <List>
                    <ListItem title="Yogabot">
                      A smart Yoga trainer using AI (specifically, Facebook's Detectron) to analyze
                      your body and recommend specific Yoga exercises
                    </ListItem>
                    <ListItem title="Blockchain POC">
                      A system for uploading offers for litications that are hashed and persisted in
                      Ethereum Blockchain. This is for letting the hash be inmutable and public, but
                      let the original document private as no one can retrieve it from the hash.
                    </ListItem>
                    <ListItem title="AI Document Classification POC">
                      An Artificial Intelligence system that retrieves several documents from the
                      clients' database, and sorts them into several categories using Tensorflow's
                      Deep Neural Networks.
                    </ListItem>
                  </List>
                </>
              )}
            </div>
            <Paragraph>
              {isSpanish ? (
                <>
                  En Open Canarias me acerqué a la <b>Programación Funcional Reactiva</b> usando
                  RxJS para React y Akka Streams en el backend.
                </>
              ) : (
                <>
                  At Open Canarias I was also introduced into <b>Functional Reactive Programming</b>{' '}
                  using RxJS for React and Akka Streams at the backend.
                </>
              )}
            </Paragraph>
          </JobPhase>
        </section>
      )
    }}
  </LanguageConsumer>
)
