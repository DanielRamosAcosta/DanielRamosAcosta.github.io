import React from 'react'

import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import GithubIcon from 'components/Icons/Github'
import FacebookIcon from 'components/Icons/Facebook'
import LinkedInIcon from 'components/Icons/LinkedIn'
import TwitterIcon from 'components/Icons/Twitter'

import me from 'images/me'

// import 'styles/Home/Perfil'

@connect(store => {
  return {
    redes: store.data.daniel.redes
  }
})
export default class Perfil extends React.Component {
  render () {
    const {
      github,
      facebook,
      linkedin,
      twitter
    } = this.props.redes
    return (
      <Card class='Perfil'>
        <CardMedia
          overlay={<CardTitle title='Daniel Ramos' subtitle='danielramosacosta@hotmail.com' />}
        >
          <img src={me} />
        </CardMedia>
        <CardActions class='actions'>
          <IconButton
            tooltip='Github'
            tooltipPosition='top-center'
            href={github}
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            tooltip='Facebook'
            tooltipPosition='top-center'
            href={facebook}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            tooltip='LinkedIn'
            tooltipPosition='top-center'
            href={linkedin}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            tooltip='Twitter'
            tooltipPosition='top-center'
            href={twitter}
          >
            <TwitterIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}
