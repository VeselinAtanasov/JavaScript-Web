import React, { Component } from 'react';


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {},
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            'http://localhost:5000/auth/login',
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
                if (!response.success) {
                    let err = response.message;
                    this.setState({
                        error: err
                    });

                    return;
                } else {
                    localStorage.setItem("token", response.token);
                    localStorage.setItem("user", response.user.name);
                    this.props.route('loggedIn');
                }

            })
            .catch(err => console.log(err));

    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            <div className='red-error'>{this.state.error}</div>
            <h2>Login:</h2>
            <div className="form-group">
                <label htmlFor="input-email">Email address</label>
                <input type="email" name="email" onChange={this.handleChange} className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={this.handleChange} className="form-control" id="loginPassword" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>);
    }
};

export default LoginForm;