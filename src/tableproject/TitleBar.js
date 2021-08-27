import React, { Component } from 'react';

export default class TitleBar extends Component {
    state = {};
    render() {
        return (
            <div className="title-bar">
                {this.props.name}
            </div>
        );
    }
}
