import "../styles/App.css";
import Board from "./Board";
import React, { Component } from "react";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="Header">React Trello Clone</div>
        <Board />
      </div>
    );
  }
}

export default App;