import React from 'react'

import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize'

import LangStore from "../stores/LangStore";

import '../../styles/About'

export default class Home extends React.Component {
  static contextTypes = {
    lang: React.PropTypes.object
  }

  constructor () {
    super()
    this.profileImage = 'http://placehold.it/800x800'

    this.getLang = this.getLang.bind(this)
    this.state = {
      lang: LangStore.getLang()
    };
  }

  getLang () {
    this.setState({
      lang: LangStore.getLang()
    })
  }

  componentWillMount () {
    LangStore.on("change", this.getLang)
  }

  componentWillUnmount () {
    LangStore.removeListener("change", this.getLang)
  }

  getAge (year, month, day) {
    let birthday = new Date(year, month, day)
    let ageDifMs = Date.now() - birthday.getTime()
    let ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  render () {
    return (
      <div>
        <Row>
          <Col m={4} class="hide-on-small-only">
             <img class="responsive-img" src={this.profileImage}/>
          </Col>
          <Col s={12} m={8}>
            <Row>
              <Col s={6} class="hide-on-med-and-up">
                 <img class="responsive-img" src={this.profileImage}/>
              </Col>
              <Col s={6} m={12} class="nombre">
                <h1>
                  Daniel Ramos
                </h1>
                <small>alu0100843095@ull.edu.es</small>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <h2 class="info">{this.state.lang.home.student}<b>{this.state.lang.home.degree}</b>{this.state.lang.home.student2}</h2>
                <p>{this.state.lang.home.ihave}{this.getAge(1995, 6, 30)}{this.state.lang.home.description}</p>
                <p>{this.state.lang.home.description2}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
