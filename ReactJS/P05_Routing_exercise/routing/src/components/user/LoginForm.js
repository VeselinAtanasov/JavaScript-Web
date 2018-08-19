import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer/observer';

export default class LoginForm extends Component {

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
        let fieldName = event.target.name;
        let filedValue = event.target.value;
        this.setState({
            [fieldName]: filedValue
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        requester
            .post('user', 'login', 'basic', this.state)
            .then(resp => {
                observer.trigger(observer.events.loginUser, resp.username);
                observer.trigger(observer.events.notification, { type:'success',message: 'Successful login...' });
                sessionStorage.setItem('authtoken',resp['_kmd']['authtoken'])
                this.setState({
                    username: '',
                    password: ''
                });

                //This is the way to achive redirection - we are passing props from Router to Home and from Hom to Login, and have access to history.push
                this.props.history.push('/catalog');

            }).catch(err =>{
                observer.trigger(observer.events.notification, {type:'error',message:  'Error during login...' });
                this.setState({
                    username: '',
                    password: ''
                });
            });
    }

    render(){
        //this are props passed form Router to Home and from Home to child LoginForm so here we have access to this.props
        return(
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" onChange={this.handleChange} type="text" value={this.state.username}/>
                <label>Password:</label>
                <input name="password" onChange={this.handleChange} type="password" value={this.state.password}/>
                <input id="btnLogin" value="Sign In" type="submit" />
            </form>
        );
    }
}