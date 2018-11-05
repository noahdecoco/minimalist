import React, { Component } from "react";
import Dashboard from "./views/Dashboard";
import "./custom.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
