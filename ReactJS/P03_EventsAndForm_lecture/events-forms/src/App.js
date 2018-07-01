import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import ButtonWithClick from './components/ButtonWithClick';
import RegisterForm from './components/RegisterForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ButtonWithClick name="Random Button" />
                <div>
                    <RegisterForm  />
                </div>
                <div>
                    <Container  />
                </div>
            </div>
        );
    }
}

export default App;
