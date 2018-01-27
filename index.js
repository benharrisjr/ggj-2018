let Vector = require('./shapes/vector');
let Mirror = require('./shapes/mirror');

let mirror = new Mirror(new Vector(0, 0), new Vector(10, 10));
let v = new Vector(1, 1);
let ray1 = new Vector(-1, 0);
let ray2 = new Vector(1, 0);

console.log(mirror.cast(ray1));
console.log(mirror.cast(ray2));

