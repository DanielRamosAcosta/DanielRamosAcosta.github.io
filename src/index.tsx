import React from 'react'
import { render, hydrate } from 'react-dom'
import './index.css'
import App from './containers/App/App'
import { fixVerticalSpaceForBrowser } from './utils/fix-spacer-for-browser'
import * as serviceWorker from './serviceWorker'

const isLocalhost =
  window && window.location && window.location.href.match('localhost')
const isInsecure =
  window && window.location && window.location.protocol === 'http:'

if (!isLocalhost && isInsecure) {
  window.location.href = 'https://www.danielramos.me'
}

const rootElement = document.getElementById('root') as HTMLDivElement

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

fixVerticalSpaceForBrowser()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
