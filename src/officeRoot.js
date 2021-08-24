import React, { Component } from 'react';
import Title  from './Title';



export default class OfficeRoot extends Component {
    constructor(props){
        super();
        this.state = props;
    }
    counter = 0;

    handlecounter = ()=>{
        this.setState({}, ()=>{
            this.counter++;
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <Title title = "Check" />
                <p>{this.counter}</p>
                <button onClick = {this.handlecounter}> Increase Counter</button>
                </React.Fragment>
         );
    }
}