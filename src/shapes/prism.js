import Vector from './vector';
import Line from './line';

export default class Prism {
    constructor(line0, line1, line2) {
        this.line0 = line0;
        this.line1 = line1;
        this.line2 = line2;
        this.loss = .1;
        this.normal0 = this.line0.vector.normal;
        this.normal1 = this.line1.vector.normal;
        this.normal2 = this.line2.vector.normal;
    }

    cast(ray) {
        let refRay = ray.end.difference(ray.start).normalized;
        let dot = 2 * refRay.dot(this.normal)

        let dx = refRay.x - dot * this.normal.x
        let dy = refRay.y - dot * this.normal.y

        let start = this.intersectPoint(ray);

        let reverse = ray.start.difference(start).normalized;
        start.x += reverse.x;
        start.y += reverse.y;

        let r1 = new Vector(start.x + dx, start.y + dy);

        let result = [
            new Line(start, r1, "#FF0000", ray.width, ray.intensity - this.loss),
            new Line(start, r1, "#00FF00", ray.width, ray.intensity - this.loss),
            new Line(start, r1, "#0000FF", ray.width, ray.intensity - this.loss),
        ];

        return result;
    }

    intersect(ray) {
        return this.line0.intersects(ray) || this.line1.intersects(ray) || this.line2.intersects(ray);
    }

    intersectPoint(ray) {
        return this.line0.intersectPoint(ray) || this.line1.intersectPoint(ray) || this.line2.intersectPoint(ray);
    }
}
