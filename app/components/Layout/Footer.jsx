import React from 'react'

import {Grid, Row, Col} from 'react-flexbox-grid'

import Map from './Footer/Map'

import styles from './Footer.sass'

export default class Footer extends React.Component {
  render () {
    // TODO: Arreglar el footer
    return (
      <div class={styles.Footer}>
        <Grid>
          <Row>
            <Col xs={12} md={4} mdOffset={8}><Map /></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
