import React from 'react'

import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'

import me from 'images/me'

import styles from  './Perfil.sass'

@connect(store => {
  return {
    redes: store.data.daniel.redes
  }
})
export default class Perfil extends React.Component {
  renderIcons () {
    return this.props.redes.map(red =>
      <IconButton
        key={red.name}
        tooltip={red.name}
        tooltipPosition='top-center'
        href={red.link}
      >
        <SvgIcon viewBox='0 0 40 40'>
          <path d={red.icon} />
        </SvgIcon>
      </IconButton>
    )
  }

  render () {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title='Daniel Ramos' subtitle='danielramosacosta@hotmail.com' />}
        >
          <img src={me} />
        </CardMedia>
        <CardActions class={styles.CardActions}>
          {this.renderIcons()}
        </CardActions>
      </Card>
    )
  }
}
