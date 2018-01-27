import React, { Component } from 'react';
import Stage from './shapes/stage';

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
    updateCanvas() {

        // debugger;
        // this.stage.tools[0].line
        // this.drawLine()
        this.state.stage.lines.map((currentLine) => this.drawLine(currentLine));
        this.state.stage.tools.forEach((tool) => {
            this.drawLine(tool.line);
        });

    }
    render() {
        return (
            <canvas ref="canvas" width={this.state.stage.width} height={this.state.stage.height} style={{ backgroundColor: "#000" }} />
        );
    }
}