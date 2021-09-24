import React, { Component } from 'react';
import '././table.css'
import  ColumnContent  from './ColumnContent';
import  TitleBar  from './TitleBar';

export default class TableOption extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "table-column">
                <ColumnContent content = {this.props.content}/>
            </div>
         );
    }
}