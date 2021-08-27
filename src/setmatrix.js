import React, { Component } from 'react';

class SetMatrix extends Component {
    state = { 
        count : 0
    }

    render() {
        const {handleSet, count} = this.props; 
        return (
            <div className = "settings">
              <button className = "setbutton" onClick = {()=>handleSet(false)}>
                  <p className = "box-text">-</p> 
                   </button>
              <p className = "settext"> {count}</p>
              <button className = "setbutton" onClick = {()=>handleSet(true)}>
                    <p className = "box-text">+</p>  </button>
            </div>
          );
    }
}
export default SetMatrix;