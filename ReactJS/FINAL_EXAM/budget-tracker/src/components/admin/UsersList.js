
import React, { Component } from 'react';
import '../../resource/styles/ListUsers.css';
import adminService from '../../core/services/AdminService';
import expenseService from '../../core/services/ExpenseService';
import trackerService from '../../core/services/TrackerService';
import User from './User';

export default class UsersList extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        };
        this.removeElement = this.removeElement.bind(this);
    }

    componentDidMount(){
        adminService
            .getAllUsers
            .send()
            .then(users => {
                console.log(users);
                let filteredUsers = users.filter(e => !e['_kmd']['status']);
                console.log(filteredUsers);
                this.setState({
                    users:filteredUsers
                });
            }).catch(err => console.log(err)); 
    }

    removeElement(userId){
        expenseService.getExpenseByCreatorId.send(userId).then(expense =>{
            console.log(expense);
            let tracker_id = expense[0]['trackerId'];
            let expenseId = expense[0]['_id'];
            expenseService.deleteExpenseById.send(expenseId).then(deletedExpense =>{
                console.log(deletedExpense);
                trackerService.deleteTrackerById(tracker_id).then(deletedTrackerId =>{
                    console.log(deletedTrackerId);
                    let reducedUsers = this.state.users.filter(u => u['_id']!==userId);
                    this.setState({
                        users: reducedUsers
                    });
                });
            });
        });
    }

    render(){
        return (
            <div className="container-fluid">
                <h1>List of registered users:</h1>
                {this.state.users.map(e => <User key={e._id}  {...e} removeElement={this.removeElement}/>)}
            </div>
        );
    }
}