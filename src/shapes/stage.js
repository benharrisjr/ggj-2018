import Vector from './vector'; 

export default class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.emitters = [{
            start: new Vector(0, 0),
            end: new Vector(100, 100),
            color: '#FFFFFF'
        }];
        this.collectors = [];
        this.tools = [];
        this.lines = [];
        this.simulate();
    }

    add(tool) {
        this.tools.push(tool);
        this.simulate();
    }

    simulate() {
        this.lines = [
            {
                start: new Vector(20,40),
                end: new Vector(this.width/2, this.height/2),
                color: '#FF0000'
            }
        ];

        this.lines = this.lines.concat(this.emitters);
    }
}