import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isClicked: false
        };

        this.buttonClicked = this.buttonClicked.bind(this);
    }
    buttonClicked() {
        console.log('Button was clicked...');
        /**
         * This way to update the stare is not safe , becasue setState is async operation 
         * Below is the correct approach
         */
        // this.setState({
        //     count: this.state.count + 1,
        //     isClicked: !this.state.isClicked
        // });

        /**
         * this.setState(prevState =>({property:changeProperty}))
         * Here is the correct way to update the state:
         * This garentee that we always recives correct data... 
         */
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        console.log(this.state.isClicked);
    }

    render() {
        return (
            <button onClick={this.buttonClicked}>
                {this.props.text} - Clicked {this.state.count} !
            </button>
        );
    }
}

export default Button;