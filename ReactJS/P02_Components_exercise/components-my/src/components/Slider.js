import React, { Component } from 'react';
import left from '../pictures/left.png';
import right from '../pictures/right.png';
import '../App.css';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            url: ''
        };
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:9999/episodePreview/' + this.state.id)
            .then(data => {
                return data.json();
            })
            .then(parseData => {
                this.setState({
                    id: parseData.id,
                    url: parseData.url
                });
            });
    }

    moveLeft() {
        console.log('Left cliked');
        let movieId =Number(this.state.id) - 1;
        fetch('http://localhost:9999/episodePreview/' +movieId)
            .then(data => {
                return data.json();
            }).then(parseData => {
                this.setState({
                    id: parseData.id,
                    url: parseData.url
                });
            }).catch(err =>{
                console.log("This is the end of the array from left side")
                console.log(err);
            });
    }
    moveRight() {
        console.log('Right cliked');
        let movieId =Number(this.state.id) + 1;
        fetch('http://localhost:9999/episodePreview/' +movieId)
            .then(data => {
                return data.json();
            }).then(parseData => {
                this.setState({
                    id: parseData.id,
                    url: parseData.url
                });
            }).catch(err =>{
                console.log("This is the end of the array from right side")
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <div className='warper'>
                    <img
                        alt='nope'
                        src={left}
                        className='slider-elem slider-button case-left'
                        onClick={this.moveLeft}
                    />
                    <img
                        className='sliderImg slider-elem'
                        alt='focusedEp'
                        src={this.state.url}
                    />
                    <img
                        alt='nope'
                        src={right}
                        className='slider-elem slider-button case-right'
                        onClick={this.moveRight}
                    />
                </div>
            </div>
        );
    }
}

export default Slider;