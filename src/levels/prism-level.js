import Line from "../shapes/line";
import Vector from "../shapes/vector";
import Blocker from "../shapes/blocker";
import Rectangle from "../shapes/rectangle";
import Collector from "../shapes/collector";
import Circle from "../shapes/circle";
import Mirror from "../shapes/mirror";
import Prism from '../shapes/prism';

const p1 = new Vector(400, 290);
const p2 = new Vector(400, 310);
const p3 = new Vector(410, 300);

const PrismLevel = {
    emitters: [
        new Line(new Vector(1, 300), new Vector(2, 300), '#FFFFFF', 2, 1)
    ],
    blockers: [

    ],
    collectors: [
        new Collector(new Circle(new Vector(770, 300), 20))
    ],
    tools: [
        new Prism(new Line(p1, p2, '#FF8800', 3), new Line(p2, p3, '#FF8800', 3), new Line(p3, p1, '#FF8800', 3))
    ],
    completed: false,
}
export default PrismLevel;