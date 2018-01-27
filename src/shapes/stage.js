import Vector from './vector';
import Line from './line';
import Mirror from './mirror';

export default class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.emitters = [new Line(new Vector(0, 0), new Vector(1, 1), '#FFFFFF', 2)];
        this.collectors = [];
        this.tools = [];
        this.lines = [];

        //Determine the maximum length for our rays
        this.maxLength = Math.sqrt(width * width + height * height);

        this.simulate();
    }

    add(tool) {
        this.tools.push(tool);
        this.simulate();
    }
    undo() {

    }

    removeAll() {
        this.tools.length = 0;
        this.simulate();
    }

    findCollision(ray) {
        //Stretch ray to maximum length for line/line intersections
        let vector = ray.vector.multiply(this.maxLength);
        ray.end.x = ray.start.x + vector.x;
        ray.end.y = ray.start.y + vector.y;

        let minDistance = this.maxLength;
        let distance;
        let intersectionPoint;
        let currentPoint = null;
        let currentObj = null;

        let objs = this.tools.concat(this.collectors);

        objs.forEach((obj) => {
            if (obj.intersect(ray) !== false) {
                intersectionPoint = obj.intersectPoint(ray);
                distance = intersectionPoint.distance(ray.start);
                if (distance < minDistance) {
                    minDistance = distance;
                    currentPoint = intersectionPoint;
                    currentObj = obj;
                }
            }
        });

        return { obj: currentObj, point: currentPoint };
    }

    processRay(ray) {
        let collision = this.findCollision(ray);

        if (collision.point) {
            ray.end = collision.point;
        }

        this.lines.push(ray);
        if (collision.obj) {
            return collision.obj.cast(ray);
        }

        return null;
    }

    simulate() {
        this.lines = [];
        let rays = [].concat(this.emitters);
        let ray = null;

        while (rays.length) {
            ray = this.processRay(rays.pop());
            if (ray) {
                rays.push(ray);
            }
        }
        //this.emitters.forEach(this.processEmitter.bind(this));
    }
}