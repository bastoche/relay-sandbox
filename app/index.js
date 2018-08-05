// @flow

import React from "react";
import ReactDOM from "react-dom";

import ViewerTodoList from "./ViewerTodoList";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(<ViewerTodoList />, rootElement);
}
