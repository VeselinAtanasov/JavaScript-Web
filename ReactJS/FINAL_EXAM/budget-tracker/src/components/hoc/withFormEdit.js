import React, { Component } from 'react';
import helperService from '../../core/services/HelperService';

export default function withFormEdit(WrappedComponent, model, serviceFunction) {
    return class FormEdit extends Component {
        constructor(props) {
            super(props);
            this.state = model.initialState;

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

            this.success = this.props.success || serviceFunction.success.bind(this);
            this.fail = this.props.fail || serviceFunction.fail.bind(this);
        }
        handleChange(event) {
            let fieldName = event.target.name;
            let fieldValue = event.target.value;

            this.setState({ [fieldName]: fieldValue });
        }

        componentDidMount() {
            if (this.props.admin) {
                let trackerId = this.props.match.params.id;
                let filler = this.props.admin.fill.bind(this);
                filler(trackerId).then(res => {
                    this.setState(model.getDataForRequest(res));
                }).catch(err => console.log(err));
            }

        }

        handleSubmit(event) {
            event.preventDefault();
            let id = this.props.match.params.id;
            if (model.validate) {
                let validated = model.validate(this.state);  // { success: "true"/"false", message: "Successcul", errors: {} }
                if (validated.success) {
                    if(this.props.admin){
                        console.log('Admin will  modify');
                        console.log(this.props);
                        let successor = this.props.admin.success.bind(this);
                        let failure = this.props.admin.fail.bind(this);
                        this.props.admin.send(id).then(res =>{
                            console.log(res);
                            let elementId;
                            let element;
                            if (Array.isArray(res)) {
                                elementId = res[0]['_id'];
                                element = res[0];
                            } else {
                                elementId = res['_id'];
                                element = res;
                            }
                            let preparedData = this.props.admin.dataPreparation(element, this.state);
                            this.props.admin.updateById(elementId, preparedData).then(successor).catch(failure);
                        }).catch(err =>console.log(err));
                      
                    }else{
                        serviceFunction.send(id).then(res => {
                            console.log(res);
                            let elementId;
                            let element;
                            if (Array.isArray(res)) {
                                elementId = res[0]['_id'];
                                element = res[0];
                            } else {
                                elementId = res['_id'];
                                element = res;
                            }
    
                            let preparedData = serviceFunction.dataPreparation(element, this.state);
    
                            serviceFunction.updateById(elementId, preparedData).then(this.success).catch(this.fail);
                        }).catch(this.fail);
                    }
                } else {
                    helperService.notify('error', validated.message, validated.errors);
                }
            }
        }



        render() {

            return (<WrappedComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state} {...this.props} />);
        }
    };
}