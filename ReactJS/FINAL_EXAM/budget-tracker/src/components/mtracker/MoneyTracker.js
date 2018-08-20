import React, { Component } from 'react';
import MoneyTrackerNavigator from './MoneyTrackerNavigator';
import CreateMoneyTracker from './CreateMoneyTracker';

export default class MoneyTracker extends Component{
    
    constructor(props){
        super(props);
        this.state={
            menu:''
        };
    }

    componentDidMount(){
        let userId = localStorage.getItem('userId');
        console.log(`User id is: ${userId}`);
        //check if subscriber has Own Menu -if not render an option to create one, if it has then render his own menu
    }

    render(){
        if(this.state.menu ===''){
            return (<CreateMoneyTracker />);
        }
        return (<div className="container-fluid">
            <h1>Your Money Tracker:</h1>
            <p>This is your own Tracker Menu</p>
            <div className="row">
                <div className="col-sm-8" >
                    <MoneyTrackerNavigator />
                    <div className="row">
                        <div className="col-sm-6" >.col-sm-6</div>
                        <div className="col-sm-6" >.col-sm-6</div>
                    </div>
                </div>
                <div className="col-sm-4" >.col-sm-4</div>
            </div>
        </div>);
    }
}