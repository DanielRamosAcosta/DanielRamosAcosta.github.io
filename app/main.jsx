import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from 'react-router'
import {useTransitions, withTransition} from 'react-router-transitions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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

import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(hashHistory, store)

require('bootstrap-loader');

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store} >
    <Router
      history={history}
      render={applyRouterMiddleware(useTransitions({
        TransitionGroup: ReactCSSTransitionGroup,
        defaultTransition: {
          transitionName: 'example',
          transitionEnterTimeout: 500,
          transitionLeaveTimeout: 300
        }
      }))}
    >
      <Route path='/' component={withTransition(Layout)}>
        <IndexRoute component={Home} />
        <Route path='experience' name='experience' component={Experience} />
        <Route path='projects' name='projects' component={Projects} />
        <Route path='skills' name='skills' component={Skills} />
        <Route path='studies' name='studies' component={Studies} />
      </Route>
    </Router>
  </Provider>,
app)

/*

render={applyRouterMiddleware(useTransitions({
  TransitionGroup: ReactCSSTransitionGroup,
  defaultTransition: {
    transitionName: 'example',
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 300
  }
}))}

withTransition(Layout)
*/
