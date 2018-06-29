import React, { Component } from 'react';
import Image from './Image';
import Hero from './Hero';


class Requestor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heros: [],
            id: 0,
            url: '',
            name: '',
            bio: ''
        };
        this.focusedChanged = this.focusedChanged.bind(this);
    }

    focusedChanged(newState) {
        fetch('http://localhost:9999/character/' + newState)
            .then(data => {
                return data.json();
            })
            .then(parseData => {
                this.setState({
                    id: parseData.id,
                    url: parseData.url,
                    name: parseData.name,
                    bio: parseData.bio
                });
            });
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster')
            .then(data => {
                return data.json();
            })
            .then(parseData => {
                this.setState({
                    heros: parseData,
                    id: parseData[0].id,
                    url: parseData[0].url,
                    name: parseData[0].name,
                    bio: parseData[0].bio
                });
            });
    }
    render() {
        return (
            <div className="Roster">
                <div>
                    {this.state.heros.map((hero, index) => {
                        return <Image key={index} params={hero} func={this.focusedChanged} />;
                    })}
                </div>
                <div>
                    <Hero params={this.state} />
                </div>
            </div>
        );


    }
}

export default Requestor;