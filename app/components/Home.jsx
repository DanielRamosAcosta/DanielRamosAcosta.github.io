import React from 'react'

import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import Perfil from './Home/Perfil'

// import 'styles/Home'

@connect(store => {
  return {
    store: store
  }
})
export default class Home extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
  }

  render () {
    console.log(this.props)
    console.log(this.context)
    return (
      <Container class='Home'>
        <Row>
          <Col xs={12} md={3}><Perfil /></Col>
          <Col xs={12} md={9}>
            <Card>
              <CardHeader
                title='URL Avatar'
                subtitle='Subtitle'
                avatar='https://avatars2.githubusercontent.com/u/11427028'
              />
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label='Action1' />
                <FlatButton label='Action2' />
              </CardActions>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
