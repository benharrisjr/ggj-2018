export default class Collector {
    constructor(circle) {
        this.circle = circle;
    }

    cast(ray) {
        let point = this.intersectsWith(ray);
        console.log(`Success: ${point}`);
    }

    intersectsWith(ray) {
        return this.circle.intersectsWith(ray);
    }

    intersectionPoint(ray) {
        return this.intersectsWith(ray);
    }
}