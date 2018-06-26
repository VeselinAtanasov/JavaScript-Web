import React, { Component } from 'react';
import Slider from './components/Slider';
import Requestor from './components/RosterRequestor';
import Hero from './components/HeroDetails';
import observerMenu from './utils/observer.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedPicture: 0
        };
        this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler(newState) {

        this.setState({
            focusedPicture: newState
        });
    }
    componentDidMount() {
        observerMenu.addObserver('changeFocus', this.eventHandler);
        console.log(this.state.focusedPicture)
    }

    render() {
        return (
            <div className="App">
                <Slider />
                <Requestor />
                {console.log('State from App: ' + this.state.focusedPicture)}
                <Hero change={this.state.focusedPicture} />
            </div>
        );
    }
}

export default App;
