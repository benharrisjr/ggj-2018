import React, { Component } from 'react';

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
                {tools.map((tool) => <button onClick={() => this.changeSelectedTool(tool.name)}>{tool.name}</button>)}
            </section>
        );
    }
}