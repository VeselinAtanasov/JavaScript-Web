import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TrackerInfo extends Component {

    render() {
        return (<div className="container">
            <div className="col-8" >
                <div className="card mb-3">
                    <h3 className="card-header"><strong></strong>{this.props.data.trackerName}</h3>
                    <img className="center" src={this.props.data.trackerUrl} alt="" />
                    <div className="card-body">
                        <p className="card-text"><strong>Budget Tracker Description: </strong>{this.props.data.trackerDescription}</p>
                    </div>

                    <strong>You can check your details:</strong>
                    {!this.props.displayButton ? <Link to={`/trackDetails/${this.props.data.trackerId}`} type="button" className="btn btn-primary" >Check it now</Link> :null}
                    <div className="card" >
                        <strong> </strong>
                    </div>

                </div>
            </div>
        </div>);
    }
}