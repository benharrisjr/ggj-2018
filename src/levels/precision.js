import Line from "../shapes/line";
import Vector from "../shapes/vector";
import Blocker from "../shapes/blocker";
import Rectangle from "../shapes/rectangle";
import Collector from "../shapes/collector";
import Circle from "../shapes/circle";

const Precision = {
    emitters: [
        new Line(new Vector(400, 0), new Vector(400, 1), '#FFFFFF', 2, 1),
        new Line(new Vector(400, 600), new Vector(400, 599), '#FFFFFF', 2, 1)
    ],
    blockers: [
        new Blocker(new Rectangle(new Vector(400, 280), 500, 20, 0)),
        new Blocker(new Rectangle(new Vector(400, 320), 500, 20, 0))
    ],
    collectors: [
        new Collector(new Circle(new Vector(400, 300), 5))
    ],
    completed:false,
    playing:false,
}

export default Precision;