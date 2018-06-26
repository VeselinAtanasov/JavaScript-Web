
import React, { Component } from 'react';
import observerMenu from '../utils/observer';

class Image extends Component {
    constructor(props){
        super(props);

        this.getDetails=this.getDetails.bind(this);
    }

    getDetails(){
        console.log('From Image....');
        console.log(this.props.params.id);
        observerMenu.executeObserver('changeFocus',this.props.params.id);
    }

    render() {

        return (
            <img
                className='hero-image'
                alt='img'
                src={this.props.params.url}
                onClick={this.getDetails} 
            />
        );
    }
}

export default Image;