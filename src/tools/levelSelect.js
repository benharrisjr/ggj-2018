import React, { Component } from 'react';

export default class LevelSelect extends Component {
    render() {
        const levelArray = Object.keys(this.props.levels);
        console.log(levelArray);
        return (
            <section>
                {levelArray.map((index) => <button key={levelArray[index]}>{levelArray[index]}</button>)}
            </section>
        );
    }
}