import dispatcher from "../dispatcher";

export function setLang (locale) {
  dispatcher.dispatch({
    type: "SET_LANG",
    locale,
  });
}
