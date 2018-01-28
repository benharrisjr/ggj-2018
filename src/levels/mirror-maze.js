import Line from "../shapes/line";
import Vector from "../shapes/vector";
import Blocker from "../shapes/blocker";
import Rectangle from "../shapes/rectangle";
import Collector from "../shapes/collector";
import Circle from "../shapes/circle";

const MirrorMaze = {
    emitters: [
        new Line(new Vector(0, 300), new Vector(1, 300), '#FFFFFF', 2, 1)
    ],
    blockers: [
        new Blocker(new Rectangle(new Vector(400, 300), 30, 400, 0))
    ],
    collectors: [
        new Collector(new Circle(new Vector(770, 300), 20))
    ]
}

export default MirrorMaze;