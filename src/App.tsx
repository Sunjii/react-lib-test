import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/quill";
import PostView from "./components/PostView";

function App() {
  return (
    <div>
      <Board />
      <PostView />
    </div>
  );
}

export default App;
