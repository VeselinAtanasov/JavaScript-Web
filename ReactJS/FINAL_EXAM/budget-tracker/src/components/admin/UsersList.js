
import React, { Component } from 'react';
import '../../resource/styles/ListUsers.css';
import adminService from '../../core/services/AdminService';
import expenseService from '../../core/services/ExpenseService';
import trackerService from '../../core/services/TrackerService';
import helperService from '../../core/services/HelperService';
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
                let filteredUsers = users.filter(e => !e['_kmd']['status']);
                this.setState({
                    users:filteredUsers
                });
            }).catch(err => helperService.notify('error',"Error during retrieval of all users !")); 
    }

    removeElement(userId){
        expenseService.getExpenseByCreatorId.send(userId).then(expense =>{

            if(expense.length==0){
                console.log('Here');
                adminService.deleteUser.send(userId).then(deletedUser => console.log(deletedUser)).catch(err => helperService.notify('error',"Error during deleting a user"));
                helperService.notify('success',"You just removed a user from the app!");
                let reducedUsers = this.state.users.filter(u => u['_id']!==userId);
                this.setState({
                    users: reducedUsers
                });
                return;
            }
            let tracker_id = expense[0]['trackerId'];
            let expenseId = expense[0]['_id'];

            expenseService.deleteExpenseById.send(expenseId).then(deletedExpense =>{
                trackerService.deleteTrackerById.send(tracker_id).then(deletedTrackerId =>{
                    adminService.deleteUser.send(userId).then(deletedUser => console.log(deletedUser)).catch(err => helperService.notify('error',"Error during deleting a user"));
                    helperService.notify('success',"You just removed a user from the app!");
                    let reducedUsers = this.state.users.filter(u => u['_id']!==userId);
                    this.setState({
                        users: reducedUsers
                    });
                }).catch(err => helperService.notify('error',"Error during deleting tracker"));
            }).catch(err => helperService.notify('error',"Error during deleting expense"));
        }).catch(err => helperService.notify('error',"Error during retrieval of user expenses"));
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