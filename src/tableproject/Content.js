import React, { Component } from 'react';


export default class Content extends Component {
    state = {};
    render() {
        return (
            <div id = "content" className = "content" draggable = "true" 
            onDragStart = {this.props.StartDrag}
            onDragEnd = {this.props.EndDrag}
            >
                {this.props.name}
                <p className = "icon"> + </p>
            </div>
        );
    }
}
