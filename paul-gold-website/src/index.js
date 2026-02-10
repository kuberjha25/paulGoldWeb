import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
  // Optionally disable more, like console.debug
}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
