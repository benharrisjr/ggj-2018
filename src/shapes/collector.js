export default class Collector {
    constructor(circle) {
        this.circle = circle;
    }

    intersect(ray) {
        return this.circle.intersectsWith(ray);
    }

    intersetPoint(ray) {

    }
}