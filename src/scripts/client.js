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

$(() => {
  $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
    ready: function() { alert('Ready'); }, // Callback for Modal open
    complete: function() { alert('Closed'); } // Callback for Modal close
  })
})
