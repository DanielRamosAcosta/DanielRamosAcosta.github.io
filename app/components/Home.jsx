import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import GithubIcon from './Icons/Github.jsx';
import FacebookIcon from './Icons/Facebook.jsx';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import SvgIcon from 'material-ui/SvgIcon';

import Perfil from './Home/Perfil'

import 'styles/Home'

const CardExampleWithAvatar2 = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="https://avatars2.githubusercontent.com/u/11427028"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);


export default class Experience extends React.Component {
  render () {
    return (
      <Container class='Home'>
        <Row>
          <Col xs={6} md={3}><Perfil /></Col>
          <Col xs={6} md={9}>{CardExampleWithAvatar2()}</Col>
        </Row>
      </Container>
    )
  }
}
