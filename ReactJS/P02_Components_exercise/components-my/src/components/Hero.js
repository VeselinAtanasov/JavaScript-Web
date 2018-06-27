
import React, { Component } from 'react';
import Image from './Image';


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: ''
        };
    }

    componentWillReceiveProps() {
        let Id = this.props.change;
        fetch('http://localhost:9999/character/' + Id)
            .then(data => {
                return data.json();
            })
            .then(parseData => {

                this.setState({
                    func: this.props.changedState,
                    id: parseData.id,
                    url: parseData.url,
                    name: parseData.name,
                    bio: parseData.bio
                });
            });
    }
    componentDidMount() {

        let Id = this.props.change;

        fetch('http://localhost:9999/character/' + Id)
            .then(data => {
                return data.json();
            })
            .then(parseData => {

                this.setState({
                    func: this.props.changedState,
                    id: parseData.id,
                    url: parseData.url,
                    name: parseData.name,
                    bio: parseData.bio
                });
            });
    }
    render() {
        return (
            <div>
                <fieldset>
                    <div></div>
                    <Image params={this.state} func={this.state.func} />
                    <p>{this.state.bio}</p>
                </fieldset>
            </div>
        );
    }
}

export default Hero;