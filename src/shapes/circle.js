import Vector from "./vector";

export default class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    intersectsWith(shape) {
        let type = shape.constructor.name;

        if (this[`intersectsWith${type}`]) {
            return this[`intersectsWith${type}`](shape);
        }

        return false;
    }

    intersectsWithLine(line) {
        let directionVector = line.vector.normalized;

        // distanceClosestPointToCenter
        let t = directionVector.x * (this.center.x - line.start.x) + directionVector.y * (this.center.y - line.start.y);
        let pointClosestCenter = new Vector(t * directionVector.x + line.start.x, t * directionVector.y + line.start.y);

        let distanceToCenter = pointClosestCenter.distance(this.center);

        //Is it inside the circle?
        if (distanceToCenter < this.radius) {
            let dt = Math.sqrt(this.radius * this.radius - distanceToCenter * distanceToCenter);

            let p1 = new Vector((t - dt) * directionVector.x + line.start.x, (t - dt) * directionVector.y + line.start.y);
            let p2 = new Vector((t + dt) * directionVector.x + line.start.x, (t + dt) * directionVector.y + line.start.y);

            return p1.distance(line.start) < p2.distance(line.start) ? p1 : p2;
        } else if (distanceToCenter === this.radius) {
            return pointClosestCenter;
        } else {
            return false;
        }
    }

    intersectsWithCircle(circle) {
        let dCenter = circle.center.compareDistance(this.center);
        let dRadius = this.radius * this.radius + circle.radius * circle.radius;

        return dCenter <= dRadius;
    }
}