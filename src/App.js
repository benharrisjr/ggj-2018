import React, { Component } from 'react';
import logo from './title.png';
import './App.css';
import CanvasComponent from './CanvasComponent';
import Toolbar from './tools/toolbar';
import Stage from './shapes/stage';

class App extends Component {
  state = {
    stage: new Stage(800, 600),
    selectedToolIndex: 0,
  }
  removeTools = () => {
    this.state.stage.removeAll();
    this.setState({ key: Math.random() });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CanvasComponent selectedTool={this.state.selectedToolIndex} stage={this.state.stage} />
        <Toolbar key={this.state.key} selectedTool={this.state.selectedToolIndex} changeSelectedTool={this.changeSelectedToolIndex} removeTools={this.removeTools} />
      </div>
    );
  }
}

export default App;
