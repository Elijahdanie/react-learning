import React, { Component } from 'react';
import '././table.css'
import  ColumnContent  from './ColumnContent';
import  TitleBar  from './TitleBar';

export default class TableOption extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "table-column">
                <TitleBar name = "Add Tasks"/>
                <ColumnContent content = {["eat the biscuit", "drive to church"]}/>
            </div>
         );
    }
}