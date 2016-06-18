import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './pages/Layout'

import '../styles/Materialize'

const app = document.getElementById('app')
ReactDOM.render(<Layout />, app)
console.log('Hola, soy client')
