import React, { Component } from 'react';
import TableView from '../../tableproject/TableView';
import '../../tableproject/table.css'

class Options extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "options">
                <TableView key = "f" content = {[{id : 1, data:"eat the biscuit"}, 
                {id:2, data:"drive to church"},
                {id:3, data:"drive to church"},
                {id:4, data:"drive to church"}
                ]} />
            </div>
         );
    }
}
 
export default Options;