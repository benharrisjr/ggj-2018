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
        let dx = ray.end.x - ray.start.x;
        let dy = ray.end.y - ray.start.y;
        let dr = dx * dx + dy * dy;

        let D = ray.start.x * ray.end.y - ray.end.x * ray.start.y;
        D = D * D;

        let test = this.radius * this.radius * dr * dr - D;
        return test >= 0;
    }

    intersectsWithCircle(circle) {
        let dCenter = circle.center.compareDistance(this.center);
        let dRadius = this.radius * this.radius + circle.radius * circle.radius;

        return dCenter <= dRadius;
    }
}