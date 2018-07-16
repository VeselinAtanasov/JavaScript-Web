import React, { Component } from 'react';
import Home from './components/Home';
import './App.css';

const arr = [
    { id: 1, name: 'Veselin' },
    { id: 2, name: 'Veronika' }
];
class App extends Component {
    render() {
        return (
            <div className="App">
                <Home data={arr} name="Data"/>
            </div>
        );
    }
}

export default App;
