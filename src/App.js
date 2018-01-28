import React, { Component } from 'react';
import logo from './title.png';
import './App.css';
import CanvasComponent from './CanvasComponent';
import Stage from './shapes/stage';
import Levels, { LevelMap } from './levels/levels';

class App extends Component {
  constructor(props) {
    super(props);
    let stage = new Stage(800, 600, Levels[LevelMap[0]]);
    //stage.initialize(Levels['Mirror Maze']);
    this.state = {
      stage: stage,
      selectedToolIndex: 0,
      levelCompleted: false,
      levelMapIndex: 0,
    }
  }

  levelComplete = () => {
    this.setState({ levelMapIndex: ((this.state.levelMapIndex + 1) <= this.state.levelMapIndex.length) ? this.state.levelMapIndex++ : this.state.levelMapIndex.length});
    this.state.stage.initialize(Levels[LevelMap[this.state.levelMapIndex]]);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.levelCompleted && <h1>YOU WIN!</h1>}
        <CanvasComponent selectedTool={this.state.selectedToolIndex} stage={this.state.stage} levelComplete={this.levelComplete} />
        <footer style={{marginTop: "50px", fontSize: "10px"}}>
          <a href="https://soundcloud.com/dhilowitz/sets/royalty-free-film-music">Music from David Hilowitz</a>
        </footer>
      </div>
    );
  }
}

export default App;
