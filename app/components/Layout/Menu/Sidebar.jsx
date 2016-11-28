import React from 'react'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Menu from 'material-ui/Menu'

import styles from './Sidebar.sass'

export default class SideBar extends React.Component {
  renderMenuItems (items) {
    return items.map((item, i) =>
      <MenuItem
        key={i}
        value={item}
        focusState={this.props.currentPage === item ? 'focused' : 'none'}
        class={styles.MenuItem}
      >
        {this.props.lang[item]}
      </MenuItem>
    )
  }

  onPageChange (newPage) {
    this.setState({
      currentPage: newPage
    })
  }

  renderSidebar () {
    return (
      <Menu
        onChange={(_, e) => this.props.onPageChange(e)}
        value={this.props.currentPage}
        style={{width: 200}}
      >
        {this.renderMenuItems(this.props.pages)}
      </Menu>
    )
  }

  onToggle () {
    this.setState({open: !this.props.sideBarIsOpen})
  }

  render () {
    return (
      <Drawer
        docked={false}
        open={this.props.sideBarIsOpen}
        onRequestChange={this.props.onToggleSidebar}
      >
        {this.renderSidebar()}
      </Drawer>
    )
  }
}
