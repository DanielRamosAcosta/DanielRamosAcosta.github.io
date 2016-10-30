import React, { Component } from 'react'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';


const practicas = [
  {
    enlace: 'https://github.com/ULL-ESIT-SYTW-1617/tareas-iniciales-rafadanipedro',
    titulo: 'Práctica 1. Tareas Iniciales'
  },
  {
    enlace: 'https://github.com/ULL-ESIT-SYTW-1617/creacion-de-paquetes-y-modulos-en-nodejs-rafadanipedro',
    titulo: 'Práctica 2. Creación de un Paquete NPM'
  }
]

export default class Asignatura extends Component {
  renderPractica () {
    return practicas.map((practica, i) =>
      <ListItem primaryText={practica.titulo} leftIcon={<ContentInbox />} key={i} />
    )
  }
  render () {
    return (
      <Card class='Asignatura'>
        <CardHeader
          title={this.props.name}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          {this.props.descripcion}
        </CardText>
        <CardText expandable={true}>
          <List>
            {this.renderPractica()}
          </List>
        </CardText>
      </Card>
    )
  }
}
