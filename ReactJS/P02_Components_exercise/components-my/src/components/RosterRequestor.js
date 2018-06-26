import React, { Component } from 'react';
import Image from './Image';

class Requestor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heros: []
        };
        this.getDetails=this.getDetails.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster')
            .then(data => {
                return data.json();
            })
            .then(parseData => {
                this.setState({
                    heros: parseData
                });
            });
    }
    getDetails(){
        console.log('Here');
    }

    render() {
        return (
            <div>
                {this.state.heros.map((hero, index) => {
                    return <Image key={index} params={hero} />;
                })}
            </div>
        );


    }
}

export default Requestor;