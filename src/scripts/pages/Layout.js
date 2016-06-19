import React from 'react'

import Nav from '../components/layout/Nav.js'
import Footer from '../components/layout/Footer.js'
import EasyTransition from 'react-easy-transition'

import es from '../../lang/es.json'
import en from '../../lang/en.json'

export default class Layout extends React.Component {
  render () {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        <div class="container main">
          <EasyTransition
              path={location.pathname}
              initialStyle={{opacity: 0}}
              transition="opacity 0.2s ease-in"
              finalStyle={{opacity: 1}}
          >
            {this.props.children}
          </EasyTransition>
        </div>
        <Footer />
      </div>
    )
  }
}
