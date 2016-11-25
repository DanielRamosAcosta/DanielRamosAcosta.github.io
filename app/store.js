import { applyMiddleware, createStore } from 'redux'
import { hashHistory } from 'react-router'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { routerMiddleware } from 'react-router-redux'

import reducer from './reducers'

let middleware = [
  promise(),
  thunk,
  routerMiddleware(hashHistory)
]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger())
}

export default createStore(reducer, applyMiddleware(...middleware))
