import React from "react";
import ReactDOM from "react-dom";

import ColorPicker from "./ColorPicker";

import { UserProvider } from "./UserContext";

import "./styles.css";

function App() {
  return (
    <UserProvider>
      <div className="App">
        Foolin' around
        <ColorPicker />
      </div>
    </UserProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
