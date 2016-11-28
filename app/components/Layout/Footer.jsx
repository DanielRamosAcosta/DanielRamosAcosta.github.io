import React from 'react'

import {Container, Row, Col} from 'reactstrap'

import Map from './Footer/Map'

import styles from './Footer.sass'

export default class Footer extends React.Component {
  render () {
    // TODO: Arreglar el footer
    return (
      <div class={styles.Footer}>
        <Container>
          <Row>
            <Col xs={12} md={{size: 4, offset: 8}}><Map /></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
