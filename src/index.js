import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";

// import configureStore from "./configureStore";
// const store = configureStore();

import rootReducer from "./reducers";
import { createStore } from "redux";

import configureStore from "./store/configureStore";
const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
