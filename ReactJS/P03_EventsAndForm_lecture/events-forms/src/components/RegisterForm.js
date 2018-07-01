import React, { Component } from 'react';

export default class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                username : '',
                realName : '',
                password:''
            },
            error : ''

        };

        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.handleOnFormSubmit = this.handleOnFormSubmit.bind(this);
    }
    handleInputChanged(event){
        let user = this.state.user;
        let inputParam =event.target.name;
        let inputValue= event.target.value;
        user[inputParam] =inputValue;

        this.setState({ user });
    }
    handleOnFormSubmit(event){
        event.preventDefault();

        //save user to the server, but in case of wrong input parameters some validation is performed:

        if(this.state.user.password.length < 6){
            console.log('ERROR!');
            this.setState({
                error : 'Password must be more then 6 symbols!'
            });
            
        }else{
            this.setState({
                error : ''
            });
        }
    }

    render(){
        let error = this.state.error;
        return (
            <form onSubmit={this.handleOnFormSubmit}>
                <div>{error}</div>
                <label>
                Name:
                    <input 
                        type="text" 
                        name="username" 
                        value={this.state.user.username}
                        onChange={this.handleInputChanged}
                    />
                </label>
                <br />
                <label>    
                Password:    
                    <input 
                        type="password" 
                        name="password" 
                        value={this.state.user.password}
                        onChange={this.handleInputChanged}
                    />
                </label>
                <br />
                <label>    
                Real Name:    
                    <input 
                        type="text" 
                        name="realName" 
                        value={this.state.user.realName}
                        onChange={this.handleInputChanged}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}