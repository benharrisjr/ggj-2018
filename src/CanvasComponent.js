import React, { Component } from 'react';
import Stage from './shapes/stage';

export default class CanvasComponent extends Component {
    state = {
        stage: new Stage(800,600),
    }
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const context = this.refs.canvas.getContext('2d');
        debugger;
        this.state.stage.lines.map((currentLine)=> {
            context.beginPath();
            context.moveTo(currentLine.start.x, currentLine.start.y);
            context.lineTo(currentLine.end.x, currentLine.end.y);
            context.lineWidth = 10;
            context.strokeStyle = currentLine.color;
            context.stroke();
            }
        );
        
    }
    render() {
        return (
            <canvas ref="canvas" width={this.state.stage.width} height={this.state.stage.height} style={{backgroundColor:"#000"}}/>
        );
    }
}