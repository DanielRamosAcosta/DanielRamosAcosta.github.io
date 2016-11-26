import React from 'react'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'

// import 'styles/Layout/Menu/Sidebar'

export default class SideBar extends React.Component {
  getItems (items) {
    return items.map((item, i) => {
      if (this.props.currentPage === item) {
        var focusState = 'focused'
      }
      return (
        <MenuItem
          key={i}
          value={item}
          focusState={focusState}
        >
          {this.props.lang[item]}
        </MenuItem>
      )
    })
  }

  onPageChange (newPage) {
    this.setState({
      currentPage: newPage
    })
  }

  getSidebarElements () {
    return (
      <Menu
        onChange={(_, e) => this.props.onPageChange(e)}
        value={this.props.currentPage}
      >
        {this.getItems(this.props.pages)}
      </Menu>
    )
  }

  onToggle (e) {
    this.setState({open: !this.props.sideBarIsOpen})
  }

  render () {
    return (
      <Drawer
        open={this.props.sideBarIsOpen}
        docked={false}
        onRequestChange={this.props.onToggleSidebar}
        class='Sidebar'
      >
        {this.getSidebarElements()}
      </Drawer>
    )
  }
}
