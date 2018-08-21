import React, { Component } from 'react';
import TrackerInfo from './TrackerInfo';
import trackerService from '../../core/services/TrackerService';
import helperService from '../../core/services/HelperService';
import expenseService from '../../core/services/ExpenseService';

export default class TrackerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            displayButton:true,
            leftMoney:''
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        trackerService
            .getTrackerById
            .send(id)
            .then(res => {
                this.setState({
                    data: res
                });

                expenseService.getExpenseByTrackerId.send(id).then(data => {
                    let expenses = helperService.calculateRemainingAmount(this.state.data,data[0]) ;
                    this.setState({
                        leftMoney:expenses
                    });
                }).catch(err => helperService.notify('error', 'Something got wrong with the server!'));



            }).catch(err => helperService.notify('error', 'Something got wrong with the server!'));
    }

    render() {
        let card;
        let customClass='';
        if(this.state.leftMoney!=='' && this.state.leftMoney<0){
            customClass="card text-white bg-danger mb-3";
            card =(  <div className="col-sm-6"  >
                <div className={customClass} >
                    <div className="card-header">Statistics:</div>
                    <div className="card-body">
                        <h4 className="card-title">You have {this.state.leftMoney} money lest in the wallet</h4>
                        <p className="card-text">Your balance is negative - you need to do your best! </p> 
                    </div>
                </div>
            </div>);
        }else{
            customClass="card text-white bg-success mb-3";
            card =(  <div className="col-sm-6"  >
                <div className={customClass} >
                    <div className="card-header">Statistics:</div>
                    <div className="card-body">
                        <h4 className="card-title">You have {this.state.leftMoney} money left in the wallet</h4>
                        <p className="card-text">Your balance is positive - keep going!</p>
                    </div>
                </div>
            </div>);
        }
        return (
            <div className="container-fluid">
                <h1>Details about your current financial status:</h1>
                <p>All calculations are based on your overall incomes and expenses till now.</p>
                <p></p>
                <div className="row">
                    <div className="col-sm-6" >
                        {<TrackerInfo data={this.state.data} displayButton={this.state.displayButton}/>}
                    </div>
                    {card}
                </div>
            </div>
        );
    }
}
