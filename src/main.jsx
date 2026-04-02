import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./globals.css";   

ReactDOM.createRoot(document.getElementById("root")).render(
   <div className="WholeBackgroundColor">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </div>
);
