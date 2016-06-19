import React from 'react'
import { IndexLink, Link } from "react-router"

import { Navbar, NavItem, Modal, Button, Row, Col, Chip, Tag } from 'react-materialize'
var Icon = require('react-fontawesome');

import * as LangActions from "../../actions/langActions";
import LangStore from "../../stores/LangStore";

import '../../../styles/Nav'

export default class Nav extends React.Component {
  constructor () {
    super()
    this.pages = [
      "studies",
      "skills",
      "projects",
      "experience",
      "contact"
    ]

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

  setLangEs () {
    LangActions.setLang("es")
  }

  setLangEn () {
    LangActions.setLang("en")
  }

  getPages (loc) {
    return this.pages.map((page, i) => {
      var re = new RegExp('^/' + page, "i")
      const activeClass = loc.match(re) ? "active" : "";
      return (
        <li class={activeClass} key={i}>
          <Link to={'/' + page.toLowerCase()}>{this.state.lang.page[page]}</Link>
        </li>
      )
    })
  }

  render () {
    const { location } = this.props;
    const homeClass = location.pathname === "/" ? "active" : "";

    return (
      <div>
      <Navbar brand={"Daniel Ramos"} right>
        <li class={homeClass}>
          <IndexLink to="/">{this.state.lang.page.home}</IndexLink>
        </li>
        {this.getPages(location.pathname)}
        <Modal
          header="Change Language"
          trigger={
            <li><a href="#" onClick={(e) => {e.preventDefault()}}><Icon name='language' /></a></li>
          }>
          <Row><Button onClick={this.setLangEs.bind(this)} >Español</Button></Row>
          <Row><Button onClick={this.setLangEn.bind(this)} >English</Button></Row>
        </Modal>
      </Navbar>
      </div>
    )
  }
}
