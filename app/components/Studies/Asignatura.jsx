import React, { Component } from 'react'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Experience extends Component {
  render () {
    return (
      <Card>
        <CardHeader
          title={this.props.name}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          Una descripción breve de qué va la asignatura, los temas que tratamos quizas las competencias, etc.
        </CardText>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label='Expandir' />
        </CardActions>
      </Card>
    )
  }
}
