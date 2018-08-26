import * as React from 'react'
import { hydrate, render } from 'react-dom'
import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'

registerServiceWorker()

const rootElement = document.getElementById('root') as HTMLElement

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}
