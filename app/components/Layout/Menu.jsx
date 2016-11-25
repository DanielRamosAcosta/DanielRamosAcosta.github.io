import React from 'react'

import NavBar from './Menu/Navbar'
import SideBar from './Menu/Sidebar'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

@connect(store => {
  return {
    currentPath: store.routing
  }
  return {}
})
export default class Menu extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this.lang = {
      '/': 'Inicio',
      '/experience': 'Experiencia',
      '/projects': 'Proyectos',
      '/skills': 'Habilidades',
      '/studies': 'Estudios'
    }

    this.pages = Object.keys(this.lang)

    this.state = {
      sideBarIsOpen: false
    }
  }

  onToggleSidebar () {
    this.setState({
      sideBarIsOpen: !this.state.sideBarIsOpen
    })
  }

  onPageChange (newPage) {
    this.props.dispatch(push(newPage))
  }

  render () {
    const path = this.props.location.pathname

    return (
      <div>
        <NavBar
          pages={this.pages}
          lang={this.lang}
          currentPage={path}
          onPageChange={::this.onPageChange}
          onToggleSidebar={::this.onToggleSidebar}
        />
        <SideBar
          pages={this.pages}
          lang={this.lang}
          currentPage={path}
          onPageChange={::this.onPageChange}
          onToggleSidebar={::this.onToggleSidebar}
          sideBarIsOpen={this.state.sideBarIsOpen}
        />
      </div>
    )
  }
}
