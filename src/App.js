import React, { Component } from 'react';
import logo from './title.png';
import './App.css';
import CanvasComponent from './CanvasComponent';
import Stage from './shapes/stage';
import Levels, { LevelMap } from './levels/levels';

class App extends Component {
  state = {
    stage: new Stage(800, 600, Levels[LevelMap[0]]),
    levelMap: LevelMap,
    levelMapIndex: 0,
  }
  levelComplete = () => {
    this.setState({ levelMapIndex: ((this.state.levelMapIndex + 1) <= this.state.levelMap.length) ? this.state.levelMapIndex++ : this.state.levelMap.length});
    // setTimeout(() => this.state.stage.initialize(Levels[LevelMap[this.state.levelMapIndex]]), 3000);
    this.state.stage.initialize(Levels[LevelMap[this.state.levelMapIndex]]);
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CanvasComponent stage={this.state.stage} levelComplete={() => this.levelComplete()} />
        <footer style={{marginTop: "50px", fontSize: "10px"}}>
          {/* •••••••••••• Music By •••••••••••••
          'Song Title (s)''
          Jay Man - OurMusicBox
          http://www.youtube.com/c/ourmusicbox */}
          {/* <a href="https://soundcloud.com/dhilowitz/sets/royalty-free-film-music">Music from David Hilowitz</a> */}
        </footer>
      </div>
    );
  }
}

export default App;
