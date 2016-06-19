import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import store from "lockr"

class LangStore extends EventEmitter {
  constructor() {
    super()

    if(store.get('lang')) {
      this.locale = store.get('lang')
    } else {
      let lang = window.navigator.userLanguage || window.navigator.language
      if(lang !== "es") {
        this.locale = "en"
      } else {
        this.locale = "es"
      }
    }

    this.setLang()
  }

  getLang() {
    return this.lang;
  }

  setLang() {
    //TODO: Set lang in localstorage
    if(this.locale !== "es") {
      this.lang = require('../../lang/en.json')
    } else {
      this.lang = require('../../lang/es.json')
    }
  }

  handleActions(action) {
    switch(action.type) {
      case "SET_LANG": {
        this.locale = action.locale
        store.set('lang', this.locale)
        this.setLang()
        this.emit("change")
        break
      }
    }
  }
}

const langStore = new LangStore;
dispatcher.register(langStore.handleActions.bind(langStore));

export default langStore;
