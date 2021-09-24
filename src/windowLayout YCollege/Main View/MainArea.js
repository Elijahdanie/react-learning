import React, { Component } from 'react';
import ActivityArea from './ActivityArea';
import Options from './Options';
import Resources from './Resources';

class MainArea extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "main-area">
                <Options />
                <ActivityArea />
                <Resources />
            </div>
         );
    }
}
 
export default MainArea;