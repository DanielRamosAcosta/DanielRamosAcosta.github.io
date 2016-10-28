import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Map from './Footer/Map'

export default class Footer extends React.Component {
  render () {
    return (
      <div class='Footer'>
        <Grid>
          <Row>
            <Col xs={6} md={4}><Map /></Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
