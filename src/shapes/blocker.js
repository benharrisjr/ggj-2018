export default class Blocker {
    constructor(rectangle) {
        this.rectangle = rectangle;
    }

    cast(ray) { }

    intersectsWith(ray) {
        return this.rectangle.intersectsWith(ray);
    }

    intersectionPoint(ray) {
        return this.rectangle.intersectionPoint(ray);
    }
}