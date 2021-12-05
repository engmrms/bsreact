import "./index.css";
import "bootstrap/scss/bootstrap.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import { ToastContextProvider } from "./context";
import reducer from "./store/reducers";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <ToastContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ToastContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
