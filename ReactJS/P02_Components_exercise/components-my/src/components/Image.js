
import React, { Component } from 'react';


class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };

        this.getDetails = this.getDetails.bind(this);
    }

    getDetails() {
        this.setState((prevState) => {
            let id = this.props.params.id;
            this.props.func(id);
        });
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