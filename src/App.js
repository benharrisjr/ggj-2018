import React, { Component } from 'react';
import logo from './title.png';
import './App.css';
import CanvasComponent from './CanvasComponent';
import Toolbar from './tools/toolbar';

class App extends Component {
  state = {
    selectedToolIndex: 0,
  }
  changeSelectedToolIndex = (toolIndex) => {
    this.setState({selectedToolIndex: toolIndex})
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CanvasComponent />
        <Toolbar selectedTool={this.state.selectedToolIndex} changeSelectedTool={this.changeSelectedToolIndex}/>
      </div>
    );
  }
}

export default App;
