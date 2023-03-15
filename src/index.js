// Import necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client"; //Fix: changed module import path
import "./custom.css";
import App from "./App";
import "bootstrap/scss/bootstrap.scss";

// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component inside the React StrictMode wrapper
// React.StrictMode is a wrapper component to check for potential problems in the application during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
