import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import authService from '../../core/services/AuthService';


export default class Logout extends Component {
    logout() {

         authService.logout.send().then(authService.logout.success).catch(authService.logout.fail)
        // requestor
        //     .post('user', '_logout', 'kinvey')
        //     .then(res =>{
        //         const username = localStorage.getItem('username');
        //         helperService.notify('success',`Goodbye, ${username}`);  
        //         observer.trigger(observer.events.logoutUser);
        //         localStorage.clear();
                
               
        //     })
        //     .catch(err =>{
        //         helperService.notify('error',err.responseJSON.description);
        //     });
    }

    render() {
        this.logout();
        return <Redirect to='/login' />;
    }
}