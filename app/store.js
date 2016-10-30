import { applyMiddleware, createStore } from 'redux'
import { hashHistory } from 'react-router'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { routerMiddleware } from 'react-router-redux'

import reducer from './reducers'

let middleware

if (process.env.NODE_ENV === 'development') {
  middleware = applyMiddleware(promise(), routerMiddleware(hashHistory), logger())
} else {
  middleware = applyMiddleware(promise(), routerMiddleware(hashHistory))
}

export default createStore(reducer, middleware)
