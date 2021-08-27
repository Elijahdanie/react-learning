import React, { Component } from 'react';

export default class Title extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className = "Title">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
