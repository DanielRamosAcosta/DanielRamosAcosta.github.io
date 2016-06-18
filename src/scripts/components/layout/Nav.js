import React from 'react'

import {Navbar, NavItem} from 'react-materialize'

import '../../../styles/Nav'

export default class Nav extends React.Component {
  render () {
    return (
      <Navbar brand="Daniel Ramos" right>
        <NavItem href="get-started.html">Sobre mí</NavItem>
        <NavItem href="components.html">Carrera</NavItem>
        <NavItem href="components.html">Prácticas</NavItem>
      </Navbar>
    )
  }
}
