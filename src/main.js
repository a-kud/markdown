import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

const container = document.querySelector(".container");

ReactDom.render(<App />, container);

if (module.hot) {
    module.hot.accept();
}
