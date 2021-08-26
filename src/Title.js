import React, { Component } from 'react';

export default class Title extends Component {
    constructor(props) {
        super();
        this.state = props;
    }
    render() {
        return (
            <div className = "Title">
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}
