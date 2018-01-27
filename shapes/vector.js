export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    difference(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }

    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }

    get normal() {
        return new Vector(this.y, -this.x).normalized;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get normalized() {
        let x = (this.x / this.length)
        let y = (this.y / this.length)
        return new Vector(x, y);
    }
}