import React from 'react'

import {Menu, MenuItem} from 'material-ui/Menu'

import styles from './Map.css'

export default class Map extends React.Component {
  render () {
    return (
      <Menu class={styles} value={0} desktop>
        <MenuItem value={0} primaryText='Inicio' focusState='focused' />
        <MenuItem value={1} primaryText='Experiencia' />
        <MenuItem value={2} primaryText='Proyectos' />
        <MenuItem value={3} primaryText='Habilidades' />
        <MenuItem value={4} primaryText='Estudios' />
      </Menu>
    )
  }
}
