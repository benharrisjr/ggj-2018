import React, { Component } from 'react';
import logo from './title.png';
import './App.css';
import CanvasComponent from './CanvasComponent';
import Stage from './shapes/stage';
import Levels from './levels/levels';

class App extends Component {
  constructor(props) {
    super(props);
    let stage = new Stage(800, 600, Levels['Mirror Maze']);
    //stage.initialize(Levels['Mirror Maze']);
    this.state = {
      stage: stage,
      selectedToolIndex: 0,
      levelCompleted: false,
    }
  }

  levelComplete = () => {
    this.setState({ levelCompleted: true });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.levelCompleted && <h1>YOU WIN!</h1>}
        <CanvasComponent selectedTool={this.state.selectedToolIndex} stage={this.state.stage} levelComplete={this.levelComplete} />
      </div>
    );
  }
}

export default App;
