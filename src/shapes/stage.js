import Vector from './vector'; 

export default class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.emitters = [{
            start: new Vector(0, 0),
            end: new Vector(1, 1),
            color: '#FFFFFF'
        }];
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

    processEmitter(ray) {
        //Stretch ray to maximum length for line/line intersections
        let vector = ray.vector.multiply(this.maxLength);
        ray.end.x = ray.start.x + vector.x;
        ray.end.y = ray.start.y + vector.y;

        let minDistance = this.maxLength;
        let intersectionPoint;

        this.tools.forEach((tool) => {
            if (tool.intersect(ray) !== false) {

            }
        });

    }

    simulate() {
        this.emitters.forEach(this.processEmitter.bind(this));
        this.lines = [
            {
                start: new Vector(0, 0),
                end: new Vector(this.width, this.height),
                color: '#FFFFFF'
            },
            {
                start: new Vector(20, 40),
                end: new Vector(this.width / 2, this.height / 2),
                color: '#FF0000'
            }
        ];

        // this.lines.push(this.emitters);
    }
}