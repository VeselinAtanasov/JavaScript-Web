import React, { Component } from 'react';
import RegisterForm from './RegisterForm';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputusername">Username</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputusername"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={this.props.handleChange}
                            value={this.props.formData.username}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password" 
                            className="form-control"
                            id="exampleInputPassword1" 
                            placeholder="Password"
                            onChange={this.props.handleChange}
                            value={this.props.formData.email}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="exampleInputRepPassword1">Repeat Password</label>
                            <input
                                type="password" 
                                className="form-control"
                                id="exampleInputRepPassword1" 
                                placeholder="Password" 
                                onChange={this.props.handleChange}
                                value={this.props.formData.email}
                            />
                        </div>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email" 
                            className="form-control"
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            onChange={this.props.handleChange}
                            value={this.props.formData.email}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>);
    }
}

RegisterForm = withFormHandlerAndValidator(RegisterForm)
export default RegisterForm;