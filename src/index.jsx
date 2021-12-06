import "./index.css";
import "bootstrap/scss/bootstrap.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { ToastContextProvider } from "./context";
import reducer from "./store/reducers";

ReactDOM.render(
  <React.StrictMode>
    <ToastContextProvider>
      <Provider store={reducer}>
        <App />
      </Provider>
    </ToastContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
