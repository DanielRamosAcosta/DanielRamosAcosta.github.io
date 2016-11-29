import React from 'react'

import Menu from './Layout/Menu'
import Footer from './Layout/Footer'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { connect } from 'react-redux'

import { Container } from 'reactstrap'

import styles from './Layout.sass'

import palette from 'styles/_variables'

export default class Layout extends React.Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({ palette })}>
        <div class={styles.Layout}>
          <Menu location={this.props.location} />
          <div class={styles.Main}>
            <Container>{this.props.children}</Container>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}
