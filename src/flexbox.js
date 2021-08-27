import React, { Component } from 'react';
import SetMatrix from './setmatrix';
import Title from './Title';

class Box extends Component {
    colors = [
        "box",
        "clicked"
    ]
    render() { 
        const {value} = this.props;
        return ( 
            <div className = {this.colors[value.cid]}>
                 <button onClick = {()=>this.props.onClickhandle(value)} className= "box-text" draggable = "true">{value.id}</button>
            </div>
         );
    }
}

export default class FlexTest extends Component {
    state = {
        boxletters :[{id : "A", cid : 0}]
     }

     handleSet = (add)=>{
        this.setState({
            boxletters : this.updateState(add)
        });
     }

     updateState = (add)=>{
        if(add)
        {
            this.state.boxletters.push({
            id : String.fromCharCode(65 + (this.state.boxletters.length + 1)), cid : 0,
        })}
        else
         this.state.boxletters.pop();
         return this.state.boxletters;
     }

     handleClick = (val)=>{
        this.setState({
            boxletters : this.state.boxletters.map(x=>
                {
                    if(x.id === val.id)
                    {
                        x.cid = x.cid === 0?1:0;
                    }
                    return x;
                })
            });
     }

    render() {
        return (
            <div className = "puzzle-app">
            <Title title = {this.props.name}/>
            <div className = "box-case">
               {
                this.state.boxletters.map(val =><Box key = {val.id} value = {val} colorindex = {val.cid} onClickhandle = {this.handleClick}/>)
                }
            </div>
            <SetMatrix handleSet = {this.handleSet} count = {this.state.boxletters.length} /> 
            </div>
         );
    }
}