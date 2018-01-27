import React, { Component } from 'react';
import Stage from './shapes/stage';
import Vector from './shapes/vector';
import Line from './shapes/line';
import Mirror from './shapes/mirror'

export default class CanvasComponent extends Component {
    state = {
        stage: new Stage(800,600),
        x: 0,
        y: 0,
    }
    onMouseMove = (e) => {
        this.setState({ x: e.screenX, y: e.screenY });
    }
    componentDidMount() {
        this.updateCanvas();
    }
    drawLine = (line) => {
        const context = this.refs.canvas.getContext('2d');
        context.beginPath();
        context.moveTo(line.start.x, line.start.y);
        context.lineTo(line.end.x, line.end.y);
        context.lineWidth = line.width;
        context.strokeStyle = line.color;
        context.stroke();
    }
    placeTool = () => {
        console.log("hey");
        console.log(this.state.stage);
        this.state.stage.add(new Mirror(new Line(new Vector(this.state.x, this.state.y), new Vector(this.width, this.height), '#0088FF', 10)));
        this.setState({ key: Math.random() });
    }
    updateCanvas() {
        
        // debugger;
        // this.stage.tools[0].line
        // this.drawLine()
        this.state.stage.lines.map((currentLine) => this.drawLine(currentLine));
        this.drawLine(this.state.stage.tools[0].line);
        
    }
    render() {
        const { x, y } = this.state;
        return (
            <div>
            <h1>Mouse coordinates: { x } { y }</h1>
            <canvas key={this.state.key} onClick={this.placeTool} onMouseMove={this.onMouseMove} ref="canvas" width={this.state.stage.width} height={this.state.stage.height} style={{backgroundColor:"#000"}}/>
            </div>
        );
    }
}