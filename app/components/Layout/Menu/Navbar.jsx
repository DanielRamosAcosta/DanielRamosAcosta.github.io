import React from 'react'

import {Tabs, Tab} from 'material-ui/Tabs'

import styles from './Navbar.sass'

export default class Navbar extends React.Component {
  renderTabs (pages) {
    return pages.map((page, i) =>
      <Tab id={page} label={this.props.lang[page]} value={page} key={i} />
    )
  }

  render () {
    return (
      <Tabs
        value={this.props.currentPage}
        onChange={this.props.onPageChange}
        class={styles.Navbar}
      >
        {this.renderTabs(this.props.pages)}
      </Tabs>
    )
  }
}
