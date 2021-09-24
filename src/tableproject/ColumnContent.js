import React, { Component } from 'react';
import  Content  from "./Content";

export default class ColumnContent extends Component {
    draggeditem = null;
    allowdrop = e =>{
        e.preventDefault();
        e.target.appendChild(this.draggeditem);
    }

    StartDrag = (e)=>{
        e.dataTransfer.setData('text/plain', e.target.id);
        const id = e.dataTransfer.getData('text/plain');
        this.draggeditem = document.getElementById(id);
    }

    EndDrag = (e) =>{
    }

    dragOver = (e) =>{
        console.log(`dragover ${e.target.nodeName}`);
        e.preventDefault();
    }
    dragLeave = (e) =>{
    }
    dragEnter = (e) =>{
        e.preventDefault();
    }

    render() {
        const { content } = this.props;
        return (
            <div className = "column-content"
            onDragOver = {this.dragOver}
            onDragLeave = {this.dragLeave}
            onDragEnter = {this.dragEnter}
            onDrop = {this.allowdrop}>
                {content.map(x => <Content key = {x.id} name={x.data}
                 StartDrag = {this.StartDrag} 
                 EndDrag = {this.EndDrag}
                 />)}
            </div>
        );
    }
}
