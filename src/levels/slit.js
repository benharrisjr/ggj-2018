import Line from "../shapes/line";
import Vector from "../shapes/vector";
import Blocker from "../shapes/blocker";
import Rectangle from "../shapes/rectangle";
import Collector from "../shapes/collector";
import Circle from "../shapes/circle";

const Slit = {
    emitters: [
        new Line(new Vector(400, 0), new Vector(400, 1), '#FFFFFF', 2, 1)
    ],
    blockers: [
        new Blocker(new Rectangle(new Vector(100, 300), 300, 20, 0)),
        new Blocker(new Rectangle(new Vector(700, 300), 300, 20, 0)),
        new Blocker(new Rectangle(new Vector(400, 300), 200, 20, 0))
    ],
    collectors: [
        new Collector(new Circle(new Vector(200, 500), 20)),
        new Collector(new Circle(new Vector(600, 500), 20))
    ],
    completed:false,
}

export default Slit;