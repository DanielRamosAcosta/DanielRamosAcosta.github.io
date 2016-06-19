import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Layout from './pages/Layout'
import Home from './pages/Home'

import Contact from './pages/Contact'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Studies from './pages/Studies'

import '../styles/Materialize'
import '../styles/common'

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="contact" name="contact" component={Contact}></Route>
      <Route path="experience" name="experience" component={Experience}></Route>
      <Route path="projects" name="projects" component={Projects}></Route>
      <Route path="skills" name="skills" component={Skills}></Route>
      <Route path="studies" name="studies" component={Studies}></Route>
    </Route>
  </Router>,
app);
