import React, { Component } from 'react';
import NavbarAction from './navbarActions';
import NavBarButtons from './navbarbuttons';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "navbar">
                <p className = "navbartitle">YCollege</p>
                    {this.props.navbarbuttons.map(x=> <NavbarAction key = {x.id} name = {x.name} action = {x.action}/>)}
                    <NavBarButtons name = "sign in" action = {()=>{console.log('signed')}}/>
            </div>
         );
    }
}
 
export default NavBar;