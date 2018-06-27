import React, { Component } from 'react';
import Image from './Image';


class Requestor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heros: []
        };
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
    render() {
        return (
            <div>
                {this.state.heros.map((hero, index) => {
                    return <Image key={index} params={hero} func={this.props.func} />;
                })}
            </div>
        );


    }
}

export default Requestor;