import React, { Component } from 'react';


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    componentDidMount() {
        /**
         * In this methiod I should perform fetch - AJAX to get the data I need
         * Here the element is already rendered and this is the most suitable plac to perform AJAX requests 
         * There isn't any problem with the delay:
         * It is NOT OK to perform AJAX before the element is rendered, because the delay is not a huge deal - 0.0008sec
         */
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return <span>Time is:{this.state.date.toLocaleTimeString()}</span>;
    }
}

export default Timer;