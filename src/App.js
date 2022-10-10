import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UsersStates from "./Users2";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
    <UsersStates />
  </React.StrictMode>
    </div>
  );
}

export default App;
