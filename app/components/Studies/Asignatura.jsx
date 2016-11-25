import React, { Component } from 'react'

import { Card, CardHeader, CardText } from 'material-ui/Card'

import { List, ListItem } from 'material-ui/List'
import Repo from 'components/Icons/Repo'

export default class Asignatura extends Component {
  renderPractica () {
    return this.props.practicas.map((practica, i) =>
      <ListItem
        key={i}
        primaryText={practica.titulo}
        rightIcon={<Repo />}
        href={practica.enlace}
      />
    )
  }

  render () {
    return (
      <Card class='Asignatura'>
        <CardHeader
          title={this.props.name}
          actAsExpander
          showExpandableButton
        />
        <CardText>
          {this.props.descripcion}
        </CardText>
        <CardText expandable>
          <List>
            {this.renderPractica()}
          </List>
        </CardText>
      </Card>
    )
  }
}
