
import React, { Component } from 'react';
import Image from './Image';


class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: ''
        };
        this.dummyCallback=this.dummyCallback.bind(this);
    }

    dummyCallback(){
        console.log('Fake callback was Invoked');
    }

    render() {
        return (
            <div>
                <fieldset>
                    <div></div>
                    <p>{this.props.params.name}</p>
                    <Image params={this.props.params} func={this.dummyCallback}/>
                    <p>{this.props.params.bio}</p>
                </fieldset>
            </div>
        );
    }
}

export default Hero;