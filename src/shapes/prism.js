import Vector from './vector';
import Line from './line';

export default class Prism {
    constructor(line0, line1, line2) {
        this.lines = [
            line0,
            line1,
            line2
        ];
        this.loss = .1;

        this.refraction = 1.333;
    }

    cast(ray) {
        let line = this.intersectionLine(ray);
        let point = ray.end;
        let normal = line.vector.normal;
        let cos = normal.dot(ray.vector.normalized);

        if (cos < 0) {
            normal = normal.negative;
            cos = normal.dot(ray.vector.normalized);
        }

        let refractiveIndex = this.refraction;

        let refractedVector = ray.vector.normalized.multiply(refractiveIndex)
        let coeff = refractiveIndex * cos;
        coeff -= Math.sqrt(1 - refractiveIndex * refractiveIndex * (1 - cos * cos));
        refractedVector = refractedVector.add(coeff * normal.negative);
        return new Line(point.add(new Vector(50, 50)), refractedVector);
    }

    intersectsWith(ray) {
        return this.lines.reduce((intersects, line) => {
            return line.intersectsWith(ray) || intersects;
        }, false);
    }

    intersectionPoint(ray) {
        let points = [];
        this.lines.forEach((line) => {
            if (line.intersectsWith(ray)) {
                points.push(line.intersectionPoint(ray));
            }
        });

        let bestPoint = points.reduce((best, point) => {
            if (!point) {
                return best;
            }

            if (!best) {
                return point;
            }

            if (ray.start.distance(point) < ray.start.distance(best)) {
                return point;
            }

            return best;
        }, null);

        return bestPoint;
    }

    intersectionLine(ray) {
        let minDistance = Number.MAX_VALUE;
        let bestLine;
        this.lines.forEach((line) => {
            if (line.intersectsWith(ray)) {
                if (line.intersectionPoint(ray).distance(ray.start) < minDistance) {
                    bestLine = line;
                }
            }
        });

        return bestLine;
    }
}
