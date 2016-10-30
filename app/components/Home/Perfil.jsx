import React from 'react'

import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import GithubIcon from 'components/Icons/Github.jsx'
import FacebookIcon from 'components/Icons/Facebook.jsx'
import LinkedInIcon from 'components/Icons/LinkedIn.jsx'
import TwitterIcon from 'components/Icons/Twitter.jsx'

import me from 'images/me'

import 'styles/Home/Perfil'

export default class Experience extends React.Component {
  render () {
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
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            tooltip='Facebook'
            tooltipPosition='top-center'
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            tooltip='LinkedIn'
            tooltipPosition='top-center'
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            tooltip='Twitter'
            tooltipPosition='top-center'
          >
            <TwitterIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}
