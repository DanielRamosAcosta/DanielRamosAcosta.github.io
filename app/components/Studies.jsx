import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Asignatura from './Studies/Asignatura'

export default class Experience extends React.Component {
  render () {
    return (
      <div>
        <Container>
          <Row>
            <Col xs='12'>
              <h1>Estudios</h1>
            </Col>
          </Row>
          <Row>
            <Col xs='12' sm='6'>
              <Asignatura
                name='Sistemas y Tecnologías Web'
              />
            </Col>
            <Col xs='12' sm='6'>
              <Asignatura
                name='Algoritmos y Estrucutras de Datos Avanzados'
              />
            </Col>
          <Row>
          </Row>
            <Col xs='12' sm='6'>
              <Asignatura
                name='Inteligencia Artificial'
              />
            </Col>
            <Col xs='12' sm='6'>
              <Asignatura
                name='Lenguajes y Paradigmas de Programación'
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
