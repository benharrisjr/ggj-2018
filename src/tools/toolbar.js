import React, { Component } from 'react';
import Mirror from './../shapes/mirror';
import Prism from './../shapes/prism';

export default class Toolbar extends Component {
    state = {
        selectedTool: 'mirror',
    }
    changeSelectedTool(selectedTool) {
        this.setState({selectedTool})
    }

    render() {
        const tools = [
            {name: 'mirror'},
            {name: 'lens'},
            {name: 'prism'},
        ]
        return (
            <section>
                <p>{this.state.selectedTool}</p>
                {tools.map((tool) => <button key={tool.name} onClick={() => this.changeSelectedTool(tool.name)}>{tool.name}</button>)}
            </section>
        );
    }
}