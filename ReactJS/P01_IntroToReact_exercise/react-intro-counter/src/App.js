import React from 'react';
import logo from './logo.svg';
import './App.css';
import rerender from './index.js';


let counter=0;
function incrementCounter(){
    counter = counter+1;
    rerender(Counter(),document.getElementById('root'));
    console.log(counter);
}

const Counter = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            {counter}
        </header>
        <p className="App-intro">
            <button onClick={incrementCounter}>Click</button>
        </p>
    </div>
);

export default Counter;
