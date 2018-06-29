
import React, { Component } from 'react';
import Image from './Image';


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
        this.pressed = this.pressed.bind(this);
    }

    componentWillUpdate(newProps) {

        let Id = this.props.change;
        console.log('updating....' + Id)
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

    pressed(id) {
        this.setState({
            id: id
        });
        console.log(`From Pressed method :` + this.state.id);
    }
    componentDidMount() {
        console.log('did mount')
        let Id = this.props.change;
        console.log('did mount' + Id)
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