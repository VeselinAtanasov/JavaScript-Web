import React, { Component } from 'react';
import Slider from './components/Slider';
import Requestor from './components/RosterRequestor';
import Hero from './components/Hero';
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
        console.log('The state for updating update:'+newState)
        // this.setState((prevState) =>{
        //     let focusedPicture=prevState.focusedPicture;
        //     focusedPicture=newState;
        //     console.log(`After the ubdate the state is :`+focusedPicture);
        //     return{
        //         focusedPicture
        //     };
        // });
        this.setState({
            focusedPicture: newState
        });
        console.log(`After the ubdate the state is :`+this.state.focusedPicture);

    }

    render() {
        return (
            <div className="App">
                <Slider />
                <Requestor func={this.eventHandler} />
                {console.log('rerender '+this.state.focusedPicture)}
                <Hero change={this.state.focusedPicture}  />
            </div>
        );
    }
}

export default App;
