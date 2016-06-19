import React from 'react'

import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize'

import '../../styles/About'

export default class Home extends React.Component {
  constructor () {
    super()
    this.profileImage = 'http://placehold.it/800x800'
  }
  getAge (year, month, day) {
    let birthday = new Date(year, month, day)
    let ageDifMs = Date.now() - birthday.getTime()
    let ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  render () {
    return (
      <div>
        <Row>
          <Col m={4} class="hide-on-small-only">
             <img class="responsive-img" src={this.profileImage}/>
          </Col>
          <Col s={12} m={6}>
            <Row>
              <Col s={6} class="hide-on-med-and-up">
                 <img class="responsive-img" src={this.profileImage}/>
              </Col>
              <Col s={6} m={12} class="nombre">
                <h1>
                  Daniel Ramos
                </h1>
                <small>alu0100843095@ull.edu.es</small>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <h2 class="info">Estudiante de <b>Ingeniería Informática</b></h2>
                <p>Tengo {this.getAge(1995, 6, 30)} años, y actualmente soy estudiante 3º del grado de Ingeniería Informática en la ESIT de la Universidad de La Laguna.</p>
                <p>Desde los 15 años tenía claro que quería estudiar esta carrera. En aquel momento estaba en 4º de la ESO, y en la clase de informática empezamos a ver el Scratch, una herramienta de programación por bloques. Y fue ahí exactamente cuando descubrí que programar era lo que realmente me gustaba.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
