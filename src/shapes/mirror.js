let Vector = require('./vector');

class Mirror {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;

        this.vector = p1.difference(p2);
        this.normal = this.vector.normal;
    }

    cast(ray) {
        let dot = 2 * ray.dot(this.normal)

        let dx = ray.x - dot * this.normal.x
        let dy = ray.y - dot * this.normal.y


        let r1 = new Vector(dx, dy);

        return r1;
    }
}

module.exports = Mirror;
