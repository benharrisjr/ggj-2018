import Vector from './vector';
import Line from './line';
import Mirror from './mirror';

export default class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.emitters = [new Line(new Vector(0, 0), new Vector(1, 1))];
        this.collectors = [];
        this.tools = [
            new Mirror(new Line(new Vector(0, this.height / 2), new Vector(this.width, this.height / 2), '#0088FF'))
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
        let currentTool = null;

        this.tools.forEach((tool) => {
            if (tool.intersect(ray) !== false) {
                intersectionPoint = tool.intersectPoint(ray);
                if (intersectionPoint.distance(ray.start) < minDistance) {
                    currentPoint = intersectionPoint;
                    currentTool = tool;
                }
            }
        });

        if (currentTool) {
            let result = currentTool.cast(ray);
            let extend = result.end.difference(result.start).multiply(this.maxLength);
            result.end.x = result.start.x + extend.x;
            result.end.y = result.start.y + extend.y;

            this.lines.push(new Line(ray.start, intersectionPoint));
            this.lines.push(result);
        } else {
            this.lines.push(ray);
        }
    }

    simulate() {
        this.emitters.forEach(this.processEmitter.bind(this));
    }
}