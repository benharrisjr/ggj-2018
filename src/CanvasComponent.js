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
    placeTool = (e) => {
        console.log(this.state.stage);
        const context = this.refs.canvas
        const rect = context.getBoundingClientRect();
        console.log(rect);
        this.state.stage.add(new Mirror(new Line(new Vector(e.clientX - rect.x, e.clientY - rect.y), new Vector(this.state.stage.width, this.state.stage.height), '#0088FF', 10)));
        this.setState({ key: Math.random() });
    }
    updateCanvas = () => {
        this.state.stage.lines.forEach((currentLine) => this.drawLine(currentLine));
        this.state.stage.tools.forEach((currentTool) => this.drawLine(currentTool.line));
    }
    componentDidUpdate = () => {
        this.updateCanvas();
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