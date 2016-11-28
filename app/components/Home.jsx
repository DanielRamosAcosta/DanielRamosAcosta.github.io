import React from 'react'

import { connect } from 'react-redux'
import {Card, CardActions, CardHeader, CardTitle, CardText, CardMedia} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import LinearProgress from 'material-ui/LinearProgress';

import {Container, Row, Col} from 'reactstrap'

import Perfil from './Home/Perfil'

import styles from './Home.sass'

@connect(store => {
  return {
    me: store.data.daniel
  }
})
export default class Home extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
  }

  calculate_age(birthday) {
    let today_date = new Date()

    let today = {
      day: today_date.getDate(),
      month: today_date.getMonth(),
      year: today_date.getFullYear()
    }

    let age = today.year - birthday.year

    if (today.month < (birthday.month - 1)) age--
    if (((birthday.month - 1) === today.month) && (today.day < birthday.day)) age--
    return age
}

  render () {
    console.log(this.props.me)
    return (
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <Row>
              <Col xs={12}>
                <Perfil />
              </Col>
            </Row>
            <Row class={styles.Row}>
              <Col xs={12}>
                <Card>
                  <CardTitle title='Idiomas'/>
                  <CardText>
                    <p>
                      Epañol
                    </p>
                    <LinearProgress
                      mode='determinate'
                      value={100}
                      class={styles.Language}
                    />
                    <p>
                      Inglés
                    </p>
                    <LinearProgress
                      mode='determinate'
                      value={85}
                      class={styles.Language}
                    />
                    <p>
                      Francés
                    </p>
                    <LinearProgress
                      mode='determinate'
                      value={25}
                      class={styles.Language}
                    />
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6} md={9}>
            <Row>
              <Col xs={12}>
                <Card>
                  <CardTitle title='Un poco sobre mí' subtitle='Pero sólo un poco' />
                  <CardMedia>
                    <img src="http://i.imgur.com/RC0yc7n.png"></img>
                  </CardMedia>
                  <CardText>
                    <p>
                      Me llamo Me llamo {this.props.me.name}, tengo {this.calculate_age(this.props.me.birthday)} años, y actualmente soy estudiante 4º del grado de Ingeniería Informática en la ESIT de la Universidad de La Laguna.
                    </p>
                    <p>
                      Desde los 15 años tenía claro que quería estudiar esta carrera. En aquel momento estaba en 4º de la ESO, y en la clase de informática empezamos a ver el Scratch, una herramienta de programación por bloques. Y fue ahí exactamente cuando descubrí que programar era lo que realmente me gustaba.
                    </p>
                  </CardText>
                </Card>
              </Col>
            </Row>
            <Row class={styles.Row}>
              <Col xs={12}>
                <Card>
                  <CardTitle title='Qué he estado haciendo' subtitle='Lenguajes que he usado lo últimos 7 días' />
                  <CardText>
                    <figure><embed src="https://wakatime.com/share/@DanielRamos/ec261bd4-6b00-4395-9d80-efc92f5ac0bd.svg" onLoad={() => {
                        console.log('Cargué')
                      }}></embed></figure>
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
