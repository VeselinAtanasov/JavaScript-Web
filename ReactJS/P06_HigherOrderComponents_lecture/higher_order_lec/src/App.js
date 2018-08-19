import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Second from './components/Second';
import ComponentWithData from './components/ComponentWithData';

const request = function request(){
    return  new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve([
                {id:1,name:'Ivan'},
                {id:2,name:'Gosho'},
                {id:3,name:'Pesho'},
            ]);
        },2000);
    });
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <Home  message ='Custom message'/>
                <Second  verbosity ="detailed"/>
                <ComponentWithData  request={request} />
            </div>
        );
    }
}

export default App;
