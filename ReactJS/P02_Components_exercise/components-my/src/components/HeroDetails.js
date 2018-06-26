
import React, { Component } from 'react';
import Image from './Image';


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: 0,
        };
    }
    componentWillReceiveProps() {
        console.log('###########################will receive!!!!!!!!!!!!!!!!!!!!');
        console.log(this.props);
        let Id = this.props.change;
        console.log(Id);

        fetch('http://localhost:9999/character/' + Id)
            .then(data => {
                return data.json();
            })
            .then(parseData => {
                console.log(parseData);
                this.setState({
                    //  id: parseData.id,
                    url: parseData.url,
                    name: parseData.name,
                    bio: parseData.bio
                });
            });
    }

    componentDidMount() {
        // console.log('>>>>>>>>>>>>')
        // console.log("Changedsssss"+ this.props.change);
        let Id = this.props.change;
        // console.log(`ID => ${Id}`)
        // console.log('<<<<<<<<<<<<')
        fetch('http://localhost:9999/character/' + Id)
            .then(data => {
                return data.json();
            })
            .then(parseData => {
                console.log(parseData);
                this.setState({
                    //  id: parseData.id,
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
                    {console.log('Log from Details html...')}
                    <div>{this.state.name}</div>
                    <Image params={this.state} />
                    <p>{this.state.bio}</p>
                </fieldset>
            </div>
        );
    }
}

export default Hero;