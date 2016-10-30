import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Asignatura from './Studies/Asignatura'
import _ from 'lodash'

const asignaturas = require('data/asignaturas')
const practicas = require('data/practicas')
console.log(asignaturas)
console.log(practicas)

import 'styles/Studies'

window.alasql = alasql

export default class Studies extends React.Component {
  renderRows () {
    return _.chunk(asignaturas, 3).map((asignaturas, i) =>
      <Row key={i}>
        {this.renderCols(asignaturas)}
      </Row>
    )
  }

  renderCols(asignaturas) {
    return asignaturas.map((asignatura, i) =>
      <Col xs='12' md={12/asignaturas.length} key={i}>
        <Asignatura name={asignatura.nombre} descripcion={asignatura.descripcion}/>
      </Col>
    )
  }

  render () {
    return (
      <div class='Studies'>
        <Container>
          <Row>
            <Col xs='12' class='Title'>
              <h1>Estudios</h1>
              <hr />
            </Col>
          </Row>
          {this.renderRows()}
        </Container>
      </div>
    )
  }
}
