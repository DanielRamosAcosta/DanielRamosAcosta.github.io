import React, { Component } from 'react'

import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'

import { List, ListItem } from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton';


import Repo from 'components/Icons/Repo'

import styles from './Asignatura.sass'

export default class Asignatura extends Component {
  renderPractica () {
    if (!this.props.practicas) return
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
      <Card class={styles.Asignatura}>
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
        <div style={{height: '100%'}}/>
      </Card>
    )
  }
}

/*

render () {
    return (
      <Card class='Asignatura'>
        <CardHeader
          title={this.props.name}
          actAsExpander
          showExpandableButton
        />
        <CardText>
          
        </CardText>
        <CardText expandable>
          <List>
            {this.renderPractica()}
          </List>
        </CardText>
      </Card>
    )
  }

*/
