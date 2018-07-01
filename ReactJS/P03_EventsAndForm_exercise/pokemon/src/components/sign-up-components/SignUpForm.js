import React, { Component } from 'react';
import errorHandler  from '../../utils/error-handler';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {},
            error: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLoginForm = this.getLoginForm.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
    }
    handleChange(event) {
        let form = this.state.form;
        let inputValue = event.target.value;
        let inputParam = event.target.name;

        form[inputParam] = inputValue;

        this.setState({ form });
    }
    handleSubmit(event) {
        event.preventDefault();
        //Set request to the server:
        fetch(
            'http://localhost:5000/auth/signup',
            {
                method: 'POST',
                body: JSON.stringify(this.state.form),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(data => data.json())
            .then(response => {
                console.log(response);
                if(response && response.errors){
                    let err = errorHandler(response.errors);
                    this.setState({
                        error:err
                    });

                    return;
                }
                this.renderLogin();
            })
            .catch(err => console.log(err));

    }
    getLoginForm() {
        return (<button onClick={this.renderLogin}>[Login]</button>);
    }
    renderLogin(){
        this.props.route('login');
    }
    render() {
        let error = this.state.error;
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <div className='red-error'>{error}</div>
                <h2>Register: </h2>
                <div className="form-group">
                    <label htmlFor="input-email">Email address</label>
                    <input type="email" name="email" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="input-username">Username</label>
                    <input type="text" name="name" onChange={this.handleChange} className="form-control" id="username" placeholder="Username" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br/>
            {this.getLoginForm()}
        </div>
        );
    }
};

export default SignUpForm;