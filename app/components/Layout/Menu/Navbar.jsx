import React from 'react'

import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import HomeIcon from 'material-ui/svg-icons/action/home'
import HeartIcon from 'material-ui/svg-icons/action/favorite-border'
import MotorcycleIcon from 'material-ui/svg-icons/action/motorcycle'
import WorkIcon from 'material-ui/svg-icons/action/work'
import HelpIcon from 'material-ui/svg-icons/action/help'
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app'

import '../../../styles/Layout/Menu/Navbar'

export default class Navbar extends React.Component {
  getTabs (pages) {
    console.log(pages)
    console.log(this.props.currentPage)
    return pages.map((page, i) => {
      return <Tab id={page} label={this.props.lang[page]} value={page} class='Tab' key={i} />
    })
  }

  iconElementLeft () {
    return (
      <IconButton onClick={this.props.onToggleSidebar} class='ButtonSidebar'>
        <NavigationMenu />
      </IconButton>
    )
  }

  getTabsElement () {
    return (
      <Tabs
        class='Tabs'
        value={this.props.currentPage}
        onChange={this.props.onPageChange}
      >
        {this.getTabs(this.props.pages)}
      </Tabs>
    )
  }

  render () {
    return (
      <div class='Navbar'>
        <AppBar
          title='Daniel Ramos'
          iconElementLeft={this.iconElementLeft()}
          iconElementRight={this.getTabsElement(location.pathname)}
        />
      </div>
    )
  }
}
