import React, { Component } from 'react';
import Vector from './shapes/vector';
import Line from './shapes/line';
import Mirror from './shapes/mirror'

export default class CanvasComponent extends Component {
    state = {
        points: {
            array: [],
            size: 0,
        },
        mirrors: [],
        isDrawing: false,
        isMoving: false,
    }
    componentDidMount() {
        this.context = this.refs.canvas.getContext('2d');
        this.rect = this.refs.canvas.getBoundingClientRect();
        this.updateCanvas();
    }

    drawPrism = () => {
        const context = this.refs.canvas.getContext('2d');
        context.beginPath();
        context.moveTo(75, 50);
        context.lineTo(100, 75);
        context.lineTo(100, 25);
        context.fillStyle = '#ff0000';
        context.fill();
        // context.beginPath();
        // context.moveTo(line.start.x, line.start.y);
        // context.lineTo(line.end.x, line.end.y);
        // context.lineWidth = line.width;
        // context.strokeStyle = line.color;
        // context.stroke();
    }

    drawCollector = (collector) => {
        const context = this.refs.canvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = '#00FF00';
        context.arc(collector.circle.center.x, collector.circle.center.y, collector.circle.radius,
            0, 2 * Math.PI);
        context.stroke();
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
    drawPath = (points) => {
        const context = this.refs.canvas.getContext('2d');
        context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height)
        this.updateCanvas()
        points.array.forEach((value, index) => {
            if (index % 2 === 0) {
                context.beginPath()
                context.lineCap = 'round'
                context.moveTo(value.x, value.y)
            }
            else {
                context.lineTo(value.x, value.y)
                context.lineWidth = value.w
                context.strokeStyle = '#ffffff'
                context.stroke()
            }
        });

    }
    onMouseMove(e) {
        if (this.state.isDrawing) {
            this.isMoving = true
            this.state.points.array[this.state.points.size] = {
                x: e.clientX - this.rect.left,
                y: e.clientY - this.rect.top,
                w: 3,
            };
            this.drawPath(this.state.points);
        };
    }
    onMouseDown(e) {
        this.state.isDrawing = true;
        this.state.points.array.push({
            x: e.clientX - this.rect.left,
            y: e.clientY - this.rect.top
        });
        this.state.points['size'] = this.state.points['array'].length
        this.state.isDrawing = true

        this.startX = e.clientX - this.rect.x
        this.startY = e.clientY - this.rect.y;
    }
    onMouseUp(e) {
        this.state.isDrawing = false;
        if (this.state.isMoving) {
            this.state.isMoving = false;
        }
        else {
            this.state.points['array'].pop()
        }
        this.state.points.array.pop();
        this.endX = e.clientX - this.rect.x;
        this.endY = e.clientY - this.rect.y;
        this.placeTool();
    }
    placeTool = (e) => {
        this.props.stage.add(new Mirror(new Line(new Vector(this.startX, this.startY), new Vector(this.endX, this.endY), '#0088FF', 3)));
        this.setState({ key: Math.random() });
    }
    updateCanvas = () => {
        this.props.stage.lines.forEach((currentLine) => this.drawLine(currentLine));
        this.props.stage.tools.forEach((currentTool) => this.drawLine(currentTool.line));
        this.props.stage.collectors.forEach((collector) => this.drawCollector(collector));
        this.drawPrism();
    }
    componentDidUpdate = () => {
        this.updateCanvas();
    }
    render() {
        return (
            <div>
                <canvas
                    key={this.state.key}
                    onClick={this.placeTool}
                    onMouseMove={(e) => this.onMouseMove(e)}
                    onMouseDown={(e) => this.onMouseDown(e)}
                    onMouseUp={(e) => this.onMouseUp(e)}
                    ref="canvas"
                    width={this.props.stage.width}
                    height={this.props.stage.height}
                    style={{ backgroundColor: "#000" }}
                />
            </div>
        );
    }
}