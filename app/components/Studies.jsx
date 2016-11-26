import React from 'react'
import { chunk } from 'lodash'
import query from 'json-query'
import { Container, Row, Col } from 'reactstrap'
import Asignatura from './Studies/Asignatura'

const asignaturas = require('data/asignaturas')
const practicas = require('data/practicas')

// import 'styles/Studies'

export default class Studies extends React.Component {
  renderRows () {
    return chunk(asignaturas, 3).map((asignaturas, i) =>
      <Row key={i}>
        {this.renderCols(asignaturas)}
      </Row>
    )
  }

  renderCols (asignaturas) {
    return asignaturas.map((asignatura, i) => {
      let prct = query(`practicas[*id_asignatura=${asignatura.id}]`, {data: { practicas }}).value
      console.log(practicas)
      console.log(prct)
      return (
          <Col xs='12' md={12 / asignaturas.length} key={i}>
            <Asignatura
              name={asignatura.nombre}
              descripcion={asignatura.descripcion}
              practicas={prct}
            />
          </Col>
        )
      }
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
