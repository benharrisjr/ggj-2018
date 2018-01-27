import React, { Component } from 'react';
import Stage from './shapes/stage';
import Vector from './shapes/vector';
import Line from './shapes/line';
import Mirror from './shapes/mirror'

export default class CanvasComponent extends Component {
    state = {
        stage: new Stage(800, 600),
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
    // onMouseMove(e) {
    //     if (this.state.isMouseDown) {
    //         const context = this.refs.canvas.getContext('2d');
    //         context.beginPath();
    //         context.moveTo(this.start.x, this.start.y);
    //         context.lineTo(e.clientX, e.clienty);
    //         context.lineWidth = 3;
    //         context.strokeStyle = "#FFFFFF";
    //         context.stroke();
    //     };
    // }
    onMouseDown(e) {
        const context = this.refs.canvas
        const rect = context.getBoundingClientRect();
        this.startX = e.clientX - rect.x
        this.startY = e.clientY - rect.y;
        this.mouseDown = true;
    }
    onMouseUp(e) {
        this.mouseDown = false;
        const context = this.refs.canvas
        const rect = context.getBoundingClientRect();
        this.endX = e.clientX - rect.x;
        this.endY = e.clientY - rect.y;
        this.placeTool();
    }
    placeTool = (e) => {
        const context = this.refs.canvas
        const rect = context.getBoundingClientRect();
        this.state.stage.add(new Mirror(new Line(new Vector(this.startX, this.startY), new Vector(this.endX, this.endY), '#0088FF', 10)));
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
                <h1>Mouse coordinates: {x} {y}</h1>
                <canvas key={this.state.key} onClick={this.placeTool} onMouseDown={(e) => this.onMouseDown(e)} onMouseUp={(e) => this.onMouseUp(e)} ref="canvas" width={this.state.stage.width} height={this.state.stage.height} style={{ backgroundColor: "#000" }} />
            </div>
        );
    }
}