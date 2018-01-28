import Line from "./line";
import Vector from "./vector";

export default class Rectangle {
    constructor(center, width, height, rotation) {
        this.center = center;
        this.width = width;
        this.height = height;

        let offsetX = width / 2;
        let offsetY = width / 2;

        this.x = center.x - offsetX;
        this.y = center.y - offsetY;

        let topLeft = new Vector(center.x - offsetX, center.y - offsetY);
        let topRight = new Vector(center.x + offsetX, center.y - offsetY);
        let bottomLeft = new Vector(center.x - offsetX, center.y + offsetY);
        let bottomRight = new Vector(center.x + offsetX, center.y + offsetY);

        let color = '#FF0000';
        let lineWidth = 3;

        this.lines = [
            new Line(topLeft, topRight, color, lineWidth),
            new Line(topRight, bottomRight, color, lineWidth),
            new Line(bottomRight, bottomLeft, color, lineWidth),
            new Line(bottomLeft, topLeft, color, lineWidth)
        ];
    }

    intersectsWith(ray) {
        return this.lines.find((line) => {
            return line.intersectsWith(ray);
        }) !== undefined;
    }

    intersectionPoint(ray) {
        let points = this.lines.reduce((accumulator, current) => {
            if (current.intersectsWith(ray)) {
                accumulator.push(current.intersectionPoint(ray));
            }

            return accumulator;
        }, [])

        let point;
        let distance;
        points.reduce((accumulator, current) => {
            distance = ray.start.distance(current);
            if (distance < accumulator) {
                point = current;
                return distance;
            }

            return accumulator;
        }, Number.MAX_VALUE)

        return point;
    }
}