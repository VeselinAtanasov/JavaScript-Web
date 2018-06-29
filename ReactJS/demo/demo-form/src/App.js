import React, { Component } from 'react';

import './App.css';
import Calculator from './components/Calculator';
import UserForm from './components/UserForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Calculator />
                <UserForm />
            </div>
        );
    }
}

export default App;
