import React from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid'

export default class Experience extends React.Component {
  render () {
    return (
      <Grid class='Experience'>
        <Row>
          <Col xs={12} md={12}>
            <img src='https://pbs.twimg.com/profile_images/1858661580/wiplogo1.jpg'></img>
          </Col>
        </Row>
      </Grid>
    )
  }
}
