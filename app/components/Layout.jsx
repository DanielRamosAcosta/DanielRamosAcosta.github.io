import React from 'react'

import Menu from './Layout/Menu'
import Footer from './Layout/Footer'
import EasyTransition from 'react-easy-transition'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { connect } from 'react-redux'


// import 'styles/Layout'

import styles from './layout.sass'

import palette from 'styles/_variables'

@connect(store => {
  return {
    loggedIn: store
  }
})
export default class Layout extends React.Component {
  render () {
    const { location } = this.props
    console.log(this.props)
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ palette })}>
        <div class={styles.Layout}>
          <Menu location={location} />
          <div>
            <EasyTransition
              path={location.pathname}
              initialStyle={{opacity: 0}}
              transition='opacity 0.3s ease-in'
              finalStyle={{opacity: 1}}
            >
              {this.props.children}
            </EasyTransition>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
