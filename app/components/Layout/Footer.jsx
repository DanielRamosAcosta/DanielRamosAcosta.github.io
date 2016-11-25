import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Map from './Footer/Map'

export default class Footer extends React.Component {
  render () {
    // TODO: Arreglar el footer
    return <aa />
    return (
      <div class='Footer'>
        <Container>
          <Row>
            <Col xs={12} md={4}><Map /></Col>
            <Col xs={12} md={4}><Map /></Col>
            <Col xs={12} md={4}><Map /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
