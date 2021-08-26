import React, { Component } from 'react';
import Title from './Title';

class Box extends Component {
    render() { 
        const {value} = this.props;
        return ( 
            <div className = "box">
                 <button onClick = {()=>this.props.onClickhandle(value)} className= "box-text">{value}</button>
            </div>
         );
    }
}

export default class FlexTest extends Component {
    state = { 
        boxletters : [
            "A", "B", "C",
            "D", "E", "F",
            "J", "H", "I"
        ]
     }

     handleClick = (val)=>{
         console.log("handle click", val);
     }

    render() { 
        return (
            <div className = "puzzle-app">
            <Title title = "Word Search Puzzle"/>
            <div className = "box-case">
               {this.state.boxletters.map(val =>
                       <Box key = {val} value = {val} onClickhandle = {this.handleClick}/>
               )}
            </div>
            </div>
         );
    }
}