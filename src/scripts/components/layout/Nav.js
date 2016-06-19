import React from 'react'
import { IndexLink, Link } from "react-router"

import { Navbar, NavItem } from 'react-materialize'

import '../../../styles/Nav'

export default class Nav extends React.Component {
  constructor () {
    super()
    this.pages = [
      "Studies",
      "Skills",
      "Projects",
      "Experience",
      "Contact"
    ]
  }

  getPages (loc) {
    return this.pages.map((page, i) => {
      var re = new RegExp('^/' + page, "i")
      const activeClass = loc.match(re) ? "active" : "";
      return (
        <li class={activeClass} key={i}>
          <IndexLink to={'/' + page.toLowerCase()}>{page}</IndexLink>
        </li>
      )
    })
  }

  render () {
    const { location } = this.props;
    const homeClass = location.pathname === "/" ? "active" : "";

    return (
      <Navbar brand="Daniel Ramos" right>
        <li class={homeClass}>
          <IndexLink to="/">Inicio</IndexLink>
        </li>
        {this.getPages(location.pathname)}
      </Navbar>
    )
  }
}
