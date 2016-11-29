import React from 'react'

import { Router, Route, IndexRoute } from 'react-router'

import Layout from './components/Layout'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Studies from './components/Studies'

export default class Routes extends React.Component {
  constructor () {
    super()
    this.routes = {
      Experience,
      Projects,
      Skills,
      Studies
    }
  }

  renderRoutes () {
    return Object.keys(this.routes).map(route =>
      <Route
        path={route.toLowerCase()}
        name={route.toLowerCase()}
        key={route}
        component={this.routes[route]}
      />
    )
  }

  render () {
    return (
      <Router
        history={this.props.history}
      >
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
          {this.renderRoutes()}
        </Route>
      </Router>
    )
  }
}
