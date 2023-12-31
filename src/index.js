import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <meta
      name="viewport"
      content="width=device-width"
      initial-scale="1.00"
      maximum-scale="1.0"
    />
    <App />
  </React.StrictMode>
);
