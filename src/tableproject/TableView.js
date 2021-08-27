import React, { Component } from 'react';
import TableOption from './tableoption';

export default class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="table-parent">
                <TableOption />
            </div>
        );
    }
}
