// Import necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client";
import './custom.scss';
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the main App component inside the React StrictMode wrapper
// React.StrictMode is a wrapper component to check for potential problems in the application during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 