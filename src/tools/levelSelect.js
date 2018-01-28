import React, { Component } from 'react';

export default class LevelSelect extends Component {
    render() {
        const levelArray = Object.keys(this.props.levels);
        console.log(levelArray);
        return (
            <section style={{paddingBottom: "20px"}}>
                {levelArray.map((level, index) => (
                    <button
                        // disabled={!this.props.levels[level].completed && !this.props.levels[level].playing}
                        style={{marginRight: "10px", width: "100px"}}
                        onClick={() => this.props.loadLevel(level)}
                        key={levelArray[index]}
                    >
                        {levelArray[index]}
                    </button>
                ))}
            </section>
        );
    }
}