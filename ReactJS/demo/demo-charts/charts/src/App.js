import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Charts from './component/Chart';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Charts />
            </div>
        );
    }
}

export default App;
