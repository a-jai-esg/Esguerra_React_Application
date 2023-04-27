import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./displayNavbar";
import Login from "./displayLogin.jsx";
import Registration from "./displayRegistration.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar/>    
    <Login/>
  </React.StrictMode>
);
