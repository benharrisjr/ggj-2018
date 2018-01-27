import React, { Component } from 'react';
import logo from './title.png';
import './App.css';
import CanvasComponent from './CanvasComponent';
import Toolbar from './tools/toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CanvasComponent />
        <Toolbar />
      </div>
    );
  }
}

export default App;
