import React from 'react'

import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

export default class Navbar extends React.Component {
  getTabs (pages) {
    return pages.map((page, i) => {
      return <Tab id={page} label={this.props.lang[page]} value={page} key={i} />
    })
  }

  iconElementLeft () {
    return (
      <IconButton onClick={this.props.onToggleSidebar}>
        <NavigationMenu />
      </IconButton>
    )
  }

  render () {
    return (
      <div>
        {/*<AppBar
          title='Daniel Ramos'
          iconElementLeft={this.iconElementLeft()}
        />*/}
        <Tabs
          class='Tabs'
          value={this.props.currentPage}
          onChange={this.props.onPageChange}
        >
          {this.getTabs(this.props.pages)}
        </Tabs>
      </div>
    )
  }
}
