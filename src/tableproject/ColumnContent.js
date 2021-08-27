import React, { Component } from 'react';
import  Content  from "./Content";

export default class ColumnContent extends Component {
    constructor(props) {
        super();
        this.state = props;
    }
    state = {
        content: ['Pray']
    };
    render() {
        const { content } = this.state;
        return (
            <div className = "column-content">
                {content.map(x => <Content name={x} />)}
            </div>
        );
    }
}
