import React, { Component } from 'react';

export default class MoneyTrackerNavigator extends Component{

    render(){
        return (                           
            <div className="btn-group-vertical" data-toggle="buttons">
                <br/>
                <h3 className="card-header">Navigation menu :</h3>
                <button type="button" className="btn btn-primary"> Add Expense to BudgetTracker</button>
                <button type="button" className="btn btn-primary" >Delete Expense from BudgetTracker </button>
                <button type="button" className="btn btn-primary" >Generate Overall Report</button>
            </div>);
    }
}