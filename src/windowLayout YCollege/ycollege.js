import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import MainArea from './Main View/MainArea';
import NotificationArea from './NavBar/NotificationArea';


class Ycollege extends Component {
    state = {  }
    navbarbuttons = [
        {id:1, name : "Home", action: ()=>{console.log('clicked home')}},
        {id:2, name : "About", action: ()=>{console.log('clicked about')}},
        {id:3, name : "Contact", action: ()=>{console.log('clicked contact')}},
    ]
    render() {
        return ( 
            <div className = "main-view">
                <NavBar navbarbuttons = {this.navbarbuttons}/>
                <NotificationArea />
                <MainArea />
            </div>
         );
    }
}
 
export default Ycollege;