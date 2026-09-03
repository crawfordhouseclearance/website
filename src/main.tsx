import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root")!
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if (rootElement.dataset.prerenderedPath === window.location.pathname) {
  hydrateRoot(rootElement, app)
} else {
  rootElement.replaceChildren()
  createRoot(rootElement).render(app)
}
