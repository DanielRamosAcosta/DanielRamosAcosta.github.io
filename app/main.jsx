import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from "react-router"

import Layout from './components/Layout'
import Home from './components/Home'

import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Studies from './components/Studies'

const app = document.getElementById('app')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="experience" name="experience" component={Experience}></Route>
      <Route path="projects" name="projects" component={Projects}></Route>
      <Route path="skills" name="skills" component={Skills}></Route>
      <Route path="studies" name="studies" component={Studies}></Route>
    </Route>
  </Router>,
app);
