import Vector from "./vector";

export default class Line {
    constructor(start, end, color, width) {
        this.start = start;
        this.end = end;
        this.color = color || '#FFFFFF';
        this.width = width || 5;
    }

    intersects(line) {
        let a = this.start;
        let b = this.end;
        let c = line.start;
        let d = line.end;

        let cmp = new Vector(c.x - a.x, c.y - a.y);
        let r = new Vector(b.x - a.x, b.y - a.y);
        let s = new Vector(d.x - c.x, d.y - c.y);

        let cmpxr = cmp.x * r.y - cmp.y * r.x;
        let cmpxs = cmp.x * s.y - cmp.y * s.x;
        let rxs = r.x * s.y - r.y * s.x;
        if (cmpxr == 0)
            return ((c.x - a.x < 0) != (c.x - b.x < 0))
                || ((c.y - a.y < 0) != (c.y - b.y < 0));
        if (rxs == 0)
            return false;

        let rxsr = 1 / rxs;
        let t = cmpxs * rxsr;
        let u = cmpxr * rxsr;
        return (t >= 0) && (t <= 1) && (u >= 0) && (u <= 1);
    }

    intersectPoint(line) {
        let a = this.start;
        let b = this.end;
        let c = line.start;
        let d = line.end;

        let divider = ((a.x - b.x) * (c.y - d.y) - (a.y - b.y) * (c.x - d.x));
        if (divider == 0)
            return new Vector(0, 0);
        let intersectionX = ((a.x * b.y - a.y * b.x) * (c.x - d.x) - (a.x - b.x) * (c.x * d.y - c.y * d.x)) / divider;
        let intersectionY = ((a.x * b.y - a.y * b.x) * (c.y - d.y) - (a.y - b.y) * (c.x * d.y - c.y * d.x)) / divider;

        return new Vector(intersectionX, intersectionY);
    }

    get vector() {
        return this.end.difference(this.start);
    }
}