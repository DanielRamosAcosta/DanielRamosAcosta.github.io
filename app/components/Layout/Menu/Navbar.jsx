import React from 'react'

import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

// import 'styles/Layout/Menu/Navbar'

export default class Navbar extends React.Component {
  getTabs (pages) {
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
          iconElementRight={this.getTabsElement()}
        />
      </div>
    )
  }
}
