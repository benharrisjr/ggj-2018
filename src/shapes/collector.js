export default class Collector {
    constructor(circle) {
        this.circle = circle;
    }

    cast(ray) {
        let point = this.intersectsWith(ray);
        console.log(`Success: ${point}`);
    }

    intersect(ray) {
        return this.intersectsWith(ray);
    }

    intersectsWith(ray) {
        return this.circle.intersectsWith(ray);
    }

    intersectPoint(ray) {
        return this.intersectsWith(ray);
    }
}