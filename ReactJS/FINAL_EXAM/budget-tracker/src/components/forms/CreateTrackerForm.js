import React, { Component } from 'react';
import withFormHandlerAndValidator from '../hoc/withFormHandlerAndValidator';
import trackerModel from '../../core/models/TrackerModel';
import tracerService from '../../core/services/TrackerService';


class CreateTrackerForm extends Component {

    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleTrackerName">Tracker Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleTrackerName"
                            aria-describedby="emailHelp"
                            placeholder="Enter Tracker Name"
                            name="trackerName"
                            onChange={this.props.handleChange}
                            value={this.props.trackerName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleTextarea">Tracker Description:</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"
                            name="trackerDescription"
                            onChange={this.props.handleChange}
                            value={this.props.trackerDescription}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tracker Picture url:</label>
                        <input
                            type="text" 
                            className="form-control"
                            id="exampleInputPassword1" 
                            placeholder="https://"
                            name="trackerUrl"
                            onChange={this.props.handleChange}
                            value={this.props.trackerUrl}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>);
    }
}

CreateTrackerForm = withFormHandlerAndValidator(CreateTrackerForm,trackerModel,tracerService.create);
export default CreateTrackerForm;