import { applyMiddleware, createStore } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import kodi from './middleware/kodi'

import reducer from './reducers'

const middleware = applyMiddleware(kodi, promise(), thunk, logger())

export default createStore(reducer, middleware)
