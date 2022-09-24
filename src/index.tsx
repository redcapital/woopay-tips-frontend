import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

function onLoad() {
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
}

if (document.readyState !== "loading") {
  onLoad();
} else {
  document.addEventListener("DOMContentLoaded", onLoad);
}
