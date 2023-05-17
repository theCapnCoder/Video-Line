import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./sass/main.scss";
import App from "./App";
import { store } from "./redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);