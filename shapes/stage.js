export default class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.emitters = [];
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
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: this.width,
                    y: this.height
                },
                color: '#FFFFFF'
            },
            {
                start: {
                    x: 20,
                    y: 40
                },
                end: {
                    x: this.width / 2,
                    y: this.height / 2
                },
                color: '#FF0000'
            }
        ]
    }
}