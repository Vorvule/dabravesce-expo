import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.addEventListener("load", async () => {
  if (navigator.serviceWorker) {
    try {
      const regInfo = await navigator.serviceWorker.register(
        "./service-worker.js"
      );
      console.log("Service Worker register success", regInfo);
    } catch (e) {
      console.log("Service Worker register fail");
    }
  }
});
