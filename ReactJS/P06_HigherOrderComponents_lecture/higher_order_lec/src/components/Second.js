import React, { Component } from 'react';
import withLogging from './../helpers/withLogging';

class Second extends Component{

    render(){
        console.log(this.props)
        return  <div>Second</div>;
    }
}

Second = withLogging(Second);

export default Second;