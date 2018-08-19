import React, { Component } from 'react';
import withLogging from './../helpers/withLogging';
import withLoading from './../helpers/withLoading';

class Home extends Component{

    render(){
        let homeMessage = this.props.message || 'From Home';
        return  <div>{homeMessage}</div>;
    }
}

Home = withLogging(Home);

export default Home;