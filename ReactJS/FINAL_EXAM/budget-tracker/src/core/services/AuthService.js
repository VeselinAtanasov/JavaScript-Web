
import requestor from './requester';
import helperService from './HelperService';
import observer from '../../core/observer/observer';

export default {
    register: {
        send: function(data){
            return requestor.post('user', '', 'basic', data);
        },
        success: function(res) {
            //  localStorage.setItem('authtoken', res._kmd.authtoken);
            //   localStorage.setItem('username', res['username']);
            //   helperService.notify('success',`Welcome, ${res.username}`);
            this.props.history.push('/login');
        },
        fail: function(err) {
            helperService.notify('error',err.responseJSON.description);
            this.props.history.push('/login');
        },
    },
    login: {
        send: function(data){
            return requestor.post('user', 'login', 'basic', data);
        },
        success: function(res) {
            localStorage.setItem('authtoken', res._kmd.authtoken);
            localStorage.setItem('username', res['username']);
            helperService.notify('success',`Welcome, ${res.username}`);
            observer.trigger(observer.events.loginUser, res.username);
            this.props.history.push('/');
        },
        fail: function(err) {
            helperService.notify('error',err.responseJSON.description);
            //this.props.history.push('/register');
        },
    },
    logout:{
        send: function(){
            let req = requestor.post('user', '_logout', 'kinvey');
            return  req;
        },
        success: function(res) {
            console.log('.....');
            const username = localStorage.getItem('username');
            observer.trigger(observer.events.logoutUser);   
            helperService.notify('success',`Goodbye, ${username}`);
            localStorage.clear();
            this.props.history.push('/register');
        },
        fail: function(err) {
            helperService.notify('error',err.responseJSON.description);
        },
    },
    isLoggedIn : function(){
        return localStorage.getItem('authtoken');
    },
    getUserName : function(){
        return localStorage.getItem('UserName');
    }
};

