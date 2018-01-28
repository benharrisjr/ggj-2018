import Line from "../shapes/line";
import Vector from "../shapes/vector";
import Blocker from "../shapes/blocker";
import Rectangle from "../shapes/rectangle";
import Collector from "../shapes/collector";
import Circle from "../shapes/circle";
import Mirror from "../shapes/mirror";

const MirrorMaze = {
    emitters: [
        new Line(new Vector(1, 300), new Vector(2, 300), '#FFFFFF', 2, 1)
    ],
    blockers: [
        new Blocker(new Rectangle(new Vector(400, 300), 30, 400, 0))
    ],
    collectors: [
        new Collector(new Circle(new Vector(770, 300), 20))
    ],
    tools: [
        new Mirror(new Line(new Vector(0, 0), new Vector(800, 0), '#0088FF', 6)),
        new Mirror(new Line(new Vector(0, 0), new Vector(0, 600), '#0088FF', 6)),
        new Mirror(new Line(new Vector(800, 0), new Vector(800, 600), '#0088FF', 6)),
        new Mirror(new Line(new Vector(0, 600), new Vector(800, 600), '#0088FF', 6)),
    ]
}
export default MirrorMaze;