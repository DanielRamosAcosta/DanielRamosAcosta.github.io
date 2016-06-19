import React from 'react'

import { Footer } from 'react-materialize'
import LangStore from "../../stores/LangStore";

import '../../../styles/Footer'

var Icon = require('react-fontawesome');

export default class Foo extends React.Component {
  constructor () {
    super()
    this.getLang = this.getLang.bind(this)
    this.state = {
      lang: LangStore.getLang()
    };
  }

  getLang () {
    this.setState({
      lang: LangStore.getLang()
    })
  }

  componentWillMount () {
    LangStore.on("change", this.getLang)
  }

  componentWillUnmount () {
    LangStore.removeListener("change", this.getLang)
  }

  render () {
    return (
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h5 class="white-text">{this.state.lang.footer.connect}</h5>
              <ul class="contact-list">
                <li><a class="btn icon facebook"><Icon name='facebook'/></a></li>
                <li><a class="btn icon github"><Icon name='github'/></a></li>
                <li><a class="btn icon linkedin"><Icon name='linkedin'/></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            <span>© 2014 Copyright Text</span>
          </div>
        </div>
      </footer>
    )
  }
}
