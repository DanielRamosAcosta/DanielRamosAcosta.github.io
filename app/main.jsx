import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { Provider } from 'react-redux'

import Layout from './components/Layout'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Studies from './components/Studies'

import store from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import 'bootstrap-loader'

import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(hashHistory, store)

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='experience' name='experience' component={Experience} />
        <Route path='projects' name='projects' component={Projects} />
        <Route path='skills' name='skills' component={Skills} />
        <Route path='studies' name='studies' component={Studies} />
      </Route>
    </Router>
  </Provider>,
app)
