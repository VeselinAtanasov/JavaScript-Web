import React, { Component } from 'react';

const  withLogging = WrappedComponent => (
    class extends Component{
        componentDidMount(){
            console.log(`${WrappedComponent.name} ready !`);

            //here verbosity is property which is important only for HOC component so in render
            if(this.props.verbosity==='detailed'){
                console.log('Add more information about he component');
            }
        }
        render(){
            //So we are removing verbosity from WrappedComponent adn use it only in HOC 
            const {verbosity, otherProps} = this.props;
            return (<WrappedComponent {...otherProps}/>);
        }
    }
); 

export default withLogging ;

//  function withLogging(WrappedComponent){
//     return class extends Component{

//     };
// }
//export default withLogging