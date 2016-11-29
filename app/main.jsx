import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import 'bootstrap-loader'

import Routes from './Routes'
import store from './store'

const history = syncHistoryWithStore(hashHistory, store)

injectTapEventPlugin()

const app = document.getElementById('app')

ReactDOM.render(
  <Provider store={store} >
    <Routes history={history}/>
  </Provider>,
app)
