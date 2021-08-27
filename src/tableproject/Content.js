import React, { Component } from 'react';


export default class Content extends Component {
    state = {};
    render() {
        return (
            <div className = "content" draggable = "true">
                {this.props.name}
                <p className = "icon"> + </p>
            </div>
        );
    }
}
