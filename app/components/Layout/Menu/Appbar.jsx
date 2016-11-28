import React from 'react'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import styles from './Appbar.sass'

export default class Appbar extends React.Component {
  renderLeftIcon () {
    return (
      <IconButton onClick={this.props.onToggleSidebar}>
        <NavigationMenu />
      </IconButton>
    )
  }

  render () {
    return (
      <AppBar
        title='Daniel Ramos'
        iconElementLeft={this.renderLeftIcon()}
        class={styles.Appbar}
      />
    )
  }
}
