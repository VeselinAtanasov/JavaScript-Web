import React, { Component } from 'react';
import requester from '../../infrastructure/requester';
import { Redirect } from 'react-router-dom';
import observer from '../../infrastructure/observer/observer';

export default class Logout extends Component {

    logout() {
        requester
            .post('user', '_logout', 'kinvey')
            .then(resp => {
                observer.trigger(observer.events.notification, { type: 'success', message: 'Successful Logout...' });
                sessionStorage.clear()
            }).catch(err => {
                observer.trigger(observer.events.notification, { type: 'error', message: 'UnSuccessful Logout...' });
            });
    }

    render() {
         this.logout();
        console.log('rendered')
        return (<Redirect to='/' />);
    }

}