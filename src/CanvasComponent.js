import React, { Component } from 'react';
import Stage from './shapes/stage';

export default class CanvasComponent extends Component {
    state = {
        lines: [
            {xStart: 100, yStart: 150, xEnd: 450, yEnd: 50, color: "#ff0000"},
        ]
    }
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        console.log(Stage);
        const context = this.refs.canvas.getContext('2d');
        
        context.beginPath();
        context.moveTo(100, 150);
        context.lineTo(450, 50);
        context.lineWidth = 10;
        context.strokeStyle = '#ff0000';
        context.stroke();
    }
    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}