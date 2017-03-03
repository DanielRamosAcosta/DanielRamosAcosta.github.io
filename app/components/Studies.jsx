import React from 'react'
import { chunk } from 'lodash'
import { Row, Col } from 'reactstrap'
import Paper from 'material-ui/Paper';

import Asignatura from './Studies/Asignatura'
import asignaturas from 'data/asignaturas'

import styles from './Studies.sass'

export default class Studies extends React.Component {
  renderRows = () =>
    chunk(asignaturas, 2).map((asignaturas, i) =>
      <Row key={i} class={styles.row}>
        {this.renderCols(asignaturas)}
      </Row>
    )

  renderCols = asignaturas =>
    asignaturas.map((asignatura, i) =>
      <Col xs={12} sm={6} key={i}>
        <Asignatura
          name={asignatura.nombre}
          descripcion={asignatura.descripcion}
          practicas={asignatura.practicas}
        />
      </Col>
    )

  render = () =>
    <div>
      <Paper class={styles.Contenedor}>
        <Row>
          <Col xs={12} class={styles.Title}>
            <h1>Estudios</h1>
            <hr />
          </Col>
        </Row>
        {this.renderRows()}
      </Paper>
    </div>
}
