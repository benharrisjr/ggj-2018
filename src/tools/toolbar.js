import React, { Component } from 'react';

export default class Toolbar extends Component {
    render() {
        const tools = [
            {name: 'mirror'},
            {name: 'lens'},
            {name: 'prism'},
        ]
        return (
            <section>
                <button onClick={this.props.removeTools}>Remove All</button>
                {tools.map((tool, index) => <button key={tool.name}>{tool.name}</button>)}
            </section>
        );
    }
}