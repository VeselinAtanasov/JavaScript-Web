import React, { Component } from 'react';

const WithLoading = (WrappedComponent) => (
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isReady: false
            };
            this.timer='';
        }

        componentDidMount() {
            this.timer = setInterval(() => {
                this.setState({
                    isReady: true
                });
            }, 3000);
        }

        componentWillUnmount(){
            clearInterval
            (this.timer);
        }

        render() {
            if (this.state.isReady) {
                return (<WrappedComponent  {...this.props} />);
            }
            return (<h1>Loading...</h1>);
        }
    }

);

export default WithLoading;



