import Vector from './vector';
import Line from './line';
import Collector from './collector';
import Circle from './circle';
import Mirror from './mirror';
import Prism from './prism';
import Blocker from './blocker';
import Rectangle from './rectangle';

export default class Stage {
    constructor(width, height, level) {
        this.width = width;
        this.height = height;
        this.level = level;
        //Determine the maximum length for our rays
        this.maxLength = Math.sqrt(width * width + height * height);

        this.initialize(level);
    }

    initialize(level) {
        console.log(level);
        this.level = level
        this.level.playing = true;
        this.lines = [];
        this.tools = [];
        this.fixedTools = level.tools || [];
        this.emitters = level.emitters || [];
        this.collectors = level.collectors || [];
        this.blockers = level.blockers || [];

        this.simulate();
    }

    add(tool) {
        this.tools.push(tool);
        this.simulate();
    }
    undo() {
        this.tools.pop();
        this.simulate();
    }

    removeAll() {
        this.tools.length = 0;
        this.simulate();
    }

    findCollision(ray) {
        let minDistance = this.maxLength;
        let distance;
        let intersectionPoint;
        let currentPoint = null;
        let currentObj = null;

        let objs = this.tools.concat(this.collectors, this.blockers, this.fixedTools);

        objs.forEach((obj) => {
            if (obj.intersectsWith(ray) !== false) {
                intersectionPoint = obj.intersectionPoint(ray);
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
        //Stretch ray to maximum length for line/line intersections
        let vector = ray.vector.multiply(this.maxLength);
        ray.end = ray.start.add(vector);

        let collision = this.findCollision(ray);

        if (collision.point) {
            ray.end = collision.point;
        }

        this.lines.push(ray);
        if (collision.obj) {
            if (collision.obj.constructor.name === 'Collector') {
                collision.obj.success = true;
                this.level.completed = true;
            }
            return collision.obj.cast(ray);
        }

        return null;
    }

    simulate() {
        this.lines = [];
        this.collectors.forEach((collector) => { collector.success = false; })
        let rays = [].concat(this.emitters);
        let ray = null;

        while (rays.length) {
            ray = this.processRay(rays.pop());
            if (ray && ray.intensity > .00001) {
                rays.push(ray);
            }
        }
    }
}