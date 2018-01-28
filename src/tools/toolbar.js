import React, { Component } from 'react';

export default class Toolbar extends Component {
    render() {
        console.log(this.props.completedStages);
        return (
            <section>
                {/* <button onClick={this.props.removeTools}>Remove All</button> */}
                <div style={{marginBottom: "10px"}}>
                    <button onClick={this.props.undoTool}>Undo</button>
                </div>
                {() => {
                    let images = [];
                    for( let i = 0; i++; i < this.props.completedStages.length){
                        images.push(<img style={{height:"auto", width:" 150px"}} key={i} src={this.props.completedStages[i]} />);
                    }
                    return images;
                }}
                {/* {this.props.completedStages && this.props.completedStages.map((image, index) => (
                    <img style={{height:"auto", width:" 150px"}} key={index} src={image} />
                ))} */}
            </section>
        );
    }
}