import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer/observer';

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log('HandleChange')
        let fieldName = event.target.name;
        let filedValue = event.target.value;
        this.setState({
            [fieldName]: filedValue
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        requester
            .post('user', '', 'basic', this.state)
            .then(resp => {
                observer.trigger(observer.events.loginUser, resp.username);
                observer.trigger(observer.events.notification, { type:'success',message: 'Successful Registration...' });
                sessionStorage.setItem('authtoken',resp['_kmd']['authtoken'])
                this.props.history.push('/catalog')
            }).catch(err =>{
                observer.trigger(observer.events.notification, {type:'error',message:  'Error during login...' });
            });
    }

    render(){
        return(
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                <label>Username:</label>
                <input name="username" type="text"  onChange={this.handleChange}/>
                <label>Password:</label>
                <input name="password" type="password"   onChange={this.handleChange}/>
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password"  onChange={this.handleChange}/>
                <input id="btnRegister" value="Sign Up" type="submit" />
            </form>
        );
    }
}