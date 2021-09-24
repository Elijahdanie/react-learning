import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tableproject/table.css'
import reportWebVitals from './reportWebVitals';
import Ycollege from  './windowLayout YCollege/ycollege'
import './windowLayout YCollege/ycollege.css'

ReactDOM.render(
  <div>
    {/* <TableView key = "f" content = {[{id : 1, data:"eat the biscuit"}, {id:2, data:"drive to church"}]}/>
    <TableView key = "k" content = {[{id: 1, data : "chop the tree"}, {id:2, data:"fight the rabbit"}]}/> */}
    <Ycollege />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
