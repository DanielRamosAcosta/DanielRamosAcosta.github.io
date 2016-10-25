import React from 'react'

import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import EasyTransition from 'react-easy-transition'

import style from '../styles/Layout'

export default class Layout extends React.Component {
  render () {
    const { location } = this.props;

    console.log(style.Layout)

    return (
      <div>
        <Navbar location={location} />
        <div class="container main" style={style.Layout}>
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
