import React, { Component } from 'react';
import Welcome from './components/Welcome';
import Timer from './components/Timer';
import './App.css';



class App extends Component {
    render() {
        let obj = {
            title: 'Welcome',
            subtitle: 'from React',
            style: 'main'
        };
        return (
            <div className="App">
                <Welcome title='REACT' style='main' />
                <Welcome {...obj} />
                <Timer />
            </div>
        );
    }
}

export default App;
