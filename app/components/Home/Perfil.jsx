import React from 'react'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import GithubIcon from 'components/Icons/Github.jsx';
import FacebookIcon from 'components/Icons/Facebook.jsx';
import LinkedInIcon from 'components/Icons/LinkedIn.jsx';
import TwitterIcon from 'components/Icons/Twitter.jsx';
import SvgIcon from 'material-ui/SvgIcon';

import 'styles/Home/Perfil'

export default class Experience extends React.Component {
  render () {
    return (
      <Card class='Perfil'>
        <CardMedia
          overlay={<CardTitle title="Daniel Ramos" subtitle="danielramosacosta@hotmail.com" />}
        >
          <img src="http://danielramosacosta.github.io/images/me.64e38e08.jpg" />
        </CardMedia>
        <CardActions class='actions'>
          <IconButton
            tooltip="Github"
            tooltipPosition="top-center"
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            tooltip="Facebook"
            tooltipPosition="top-center"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            tooltip="LinkedIn"
            tooltipPosition="top-center"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            tooltip="Twitter"
            tooltipPosition="top-center"
          >
            <TwitterIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}
