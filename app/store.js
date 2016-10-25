import { applyMiddleware, createStore } from 'redux'
import { hashHistory } from 'react-router'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { routerMiddleware } from 'react-router-redux'

import reducer from './reducers'

const middleware = applyMiddleware(promise(), thunk, routerMiddleware(hashHistory), logger())

export default createStore(reducer, middleware)
