import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MoneyTrackerNavigator extends Component{

    render(){
        return (                           
            <div className="btn-group-vertical" data-toggle="buttons">
                <br/>
                <h3 className="card-header">Navigation menu :</h3>
                <Link to={`/addExpense/${this.props.data.trackerId}`} type="button" className="btn btn-primary"> Add Expense to BudgetTracker</Link>
                <Link to={`/trackDetails/${this.props.data.trackerId}`} type="button" className="btn btn-primary" >Delete Expense from BudgetTracker </Link>
                <Link to={`/trackDetails/${this.props.data.trackerId}`} type="button" className="btn btn-primary" >Generate Overall Report</Link>
            </div>);
    }
}

