import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <AppRouter />
                <Footer />
            </div>
        );
    }
}

export default App;
