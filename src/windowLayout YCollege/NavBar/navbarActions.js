import React, { Component } from 'react';


class NavbarAction extends Component {
    render() { 
        return ( 
           <button className = "navbar-action" onClick = {()=>{this.props.action()}}>
                {this.props.name}
            </button>
         );
    }
}
 
export default NavbarAction;