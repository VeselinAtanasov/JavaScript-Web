import React, { Component } from 'react';
import helperService from '../../core/services/HelperService';

export default function withFormHandlerAndValidator(WrappedComponent, model, serviceFunction) {
    return class FormHandlerAndValidator extends Component {
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

        handleSubmit(event) {
            event.preventDefault();
            let data = model.getDataForRequest(this.state);
            if (model.validate) {
                let validated = model.validate(this.state);  // { success: "true"/"false", message: "Successcul", errors: {} }
                if (validated.success) {
                    serviceFunction.send(data).then(this.success).catch(this.fail);
                }else {
                    helperService.notify('error', validated.message, validated.errors);
                }
            }else{
                // helperService.notify({...validated})
            }
        }



        render() {
    
            return (<WrappedComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state} />);
        }
    };
}