import React from 'react'

import Nav from '../components/layout/Nav.js'
import EasyTransition from 'react-easy-transition'

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
              transition="opacity 0.1s ease-in"
              finalStyle={{opacity: 1}}
          >
            {this.props.children}
          </EasyTransition>
        </div>
      </div>
    )
  }
}
