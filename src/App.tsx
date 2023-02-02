import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { LoggedOutRouter } from "./router/logged-out-router";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <LoggedOutRouter />
    </div>
  );
}

export default App;
