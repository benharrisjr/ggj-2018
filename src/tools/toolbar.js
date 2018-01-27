import React, { Component } from 'react';
import Mirror from './../shapes/mirror';
import Prism from './../shapes/prism';

export default class Toolbar extends Component {
    render() {
        const tools = [
            {name: 'mirror'},
            {name: 'lens'},
            {name: 'prism'},
        ]
        return (
            <section>
                <p>{this.props.selectedTool}</p>
                {tools.map((tool, index) => <button key={tool.name} onClick={() => this.props.changeSelectedTool(index)}>{tool.name}</button>)}
            </section>
        );
    }
}