import React from 'react'
import { chunk } from 'lodash'
import query from 'json-query'
import { Container, Row, Col } from 'reactstrap'
import Asignatura from './Studies/Asignatura'
import Paper from 'material-ui/Paper';

const asignaturas = require('data/asignaturas')

console.log(asignaturas)

// import 'styles/Studies'

export default class Studies extends React.Component {
  renderRows () {
    return chunk(asignaturas, 2).map((asignaturas, i) =>
      <Row key={i}>
        {this.renderCols(asignaturas)}
      </Row>
    )
  }

  renderCols (asignaturas) {
    return asignaturas.map((asignatura, i) => {
      console.log(asignatura)
      return (
          <Col xs={12} md={6} key={i}>
            <Asignatura
              name={asignatura.nombre}
              descripcion={asignatura.descripcion}
              practicas={asignatura.practicas}
            />
          </Col>
        )
      }
    )
  }

  render () {
    return (
      <div>
        <Container>
          <Paper style={{padding: '1em'}}>
            <Row>
              <Col xs='12' class='Title'>
                <h1>Estudios</h1>
                <hr />
              </Col>
            </Row>
            {this.renderRows()}
            </Paper>
        </Container>
      </div>
    )
  }
}
