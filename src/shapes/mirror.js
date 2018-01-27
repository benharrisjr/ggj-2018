import Vector from "./vector";

export default class Mirror {
    constructor(line) {
        this.line = line;

        this.normal = this.line.vector.normal;
    }

    cast(ray) {
        let refRay = ray.end.difference(ray.start).normalize;
        let dot = 2 * refRay.dot(this.normal)

        let dx = refRay.x - dot * this.normal.x
        let dy = refRay.y - dot * this.normal.y

        let r1 = new Vector(dx, dy);

        return r1;
    }

    intersect(ray) {
        return this.line.intersect(ray);
    }

    intersectPoint(ray) {
        return this.line.intersectPoint(ray);
    }
}

module.exports = Mirror;
