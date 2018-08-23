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
        this.removeElement = this.removeElement.bind(this);
    }

    componentDidMount(){
        trackerService.getAllTrackers.send().then(trackers =>{
            console.log(trackers);
            this.setState({
                trackers
            });
        }).catch(err => helperService.notify('error', "Error during retrieval all Budget Trackers!"));
    }

    removeElement(trackerId){
        expenseService.deleteExpenseByTrackerId.send(trackerId).then(deletedExpense => {
            trackerService.deleteTrackerById.send(trackerId).then(deletedTracker =>{
                trackerService.getAllTrackers.send().then(trackers =>{
                    this.setState({
                        trackers
                    });
                    helperService.notify('success', "You successfully deleted a tracker!")
                }).catch(err => helperService.notify('error', "Error during retrieval all Budget Trackers!"));
            }).catch(err => helperService.notify('error', "Error during deleting tracker"));
        }).catch(err => helperService.notify('error', "Error during deleting expenses"));
    }

    render(){
        return (


            <div className="container-fluid">
                <h1>List of registered users:</h1>
                <div className="row">
                    {this.state.trackers.map(e => <SingleTracker
                        key={e._id}
                        {...e}
                        removeElement={this.removeElement}
                    />)} 
                   

                </div>
            </div>
     
        );
    }
}