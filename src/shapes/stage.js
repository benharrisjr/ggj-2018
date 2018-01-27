import Vector from './vector';
import Line from './line';
import Mirror from './mirror';

export default class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.emitters = [new Line(new Vector(0, 0), new Vector(1, 1), '#FFFFFF', 2)];
        this.collectors = [];
        this.tools = [
            new Mirror(new Line(new Vector(290, 300), new Vector(310, 310), '#0088FF', 4)),
            new Mirror(new Line(new Vector(100, 0), new Vector(this.width, this.height), '#0088FF', 4))
        ];
        this.lines = [];

        //Determine the maximum length for our rays
        this.maxLength = Math.sqrt(width * width + height * height);

        this.simulate();
    }

    add(tool) {
        this.tools.push(tool);
        this.simulate();
    }

    processEmitter(ray) {
        //Stretch ray to maximum length for line/line intersections
        let vector = ray.vector.multiply(this.maxLength);
        ray.end.x = ray.start.x + vector.x;
        ray.end.y = ray.start.y + vector.y;

        let minDistance = this.maxLength;
        let intersectionPoint;
        let currentPoint = null;
        let currentObj = null;

        let objs = this.tools.concat(this.collectors);

        this.objs.forEach((obj) => {
            if (obj.intersect(ray) !== false) {
                intersectionPoint = obj.intersectPoint(ray);
                if (intersectionPoint.distance(ray.start) < minDistance) {
                    currentPoint = intersectionPoint;
                    currentObj = obj;
                }
            }
        });

        if (currentObj) {
            let result = currentObj.cast(ray);
            let extend = result.end.difference(result.start).multiply(this.maxLength);
            result.end.x = result.start.x + extend.x;
            result.end.y = result.start.y + extend.y;

            this.processEmitter(result);
            this.lines.push(new Line(ray.start, intersectionPoint, ray.color, ray.width));
        } else {
            this.lines.push(ray);
        }
    }

    simulate() {
        this.lines = [];
        this.emitters.forEach(this.processEmitter.bind(this));
    }
}