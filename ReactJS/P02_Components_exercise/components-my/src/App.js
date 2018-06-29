import React, { Component } from 'react';
import Slider from './components/Slider';
import Roster from './components/Roster';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedPicture: 0
        };
    }


    render() {
        return (
            <div className="App">
                <Slider />
                <Roster />
            </div>
        );
    }
}

export default App;
