import React, { Component } from 'react';

export default class ButtonWithClick extends Component{
    constructor(props){
        super(props);

        this.handleOnButtonClicked = this.handleOnButtonClicked.bind(this);
    }

    handleOnButtonClicked(event){
        console.log(event.target);
    }
    render(){
        return (
            <button  onClick={this.handleOnButtonClicked}>Click me</button>
        );
    }
}