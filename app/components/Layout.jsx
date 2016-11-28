import React from 'react'

import Menu from './Layout/Menu'
import Footer from './Layout/Footer'
import EasyTransition from 'react-easy-transition'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { connect } from 'react-redux'

import styles from './Layout.sass'

import palette from 'styles/_variables'

@connect(store => {
  return {
    loggedIn: store
  }
})
export default class Layout extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ palette })}>
        <div class={styles.Layout}>
          <Menu location={this.props.location} />
          <div class={styles.Main}>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
