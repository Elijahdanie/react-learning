import React, { Component } from 'react';

class NavBarButtons extends Component {
    render() { 
        return ( 
            <button className = "navbarbuttons" onClick = {this.props.action}>
                {this.props.name}
            </button>
         );
    }
}
 
export default NavBarButtons;