import Vector from "./vector";
import Line from "./line";

export default class Mirror {
    constructor(line) {
        this.line = line;
        this.loss = .1;

        this.normal = this.line.vector.normal;
    }

    cast(ray) {
        let refRay = ray.end.difference(ray.start).normalized;
        let dot = 2 * refRay.dot(this.normal)

        let dx = refRay.x - dot * this.normal.x
        let dy = refRay.y - dot * this.normal.y

        let start = this.intersectionPoint(ray);

        let reverse = ray.start.difference(start).normalized;
        start.x += reverse.x;
        start.y += reverse.y;

        let r1 = new Vector(start.x + dx, start.y + dy);

        let result = new Line(start, r1, ray.color, ray.width, ray.intensity - this.loss);

        return result;
    }

    intersectsWith(ray) {
        return this.line.intersectsWith(ray);
    }

    intersectionPoint(ray) {
        return this.line.intersectionPoint(ray);
    }
}
