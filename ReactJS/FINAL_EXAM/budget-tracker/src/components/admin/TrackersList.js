import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import adminService from '../../core/services/AdminService';
import expenseService from '../../core/services/ExpenseService';
import trackerService from '../../core/services/TrackerService';
import helperService from '../../core/services/HelperService';
import SingleTracker from './SingleTracker';



export default class TrackersList extends Component {
    constructor(props){
        super(props);
        this.state ={
            trackers:[]
        };
    }

    componentDidMount(){
        trackerService.getAllTrackers.send().then(trackers =>{
            console.log(trackers);
            this.setState({
                trackers
            });
        }).catch(err => helperService.notify('error', "Error during retrieval all Budget Trackers!"));
    }

    render(){
        return (
            <div className="container">
                <h1>List of registered users:</h1>
                <div className="col-sm-4">
                    {this.state.trackers.map(e => <SingleTracker
                        key={e._id}
                        {...e}
                        removeElement={this.removeElement}
                        makeUserAdmin={this.makeUserAdmin}
                        removeFromAdmin={this.removeFromAdmin}
                    />)} 
                </div>

            </div>        
        );
    }
}